import { useState } from "react";
import ReactECharts from 'echarts-for-react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

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
    const initParseTree = GetParserTree(initText);
    const [options, setOptions] = useState(initOptions)
    const textChanged = (text) => {
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
        } catch (err) {
            // ignore
        }
    }

    initOptions.series[0].data = [initParseTree];

    return <div style={{ borderStyle: 'solid', borderWidth: '2px' }}>
        <div style={{ borderStyle: 'solid', borderWidth: '3px' }}>
            <CodeMirror
                value={initText}
                height="200px"
                extensions={[javascript({ jsx: true })]}
                onChange={textChanged}
            />
        </div>
        <ReactECharts option={options} style={{ width: '100%', height: '600px' }} />
    </div>
}