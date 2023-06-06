import { useState, useEffect, useRef } from "react";
import dynamic from 'next/dynamic';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import GetParserTree from '../antlr/parse'

const Tree = dynamic(() => import('react-d3-tree'), {
    ssr: false,
});

const CenteredTree = ({ data }) => {
    const shouldRecenterTreeRef = useRef(true);
    const [treeTranslate, setTreeTranslate] = useState({ x: 0, y: 0 });
    const treeContainerRef = useRef(null);

    useEffect(() => {
        if (treeContainerRef.current && shouldRecenterTreeRef.current) {
            shouldRecenterTreeRef.current = false;
            const dimensions = (treeContainerRef.current as HTMLBodyElement).getBoundingClientRect();

            setTreeTranslate({
                x: dimensions.width / 2,
                y: dimensions.height / 2,
            });
        }
    });

    const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
        <g>
            <rect width="20" height="20" x="-10" onClick={toggleNode} />
            <text fill="black" strokeWidth="1" x="20">
                {nodeDatum.name}
            </text>
            {nodeDatum.attributes?.text && (
                <text fill="black" x="20" dy="20" strokeWidth="1">
                    {nodeDatum.attributes?.text}
                </text>
            )}
        </g>
    );

    return (
        <div ref={treeContainerRef} style={{ width: '60em', height: '40em', borderStyle: 'solid', borderWidth: '3px' }}>
            <Tree
                data={data}
                translate={treeTranslate}
                nodeSize={{ x: 250, y: 200 }}
                renderCustomNodeElement={renderRectSvgNode}
            />
        </div>
    )
}

export default function D3Tree() {
    const initText =   
`
  const fv = function() {
      const a = 5;
  };
`;
    const [parseTree, setParseTree] = useState(GetParserTree(initText));
    const textChanged = (text) => {
        try {
            const parseTree = GetParserTree(text);
            setParseTree(parseTree);
        }
        catch (err) {
            // ignore
        }
    }
    return (
        <div>
            <div style={{ borderStyle: 'solid', borderWidth: '3px' }}>
                <CodeMirror
                    value={initText}
                    height="200px"
                    extensions={[javascript({ jsx: true })]}
                    onChange={textChanged}
                />
            </div>
            <CenteredTree data={parseTree} />
        </div>
    );
}