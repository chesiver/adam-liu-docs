import antlr4, { CharStream } from 'antlr4';
import JavaScriptLexer from './parser/JavaScriptLexer';
import JavaScriptParser, { EosContext, IdentifierContext, LiteralContext, LiteralExpressionContext, SourceElementContext, VarModifierContext } from './parser/JavaScriptParser';
import JavaScriptParserVisitor from './parser/JavaScriptParserVisitor';

interface Result {
    name: string;
    text?: string;
    children?: Result[]
}

class Visitor extends JavaScriptParserVisitor<Result | null> {

    visitChildren(ctx) {
        if (!ctx) {
            return null;
        }
        const name = ctx.parser.ruleNames[ctx.ruleIndex];
        const text = ctx.getText();
        const node = {
            name,
            text,
        } as Result;
        if (ctx.children) {
            node.children = ctx.children.map(child => {
                if (child.children && child.children.length != 0) {
                    return child.accept(this);
                }
                else {
                    const text = child.getText();
                    return {
                        name,
                        text,
                    };
                }
            });
        }
        return node;
    }

    visitSourceElement = (ctx: SourceElementContext) => {
        return ctx.statement().accept(this);
    }

    visitVarModifier = (ctx: VarModifierContext) => {
        return {
            name: 'VarModifier',
            text: ctx.getText(),
        };
    }

    visitIdentifier = (ctx: IdentifierContext) => {
        return {
            name: 'Identifier',
            text: ctx.Identifier().getText(),
        }
    }

    visitEos = (ctx: EosContext) => {
        return {
            name: 'Eos',
            text: ctx.getText(),
        }
    }

    visitLiteral = (ctx: LiteralContext) => {
        return {
            name: 'Literal',
            text: ctx.getText(),
        }
    }

    visitLiteralExpression = (ctx: LiteralExpressionContext) => {
        return {
            name: 'LiteralExpression',
            text: ctx.literal().getText(),
        }
    }

}

export default function GetParserTree(input) {
    const chars = new antlr4.InputStream(input) as CharStream;
    const lexer = new JavaScriptLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new JavaScriptParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.program();
    const res = tree.accept(new Visitor());
    return res;
}