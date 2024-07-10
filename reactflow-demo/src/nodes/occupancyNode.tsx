import React, {useCallback} from 'react';
import {Handle, Position} from '@xyflow/react';
import type {Node, NodeProps} from '@xyflow/react';

type OccupancyNode = Node<{}, 'occupancy'>

export function OccupancyNode({data, selected, isConnectable}): NodeProps<OccupancyNode> {
    return (
        <>
            <Handle type="target" position={Position.Top}/>
            <div style={{
                padding: '10px',
                margin: '10px',
                border: selected ? '2px solid red' : '2px solid black',
                borderRadius: '5px',
                backgroundColor: 'lightblue'
            }}>
                <h3>Occupancy</h3>
                <div>
                    <div>
                        <label>
                            <input type="radio" value=">" name="operator"/> {'Greater Than (>)'}
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="=" name="operator"/> {'Equals (=)'}
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="<" name="operator"/> {'Less Than (<)'}
                        </label>
                    </div>
                    <div>
                        <label htmlFor="text">Value:</label>
                        <input id="text" name="text" className="nodrag"/>
                    </div>
                </div>
            </div>
        </>
    );
}
