import React, {useCallback} from 'react';
import {Handle, Position} from '@xyflow/react';
import type {Node, NodeProps} from '@xyflow/react';

type AndNode = Node<{}, 'and'>

/**
 * The and node.
 * @param data THe data for the node, if applicable.
 */
export function AndNode({data, selected}): NodeProps<AndNode> {
    return (
        <>
            <Handle type="target" position={Position.Top}/>
            <div style={{
                padding: '10px',
                margin: '10px',
                border: selected ? '2px solid red' : '2px solid black',
                borderRadius: '5px',
                backgroundColor: 'lightgreen'
            }}>
                <h3>And</h3>
            </div>
            <Handle type="source" position={Position.Bottom} id="a"/>
        </>
    );
}