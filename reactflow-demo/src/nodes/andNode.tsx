import {useCallback} from 'react';
import {Handle, Position} from '@xyflow/react';
import type {Node, NodeProps} from '@xyflow/react';

type AndNode = Node<{}, 'and'>

/**
 * The and node.
 * @param data THe data for the node, if applicable.
 */
export function AndNode({data}): NodeProps<AndNode> {
    return (
        <>
            <Handle type="target" position={Position.Top}/>
            <div>
                <h3>And</h3>
            </div>
            <Handle type="source" position={Position.Bottom} id="a"/>
            <Handle
                type="source"
                position={Position.Bottom}
                id="b"
            />
        </>
    );
}