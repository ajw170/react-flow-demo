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
    type Node
} from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import {AndNode} from "./nodes/andNode";
import {OrNode} from "./nodes/orNode";
import {NotNode} from "./nodes/notNode";
import Dagre from '@dagrejs/dagre';

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

    const initialNodes = [
        {id: '1', position: {x: 0, y: 0}, type: 'and', data: {color: 'green'}},
        {id: '2', position: {x: 0, y: 75}, type: 'and', data: {color: 'red'}},
        {id: '3', position: {x: 0, y: 150}, type: 'or', data: {color: 'green'}},
        {id: '4', position: {x: 0, y: 225}, type: 'not', data: {color: 'red'}},
    ];
    const initialEdges = [{id: 'e1-2', source: '1', target: '2'}];

    const nodeTypes = useMemo(() => ({and: AndNode, or: OrNode, not: NotNode}), []);

    const {fitView} = useReactFlow();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
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

    return (
        <div className={"container"}>
            <div className="left-div">
                <div style={{width: '100%', height: '100%'}}>
                    <ReactFlow nodes={nodes} nodeTypes={nodeTypes} edges={edges} onNodesChange={onNodesChange}
                               onEdgesChange={onEdgesChange} onConnect={onConnect}>
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
                            ['Velocity', 'Occupancy', 'Volume'].map((type) => (
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
    );
};

export default function () {
    return (
        <ReactFlowProvider>
            <LayoutFlow/>
        </ReactFlowProvider>
    );
}