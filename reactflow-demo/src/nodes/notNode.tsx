import {useCallback} from 'react';
import {Handle, Position} from '@xyflow/react';
import type {Node, NodeProps} from '@xyflow/react';

type NotNode = Node<{}, 'not'>

/**
 * The and node.
 * @param data THe data for the node, if applicable.
 */
export function NotNode({data, selected}: NodeProps<NotNode>) {
    return (
        <>
            <Handle type="target" position={Position.Top}/>
            <div style={{
                padding: '10px',
                margin: '10px',
                border: selected ? '2px solid red' : '2px solid black',
                borderRadius: '5px',
                backgroundColor: 'lightpink'
            }}>
                <h3>Not</h3>
            </div>
            <Handle type="source" position={Position.Bottom} id="a"/>
        </>
    );
}