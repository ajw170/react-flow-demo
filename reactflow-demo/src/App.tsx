import 'devextreme/dist/css/dx.light.css';
import React, {useState, useCallback, useMemo} from 'react'
import './App.css'
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    Panel,
    useReactFlow,
    ReactFlowProvider,
    applyNodeChanges,
    applyEdgeChanges,
    type Node,
    type Edge,
    type FitViewOptions,
    type OnConnect,
    type OnNodesChange,
    type OnEdgesChange,
    type OnNodeDrag,
    type NodeTypes,
    type DefaultEdgeOptions, Connection, NodeProps,
} from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import {AndNode} from "./nodes/andNode";
import {OrNode} from "./nodes/orNode";
import {NotNode} from "./nodes/notNode";
import {OccupancyNode} from "./nodes/occupancyNode";
import {VelocityNode} from "./nodes/velocityNode";
import {VolumeNode} from "./nodes/volumeNode";
import Dagre from '@dagrejs/dagre';
import {Link} from 'react-router-dom';

const getLayoutedElements = (nodes, edges, options) => {
    const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));
    g.setGraph({rankdir: options.direction});

    edges.forEach((edge) => g.setEdge(edge.source, edge.target));
    nodes.forEach((node) =>
        g.setNode(node.id, {
            ...node,
            width: node.measured?.width ?? 0,
            height: node.measured?.height ?? 0,
        }),
    );

    Dagre.layout(g);

    return {
        nodes: nodes.map((node) => {
            const position = g.node(node.id);
            // We are shifting the dagre node position (anchor=center center) to the top left
            // so it matches the React Flow node anchor point (top left).
            const x = position.x - (node.measured?.width ?? 0) / 2;
            const y = position.y - (node.measured?.height ?? 0) / 2;

            return {...node, position: {x, y}};
        }),
        edges,
    };
};

const LayoutFlow = () => {

    // const initialNodes: Node[] = [
    //     {id: '1', position: {x: 0, y: 0}, type: 'and', data: {color: 'green'}},
    //     {id: '2', position: {x: 0, y: 75}, type: 'and', data: {color: 'red'}},
    //     {id: '3', position: {x: 0, y: 150}, type: 'or', data: {color: 'green'}},
    //     {id: '4', position: {x: 0, y: 225}, type: 'not', data: {color: 'red'}},
    //     {id: '5', position: {x: 0, y: 300}, type: 'occupancy', data: {color: 'red'}},
    //     {id: '6', position: {x: 0, y: 300}, type: 'volume', data: {color: 'red'}},
    //     {id: '7', position: {x: 0, y: 300}, type: 'velocity', data: {color: 'red'}},
    // ];
    // const initialEdges: Edge[] = [{id: 'e1-2', source: '1', target: '2'}];

    const initialNodes: Node[] = [];
    const initialEdges: Edge[] = [];

    const nodeTypes: NodeTypes = {
        and: AndNode,
        or: OrNode,
        not: NotNode,
        occupancy: OccupancyNode,
        volume: VolumeNode,
        velocity: VelocityNode
    };

    const {fitView} = useReactFlow();
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [idCounter, setIdCounter] = useState<number>(8);

    const onConnect: OnConnect = useCallback(
        (connection: Connection) => {
            const sourceNode = nodes.find(node => node.id === connection.source);
            const sourceNodeType = sourceNode?.type;
            if (sourceNodeType === 'not' && edges.some(edge => edge.source === connection.source)) {
                // Prevent the connection
                console.log('Not node can only have a single connection');
            } else {
                // Allow the connection
                setEdges((eds: Edge[]) => addEdge(connection, eds));
            }
        },
        [setEdges, edges, nodes],
    );

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges],
    );

    const onLayout = useCallback(
        (direction) => {
            console.log(nodes);
            const layouted = getLayoutedElements(nodes, edges, {direction});

            setNodes([...layouted.nodes]);
            setEdges([...layouted.edges]);

            window.requestAnimationFrame(() => {
                fitView();
            });
        },
        [nodes, edges],
    );

    const [dragging, setDragging] = useState<boolean>(false)

    return (
        <>
            <div><h1 style={{marginBottom: '0rem'}}>ReactFlow Demo</h1>
                <p>Switch to DevExtreme: <Link to={'/devextreme'}>Go To DevExtreme</Link></p>
            </div>
            <div className={"container"}>
                <div className="left-div">
                    <div style={{width: '100%', height: '100%'}}>
                        <ReactFlow nodes={nodes} nodeTypes={nodeTypes} edges={edges} onNodesChange={onNodesChange}
                                   onEdgesChange={onEdgesChange} onConnect={onConnect}
                                   onDrop={(event) => {
                                       const type = event.dataTransfer.getData('application/reactflow');
                                       setNodes([...nodes].concat({
                                           id: idCounter.toString(),
                                           position: {x: 0, y: 0},
                                           type: type,
                                           data: {color: 'green'}
                                       }));
                                       setDragging(false);
                                       setIdCounter(idCounter + 1);
                                   }}
                                   onDragOver={(event) => {
                                       event.preventDefault();

                                   }}
                                   onDragEnter={() => {
                                       setDragging(true);
                                   }}
                                   onDragLeave={() => {
                                       setDragging(false);
                                   }}
                                   style={{backgroundColor: dragging ? 'lightgray' : 'white'}}>
                            <Controls/>
                            <Background variant="dots" gap={12} size={1}/>
                            <Panel position="top-right">
                                <button onClick={() => {
                                    onLayout('TB')
                                }}>Organize!
                                </button>
                            </Panel>

                        </ReactFlow>
                    </div>
                </div>
                <div className="right-div">
                    <div>
                        <div><h3>Combinators</h3></div>
                        <div>
                            {
                                ['and', 'or', 'not'].map((type) => (
                                    <div key={type}
                                         onDragStart={(event) => event.dataTransfer.setData('application/reactflow', type)}
                                         draggable
                                         style={{
                                             padding: '10px',
                                             margin: '10px',
                                             border: '1px solid gray',
                                             borderRadius: '5px',
                                             backgroundColor: type === 'and' ? 'lightgreen' : type === 'or' ? 'lightyellow' : type === 'not' ? 'lightpink' : 'lightblue'
                                         }}>
                                        {type}
                                    </div>
                                ))
                            }
                        </div>
                        <div><h3>Specifiers</h3></div>
                        <div>
                            {
                                ['velocity', 'occupancy', 'volume'].map((type) => (
                                    <div key={type}
                                         onDragStart={(event) => event.dataTransfer.setData('application/reactflow', type)}
                                         draggable
                                         style={{
                                             padding: '10px',
                                             margin: '10px',
                                             border: '1px solid gray',
                                             borderRadius: '5px',
                                             backgroundColor: type === 'and' ? 'lightgreen' : type === 'or' ? 'lightyellow' : type === 'not' ? 'lightpink' : 'lightblue'
                                         }}>
                                        {type}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <p>Drag elements onto the board and see what happens!</p>
                </div>
            </div>
        </>
    );
};

export default function () {
    return (
        <ReactFlowProvider>
            <LayoutFlow/>
        </ReactFlowProvider>
    );
}