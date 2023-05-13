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
      const dimensions = treeContainerRef.current.getBoundingClientRect();

      setTreeTranslate({
        x: dimensions.width / 2,
        y: dimensions.height / 2,
      });
    }
  });

  return (
    <div ref={treeContainerRef} style={{ width: '60em', height: '30em', borderStyle: 'solid', borderWidth: '2px'}}>
      <Tree
        data={data}
        translate={treeTranslate}
      />
    </div>
  )
}



export default function D3Tree() {
  const [text, setText] = useState(
  `
const fv = function() {
    const a = 5;
};
  `);
  const textChanged = (text) => {
    setText(text);
  }
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div>
      <CodeMirror
        value={text}
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={textChanged}
      />
      <CenteredTree data={GetParserTree(text)} />
    </div>
  );
}