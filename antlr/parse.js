import antlr4 from 'antlr4';
import JavaScriptLexer from './parser/JavaScriptLexer.js';
import JavaScriptParser from './parser/JavaScriptParser.js';
import JavaScriptParserVisitor from './parser/JavaScriptParserVisitor.js';

class Visitor extends JavaScriptParserVisitor {

    visitChildren(ctx) {
        if (!ctx) {
            return;
        }
        const name = ctx.parser.ruleNames[ctx.ruleIndex];
        const text = ctx.getText();
        const node = {
            name,
            text,
        };
        if (ctx.children) {
            node.children = ctx.children.map(child => {
                if (child.children && child.children.length != 0) {
                    return child.accept(this);
                } else {
                    const text = child.getText();
                    return {
                        name,
                        text,
                    };
                }
            });
        }
        return node
    }

    visitSourceElement(ctx) {
        return ctx.children[0].accept(this);
    }

    visitVarModifier(ctx) {
        return {
            name: 'VarModifier',
            text: ctx.children[0].getText(),
        };
    }

    visitIdentifier(ctx) {
        return {
            name: 'Identifier',
            text: ctx.children[0].getText(),
        };
    }

    visitEos(ctx) {
        return {
            name: 'Eos',
            text: ctx.children[0].getText(),
        };
    }

    visitLiteral(ctx) {
        return {
            name: 'Literal',
            text: ctx.children[0].getText(),
        };
    }

    visitLiteralExpression(ctx) {
        return {
            name: 'LiteralExpression',
            text: ctx.children[0].getText(),
        };
    }

}

export default function GetParserTree(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new JavaScriptLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new JavaScriptParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.program();
    const res = tree.accept(new Visitor());
    return res;
}