import { useState } from "react";
import ReactECharts from 'echarts-for-react';
import Button from '@mui/material/Button';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import FullscreenModal from './fullscreenModal';

import GetParserTree from '../antlr/parse'

const initOptions = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [
        {
            type: 'tree',
            data: [],
            top: '1%',
            left: '1%',
            bottom: '1%',
            right: '1%',
            symbolSize: 14,
            label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 14
            },
            tooltip: {
                formatter: function(params) {
                    return 'text: ' + params.data.text;
                },
            },
            leaves: {
                label: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                }
            },
            emphasis: {
                focus: 'descendant'
            },
            expandAndCollapse: true,
            animationDuration: 300,
            animationDurationUpdate: 500,
            initialTreeDepth: 4,
            roam: true
        }
    ]
};

export default function EchartsTree() {
    const initText =
`
  const fv = function() {
      const a = 5;
  };
`;
    // const initParseTree = GetParserTree(initText);
    // initOptions.series[0].data = [initParseTree];
    const [show, setShow] = useState(false);
    const [text, setText] = useState(initText)
    const [options, setOptions] = useState(initOptions)
    const textChanged = (text) => {
        setText(text)
    }
    const refreshParseTree = () => {
        try {
            const parseTree = GetParserTree(text);
            const updatedOptions = Object.assign({}, options, {
                series: [
                    Object.assign({}, initOptions.series[0], {
                        data: [parseTree]
                    })
                ]
            });
            setOptions(updatedOptions)
            setShow(true);
            console.log('set show to be true')
        }
        catch (err) {
            // ignore
        }
    }

    return <div style={{display: 'flex', 'flexDirection': 'column'}}>
        <div>
            <CodeMirror
                value={initText}
                height='300px'
                extensions={[javascript({ jsx: true })]}
                theme='dark'
                onChange={textChanged}
            />
        </div>
        <Button variant="contained" onClick={refreshParseTree}>Parse Code</Button>
        <FullscreenModal content={<ReactECharts option={options} style={{ width: '100%', height: '100%' }} />} show={show} setShow={setShow}></FullscreenModal>
    </div>
}