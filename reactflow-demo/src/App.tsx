import {useState, useCallback, useMemo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    type Node
} from "@xyflow/react";
import '@xyflow/react/dist/style.css';
import {AndNode} from "./nodes/andNode";

function App() {
    const [count, setCount] = useState(0);

    const initialNodes = [
        {id: '1', position: {x: 0, y: 0}, type: 'and', data: {color: 'green'}},
        {id: '2', position: {x: 0, y: 100}, type: 'and', data: {color: 'red'}},
    ];
    const initialEdges = [{id: 'e1-2', source: '1', target: '2'}];

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const nodeTypes = useMemo(() => ({and: AndNode}), []);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    return (
        <>
            <div className={"container"}>
                <div className="left-div">
                    <div style={{width: '100%', height: '100%'}}>
                        <ReactFlow nodes={nodes} nodeTypes={nodeTypes} edges={edges} onNodesChange={onNodesChange}
                                   onEdgesChange={onEdgesChange} onConnect={onConnect}>
                            <Controls/>
                            <Background variant="dots" gap={12} size={1}/>
                        </ReactFlow>
                    </div>
                </div>
                <div className="right-div">
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
            </div>
        </>
    )
}

export default App
