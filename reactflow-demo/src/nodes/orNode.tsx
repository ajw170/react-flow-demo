import {useCallback} from 'react';
import {Handle, Position} from '@xyflow/react';
import type {Node, NodeProps} from '@xyflow/react';

type OrNode = Node<{}, 'or'>

/**
 * The and node.
 * @param data THe data for the node, if applicable.
 */
export function OrNode({data, selected}: NodeProps<OrNode>) {
    return (
        <>
            <Handle type="target" position={Position.Top}/>
            <div style={{
                padding: '10px',
                margin: '10px',
                border: selected ? '2px solid red' : '2px solid black',
                borderRadius: '5px',
                backgroundColor: 'lightyellow'
            }}>
                <h3>Or</h3>
            </div>
            <Handle type="source" position={Position.Bottom} id="a"/>
        </>
    );
}