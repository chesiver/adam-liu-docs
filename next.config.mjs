import nextra from 'nextra'

// https://github.com/shuding/nextra/pull/562
// https://github.com/mike-lischke/vscode-antlr4/blob/master/syntaxes/antlr.json
import antlrGrammar from './antlr/antlr.tmLanguage.json' assert { type: 'json' };
const antlr = {
    id: "antlr",
    scopeName: 'source.antlr',
    grammar: antlrGrammar,
    aliases: ['antlr'],
}
import { getHighlighter, BUNDLED_LANGUAGES } from 'shiki';
const rehypePrettyCodeOptions = {
    getHighlighter: options => {
        return getHighlighter({
            ...options,
            langs: [
                ...BUNDLED_LANGUAGES,
                antlr,
            ],
        });
    },
};

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    mdxOptions: {
        rehypePrettyCodeOptions,
    },
    latex: true
})


export default withNextra()
