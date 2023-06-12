// Generated from grammar\javascript\JavaScriptParser.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import JavaScriptParserVisitor from "./JavaScriptParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

import JavaScriptParserBase from './JavaScriptParserBase';

export default class JavaScriptParser extends JavaScriptParserBase {
	public static readonly HashBangLine = 1;
	public static readonly MultiLineComment = 2;
	public static readonly SingleLineComment = 3;
	public static readonly RegularExpressionLiteral = 4;
	public static readonly OpenBracket = 5;
	public static readonly CloseBracket = 6;
	public static readonly OpenParen = 7;
	public static readonly CloseParen = 8;
	public static readonly OpenBrace = 9;
	public static readonly TemplateCloseBrace = 10;
	public static readonly CloseBrace = 11;
	public static readonly SemiColon = 12;
	public static readonly Comma = 13;
	public static readonly Assign = 14;
	public static readonly QuestionMark = 15;
	public static readonly QuestionMarkDot = 16;
	public static readonly Colon = 17;
	public static readonly Ellipsis = 18;
	public static readonly Dot = 19;
	public static readonly PlusPlus = 20;
	public static readonly MinusMinus = 21;
	public static readonly Plus = 22;
	public static readonly Minus = 23;
	public static readonly BitNot = 24;
	public static readonly Not = 25;
	public static readonly Multiply = 26;
	public static readonly Divide = 27;
	public static readonly Modulus = 28;
	public static readonly Power = 29;
	public static readonly NullCoalesce = 30;
	public static readonly Hashtag = 31;
	public static readonly RightShiftArithmetic = 32;
	public static readonly LeftShiftArithmetic = 33;
	public static readonly RightShiftLogical = 34;
	public static readonly LessThan = 35;
	public static readonly MoreThan = 36;
	public static readonly LessThanEquals = 37;
	public static readonly GreaterThanEquals = 38;
	public static readonly Equals_ = 39;
	public static readonly NotEquals = 40;
	public static readonly IdentityEquals = 41;
	public static readonly IdentityNotEquals = 42;
	public static readonly BitAnd = 43;
	public static readonly BitXOr = 44;
	public static readonly BitOr = 45;
	public static readonly And = 46;
	public static readonly Or = 47;
	public static readonly MultiplyAssign = 48;
	public static readonly DivideAssign = 49;
	public static readonly ModulusAssign = 50;
	public static readonly PlusAssign = 51;
	public static readonly MinusAssign = 52;
	public static readonly LeftShiftArithmeticAssign = 53;
	public static readonly RightShiftArithmeticAssign = 54;
	public static readonly RightShiftLogicalAssign = 55;
	public static readonly BitAndAssign = 56;
	public static readonly BitXorAssign = 57;
	public static readonly BitOrAssign = 58;
	public static readonly PowerAssign = 59;
	public static readonly ARROW = 60;
	public static readonly NullLiteral = 61;
	public static readonly BooleanLiteral = 62;
	public static readonly DecimalLiteral = 63;
	public static readonly HexIntegerLiteral = 64;
	public static readonly OctalIntegerLiteral = 65;
	public static readonly OctalIntegerLiteral2 = 66;
	public static readonly BinaryIntegerLiteral = 67;
	public static readonly BigHexIntegerLiteral = 68;
	public static readonly BigOctalIntegerLiteral = 69;
	public static readonly BigBinaryIntegerLiteral = 70;
	public static readonly BigDecimalIntegerLiteral = 71;
	public static readonly Break = 72;
	public static readonly Do = 73;
	public static readonly Instanceof = 74;
	public static readonly Typeof = 75;
	public static readonly Case = 76;
	public static readonly Else = 77;
	public static readonly New = 78;
	public static readonly Var = 79;
	public static readonly Catch = 80;
	public static readonly Finally = 81;
	public static readonly Return = 82;
	public static readonly Void = 83;
	public static readonly Continue = 84;
	public static readonly For = 85;
	public static readonly Switch = 86;
	public static readonly While = 87;
	public static readonly Debugger = 88;
	public static readonly Function_ = 89;
	public static readonly This = 90;
	public static readonly With = 91;
	public static readonly Default = 92;
	public static readonly If = 93;
	public static readonly Throw = 94;
	public static readonly Delete = 95;
	public static readonly In = 96;
	public static readonly Try = 97;
	public static readonly As = 98;
	public static readonly From = 99;
	public static readonly Class = 100;
	public static readonly Enum = 101;
	public static readonly Extends = 102;
	public static readonly Super = 103;
	public static readonly Const = 104;
	public static readonly Export = 105;
	public static readonly Import = 106;
	public static readonly Async = 107;
	public static readonly Await = 108;
	public static readonly Yield = 109;
	public static readonly Implements = 110;
	public static readonly StrictLet = 111;
	public static readonly NonStrictLet = 112;
	public static readonly Private = 113;
	public static readonly Public = 114;
	public static readonly Interface = 115;
	public static readonly Package = 116;
	public static readonly Protected = 117;
	public static readonly Static = 118;
	public static readonly Identifier = 119;
	public static readonly StringLiteral = 120;
	public static readonly BackTick = 121;
	public static readonly WhiteSpaces = 122;
	public static readonly LineTerminator = 123;
	public static readonly HtmlComment = 124;
	public static readonly CDataComment = 125;
	public static readonly UnexpectedCharacter = 126;
	public static readonly TemplateStringStartExpression = 127;
	public static readonly TemplateStringAtom = 128;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_sourceElement = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_block = 3;
	public static readonly RULE_statementList = 4;
	public static readonly RULE_importStatement = 5;
	public static readonly RULE_importFromBlock = 6;
	public static readonly RULE_moduleItems = 7;
	public static readonly RULE_importDefault = 8;
	public static readonly RULE_importNamespace = 9;
	public static readonly RULE_importFrom = 10;
	public static readonly RULE_aliasName = 11;
	public static readonly RULE_exportStatement = 12;
	public static readonly RULE_exportFromBlock = 13;
	public static readonly RULE_declaration = 14;
	public static readonly RULE_variableStatement = 15;
	public static readonly RULE_variableDeclarationList = 16;
	public static readonly RULE_variableDeclaration = 17;
	public static readonly RULE_emptyStatement_ = 18;
	public static readonly RULE_expressionStatement = 19;
	public static readonly RULE_ifStatement = 20;
	public static readonly RULE_iterationStatement = 21;
	public static readonly RULE_varModifier = 22;
	public static readonly RULE_continueStatement = 23;
	public static readonly RULE_breakStatement = 24;
	public static readonly RULE_returnStatement = 25;
	public static readonly RULE_yieldStatement = 26;
	public static readonly RULE_withStatement = 27;
	public static readonly RULE_switchStatement = 28;
	public static readonly RULE_caseBlock = 29;
	public static readonly RULE_caseClauses = 30;
	public static readonly RULE_caseClause = 31;
	public static readonly RULE_defaultClause = 32;
	public static readonly RULE_labelledStatement = 33;
	public static readonly RULE_throwStatement = 34;
	public static readonly RULE_tryStatement = 35;
	public static readonly RULE_catchProduction = 36;
	public static readonly RULE_finallyProduction = 37;
	public static readonly RULE_debuggerStatement = 38;
	public static readonly RULE_functionDeclaration = 39;
	public static readonly RULE_classDeclaration = 40;
	public static readonly RULE_classTail = 41;
	public static readonly RULE_classElement = 42;
	public static readonly RULE_methodDefinition = 43;
	public static readonly RULE_formalParameterList = 44;
	public static readonly RULE_formalParameterArg = 45;
	public static readonly RULE_lastFormalParameterArg = 46;
	public static readonly RULE_functionBody = 47;
	public static readonly RULE_sourceElements = 48;
	public static readonly RULE_arrayLiteral = 49;
	public static readonly RULE_elementList = 50;
	public static readonly RULE_arrayElement = 51;
	public static readonly RULE_propertyAssignment = 52;
	public static readonly RULE_propertyName = 53;
	public static readonly RULE_arguments = 54;
	public static readonly RULE_argument = 55;
	public static readonly RULE_expressionSequence = 56;
	public static readonly RULE_singleExpression = 57;
	public static readonly RULE_assignable = 58;
	public static readonly RULE_objectLiteral = 59;
	public static readonly RULE_anonymousFunction = 60;
	public static readonly RULE_arrowFunctionParameters = 61;
	public static readonly RULE_arrowFunctionBody = 62;
	public static readonly RULE_assignmentOperator = 63;
	public static readonly RULE_literal = 64;
	public static readonly RULE_templateStringLiteral = 65;
	public static readonly RULE_templateStringAtom = 66;
	public static readonly RULE_numericLiteral = 67;
	public static readonly RULE_bigintLiteral = 68;
	public static readonly RULE_getter = 69;
	public static readonly RULE_setter = 70;
	public static readonly RULE_identifierName = 71;
	public static readonly RULE_identifier = 72;
	public static readonly RULE_reservedWord = 73;
	public static readonly RULE_keyword = 74;
	public static readonly RULE_let_ = 75;
	public static readonly RULE_eos = 76;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, null, 
                                                            null, "'['", 
                                                            "']'", "'('", 
                                                            "')'", "'{'", 
                                                            null, "'}'", 
                                                            "';'", "','", 
                                                            "'='", "'?'", 
                                                            "'?.'", "':'", 
                                                            "'...'", "'.'", 
                                                            "'++'", "'--'", 
                                                            "'+'", "'-'", 
                                                            "'~'", "'!'", 
                                                            "'*'", "'/'", 
                                                            "'%'", "'**'", 
                                                            "'??'", "'#'", 
                                                            "'>>'", "'<<'", 
                                                            "'>>>'", "'<'", 
                                                            "'>'", "'<='", 
                                                            "'>='", "'=='", 
                                                            "'!='", "'==='", 
                                                            "'!=='", "'&'", 
                                                            "'^'", "'|'", 
                                                            "'&&'", "'||'", 
                                                            "'*='", "'/='", 
                                                            "'%='", "'+='", 
                                                            "'-='", "'<<='", 
                                                            "'>>='", "'>>>='", 
                                                            "'&='", "'^='", 
                                                            "'|='", "'**='", 
                                                            "'=>'", "'null'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'break'", "'do'", 
                                                            "'instanceof'", 
                                                            "'typeof'", 
                                                            "'case'", "'else'", 
                                                            "'new'", "'var'", 
                                                            "'catch'", "'finally'", 
                                                            "'return'", 
                                                            "'void'", "'continue'", 
                                                            "'for'", "'switch'", 
                                                            "'while'", "'debugger'", 
                                                            "'function'", 
                                                            "'this'", "'with'", 
                                                            "'default'", 
                                                            "'if'", "'throw'", 
                                                            "'delete'", 
                                                            "'in'", "'try'", 
                                                            "'as'", "'from'", 
                                                            "'class'", "'enum'", 
                                                            "'extends'", 
                                                            "'super'", "'const'", 
                                                            "'export'", 
                                                            "'import'", 
                                                            "'async'", "'await'", 
                                                            "'yield'", "'implements'", 
                                                            null, null, 
                                                            "'private'", 
                                                            "'public'", 
                                                            "'interface'", 
                                                            "'package'", 
                                                            "'protected'", 
                                                            "'static'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            "'${'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "HashBangLine", 
                                                             "MultiLineComment", 
                                                             "SingleLineComment", 
                                                             "RegularExpressionLiteral", 
                                                             "OpenBracket", 
                                                             "CloseBracket", 
                                                             "OpenParen", 
                                                             "CloseParen", 
                                                             "OpenBrace", 
                                                             "TemplateCloseBrace", 
                                                             "CloseBrace", 
                                                             "SemiColon", 
                                                             "Comma", "Assign", 
                                                             "QuestionMark", 
                                                             "QuestionMarkDot", 
                                                             "Colon", "Ellipsis", 
                                                             "Dot", "PlusPlus", 
                                                             "MinusMinus", 
                                                             "Plus", "Minus", 
                                                             "BitNot", "Not", 
                                                             "Multiply", 
                                                             "Divide", "Modulus", 
                                                             "Power", "NullCoalesce", 
                                                             "Hashtag", 
                                                             "RightShiftArithmetic", 
                                                             "LeftShiftArithmetic", 
                                                             "RightShiftLogical", 
                                                             "LessThan", 
                                                             "MoreThan", 
                                                             "LessThanEquals", 
                                                             "GreaterThanEquals", 
                                                             "Equals_", 
                                                             "NotEquals", 
                                                             "IdentityEquals", 
                                                             "IdentityNotEquals", 
                                                             "BitAnd", "BitXOr", 
                                                             "BitOr", "And", 
                                                             "Or", "MultiplyAssign", 
                                                             "DivideAssign", 
                                                             "ModulusAssign", 
                                                             "PlusAssign", 
                                                             "MinusAssign", 
                                                             "LeftShiftArithmeticAssign", 
                                                             "RightShiftArithmeticAssign", 
                                                             "RightShiftLogicalAssign", 
                                                             "BitAndAssign", 
                                                             "BitXorAssign", 
                                                             "BitOrAssign", 
                                                             "PowerAssign", 
                                                             "ARROW", "NullLiteral", 
                                                             "BooleanLiteral", 
                                                             "DecimalLiteral", 
                                                             "HexIntegerLiteral", 
                                                             "OctalIntegerLiteral", 
                                                             "OctalIntegerLiteral2", 
                                                             "BinaryIntegerLiteral", 
                                                             "BigHexIntegerLiteral", 
                                                             "BigOctalIntegerLiteral", 
                                                             "BigBinaryIntegerLiteral", 
                                                             "BigDecimalIntegerLiteral", 
                                                             "Break", "Do", 
                                                             "Instanceof", 
                                                             "Typeof", "Case", 
                                                             "Else", "New", 
                                                             "Var", "Catch", 
                                                             "Finally", 
                                                             "Return", "Void", 
                                                             "Continue", 
                                                             "For", "Switch", 
                                                             "While", "Debugger", 
                                                             "Function_", 
                                                             "This", "With", 
                                                             "Default", 
                                                             "If", "Throw", 
                                                             "Delete", "In", 
                                                             "Try", "As", 
                                                             "From", "Class", 
                                                             "Enum", "Extends", 
                                                             "Super", "Const", 
                                                             "Export", "Import", 
                                                             "Async", "Await", 
                                                             "Yield", "Implements", 
                                                             "StrictLet", 
                                                             "NonStrictLet", 
                                                             "Private", 
                                                             "Public", "Interface", 
                                                             "Package", 
                                                             "Protected", 
                                                             "Static", "Identifier", 
                                                             "StringLiteral", 
                                                             "BackTick", 
                                                             "WhiteSpaces", 
                                                             "LineTerminator", 
                                                             "HtmlComment", 
                                                             "CDataComment", 
                                                             "UnexpectedCharacter", 
                                                             "TemplateStringStartExpression", 
                                                             "TemplateStringAtom" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "sourceElement", "statement", "block", "statementList", "importStatement", 
		"importFromBlock", "moduleItems", "importDefault", "importNamespace", 
		"importFrom", "aliasName", "exportStatement", "exportFromBlock", "declaration", 
		"variableStatement", "variableDeclarationList", "variableDeclaration", 
		"emptyStatement_", "expressionStatement", "ifStatement", "iterationStatement", 
		"varModifier", "continueStatement", "breakStatement", "returnStatement", 
		"yieldStatement", "withStatement", "switchStatement", "caseBlock", "caseClauses", 
		"caseClause", "defaultClause", "labelledStatement", "throwStatement", 
		"tryStatement", "catchProduction", "finallyProduction", "debuggerStatement", 
		"functionDeclaration", "classDeclaration", "classTail", "classElement", 
		"methodDefinition", "formalParameterList", "formalParameterArg", "lastFormalParameterArg", 
		"functionBody", "sourceElements", "arrayLiteral", "elementList", "arrayElement", 
		"propertyAssignment", "propertyName", "arguments", "argument", "expressionSequence", 
		"singleExpression", "assignable", "objectLiteral", "anonymousFunction", 
		"arrowFunctionParameters", "arrowFunctionBody", "assignmentOperator", 
		"literal", "templateStringLiteral", "templateStringAtom", "numericLiteral", 
		"bigintLiteral", "getter", "setter", "identifierName", "identifier", "reservedWord", 
		"keyword", "let_", "eos",
	];
	public get grammarFileName(): string { return "JavaScriptParser.g4"; }
	public get literalNames(): (string | null)[] { return JavaScriptParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return JavaScriptParser.symbolicNames; }
	public get ruleNames(): string[] { return JavaScriptParser.ruleNames; }
	public get serializedATN(): number[] { return JavaScriptParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, JavaScriptParser._ATN, JavaScriptParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, JavaScriptParser.RULE_program);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 155;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 154;
				this.match(JavaScriptParser.HashBangLine);
				}
				break;
			}
			this.state = 158;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 157;
				this.sourceElements();
				}
				break;
			}
			this.state = 160;
			this.match(JavaScriptParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sourceElement(): SourceElementContext {
		let localctx: SourceElementContext = new SourceElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, JavaScriptParser.RULE_sourceElement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 162;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, JavaScriptParser.RULE_statement);
		try {
			this.state = 184;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 164;
				this.block();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 165;
				this.variableStatement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 166;
				this.importStatement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 167;
				this.exportStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 168;
				this.emptyStatement_();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 169;
				this.classDeclaration();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 170;
				this.expressionStatement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 171;
				this.ifStatement();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 172;
				this.iterationStatement();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 173;
				this.continueStatement();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 174;
				this.breakStatement();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 175;
				this.returnStatement();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 176;
				this.yieldStatement();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 177;
				this.withStatement();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 178;
				this.labelledStatement();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 179;
				this.switchStatement();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 180;
				this.throwStatement();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 181;
				this.tryStatement();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 182;
				this.debuggerStatement();
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 183;
				this.functionDeclaration();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, JavaScriptParser.RULE_block);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 186;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 188;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 187;
				this.statementList();
				}
				break;
			}
			this.state = 190;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let localctx: StatementListContext = new StatementListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, JavaScriptParser.RULE_statementList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 193;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 192;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 195;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importStatement(): ImportStatementContext {
		let localctx: ImportStatementContext = new ImportStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, JavaScriptParser.RULE_importStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 197;
			this.match(JavaScriptParser.Import);
			this.state = 198;
			this.importFromBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importFromBlock(): ImportFromBlockContext {
		let localctx: ImportFromBlockContext = new ImportFromBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, JavaScriptParser.RULE_importFromBlock);
		try {
			this.state = 212;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
			case 26:
			case 61:
			case 62:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 201;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 200;
					this.importDefault();
					}
					break;
				}
				this.state = 205;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 26:
				case 61:
				case 62:
				case 72:
				case 73:
				case 74:
				case 75:
				case 76:
				case 77:
				case 78:
				case 79:
				case 80:
				case 81:
				case 82:
				case 83:
				case 84:
				case 85:
				case 86:
				case 87:
				case 88:
				case 89:
				case 90:
				case 91:
				case 92:
				case 93:
				case 94:
				case 95:
				case 96:
				case 97:
				case 98:
				case 99:
				case 100:
				case 101:
				case 102:
				case 103:
				case 104:
				case 105:
				case 106:
				case 107:
				case 108:
				case 109:
				case 110:
				case 111:
				case 112:
				case 113:
				case 114:
				case 115:
				case 116:
				case 117:
				case 118:
				case 119:
					{
					this.state = 203;
					this.importNamespace();
					}
					break;
				case 9:
					{
					this.state = 204;
					this.moduleItems();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 207;
				this.importFrom();
				this.state = 208;
				this.eos();
				}
				break;
			case 120:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 210;
				this.match(JavaScriptParser.StringLiteral);
				this.state = 211;
				this.eos();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public moduleItems(): ModuleItemsContext {
		let localctx: ModuleItemsContext = new ModuleItemsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, JavaScriptParser.RULE_moduleItems);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 214;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 220;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 215;
					this.aliasName();
					this.state = 216;
					this.match(JavaScriptParser.Comma);
					}
					}
				}
				this.state = 222;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
			}
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & 4294965251) !== 0) || ((((_la - 93)) & ~0x1F) === 0 && ((1 << (_la - 93)) & 134217727) !== 0)) {
				{
				this.state = 223;
				this.aliasName();
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===13) {
					{
					this.state = 224;
					this.match(JavaScriptParser.Comma);
					}
				}

				}
			}

			this.state = 229;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importDefault(): ImportDefaultContext {
		let localctx: ImportDefaultContext = new ImportDefaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, JavaScriptParser.RULE_importDefault);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 231;
			this.aliasName();
			this.state = 232;
			this.match(JavaScriptParser.Comma);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importNamespace(): ImportNamespaceContext {
		let localctx: ImportNamespaceContext = new ImportNamespaceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, JavaScriptParser.RULE_importNamespace);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 236;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 26:
				{
				this.state = 234;
				this.match(JavaScriptParser.Multiply);
				}
				break;
			case 61:
			case 62:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
				{
				this.state = 235;
				this.identifierName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===98) {
				{
				this.state = 238;
				this.match(JavaScriptParser.As);
				this.state = 239;
				this.identifierName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public importFrom(): ImportFromContext {
		let localctx: ImportFromContext = new ImportFromContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, JavaScriptParser.RULE_importFrom);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 242;
			this.match(JavaScriptParser.From);
			this.state = 243;
			this.match(JavaScriptParser.StringLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public aliasName(): AliasNameContext {
		let localctx: AliasNameContext = new AliasNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, JavaScriptParser.RULE_aliasName);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 245;
			this.identifierName();
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===98) {
				{
				this.state = 246;
				this.match(JavaScriptParser.As);
				this.state = 247;
				this.identifierName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exportStatement(): ExportStatementContext {
		let localctx: ExportStatementContext = new ExportStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, JavaScriptParser.RULE_exportStatement);
		try {
			this.state = 262;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				localctx = new ExportDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 250;
				this.match(JavaScriptParser.Export);
				this.state = 253;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 251;
					this.exportFromBlock();
					}
					break;
				case 2:
					{
					this.state = 252;
					this.declaration();
					}
					break;
				}
				this.state = 255;
				this.eos();
				}
				break;
			case 2:
				localctx = new ExportDefaultDeclarationContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 257;
				this.match(JavaScriptParser.Export);
				this.state = 258;
				this.match(JavaScriptParser.Default);
				this.state = 259;
				this.singleExpression(0);
				this.state = 260;
				this.eos();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public exportFromBlock(): ExportFromBlockContext {
		let localctx: ExportFromBlockContext = new ExportFromBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, JavaScriptParser.RULE_exportFromBlock);
		try {
			this.state = 274;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 26:
			case 61:
			case 62:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 264;
				this.importNamespace();
				this.state = 265;
				this.importFrom();
				this.state = 266;
				this.eos();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 268;
				this.moduleItems();
				this.state = 270;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 269;
					this.importFrom();
					}
					break;
				}
				this.state = 272;
				this.eos();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, JavaScriptParser.RULE_declaration);
		try {
			this.state = 279;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 79:
			case 104:
			case 111:
			case 112:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 276;
				this.variableStatement();
				}
				break;
			case 100:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 277;
				this.classDeclaration();
				}
				break;
			case 89:
			case 107:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 278;
				this.functionDeclaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableStatement(): VariableStatementContext {
		let localctx: VariableStatementContext = new VariableStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, JavaScriptParser.RULE_variableStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 281;
			this.variableDeclarationList();
			this.state = 282;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, JavaScriptParser.RULE_variableDeclarationList);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 284;
			this.varModifier();
			this.state = 285;
			this.variableDeclaration();
			this.state = 290;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 286;
					this.match(JavaScriptParser.Comma);
					this.state = 287;
					this.variableDeclaration();
					}
					}
				}
				this.state = 292;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, JavaScriptParser.RULE_variableDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 293;
			this.assignable();
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 294;
				this.match(JavaScriptParser.Assign);
				this.state = 295;
				this.singleExpression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public emptyStatement_(): EmptyStatement_Context {
		let localctx: EmptyStatement_Context = new EmptyStatement_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 36, JavaScriptParser.RULE_emptyStatement_);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 298;
			this.match(JavaScriptParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let localctx: ExpressionStatementContext = new ExpressionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, JavaScriptParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 300;
			if (!(this.notOpenBraceAndNotFunction())) {
				throw this.createFailedPredicateException("this.notOpenBraceAndNotFunction()");
			}
			this.state = 301;
			this.expressionSequence();
			this.state = 302;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, JavaScriptParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 304;
			this.match(JavaScriptParser.If);
			this.state = 305;
			this.match(JavaScriptParser.OpenParen);
			this.state = 306;
			this.expressionSequence();
			this.state = 307;
			this.match(JavaScriptParser.CloseParen);
			this.state = 308;
			this.statement();
			this.state = 311;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 309;
				this.match(JavaScriptParser.Else);
				this.state = 310;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let localctx: IterationStatementContext = new IterationStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, JavaScriptParser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 369;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				localctx = new DoStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 313;
				this.match(JavaScriptParser.Do);
				this.state = 314;
				this.statement();
				this.state = 315;
				this.match(JavaScriptParser.While);
				this.state = 316;
				this.match(JavaScriptParser.OpenParen);
				this.state = 317;
				this.expressionSequence();
				this.state = 318;
				this.match(JavaScriptParser.CloseParen);
				this.state = 319;
				this.eos();
				}
				break;
			case 2:
				localctx = new WhileStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 321;
				this.match(JavaScriptParser.While);
				this.state = 322;
				this.match(JavaScriptParser.OpenParen);
				this.state = 323;
				this.expressionSequence();
				this.state = 324;
				this.match(JavaScriptParser.CloseParen);
				this.state = 325;
				this.statement();
				}
				break;
			case 3:
				localctx = new ForStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 327;
				this.match(JavaScriptParser.For);
				this.state = 328;
				this.match(JavaScriptParser.OpenParen);
				this.state = 331;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
				case 1:
					{
					this.state = 329;
					this.expressionSequence();
					}
					break;
				case 2:
					{
					this.state = 330;
					this.variableDeclarationList();
					}
					break;
				}
				this.state = 333;
				this.match(JavaScriptParser.SemiColon);
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 66060976) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & 809650175) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 117602601) !== 0)) {
					{
					this.state = 334;
					this.expressionSequence();
					}
				}

				this.state = 337;
				this.match(JavaScriptParser.SemiColon);
				this.state = 339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 66060976) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & 809650175) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 117602601) !== 0)) {
					{
					this.state = 338;
					this.expressionSequence();
					}
				}

				this.state = 341;
				this.match(JavaScriptParser.CloseParen);
				this.state = 342;
				this.statement();
				}
				break;
			case 4:
				localctx = new ForInStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 343;
				this.match(JavaScriptParser.For);
				this.state = 344;
				this.match(JavaScriptParser.OpenParen);
				this.state = 347;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 345;
					this.singleExpression(0);
					}
					break;
				case 2:
					{
					this.state = 346;
					this.variableDeclarationList();
					}
					break;
				}
				this.state = 349;
				this.match(JavaScriptParser.In);
				this.state = 350;
				this.expressionSequence();
				this.state = 351;
				this.match(JavaScriptParser.CloseParen);
				this.state = 352;
				this.statement();
				}
				break;
			case 5:
				localctx = new ForOfStatementContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 354;
				this.match(JavaScriptParser.For);
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===108) {
					{
					this.state = 355;
					this.match(JavaScriptParser.Await);
					}
				}

				this.state = 358;
				this.match(JavaScriptParser.OpenParen);
				this.state = 361;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
				case 1:
					{
					this.state = 359;
					this.singleExpression(0);
					}
					break;
				case 2:
					{
					this.state = 360;
					this.variableDeclarationList();
					}
					break;
				}
				this.state = 363;
				this.identifier();
				this.state = 364;
				if (!(this.p("of"))) {
					throw this.createFailedPredicateException("this.p(\"of\")");
				}
				this.state = 365;
				this.expressionSequence();
				this.state = 366;
				this.match(JavaScriptParser.CloseParen);
				this.state = 367;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varModifier(): VarModifierContext {
		let localctx: VarModifierContext = new VarModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, JavaScriptParser.RULE_varModifier);
		try {
			this.state = 374;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 79:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 371;
				this.match(JavaScriptParser.Var);
				}
				break;
			case 111:
			case 112:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 372;
				this.let_();
				}
				break;
			case 104:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 373;
				this.match(JavaScriptParser.Const);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let localctx: ContinueStatementContext = new ContinueStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, JavaScriptParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 376;
			this.match(JavaScriptParser.Continue);
			this.state = 379;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 377;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 378;
				this.identifier();
				}
				break;
			}
			this.state = 381;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let localctx: BreakStatementContext = new BreakStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, JavaScriptParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 383;
			this.match(JavaScriptParser.Break);
			this.state = 386;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 384;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 385;
				this.identifier();
				}
				break;
			}
			this.state = 388;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, JavaScriptParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 390;
			this.match(JavaScriptParser.Return);
			this.state = 393;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				{
				this.state = 391;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 392;
				this.expressionSequence();
				}
				break;
			}
			this.state = 395;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public yieldStatement(): YieldStatementContext {
		let localctx: YieldStatementContext = new YieldStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, JavaScriptParser.RULE_yieldStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 397;
			this.match(JavaScriptParser.Yield);
			this.state = 400;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				{
				this.state = 398;
				if (!(this.notLineTerminator())) {
					throw this.createFailedPredicateException("this.notLineTerminator()");
				}
				this.state = 399;
				this.expressionSequence();
				}
				break;
			}
			this.state = 402;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public withStatement(): WithStatementContext {
		let localctx: WithStatementContext = new WithStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, JavaScriptParser.RULE_withStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 404;
			this.match(JavaScriptParser.With);
			this.state = 405;
			this.match(JavaScriptParser.OpenParen);
			this.state = 406;
			this.expressionSequence();
			this.state = 407;
			this.match(JavaScriptParser.CloseParen);
			this.state = 408;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public switchStatement(): SwitchStatementContext {
		let localctx: SwitchStatementContext = new SwitchStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, JavaScriptParser.RULE_switchStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 410;
			this.match(JavaScriptParser.Switch);
			this.state = 411;
			this.match(JavaScriptParser.OpenParen);
			this.state = 412;
			this.expressionSequence();
			this.state = 413;
			this.match(JavaScriptParser.CloseParen);
			this.state = 414;
			this.caseBlock();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public caseBlock(): CaseBlockContext {
		let localctx: CaseBlockContext = new CaseBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, JavaScriptParser.RULE_caseBlock);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 416;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 418;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===76) {
				{
				this.state = 417;
				this.caseClauses();
				}
			}

			this.state = 424;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===92) {
				{
				this.state = 420;
				this.defaultClause();
				this.state = 422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===76) {
					{
					this.state = 421;
					this.caseClauses();
					}
				}

				}
			}

			this.state = 426;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public caseClauses(): CaseClausesContext {
		let localctx: CaseClausesContext = new CaseClausesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, JavaScriptParser.RULE_caseClauses);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 428;
				this.caseClause();
				}
				}
				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===76);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public caseClause(): CaseClauseContext {
		let localctx: CaseClauseContext = new CaseClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, JavaScriptParser.RULE_caseClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 433;
			this.match(JavaScriptParser.Case);
			this.state = 434;
			this.expressionSequence();
			this.state = 435;
			this.match(JavaScriptParser.Colon);
			this.state = 437;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 436;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defaultClause(): DefaultClauseContext {
		let localctx: DefaultClauseContext = new DefaultClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, JavaScriptParser.RULE_defaultClause);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 439;
			this.match(JavaScriptParser.Default);
			this.state = 440;
			this.match(JavaScriptParser.Colon);
			this.state = 442;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				{
				this.state = 441;
				this.statementList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public labelledStatement(): LabelledStatementContext {
		let localctx: LabelledStatementContext = new LabelledStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, JavaScriptParser.RULE_labelledStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 444;
			this.identifier();
			this.state = 445;
			this.match(JavaScriptParser.Colon);
			this.state = 446;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public throwStatement(): ThrowStatementContext {
		let localctx: ThrowStatementContext = new ThrowStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, JavaScriptParser.RULE_throwStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 448;
			this.match(JavaScriptParser.Throw);
			this.state = 449;
			if (!(this.notLineTerminator())) {
				throw this.createFailedPredicateException("this.notLineTerminator()");
			}
			this.state = 450;
			this.expressionSequence();
			this.state = 451;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public tryStatement(): TryStatementContext {
		let localctx: TryStatementContext = new TryStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, JavaScriptParser.RULE_tryStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 453;
			this.match(JavaScriptParser.Try);
			this.state = 454;
			this.block();
			this.state = 460;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 80:
				{
				this.state = 455;
				this.catchProduction();
				this.state = 457;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 456;
					this.finallyProduction();
					}
					break;
				}
				}
				break;
			case 81:
				{
				this.state = 459;
				this.finallyProduction();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catchProduction(): CatchProductionContext {
		let localctx: CatchProductionContext = new CatchProductionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, JavaScriptParser.RULE_catchProduction);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 462;
			this.match(JavaScriptParser.Catch);
			this.state = 468;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===7) {
				{
				this.state = 463;
				this.match(JavaScriptParser.OpenParen);
				this.state = 465;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===5 || _la===9 || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 2114049) !== 0)) {
					{
					this.state = 464;
					this.assignable();
					}
				}

				this.state = 467;
				this.match(JavaScriptParser.CloseParen);
				}
			}

			this.state = 470;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public finallyProduction(): FinallyProductionContext {
		let localctx: FinallyProductionContext = new FinallyProductionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, JavaScriptParser.RULE_finallyProduction);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 472;
			this.match(JavaScriptParser.Finally);
			this.state = 473;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public debuggerStatement(): DebuggerStatementContext {
		let localctx: DebuggerStatementContext = new DebuggerStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, JavaScriptParser.RULE_debuggerStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 475;
			this.match(JavaScriptParser.Debugger);
			this.state = 476;
			this.eos();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, JavaScriptParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 479;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===107) {
				{
				this.state = 478;
				this.match(JavaScriptParser.Async);
				}
			}

			this.state = 481;
			this.match(JavaScriptParser.Function_);
			this.state = 483;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 482;
				this.match(JavaScriptParser.Multiply);
				}
			}

			this.state = 485;
			this.identifier();
			this.state = 486;
			this.match(JavaScriptParser.OpenParen);
			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262688) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 2114049) !== 0)) {
				{
				this.state = 487;
				this.formalParameterList();
				}
			}

			this.state = 490;
			this.match(JavaScriptParser.CloseParen);
			this.state = 491;
			this.functionBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classDeclaration(): ClassDeclarationContext {
		let localctx: ClassDeclarationContext = new ClassDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, JavaScriptParser.RULE_classDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 493;
			this.match(JavaScriptParser.Class);
			this.state = 494;
			this.identifier();
			this.state = 495;
			this.classTail();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classTail(): ClassTailContext {
		let localctx: ClassTailContext = new ClassTailContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, JavaScriptParser.RULE_classTail);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 499;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===102) {
				{
				this.state = 497;
				this.match(JavaScriptParser.Extends);
				this.state = 498;
				this.singleExpression(0);
				}
			}

			this.state = 501;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 505;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 502;
					this.classElement();
					}
					}
				}
				this.state = 507;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 508;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classElement(): ClassElementContext {
		let localctx: ClassElementContext = new ClassElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, JavaScriptParser.RULE_classElement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 535;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 516;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 514;
						this._errHandler.sync(this);
						switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
						case 1:
							{
							this.state = 510;
							this.match(JavaScriptParser.Static);
							}
							break;
						case 2:
							{
							this.state = 511;
							if (!(this.n("static"))) {
								throw this.createFailedPredicateException("this.n(\"static\")");
							}
							this.state = 512;
							this.identifier();
							}
							break;
						case 3:
							{
							this.state = 513;
							this.match(JavaScriptParser.Async);
							}
							break;
						}
						}
					}
					this.state = 518;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
				}
				this.state = 525;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 519;
					this.methodDefinition();
					}
					break;
				case 2:
					{
					this.state = 520;
					this.assignable();
					this.state = 521;
					this.match(JavaScriptParser.Assign);
					this.state = 522;
					this.objectLiteral();
					this.state = 523;
					this.match(JavaScriptParser.SemiColon);
					}
					break;
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 527;
				this.emptyStatement_();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 529;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===31) {
					{
					this.state = 528;
					this.match(JavaScriptParser.Hashtag);
					}
				}

				this.state = 531;
				this.propertyName();
				this.state = 532;
				this.match(JavaScriptParser.Assign);
				this.state = 533;
				this.singleExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public methodDefinition(): MethodDefinitionContext {
		let localctx: MethodDefinitionContext = new MethodDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, JavaScriptParser.RULE_methodDefinition);
		let _la: number;
		try {
			this.state = 576;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 537;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 541;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===31) {
					{
					this.state = 540;
					this.match(JavaScriptParser.Hashtag);
					}
				}

				this.state = 543;
				this.propertyName();
				this.state = 544;
				this.match(JavaScriptParser.OpenParen);
				this.state = 546;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262688) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 2114049) !== 0)) {
					{
					this.state = 545;
					this.formalParameterList();
					}
				}

				this.state = 548;
				this.match(JavaScriptParser.CloseParen);
				this.state = 549;
				this.functionBody();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 552;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
				case 1:
					{
					this.state = 551;
					this.match(JavaScriptParser.Multiply);
					}
					break;
				}
				this.state = 555;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 554;
					this.match(JavaScriptParser.Hashtag);
					}
					break;
				}
				this.state = 557;
				this.getter();
				this.state = 558;
				this.match(JavaScriptParser.OpenParen);
				this.state = 559;
				this.match(JavaScriptParser.CloseParen);
				this.state = 560;
				this.functionBody();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 563;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 562;
					this.match(JavaScriptParser.Multiply);
					}
					break;
				}
				this.state = 566;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 60, this._ctx) ) {
				case 1:
					{
					this.state = 565;
					this.match(JavaScriptParser.Hashtag);
					}
					break;
				}
				this.state = 568;
				this.setter();
				this.state = 569;
				this.match(JavaScriptParser.OpenParen);
				this.state = 571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262688) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 2114049) !== 0)) {
					{
					this.state = 570;
					this.formalParameterList();
					}
				}

				this.state = 573;
				this.match(JavaScriptParser.CloseParen);
				this.state = 574;
				this.functionBody();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public formalParameterList(): FormalParameterListContext {
		let localctx: FormalParameterListContext = new FormalParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, JavaScriptParser.RULE_formalParameterList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 591;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
			case 9:
			case 98:
			case 107:
			case 112:
			case 119:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 578;
				this.formalParameterArg();
				this.state = 583;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 579;
						this.match(JavaScriptParser.Comma);
						this.state = 580;
						this.formalParameterArg();
						}
						}
					}
					this.state = 585;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 63, this._ctx);
				}
				this.state = 588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===13) {
					{
					this.state = 586;
					this.match(JavaScriptParser.Comma);
					this.state = 587;
					this.lastFormalParameterArg();
					}
				}

				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 590;
				this.lastFormalParameterArg();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public formalParameterArg(): FormalParameterArgContext {
		let localctx: FormalParameterArgContext = new FormalParameterArgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, JavaScriptParser.RULE_formalParameterArg);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 593;
			this.assignable();
			this.state = 596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 594;
				this.match(JavaScriptParser.Assign);
				this.state = 595;
				this.singleExpression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lastFormalParameterArg(): LastFormalParameterArgContext {
		let localctx: LastFormalParameterArgContext = new LastFormalParameterArgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, JavaScriptParser.RULE_lastFormalParameterArg);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 598;
			this.match(JavaScriptParser.Ellipsis);
			this.state = 599;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let localctx: FunctionBodyContext = new FunctionBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, JavaScriptParser.RULE_functionBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 601;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 603;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 602;
				this.sourceElements();
				}
				break;
			}
			this.state = 605;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sourceElements(): SourceElementsContext {
		let localctx: SourceElementsContext = new SourceElementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, JavaScriptParser.RULE_sourceElements);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 608;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 607;
					this.sourceElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 610;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 68, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let localctx: ArrayLiteralContext = new ArrayLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, JavaScriptParser.RULE_arrayLiteral);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			{
			this.state = 612;
			this.match(JavaScriptParser.OpenBracket);
			this.state = 613;
			this.elementList();
			this.state = 614;
			this.match(JavaScriptParser.CloseBracket);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public elementList(): ElementListContext {
		let localctx: ElementListContext = new ElementListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, JavaScriptParser.RULE_elementList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 619;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 616;
					this.match(JavaScriptParser.Comma);
					}
					}
				}
				this.state = 621;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 69, this._ctx);
			}
			this.state = 623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 66323120) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & 809650175) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 117602601) !== 0)) {
				{
				this.state = 622;
				this.arrayElement();
				}
			}

			this.state = 633;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 72, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 626;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 625;
						this.match(JavaScriptParser.Comma);
						}
						}
						this.state = 628;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la===13);
					this.state = 630;
					this.arrayElement();
					}
					}
				}
				this.state = 635;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 72, this._ctx);
			}
			this.state = 639;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 636;
				this.match(JavaScriptParser.Comma);
				}
				}
				this.state = 641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayElement(): ArrayElementContext {
		let localctx: ArrayElementContext = new ArrayElementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, JavaScriptParser.RULE_arrayElement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 643;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 642;
				this.match(JavaScriptParser.Ellipsis);
				}
			}

			this.state = 645;
			this.singleExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyAssignment(): PropertyAssignmentContext {
		let localctx: PropertyAssignmentContext = new PropertyAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, JavaScriptParser.RULE_propertyAssignment);
		let _la: number;
		try {
			this.state = 686;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				localctx = new PropertyExpressionAssignmentContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 647;
				this.propertyName();
				this.state = 648;
				this.match(JavaScriptParser.Colon);
				this.state = 649;
				this.singleExpression(0);
				}
				break;
			case 2:
				localctx = new ComputedPropertyExpressionAssignmentContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 651;
				this.match(JavaScriptParser.OpenBracket);
				this.state = 652;
				this.singleExpression(0);
				this.state = 653;
				this.match(JavaScriptParser.CloseBracket);
				this.state = 654;
				this.match(JavaScriptParser.Colon);
				this.state = 655;
				this.singleExpression(0);
				}
				break;
			case 3:
				localctx = new FunctionPropertyContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 658;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 657;
					this.match(JavaScriptParser.Async);
					}
					break;
				}
				this.state = 661;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 660;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 663;
				this.propertyName();
				this.state = 664;
				this.match(JavaScriptParser.OpenParen);
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262688) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 2114049) !== 0)) {
					{
					this.state = 665;
					this.formalParameterList();
					}
				}

				this.state = 668;
				this.match(JavaScriptParser.CloseParen);
				this.state = 669;
				this.functionBody();
				}
				break;
			case 4:
				localctx = new PropertyGetterContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 671;
				this.getter();
				this.state = 672;
				this.match(JavaScriptParser.OpenParen);
				this.state = 673;
				this.match(JavaScriptParser.CloseParen);
				this.state = 674;
				this.functionBody();
				}
				break;
			case 5:
				localctx = new PropertySetterContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 676;
				this.setter();
				this.state = 677;
				this.match(JavaScriptParser.OpenParen);
				this.state = 678;
				this.formalParameterArg();
				this.state = 679;
				this.match(JavaScriptParser.CloseParen);
				this.state = 680;
				this.functionBody();
				}
				break;
			case 6:
				localctx = new PropertyShorthandContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 683;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===18) {
					{
					this.state = 682;
					this.match(JavaScriptParser.Ellipsis);
					}
				}

				this.state = 685;
				this.singleExpression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public propertyName(): PropertyNameContext {
		let localctx: PropertyNameContext = new PropertyNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, JavaScriptParser.RULE_propertyName);
		try {
			this.state = 695;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 61:
			case 62:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 688;
				this.identifierName();
				}
				break;
			case 120:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 689;
				this.match(JavaScriptParser.StringLiteral);
				}
				break;
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 690;
				this.numericLiteral();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 691;
				this.match(JavaScriptParser.OpenBracket);
				this.state = 692;
				this.singleExpression(0);
				this.state = 693;
				this.match(JavaScriptParser.CloseBracket);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let localctx: ArgumentsContext = new ArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, JavaScriptParser.RULE_arguments);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 697;
			this.match(JavaScriptParser.OpenParen);
			this.state = 709;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 66323120) !== 0) || ((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & 809650175) !== 0) || ((((_la - 95)) & ~0x1F) === 0 && ((1 << (_la - 95)) & 117602601) !== 0)) {
				{
				this.state = 698;
				this.argument();
				this.state = 703;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 81, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 699;
						this.match(JavaScriptParser.Comma);
						this.state = 700;
						this.argument();
						}
						}
					}
					this.state = 705;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 81, this._ctx);
				}
				this.state = 707;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===13) {
					{
					this.state = 706;
					this.match(JavaScriptParser.Comma);
					}
				}

				}
			}

			this.state = 711;
			this.match(JavaScriptParser.CloseParen);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let localctx: ArgumentContext = new ArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, JavaScriptParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 713;
				this.match(JavaScriptParser.Ellipsis);
				}
			}

			this.state = 718;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 716;
				this.singleExpression(0);
				}
				break;
			case 2:
				{
				this.state = 717;
				this.identifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionSequence(): ExpressionSequenceContext {
		let localctx: ExpressionSequenceContext = new ExpressionSequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, JavaScriptParser.RULE_expressionSequence);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 720;
			this.singleExpression(0);
			this.state = 725;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 86, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 721;
					this.match(JavaScriptParser.Comma);
					this.state = 722;
					this.singleExpression(0);
					}
					}
				}
				this.state = 727;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 86, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public singleExpression(): SingleExpressionContext;
	public singleExpression(_p: number): SingleExpressionContext;
	// @RuleVersion(0)
	public singleExpression(_p?: number): SingleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: SingleExpressionContext = new SingleExpressionContext(this, this._ctx, _parentState);
		let _prevctx: SingleExpressionContext = localctx;
		let _startState: number = 114;
		this.enterRecursionRule(localctx, 114, JavaScriptParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 780;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				localctx = new FunctionExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 729;
				this.anonymousFunction();
				}
				break;
			case 2:
				{
				localctx = new ClassExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 730;
				this.match(JavaScriptParser.Class);
				this.state = 732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 2114049) !== 0)) {
					{
					this.state = 731;
					this.identifier();
					}
				}

				this.state = 734;
				this.classTail();
				}
				break;
			case 3:
				{
				localctx = new NewExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 735;
				this.match(JavaScriptParser.New);
				this.state = 736;
				this.singleExpression(0);
				this.state = 737;
				this.arguments();
				}
				break;
			case 4:
				{
				localctx = new NewExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 739;
				this.match(JavaScriptParser.New);
				this.state = 740;
				this.singleExpression(42);
				}
				break;
			case 5:
				{
				localctx = new MetaExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 741;
				this.match(JavaScriptParser.New);
				this.state = 742;
				this.match(JavaScriptParser.Dot);
				this.state = 743;
				this.identifier();
				}
				break;
			case 6:
				{
				localctx = new DeleteExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 744;
				this.match(JavaScriptParser.Delete);
				this.state = 745;
				this.singleExpression(37);
				}
				break;
			case 7:
				{
				localctx = new VoidExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 746;
				this.match(JavaScriptParser.Void);
				this.state = 747;
				this.singleExpression(36);
				}
				break;
			case 8:
				{
				localctx = new TypeofExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 748;
				this.match(JavaScriptParser.Typeof);
				this.state = 749;
				this.singleExpression(35);
				}
				break;
			case 9:
				{
				localctx = new PreIncrementExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 750;
				this.match(JavaScriptParser.PlusPlus);
				this.state = 751;
				this.singleExpression(34);
				}
				break;
			case 10:
				{
				localctx = new PreDecreaseExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 752;
				this.match(JavaScriptParser.MinusMinus);
				this.state = 753;
				this.singleExpression(33);
				}
				break;
			case 11:
				{
				localctx = new UnaryPlusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 754;
				this.match(JavaScriptParser.Plus);
				this.state = 755;
				this.singleExpression(32);
				}
				break;
			case 12:
				{
				localctx = new UnaryMinusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 756;
				this.match(JavaScriptParser.Minus);
				this.state = 757;
				this.singleExpression(31);
				}
				break;
			case 13:
				{
				localctx = new BitNotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 758;
				this.match(JavaScriptParser.BitNot);
				this.state = 759;
				this.singleExpression(30);
				}
				break;
			case 14:
				{
				localctx = new NotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 760;
				this.match(JavaScriptParser.Not);
				this.state = 761;
				this.singleExpression(29);
				}
				break;
			case 15:
				{
				localctx = new AwaitExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 762;
				this.match(JavaScriptParser.Await);
				this.state = 763;
				this.singleExpression(28);
				}
				break;
			case 16:
				{
				localctx = new ImportExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 764;
				this.match(JavaScriptParser.Import);
				this.state = 765;
				this.match(JavaScriptParser.OpenParen);
				this.state = 766;
				this.singleExpression(0);
				this.state = 767;
				this.match(JavaScriptParser.CloseParen);
				}
				break;
			case 17:
				{
				localctx = new YieldExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 769;
				this.yieldStatement();
				}
				break;
			case 18:
				{
				localctx = new ThisExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 770;
				this.match(JavaScriptParser.This);
				}
				break;
			case 19:
				{
				localctx = new IdentifierExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 771;
				this.identifier();
				}
				break;
			case 20:
				{
				localctx = new SuperExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 772;
				this.match(JavaScriptParser.Super);
				}
				break;
			case 21:
				{
				localctx = new LiteralExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 773;
				this.literal();
				}
				break;
			case 22:
				{
				localctx = new ArrayLiteralExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 774;
				this.arrayLiteral();
				}
				break;
			case 23:
				{
				localctx = new ObjectLiteralExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 775;
				this.objectLiteral();
				}
				break;
			case 24:
				{
				localctx = new ParenthesizedExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 776;
				this.match(JavaScriptParser.OpenParen);
				this.state = 777;
				this.expressionSequence();
				this.state = 778;
				this.match(JavaScriptParser.CloseParen);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 869;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 867;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
					case 1:
						{
						localctx = new OptionalChainExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 782;
						if (!(this.precpred(this._ctx, 46))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 46)");
						}
						this.state = 783;
						this.match(JavaScriptParser.QuestionMarkDot);
						this.state = 784;
						this.singleExpression(47);
						}
						break;
					case 2:
						{
						localctx = new PowerExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 785;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						this.state = 786;
						this.match(JavaScriptParser.Power);
						this.state = 787;
						this.singleExpression(27);
						}
						break;
					case 3:
						{
						localctx = new MultiplicativeExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 788;
						if (!(this.precpred(this._ctx, 26))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 26)");
						}
						this.state = 789;
						_la = this._input.LA(1);
						if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 469762048) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 790;
						this.singleExpression(27);
						}
						break;
					case 4:
						{
						localctx = new AdditiveExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 791;
						if (!(this.precpred(this._ctx, 25))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 25)");
						}
						this.state = 792;
						_la = this._input.LA(1);
						if(!(_la===22 || _la===23)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 793;
						this.singleExpression(26);
						}
						break;
					case 5:
						{
						localctx = new CoalesceExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 794;
						if (!(this.precpred(this._ctx, 24))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 24)");
						}
						this.state = 795;
						this.match(JavaScriptParser.NullCoalesce);
						this.state = 796;
						this.singleExpression(25);
						}
						break;
					case 6:
						{
						localctx = new BitShiftExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 797;
						if (!(this.precpred(this._ctx, 23))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 23)");
						}
						this.state = 798;
						_la = this._input.LA(1);
						if(!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 7) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 799;
						this.singleExpression(24);
						}
						break;
					case 7:
						{
						localctx = new RelationalExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 800;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 801;
						_la = this._input.LA(1);
						if(!(((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 15) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 802;
						this.singleExpression(23);
						}
						break;
					case 8:
						{
						localctx = new InstanceofExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 803;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 804;
						this.match(JavaScriptParser.Instanceof);
						this.state = 805;
						this.singleExpression(22);
						}
						break;
					case 9:
						{
						localctx = new InExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 806;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 807;
						this.match(JavaScriptParser.In);
						this.state = 808;
						this.singleExpression(21);
						}
						break;
					case 10:
						{
						localctx = new EqualityExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 809;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 810;
						_la = this._input.LA(1);
						if(!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 15) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 811;
						this.singleExpression(20);
						}
						break;
					case 11:
						{
						localctx = new BitAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 812;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 813;
						this.match(JavaScriptParser.BitAnd);
						this.state = 814;
						this.singleExpression(19);
						}
						break;
					case 12:
						{
						localctx = new BitXOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 815;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 816;
						this.match(JavaScriptParser.BitXOr);
						this.state = 817;
						this.singleExpression(18);
						}
						break;
					case 13:
						{
						localctx = new BitOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 818;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 819;
						this.match(JavaScriptParser.BitOr);
						this.state = 820;
						this.singleExpression(17);
						}
						break;
					case 14:
						{
						localctx = new LogicalAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 821;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 822;
						this.match(JavaScriptParser.And);
						this.state = 823;
						this.singleExpression(16);
						}
						break;
					case 15:
						{
						localctx = new LogicalOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 824;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 825;
						this.match(JavaScriptParser.Or);
						this.state = 826;
						this.singleExpression(15);
						}
						break;
					case 16:
						{
						localctx = new TernaryExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 827;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 828;
						this.match(JavaScriptParser.QuestionMark);
						this.state = 829;
						this.singleExpression(0);
						this.state = 830;
						this.match(JavaScriptParser.Colon);
						this.state = 831;
						this.singleExpression(14);
						}
						break;
					case 17:
						{
						localctx = new AssignmentExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 833;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 834;
						this.match(JavaScriptParser.Assign);
						this.state = 835;
						this.singleExpression(12);
						}
						break;
					case 18:
						{
						localctx = new AssignmentOperatorExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 836;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 837;
						this.assignmentOperator();
						this.state = 838;
						this.singleExpression(11);
						}
						break;
					case 19:
						{
						localctx = new MemberIndexExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 840;
						if (!(this.precpred(this._ctx, 45))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 45)");
						}
						this.state = 842;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===16) {
							{
							this.state = 841;
							this.match(JavaScriptParser.QuestionMarkDot);
							}
						}

						this.state = 844;
						this.match(JavaScriptParser.OpenBracket);
						this.state = 845;
						this.expressionSequence();
						this.state = 846;
						this.match(JavaScriptParser.CloseBracket);
						}
						break;
					case 20:
						{
						localctx = new MemberDotExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 848;
						if (!(this.precpred(this._ctx, 44))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 44)");
						}
						this.state = 850;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===15) {
							{
							this.state = 849;
							this.match(JavaScriptParser.QuestionMark);
							}
						}

						this.state = 852;
						this.match(JavaScriptParser.Dot);
						this.state = 854;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===31) {
							{
							this.state = 853;
							this.match(JavaScriptParser.Hashtag);
							}
						}

						this.state = 856;
						this.identifierName();
						}
						break;
					case 21:
						{
						localctx = new ArgumentsExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 857;
						if (!(this.precpred(this._ctx, 41))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 41)");
						}
						this.state = 858;
						this.arguments();
						}
						break;
					case 22:
						{
						localctx = new PostIncrementExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 859;
						if (!(this.precpred(this._ctx, 39))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 39)");
						}
						this.state = 860;
						if (!(this.notLineTerminator())) {
							throw this.createFailedPredicateException("this.notLineTerminator()");
						}
						this.state = 861;
						this.match(JavaScriptParser.PlusPlus);
						}
						break;
					case 23:
						{
						localctx = new PostDecreaseExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 862;
						if (!(this.precpred(this._ctx, 38))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 38)");
						}
						this.state = 863;
						if (!(this.notLineTerminator())) {
							throw this.createFailedPredicateException("this.notLineTerminator()");
						}
						this.state = 864;
						this.match(JavaScriptParser.MinusMinus);
						}
						break;
					case 24:
						{
						localctx = new TemplateStringExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_singleExpression);
						this.state = 865;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 866;
						this.templateStringLiteral();
						}
						break;
					}
					}
				}
				this.state = 871;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignable(): AssignableContext {
		let localctx: AssignableContext = new AssignableContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, JavaScriptParser.RULE_assignable);
		try {
			this.state = 875;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 98:
			case 107:
			case 112:
			case 119:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 872;
				this.identifier();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 873;
				this.arrayLiteral();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 874;
				this.objectLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public objectLiteral(): ObjectLiteralContext {
		let localctx: ObjectLiteralContext = new ObjectLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, JavaScriptParser.RULE_objectLiteral);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 877;
			this.match(JavaScriptParser.OpenBrace);
			this.state = 889;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				{
				this.state = 878;
				this.propertyAssignment();
				this.state = 883;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 95, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 879;
						this.match(JavaScriptParser.Comma);
						this.state = 880;
						this.propertyAssignment();
						}
						}
					}
					this.state = 885;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 95, this._ctx);
				}
				this.state = 887;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===13) {
					{
					this.state = 886;
					this.match(JavaScriptParser.Comma);
					}
				}

				}
				break;
			}
			this.state = 891;
			this.match(JavaScriptParser.CloseBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public anonymousFunction(): AnonymousFunctionContext {
		let localctx: AnonymousFunctionContext = new AnonymousFunctionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, JavaScriptParser.RULE_anonymousFunction);
		let _la: number;
		try {
			this.state = 914;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				localctx = new FunctionDeclContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 893;
				this.functionDeclaration();
				}
				break;
			case 2:
				localctx = new AnonymousFunctionDeclContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 895;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===107) {
					{
					this.state = 894;
					this.match(JavaScriptParser.Async);
					}
				}

				this.state = 897;
				this.match(JavaScriptParser.Function_);
				this.state = 899;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===26) {
					{
					this.state = 898;
					this.match(JavaScriptParser.Multiply);
					}
				}

				this.state = 901;
				this.match(JavaScriptParser.OpenParen);
				this.state = 903;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262688) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 2114049) !== 0)) {
					{
					this.state = 902;
					this.formalParameterList();
					}
				}

				this.state = 905;
				this.match(JavaScriptParser.CloseParen);
				this.state = 906;
				this.functionBody();
				}
				break;
			case 3:
				localctx = new ArrowFunctionContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 908;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 101, this._ctx) ) {
				case 1:
					{
					this.state = 907;
					this.match(JavaScriptParser.Async);
					}
					break;
				}
				this.state = 910;
				this.arrowFunctionParameters();
				this.state = 911;
				this.match(JavaScriptParser.ARROW);
				this.state = 912;
				this.arrowFunctionBody();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		let localctx: ArrowFunctionParametersContext = new ArrowFunctionParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, JavaScriptParser.RULE_arrowFunctionParameters);
		let _la: number;
		try {
			this.state = 922;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 98:
			case 107:
			case 112:
			case 119:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 916;
				this.identifier();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 917;
				this.match(JavaScriptParser.OpenParen);
				this.state = 919;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 262688) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 2114049) !== 0)) {
					{
					this.state = 918;
					this.formalParameterList();
					}
				}

				this.state = 921;
				this.match(JavaScriptParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		let localctx: ArrowFunctionBodyContext = new ArrowFunctionBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, JavaScriptParser.RULE_arrowFunctionBody);
		try {
			this.state = 926;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 924;
				this.singleExpression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 925;
				this.functionBody();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, JavaScriptParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 928;
			_la = this._input.LA(1);
			if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 4095) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, JavaScriptParser.RULE_literal);
		try {
			this.state = 937;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 61:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 930;
				this.match(JavaScriptParser.NullLiteral);
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 931;
				this.match(JavaScriptParser.BooleanLiteral);
				}
				break;
			case 120:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 932;
				this.match(JavaScriptParser.StringLiteral);
				}
				break;
			case 121:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 933;
				this.templateStringLiteral();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 934;
				this.match(JavaScriptParser.RegularExpressionLiteral);
				}
				break;
			case 63:
			case 64:
			case 65:
			case 66:
			case 67:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 935;
				this.numericLiteral();
				}
				break;
			case 68:
			case 69:
			case 70:
			case 71:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 936;
				this.bigintLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public templateStringLiteral(): TemplateStringLiteralContext {
		let localctx: TemplateStringLiteralContext = new TemplateStringLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, JavaScriptParser.RULE_templateStringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 939;
			this.match(JavaScriptParser.BackTick);
			this.state = 943;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===127 || _la===128) {
				{
				{
				this.state = 940;
				this.templateStringAtom();
				}
				}
				this.state = 945;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 946;
			this.match(JavaScriptParser.BackTick);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public templateStringAtom(): TemplateStringAtomContext {
		let localctx: TemplateStringAtomContext = new TemplateStringAtomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, JavaScriptParser.RULE_templateStringAtom);
		try {
			this.state = 953;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 128:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 948;
				this.match(JavaScriptParser.TemplateStringAtom);
				}
				break;
			case 127:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 949;
				this.match(JavaScriptParser.TemplateStringStartExpression);
				this.state = 950;
				this.singleExpression(0);
				this.state = 951;
				this.match(JavaScriptParser.TemplateCloseBrace);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let localctx: NumericLiteralContext = new NumericLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, JavaScriptParser.RULE_numericLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 955;
			_la = this._input.LA(1);
			if(!(((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & 31) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bigintLiteral(): BigintLiteralContext {
		let localctx: BigintLiteralContext = new BigintLiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, JavaScriptParser.RULE_bigintLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 957;
			_la = this._input.LA(1);
			if(!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 15) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public getter(): GetterContext {
		let localctx: GetterContext = new GetterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, JavaScriptParser.RULE_getter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 959;
			if (!(this.n("get"))) {
				throw this.createFailedPredicateException("this.n(\"get\")");
			}
			this.state = 960;
			this.identifier();
			this.state = 961;
			this.propertyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public setter(): SetterContext {
		let localctx: SetterContext = new SetterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, JavaScriptParser.RULE_setter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 963;
			if (!(this.n("set"))) {
				throw this.createFailedPredicateException("this.n(\"set\")");
			}
			this.state = 964;
			this.identifier();
			this.state = 965;
			this.propertyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifierName(): IdentifierNameContext {
		let localctx: IdentifierNameContext = new IdentifierNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, JavaScriptParser.RULE_identifierName);
		try {
			this.state = 969;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 967;
				this.identifier();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 968;
				this.reservedWord();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, JavaScriptParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 971;
			_la = this._input.LA(1);
			if(!(((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 2114049) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public reservedWord(): ReservedWordContext {
		let localctx: ReservedWordContext = new ReservedWordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, JavaScriptParser.RULE_reservedWord);
		try {
			this.state = 976;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 102:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 111:
			case 112:
			case 113:
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 973;
				this.keyword();
				}
				break;
			case 61:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 974;
				this.match(JavaScriptParser.NullLiteral);
				}
				break;
			case 62:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 975;
				this.match(JavaScriptParser.BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let localctx: KeywordContext = new KeywordContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, JavaScriptParser.RULE_keyword);
		try {
			this.state = 1024;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 72:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 978;
				this.match(JavaScriptParser.Break);
				}
				break;
			case 73:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 979;
				this.match(JavaScriptParser.Do);
				}
				break;
			case 74:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 980;
				this.match(JavaScriptParser.Instanceof);
				}
				break;
			case 75:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 981;
				this.match(JavaScriptParser.Typeof);
				}
				break;
			case 76:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 982;
				this.match(JavaScriptParser.Case);
				}
				break;
			case 77:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 983;
				this.match(JavaScriptParser.Else);
				}
				break;
			case 78:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 984;
				this.match(JavaScriptParser.New);
				}
				break;
			case 79:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 985;
				this.match(JavaScriptParser.Var);
				}
				break;
			case 80:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 986;
				this.match(JavaScriptParser.Catch);
				}
				break;
			case 81:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 987;
				this.match(JavaScriptParser.Finally);
				}
				break;
			case 82:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 988;
				this.match(JavaScriptParser.Return);
				}
				break;
			case 83:
				this.enterOuterAlt(localctx, 12);
				{
				this.state = 989;
				this.match(JavaScriptParser.Void);
				}
				break;
			case 84:
				this.enterOuterAlt(localctx, 13);
				{
				this.state = 990;
				this.match(JavaScriptParser.Continue);
				}
				break;
			case 85:
				this.enterOuterAlt(localctx, 14);
				{
				this.state = 991;
				this.match(JavaScriptParser.For);
				}
				break;
			case 86:
				this.enterOuterAlt(localctx, 15);
				{
				this.state = 992;
				this.match(JavaScriptParser.Switch);
				}
				break;
			case 87:
				this.enterOuterAlt(localctx, 16);
				{
				this.state = 993;
				this.match(JavaScriptParser.While);
				}
				break;
			case 88:
				this.enterOuterAlt(localctx, 17);
				{
				this.state = 994;
				this.match(JavaScriptParser.Debugger);
				}
				break;
			case 89:
				this.enterOuterAlt(localctx, 18);
				{
				this.state = 995;
				this.match(JavaScriptParser.Function_);
				}
				break;
			case 90:
				this.enterOuterAlt(localctx, 19);
				{
				this.state = 996;
				this.match(JavaScriptParser.This);
				}
				break;
			case 91:
				this.enterOuterAlt(localctx, 20);
				{
				this.state = 997;
				this.match(JavaScriptParser.With);
				}
				break;
			case 92:
				this.enterOuterAlt(localctx, 21);
				{
				this.state = 998;
				this.match(JavaScriptParser.Default);
				}
				break;
			case 93:
				this.enterOuterAlt(localctx, 22);
				{
				this.state = 999;
				this.match(JavaScriptParser.If);
				}
				break;
			case 94:
				this.enterOuterAlt(localctx, 23);
				{
				this.state = 1000;
				this.match(JavaScriptParser.Throw);
				}
				break;
			case 95:
				this.enterOuterAlt(localctx, 24);
				{
				this.state = 1001;
				this.match(JavaScriptParser.Delete);
				}
				break;
			case 96:
				this.enterOuterAlt(localctx, 25);
				{
				this.state = 1002;
				this.match(JavaScriptParser.In);
				}
				break;
			case 97:
				this.enterOuterAlt(localctx, 26);
				{
				this.state = 1003;
				this.match(JavaScriptParser.Try);
				}
				break;
			case 100:
				this.enterOuterAlt(localctx, 27);
				{
				this.state = 1004;
				this.match(JavaScriptParser.Class);
				}
				break;
			case 101:
				this.enterOuterAlt(localctx, 28);
				{
				this.state = 1005;
				this.match(JavaScriptParser.Enum);
				}
				break;
			case 102:
				this.enterOuterAlt(localctx, 29);
				{
				this.state = 1006;
				this.match(JavaScriptParser.Extends);
				}
				break;
			case 103:
				this.enterOuterAlt(localctx, 30);
				{
				this.state = 1007;
				this.match(JavaScriptParser.Super);
				}
				break;
			case 104:
				this.enterOuterAlt(localctx, 31);
				{
				this.state = 1008;
				this.match(JavaScriptParser.Const);
				}
				break;
			case 105:
				this.enterOuterAlt(localctx, 32);
				{
				this.state = 1009;
				this.match(JavaScriptParser.Export);
				}
				break;
			case 106:
				this.enterOuterAlt(localctx, 33);
				{
				this.state = 1010;
				this.match(JavaScriptParser.Import);
				}
				break;
			case 110:
				this.enterOuterAlt(localctx, 34);
				{
				this.state = 1011;
				this.match(JavaScriptParser.Implements);
				}
				break;
			case 111:
			case 112:
				this.enterOuterAlt(localctx, 35);
				{
				this.state = 1012;
				this.let_();
				}
				break;
			case 113:
				this.enterOuterAlt(localctx, 36);
				{
				this.state = 1013;
				this.match(JavaScriptParser.Private);
				}
				break;
			case 114:
				this.enterOuterAlt(localctx, 37);
				{
				this.state = 1014;
				this.match(JavaScriptParser.Public);
				}
				break;
			case 115:
				this.enterOuterAlt(localctx, 38);
				{
				this.state = 1015;
				this.match(JavaScriptParser.Interface);
				}
				break;
			case 116:
				this.enterOuterAlt(localctx, 39);
				{
				this.state = 1016;
				this.match(JavaScriptParser.Package);
				}
				break;
			case 117:
				this.enterOuterAlt(localctx, 40);
				{
				this.state = 1017;
				this.match(JavaScriptParser.Protected);
				}
				break;
			case 118:
				this.enterOuterAlt(localctx, 41);
				{
				this.state = 1018;
				this.match(JavaScriptParser.Static);
				}
				break;
			case 109:
				this.enterOuterAlt(localctx, 42);
				{
				this.state = 1019;
				this.match(JavaScriptParser.Yield);
				}
				break;
			case 107:
				this.enterOuterAlt(localctx, 43);
				{
				this.state = 1020;
				this.match(JavaScriptParser.Async);
				}
				break;
			case 108:
				this.enterOuterAlt(localctx, 44);
				{
				this.state = 1021;
				this.match(JavaScriptParser.Await);
				}
				break;
			case 99:
				this.enterOuterAlt(localctx, 45);
				{
				this.state = 1022;
				this.match(JavaScriptParser.From);
				}
				break;
			case 98:
				this.enterOuterAlt(localctx, 46);
				{
				this.state = 1023;
				this.match(JavaScriptParser.As);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public let_(): Let_Context {
		let localctx: Let_Context = new Let_Context(this, this._ctx, this.state);
		this.enterRule(localctx, 150, JavaScriptParser.RULE_let_);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1026;
			_la = this._input.LA(1);
			if(!(_la===111 || _la===112)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public eos(): EosContext {
		let localctx: EosContext = new EosContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, JavaScriptParser.RULE_eos);
		try {
			this.state = 1032;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1028;
				this.match(JavaScriptParser.SemiColon);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1029;
				this.match(JavaScriptParser.EOF);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1030;
				if (!(this.lineTerminatorAhead())) {
					throw this.createFailedPredicateException("this.lineTerminatorAhead()");
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1031;
				if (!(this.closeBrace())) {
					throw this.createFailedPredicateException("this.closeBrace()");
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 19:
			return this.expressionStatement_sempred(localctx as ExpressionStatementContext, predIndex);
		case 21:
			return this.iterationStatement_sempred(localctx as IterationStatementContext, predIndex);
		case 23:
			return this.continueStatement_sempred(localctx as ContinueStatementContext, predIndex);
		case 24:
			return this.breakStatement_sempred(localctx as BreakStatementContext, predIndex);
		case 25:
			return this.returnStatement_sempred(localctx as ReturnStatementContext, predIndex);
		case 26:
			return this.yieldStatement_sempred(localctx as YieldStatementContext, predIndex);
		case 34:
			return this.throwStatement_sempred(localctx as ThrowStatementContext, predIndex);
		case 42:
			return this.classElement_sempred(localctx as ClassElementContext, predIndex);
		case 57:
			return this.singleExpression_sempred(localctx as SingleExpressionContext, predIndex);
		case 69:
			return this.getter_sempred(localctx as GetterContext, predIndex);
		case 70:
			return this.setter_sempred(localctx as SetterContext, predIndex);
		case 76:
			return this.eos_sempred(localctx as EosContext, predIndex);
		}
		return true;
	}
	private expressionStatement_sempred(localctx: ExpressionStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.notOpenBraceAndNotFunction();
		}
		return true;
	}
	private iterationStatement_sempred(localctx: IterationStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.p("of");
		}
		return true;
	}
	private continueStatement_sempred(localctx: ContinueStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.notLineTerminator();
		}
		return true;
	}
	private breakStatement_sempred(localctx: BreakStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.notLineTerminator();
		}
		return true;
	}
	private returnStatement_sempred(localctx: ReturnStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return this.notLineTerminator();
		}
		return true;
	}
	private yieldStatement_sempred(localctx: YieldStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return this.notLineTerminator();
		}
		return true;
	}
	private throwStatement_sempred(localctx: ThrowStatementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.notLineTerminator();
		}
		return true;
	}
	private classElement_sempred(localctx: ClassElementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.n("static");
		}
		return true;
	}
	private singleExpression_sempred(localctx: SingleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 46);
		case 9:
			return this.precpred(this._ctx, 27);
		case 10:
			return this.precpred(this._ctx, 26);
		case 11:
			return this.precpred(this._ctx, 25);
		case 12:
			return this.precpred(this._ctx, 24);
		case 13:
			return this.precpred(this._ctx, 23);
		case 14:
			return this.precpred(this._ctx, 22);
		case 15:
			return this.precpred(this._ctx, 21);
		case 16:
			return this.precpred(this._ctx, 20);
		case 17:
			return this.precpred(this._ctx, 19);
		case 18:
			return this.precpred(this._ctx, 18);
		case 19:
			return this.precpred(this._ctx, 17);
		case 20:
			return this.precpred(this._ctx, 16);
		case 21:
			return this.precpred(this._ctx, 15);
		case 22:
			return this.precpred(this._ctx, 14);
		case 23:
			return this.precpred(this._ctx, 13);
		case 24:
			return this.precpred(this._ctx, 12);
		case 25:
			return this.precpred(this._ctx, 11);
		case 26:
			return this.precpred(this._ctx, 45);
		case 27:
			return this.precpred(this._ctx, 44);
		case 28:
			return this.precpred(this._ctx, 41);
		case 29:
			return this.precpred(this._ctx, 39);
		case 30:
			return this.notLineTerminator();
		case 31:
			return this.precpred(this._ctx, 38);
		case 32:
			return this.notLineTerminator();
		case 33:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}
	private getter_sempred(localctx: GetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 34:
			return this.n("get");
		}
		return true;
	}
	private setter_sempred(localctx: SetterContext, predIndex: number): boolean {
		switch (predIndex) {
		case 35:
			return this.n("set");
		}
		return true;
	}
	private eos_sempred(localctx: EosContext, predIndex: number): boolean {
		switch (predIndex) {
		case 36:
			return this.lineTerminatorAhead();
		case 37:
			return this.closeBrace();
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,128,1035,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,1,0,3,0,156,8,0,1,0,3,0,159,8,0,1,0,1,0,1,1,1,1,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
	2,3,2,185,8,2,1,3,1,3,3,3,189,8,3,1,3,1,3,1,4,4,4,194,8,4,11,4,12,4,195,
	1,5,1,5,1,5,1,6,3,6,202,8,6,1,6,1,6,3,6,206,8,6,1,6,1,6,1,6,1,6,1,6,3,6,
	213,8,6,1,7,1,7,1,7,1,7,5,7,219,8,7,10,7,12,7,222,9,7,1,7,1,7,3,7,226,8,
	7,3,7,228,8,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,3,9,237,8,9,1,9,1,9,3,9,241,8,
	9,1,10,1,10,1,10,1,11,1,11,1,11,3,11,249,8,11,1,12,1,12,1,12,3,12,254,8,
	12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,263,8,12,1,13,1,13,1,13,1,13,
	1,13,1,13,3,13,271,8,13,1,13,1,13,3,13,275,8,13,1,14,1,14,1,14,3,14,280,
	8,14,1,15,1,15,1,15,1,16,1,16,1,16,1,16,5,16,289,8,16,10,16,12,16,292,9,
	16,1,17,1,17,1,17,3,17,297,8,17,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,
	1,20,1,20,1,20,1,20,1,20,3,20,312,8,20,1,21,1,21,1,21,1,21,1,21,1,21,1,
	21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,332,8,21,
	1,21,1,21,3,21,336,8,21,1,21,1,21,3,21,340,8,21,1,21,1,21,1,21,1,21,1,21,
	1,21,3,21,348,8,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,357,8,21,1,21,
	1,21,1,21,3,21,362,8,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,370,8,21,1,22,
	1,22,1,22,3,22,375,8,22,1,23,1,23,1,23,3,23,380,8,23,1,23,1,23,1,24,1,24,
	1,24,3,24,387,8,24,1,24,1,24,1,25,1,25,1,25,3,25,394,8,25,1,25,1,25,1,26,
	1,26,1,26,3,26,401,8,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,
	28,1,28,1,28,1,28,1,28,1,29,1,29,3,29,419,8,29,1,29,1,29,3,29,423,8,29,
	3,29,425,8,29,1,29,1,29,1,30,4,30,430,8,30,11,30,12,30,431,1,31,1,31,1,
	31,1,31,3,31,438,8,31,1,32,1,32,1,32,3,32,443,8,32,1,33,1,33,1,33,1,33,
	1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,3,35,458,8,35,1,35,3,35,461,
	8,35,1,36,1,36,1,36,3,36,466,8,36,1,36,3,36,469,8,36,1,36,1,36,1,37,1,37,
	1,37,1,38,1,38,1,38,1,39,3,39,480,8,39,1,39,1,39,3,39,484,8,39,1,39,1,39,
	1,39,3,39,489,8,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,41,1,41,3,41,500,
	8,41,1,41,1,41,5,41,504,8,41,10,41,12,41,507,9,41,1,41,1,41,1,42,1,42,1,
	42,1,42,5,42,515,8,42,10,42,12,42,518,9,42,1,42,1,42,1,42,1,42,1,42,1,42,
	3,42,526,8,42,1,42,1,42,3,42,530,8,42,1,42,1,42,1,42,1,42,3,42,536,8,42,
	1,43,3,43,539,8,43,1,43,3,43,542,8,43,1,43,1,43,1,43,3,43,547,8,43,1,43,
	1,43,1,43,1,43,3,43,553,8,43,1,43,3,43,556,8,43,1,43,1,43,1,43,1,43,1,43,
	1,43,3,43,564,8,43,1,43,3,43,567,8,43,1,43,1,43,1,43,3,43,572,8,43,1,43,
	1,43,1,43,3,43,577,8,43,1,44,1,44,1,44,5,44,582,8,44,10,44,12,44,585,9,
	44,1,44,1,44,3,44,589,8,44,1,44,3,44,592,8,44,1,45,1,45,1,45,3,45,597,8,
	45,1,46,1,46,1,46,1,47,1,47,3,47,604,8,47,1,47,1,47,1,48,4,48,609,8,48,
	11,48,12,48,610,1,49,1,49,1,49,1,49,1,50,5,50,618,8,50,10,50,12,50,621,
	9,50,1,50,3,50,624,8,50,1,50,4,50,627,8,50,11,50,12,50,628,1,50,5,50,632,
	8,50,10,50,12,50,635,9,50,1,50,5,50,638,8,50,10,50,12,50,641,9,50,1,51,
	3,51,644,8,51,1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,
	52,1,52,3,52,659,8,52,1,52,3,52,662,8,52,1,52,1,52,1,52,3,52,667,8,52,1,
	52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,
	3,52,684,8,52,1,52,3,52,687,8,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,3,53,
	696,8,53,1,54,1,54,1,54,1,54,5,54,702,8,54,10,54,12,54,705,9,54,1,54,3,
	54,708,8,54,3,54,710,8,54,1,54,1,54,1,55,3,55,715,8,55,1,55,1,55,3,55,719,
	8,55,1,56,1,56,1,56,5,56,724,8,56,10,56,12,56,727,9,56,1,57,1,57,1,57,1,
	57,3,57,733,8,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,
	1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,
	57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,
	1,57,1,57,1,57,1,57,1,57,1,57,3,57,781,8,57,1,57,1,57,1,57,1,57,1,57,1,
	57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,
	1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,
	57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,
	1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,3,57,843,8,57,1,
	57,1,57,1,57,1,57,1,57,1,57,3,57,851,8,57,1,57,1,57,3,57,855,8,57,1,57,
	1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,5,57,868,8,57,10,57,12,
	57,871,9,57,1,58,1,58,1,58,3,58,876,8,58,1,59,1,59,1,59,1,59,5,59,882,8,
	59,10,59,12,59,885,9,59,1,59,3,59,888,8,59,3,59,890,8,59,1,59,1,59,1,60,
	1,60,3,60,896,8,60,1,60,1,60,3,60,900,8,60,1,60,1,60,3,60,904,8,60,1,60,
	1,60,1,60,3,60,909,8,60,1,60,1,60,1,60,1,60,3,60,915,8,60,1,61,1,61,1,61,
	3,61,920,8,61,1,61,3,61,923,8,61,1,62,1,62,3,62,927,8,62,1,63,1,63,1,64,
	1,64,1,64,1,64,1,64,1,64,1,64,3,64,938,8,64,1,65,1,65,5,65,942,8,65,10,
	65,12,65,945,9,65,1,65,1,65,1,66,1,66,1,66,1,66,1,66,3,66,954,8,66,1,67,
	1,67,1,68,1,68,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,1,71,1,71,3,71,970,
	8,71,1,72,1,72,1,73,1,73,1,73,3,73,977,8,73,1,74,1,74,1,74,1,74,1,74,1,
	74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,
	1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,
	74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,1,74,3,74,1025,8,74,
	1,75,1,75,1,76,1,76,1,76,1,76,3,76,1033,8,76,1,76,0,1,114,77,0,2,4,6,8,
	10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
	58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,
	104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,
	140,142,144,146,148,150,152,0,10,1,0,26,28,1,0,22,23,1,0,32,34,1,0,35,38,
	1,0,39,42,1,0,48,59,1,0,63,67,1,0,68,71,4,0,98,98,107,107,112,112,119,119,
	1,0,111,112,1201,0,155,1,0,0,0,2,162,1,0,0,0,4,184,1,0,0,0,6,186,1,0,0,
	0,8,193,1,0,0,0,10,197,1,0,0,0,12,212,1,0,0,0,14,214,1,0,0,0,16,231,1,0,
	0,0,18,236,1,0,0,0,20,242,1,0,0,0,22,245,1,0,0,0,24,262,1,0,0,0,26,274,
	1,0,0,0,28,279,1,0,0,0,30,281,1,0,0,0,32,284,1,0,0,0,34,293,1,0,0,0,36,
	298,1,0,0,0,38,300,1,0,0,0,40,304,1,0,0,0,42,369,1,0,0,0,44,374,1,0,0,0,
	46,376,1,0,0,0,48,383,1,0,0,0,50,390,1,0,0,0,52,397,1,0,0,0,54,404,1,0,
	0,0,56,410,1,0,0,0,58,416,1,0,0,0,60,429,1,0,0,0,62,433,1,0,0,0,64,439,
	1,0,0,0,66,444,1,0,0,0,68,448,1,0,0,0,70,453,1,0,0,0,72,462,1,0,0,0,74,
	472,1,0,0,0,76,475,1,0,0,0,78,479,1,0,0,0,80,493,1,0,0,0,82,499,1,0,0,0,
	84,535,1,0,0,0,86,576,1,0,0,0,88,591,1,0,0,0,90,593,1,0,0,0,92,598,1,0,
	0,0,94,601,1,0,0,0,96,608,1,0,0,0,98,612,1,0,0,0,100,619,1,0,0,0,102,643,
	1,0,0,0,104,686,1,0,0,0,106,695,1,0,0,0,108,697,1,0,0,0,110,714,1,0,0,0,
	112,720,1,0,0,0,114,780,1,0,0,0,116,875,1,0,0,0,118,877,1,0,0,0,120,914,
	1,0,0,0,122,922,1,0,0,0,124,926,1,0,0,0,126,928,1,0,0,0,128,937,1,0,0,0,
	130,939,1,0,0,0,132,953,1,0,0,0,134,955,1,0,0,0,136,957,1,0,0,0,138,959,
	1,0,0,0,140,963,1,0,0,0,142,969,1,0,0,0,144,971,1,0,0,0,146,976,1,0,0,0,
	148,1024,1,0,0,0,150,1026,1,0,0,0,152,1032,1,0,0,0,154,156,5,1,0,0,155,
	154,1,0,0,0,155,156,1,0,0,0,156,158,1,0,0,0,157,159,3,96,48,0,158,157,1,
	0,0,0,158,159,1,0,0,0,159,160,1,0,0,0,160,161,5,0,0,1,161,1,1,0,0,0,162,
	163,3,4,2,0,163,3,1,0,0,0,164,185,3,6,3,0,165,185,3,30,15,0,166,185,3,10,
	5,0,167,185,3,24,12,0,168,185,3,36,18,0,169,185,3,80,40,0,170,185,3,38,
	19,0,171,185,3,40,20,0,172,185,3,42,21,0,173,185,3,46,23,0,174,185,3,48,
	24,0,175,185,3,50,25,0,176,185,3,52,26,0,177,185,3,54,27,0,178,185,3,66,
	33,0,179,185,3,56,28,0,180,185,3,68,34,0,181,185,3,70,35,0,182,185,3,76,
	38,0,183,185,3,78,39,0,184,164,1,0,0,0,184,165,1,0,0,0,184,166,1,0,0,0,
	184,167,1,0,0,0,184,168,1,0,0,0,184,169,1,0,0,0,184,170,1,0,0,0,184,171,
	1,0,0,0,184,172,1,0,0,0,184,173,1,0,0,0,184,174,1,0,0,0,184,175,1,0,0,0,
	184,176,1,0,0,0,184,177,1,0,0,0,184,178,1,0,0,0,184,179,1,0,0,0,184,180,
	1,0,0,0,184,181,1,0,0,0,184,182,1,0,0,0,184,183,1,0,0,0,185,5,1,0,0,0,186,
	188,5,9,0,0,187,189,3,8,4,0,188,187,1,0,0,0,188,189,1,0,0,0,189,190,1,0,
	0,0,190,191,5,11,0,0,191,7,1,0,0,0,192,194,3,4,2,0,193,192,1,0,0,0,194,
	195,1,0,0,0,195,193,1,0,0,0,195,196,1,0,0,0,196,9,1,0,0,0,197,198,5,106,
	0,0,198,199,3,12,6,0,199,11,1,0,0,0,200,202,3,16,8,0,201,200,1,0,0,0,201,
	202,1,0,0,0,202,205,1,0,0,0,203,206,3,18,9,0,204,206,3,14,7,0,205,203,1,
	0,0,0,205,204,1,0,0,0,206,207,1,0,0,0,207,208,3,20,10,0,208,209,3,152,76,
	0,209,213,1,0,0,0,210,211,5,120,0,0,211,213,3,152,76,0,212,201,1,0,0,0,
	212,210,1,0,0,0,213,13,1,0,0,0,214,220,5,9,0,0,215,216,3,22,11,0,216,217,
	5,13,0,0,217,219,1,0,0,0,218,215,1,0,0,0,219,222,1,0,0,0,220,218,1,0,0,
	0,220,221,1,0,0,0,221,227,1,0,0,0,222,220,1,0,0,0,223,225,3,22,11,0,224,
	226,5,13,0,0,225,224,1,0,0,0,225,226,1,0,0,0,226,228,1,0,0,0,227,223,1,
	0,0,0,227,228,1,0,0,0,228,229,1,0,0,0,229,230,5,11,0,0,230,15,1,0,0,0,231,
	232,3,22,11,0,232,233,5,13,0,0,233,17,1,0,0,0,234,237,5,26,0,0,235,237,
	3,142,71,0,236,234,1,0,0,0,236,235,1,0,0,0,237,240,1,0,0,0,238,239,5,98,
	0,0,239,241,3,142,71,0,240,238,1,0,0,0,240,241,1,0,0,0,241,19,1,0,0,0,242,
	243,5,99,0,0,243,244,5,120,0,0,244,21,1,0,0,0,245,248,3,142,71,0,246,247,
	5,98,0,0,247,249,3,142,71,0,248,246,1,0,0,0,248,249,1,0,0,0,249,23,1,0,
	0,0,250,253,5,105,0,0,251,254,3,26,13,0,252,254,3,28,14,0,253,251,1,0,0,
	0,253,252,1,0,0,0,254,255,1,0,0,0,255,256,3,152,76,0,256,263,1,0,0,0,257,
	258,5,105,0,0,258,259,5,92,0,0,259,260,3,114,57,0,260,261,3,152,76,0,261,
	263,1,0,0,0,262,250,1,0,0,0,262,257,1,0,0,0,263,25,1,0,0,0,264,265,3,18,
	9,0,265,266,3,20,10,0,266,267,3,152,76,0,267,275,1,0,0,0,268,270,3,14,7,
	0,269,271,3,20,10,0,270,269,1,0,0,0,270,271,1,0,0,0,271,272,1,0,0,0,272,
	273,3,152,76,0,273,275,1,0,0,0,274,264,1,0,0,0,274,268,1,0,0,0,275,27,1,
	0,0,0,276,280,3,30,15,0,277,280,3,80,40,0,278,280,3,78,39,0,279,276,1,0,
	0,0,279,277,1,0,0,0,279,278,1,0,0,0,280,29,1,0,0,0,281,282,3,32,16,0,282,
	283,3,152,76,0,283,31,1,0,0,0,284,285,3,44,22,0,285,290,3,34,17,0,286,287,
	5,13,0,0,287,289,3,34,17,0,288,286,1,0,0,0,289,292,1,0,0,0,290,288,1,0,
	0,0,290,291,1,0,0,0,291,33,1,0,0,0,292,290,1,0,0,0,293,296,3,116,58,0,294,
	295,5,14,0,0,295,297,3,114,57,0,296,294,1,0,0,0,296,297,1,0,0,0,297,35,
	1,0,0,0,298,299,5,12,0,0,299,37,1,0,0,0,300,301,4,19,0,0,301,302,3,112,
	56,0,302,303,3,152,76,0,303,39,1,0,0,0,304,305,5,93,0,0,305,306,5,7,0,0,
	306,307,3,112,56,0,307,308,5,8,0,0,308,311,3,4,2,0,309,310,5,77,0,0,310,
	312,3,4,2,0,311,309,1,0,0,0,311,312,1,0,0,0,312,41,1,0,0,0,313,314,5,73,
	0,0,314,315,3,4,2,0,315,316,5,87,0,0,316,317,5,7,0,0,317,318,3,112,56,0,
	318,319,5,8,0,0,319,320,3,152,76,0,320,370,1,0,0,0,321,322,5,87,0,0,322,
	323,5,7,0,0,323,324,3,112,56,0,324,325,5,8,0,0,325,326,3,4,2,0,326,370,
	1,0,0,0,327,328,5,85,0,0,328,331,5,7,0,0,329,332,3,112,56,0,330,332,3,32,
	16,0,331,329,1,0,0,0,331,330,1,0,0,0,331,332,1,0,0,0,332,333,1,0,0,0,333,
	335,5,12,0,0,334,336,3,112,56,0,335,334,1,0,0,0,335,336,1,0,0,0,336,337,
	1,0,0,0,337,339,5,12,0,0,338,340,3,112,56,0,339,338,1,0,0,0,339,340,1,0,
	0,0,340,341,1,0,0,0,341,342,5,8,0,0,342,370,3,4,2,0,343,344,5,85,0,0,344,
	347,5,7,0,0,345,348,3,114,57,0,346,348,3,32,16,0,347,345,1,0,0,0,347,346,
	1,0,0,0,348,349,1,0,0,0,349,350,5,96,0,0,350,351,3,112,56,0,351,352,5,8,
	0,0,352,353,3,4,2,0,353,370,1,0,0,0,354,356,5,85,0,0,355,357,5,108,0,0,
	356,355,1,0,0,0,356,357,1,0,0,0,357,358,1,0,0,0,358,361,5,7,0,0,359,362,
	3,114,57,0,360,362,3,32,16,0,361,359,1,0,0,0,361,360,1,0,0,0,362,363,1,
	0,0,0,363,364,3,144,72,0,364,365,4,21,1,0,365,366,3,112,56,0,366,367,5,
	8,0,0,367,368,3,4,2,0,368,370,1,0,0,0,369,313,1,0,0,0,369,321,1,0,0,0,369,
	327,1,0,0,0,369,343,1,0,0,0,369,354,1,0,0,0,370,43,1,0,0,0,371,375,5,79,
	0,0,372,375,3,150,75,0,373,375,5,104,0,0,374,371,1,0,0,0,374,372,1,0,0,
	0,374,373,1,0,0,0,375,45,1,0,0,0,376,379,5,84,0,0,377,378,4,23,2,0,378,
	380,3,144,72,0,379,377,1,0,0,0,379,380,1,0,0,0,380,381,1,0,0,0,381,382,
	3,152,76,0,382,47,1,0,0,0,383,386,5,72,0,0,384,385,4,24,3,0,385,387,3,144,
	72,0,386,384,1,0,0,0,386,387,1,0,0,0,387,388,1,0,0,0,388,389,3,152,76,0,
	389,49,1,0,0,0,390,393,5,82,0,0,391,392,4,25,4,0,392,394,3,112,56,0,393,
	391,1,0,0,0,393,394,1,0,0,0,394,395,1,0,0,0,395,396,3,152,76,0,396,51,1,
	0,0,0,397,400,5,109,0,0,398,399,4,26,5,0,399,401,3,112,56,0,400,398,1,0,
	0,0,400,401,1,0,0,0,401,402,1,0,0,0,402,403,3,152,76,0,403,53,1,0,0,0,404,
	405,5,91,0,0,405,406,5,7,0,0,406,407,3,112,56,0,407,408,5,8,0,0,408,409,
	3,4,2,0,409,55,1,0,0,0,410,411,5,86,0,0,411,412,5,7,0,0,412,413,3,112,56,
	0,413,414,5,8,0,0,414,415,3,58,29,0,415,57,1,0,0,0,416,418,5,9,0,0,417,
	419,3,60,30,0,418,417,1,0,0,0,418,419,1,0,0,0,419,424,1,0,0,0,420,422,3,
	64,32,0,421,423,3,60,30,0,422,421,1,0,0,0,422,423,1,0,0,0,423,425,1,0,0,
	0,424,420,1,0,0,0,424,425,1,0,0,0,425,426,1,0,0,0,426,427,5,11,0,0,427,
	59,1,0,0,0,428,430,3,62,31,0,429,428,1,0,0,0,430,431,1,0,0,0,431,429,1,
	0,0,0,431,432,1,0,0,0,432,61,1,0,0,0,433,434,5,76,0,0,434,435,3,112,56,
	0,435,437,5,17,0,0,436,438,3,8,4,0,437,436,1,0,0,0,437,438,1,0,0,0,438,
	63,1,0,0,0,439,440,5,92,0,0,440,442,5,17,0,0,441,443,3,8,4,0,442,441,1,
	0,0,0,442,443,1,0,0,0,443,65,1,0,0,0,444,445,3,144,72,0,445,446,5,17,0,
	0,446,447,3,4,2,0,447,67,1,0,0,0,448,449,5,94,0,0,449,450,4,34,6,0,450,
	451,3,112,56,0,451,452,3,152,76,0,452,69,1,0,0,0,453,454,5,97,0,0,454,460,
	3,6,3,0,455,457,3,72,36,0,456,458,3,74,37,0,457,456,1,0,0,0,457,458,1,0,
	0,0,458,461,1,0,0,0,459,461,3,74,37,0,460,455,1,0,0,0,460,459,1,0,0,0,461,
	71,1,0,0,0,462,468,5,80,0,0,463,465,5,7,0,0,464,466,3,116,58,0,465,464,
	1,0,0,0,465,466,1,0,0,0,466,467,1,0,0,0,467,469,5,8,0,0,468,463,1,0,0,0,
	468,469,1,0,0,0,469,470,1,0,0,0,470,471,3,6,3,0,471,73,1,0,0,0,472,473,
	5,81,0,0,473,474,3,6,3,0,474,75,1,0,0,0,475,476,5,88,0,0,476,477,3,152,
	76,0,477,77,1,0,0,0,478,480,5,107,0,0,479,478,1,0,0,0,479,480,1,0,0,0,480,
	481,1,0,0,0,481,483,5,89,0,0,482,484,5,26,0,0,483,482,1,0,0,0,483,484,1,
	0,0,0,484,485,1,0,0,0,485,486,3,144,72,0,486,488,5,7,0,0,487,489,3,88,44,
	0,488,487,1,0,0,0,488,489,1,0,0,0,489,490,1,0,0,0,490,491,5,8,0,0,491,492,
	3,94,47,0,492,79,1,0,0,0,493,494,5,100,0,0,494,495,3,144,72,0,495,496,3,
	82,41,0,496,81,1,0,0,0,497,498,5,102,0,0,498,500,3,114,57,0,499,497,1,0,
	0,0,499,500,1,0,0,0,500,501,1,0,0,0,501,505,5,9,0,0,502,504,3,84,42,0,503,
	502,1,0,0,0,504,507,1,0,0,0,505,503,1,0,0,0,505,506,1,0,0,0,506,508,1,0,
	0,0,507,505,1,0,0,0,508,509,5,11,0,0,509,83,1,0,0,0,510,515,5,118,0,0,511,
	512,4,42,7,0,512,515,3,144,72,0,513,515,5,107,0,0,514,510,1,0,0,0,514,511,
	1,0,0,0,514,513,1,0,0,0,515,518,1,0,0,0,516,514,1,0,0,0,516,517,1,0,0,0,
	517,525,1,0,0,0,518,516,1,0,0,0,519,526,3,86,43,0,520,521,3,116,58,0,521,
	522,5,14,0,0,522,523,3,118,59,0,523,524,5,12,0,0,524,526,1,0,0,0,525,519,
	1,0,0,0,525,520,1,0,0,0,526,536,1,0,0,0,527,536,3,36,18,0,528,530,5,31,
	0,0,529,528,1,0,0,0,529,530,1,0,0,0,530,531,1,0,0,0,531,532,3,106,53,0,
	532,533,5,14,0,0,533,534,3,114,57,0,534,536,1,0,0,0,535,516,1,0,0,0,535,
	527,1,0,0,0,535,529,1,0,0,0,536,85,1,0,0,0,537,539,5,26,0,0,538,537,1,0,
	0,0,538,539,1,0,0,0,539,541,1,0,0,0,540,542,5,31,0,0,541,540,1,0,0,0,541,
	542,1,0,0,0,542,543,1,0,0,0,543,544,3,106,53,0,544,546,5,7,0,0,545,547,
	3,88,44,0,546,545,1,0,0,0,546,547,1,0,0,0,547,548,1,0,0,0,548,549,5,8,0,
	0,549,550,3,94,47,0,550,577,1,0,0,0,551,553,5,26,0,0,552,551,1,0,0,0,552,
	553,1,0,0,0,553,555,1,0,0,0,554,556,5,31,0,0,555,554,1,0,0,0,555,556,1,
	0,0,0,556,557,1,0,0,0,557,558,3,138,69,0,558,559,5,7,0,0,559,560,5,8,0,
	0,560,561,3,94,47,0,561,577,1,0,0,0,562,564,5,26,0,0,563,562,1,0,0,0,563,
	564,1,0,0,0,564,566,1,0,0,0,565,567,5,31,0,0,566,565,1,0,0,0,566,567,1,
	0,0,0,567,568,1,0,0,0,568,569,3,140,70,0,569,571,5,7,0,0,570,572,3,88,44,
	0,571,570,1,0,0,0,571,572,1,0,0,0,572,573,1,0,0,0,573,574,5,8,0,0,574,575,
	3,94,47,0,575,577,1,0,0,0,576,538,1,0,0,0,576,552,1,0,0,0,576,563,1,0,0,
	0,577,87,1,0,0,0,578,583,3,90,45,0,579,580,5,13,0,0,580,582,3,90,45,0,581,
	579,1,0,0,0,582,585,1,0,0,0,583,581,1,0,0,0,583,584,1,0,0,0,584,588,1,0,
	0,0,585,583,1,0,0,0,586,587,5,13,0,0,587,589,3,92,46,0,588,586,1,0,0,0,
	588,589,1,0,0,0,589,592,1,0,0,0,590,592,3,92,46,0,591,578,1,0,0,0,591,590,
	1,0,0,0,592,89,1,0,0,0,593,596,3,116,58,0,594,595,5,14,0,0,595,597,3,114,
	57,0,596,594,1,0,0,0,596,597,1,0,0,0,597,91,1,0,0,0,598,599,5,18,0,0,599,
	600,3,114,57,0,600,93,1,0,0,0,601,603,5,9,0,0,602,604,3,96,48,0,603,602,
	1,0,0,0,603,604,1,0,0,0,604,605,1,0,0,0,605,606,5,11,0,0,606,95,1,0,0,0,
	607,609,3,2,1,0,608,607,1,0,0,0,609,610,1,0,0,0,610,608,1,0,0,0,610,611,
	1,0,0,0,611,97,1,0,0,0,612,613,5,5,0,0,613,614,3,100,50,0,614,615,5,6,0,
	0,615,99,1,0,0,0,616,618,5,13,0,0,617,616,1,0,0,0,618,621,1,0,0,0,619,617,
	1,0,0,0,619,620,1,0,0,0,620,623,1,0,0,0,621,619,1,0,0,0,622,624,3,102,51,
	0,623,622,1,0,0,0,623,624,1,0,0,0,624,633,1,0,0,0,625,627,5,13,0,0,626,
	625,1,0,0,0,627,628,1,0,0,0,628,626,1,0,0,0,628,629,1,0,0,0,629,630,1,0,
	0,0,630,632,3,102,51,0,631,626,1,0,0,0,632,635,1,0,0,0,633,631,1,0,0,0,
	633,634,1,0,0,0,634,639,1,0,0,0,635,633,1,0,0,0,636,638,5,13,0,0,637,636,
	1,0,0,0,638,641,1,0,0,0,639,637,1,0,0,0,639,640,1,0,0,0,640,101,1,0,0,0,
	641,639,1,0,0,0,642,644,5,18,0,0,643,642,1,0,0,0,643,644,1,0,0,0,644,645,
	1,0,0,0,645,646,3,114,57,0,646,103,1,0,0,0,647,648,3,106,53,0,648,649,5,
	17,0,0,649,650,3,114,57,0,650,687,1,0,0,0,651,652,5,5,0,0,652,653,3,114,
	57,0,653,654,5,6,0,0,654,655,5,17,0,0,655,656,3,114,57,0,656,687,1,0,0,
	0,657,659,5,107,0,0,658,657,1,0,0,0,658,659,1,0,0,0,659,661,1,0,0,0,660,
	662,5,26,0,0,661,660,1,0,0,0,661,662,1,0,0,0,662,663,1,0,0,0,663,664,3,
	106,53,0,664,666,5,7,0,0,665,667,3,88,44,0,666,665,1,0,0,0,666,667,1,0,
	0,0,667,668,1,0,0,0,668,669,5,8,0,0,669,670,3,94,47,0,670,687,1,0,0,0,671,
	672,3,138,69,0,672,673,5,7,0,0,673,674,5,8,0,0,674,675,3,94,47,0,675,687,
	1,0,0,0,676,677,3,140,70,0,677,678,5,7,0,0,678,679,3,90,45,0,679,680,5,
	8,0,0,680,681,3,94,47,0,681,687,1,0,0,0,682,684,5,18,0,0,683,682,1,0,0,
	0,683,684,1,0,0,0,684,685,1,0,0,0,685,687,3,114,57,0,686,647,1,0,0,0,686,
	651,1,0,0,0,686,658,1,0,0,0,686,671,1,0,0,0,686,676,1,0,0,0,686,683,1,0,
	0,0,687,105,1,0,0,0,688,696,3,142,71,0,689,696,5,120,0,0,690,696,3,134,
	67,0,691,692,5,5,0,0,692,693,3,114,57,0,693,694,5,6,0,0,694,696,1,0,0,0,
	695,688,1,0,0,0,695,689,1,0,0,0,695,690,1,0,0,0,695,691,1,0,0,0,696,107,
	1,0,0,0,697,709,5,7,0,0,698,703,3,110,55,0,699,700,5,13,0,0,700,702,3,110,
	55,0,701,699,1,0,0,0,702,705,1,0,0,0,703,701,1,0,0,0,703,704,1,0,0,0,704,
	707,1,0,0,0,705,703,1,0,0,0,706,708,5,13,0,0,707,706,1,0,0,0,707,708,1,
	0,0,0,708,710,1,0,0,0,709,698,1,0,0,0,709,710,1,0,0,0,710,711,1,0,0,0,711,
	712,5,8,0,0,712,109,1,0,0,0,713,715,5,18,0,0,714,713,1,0,0,0,714,715,1,
	0,0,0,715,718,1,0,0,0,716,719,3,114,57,0,717,719,3,144,72,0,718,716,1,0,
	0,0,718,717,1,0,0,0,719,111,1,0,0,0,720,725,3,114,57,0,721,722,5,13,0,0,
	722,724,3,114,57,0,723,721,1,0,0,0,724,727,1,0,0,0,725,723,1,0,0,0,725,
	726,1,0,0,0,726,113,1,0,0,0,727,725,1,0,0,0,728,729,6,57,-1,0,729,781,3,
	120,60,0,730,732,5,100,0,0,731,733,3,144,72,0,732,731,1,0,0,0,732,733,1,
	0,0,0,733,734,1,0,0,0,734,781,3,82,41,0,735,736,5,78,0,0,736,737,3,114,
	57,0,737,738,3,108,54,0,738,781,1,0,0,0,739,740,5,78,0,0,740,781,3,114,
	57,42,741,742,5,78,0,0,742,743,5,19,0,0,743,781,3,144,72,0,744,745,5,95,
	0,0,745,781,3,114,57,37,746,747,5,83,0,0,747,781,3,114,57,36,748,749,5,
	75,0,0,749,781,3,114,57,35,750,751,5,20,0,0,751,781,3,114,57,34,752,753,
	5,21,0,0,753,781,3,114,57,33,754,755,5,22,0,0,755,781,3,114,57,32,756,757,
	5,23,0,0,757,781,3,114,57,31,758,759,5,24,0,0,759,781,3,114,57,30,760,761,
	5,25,0,0,761,781,3,114,57,29,762,763,5,108,0,0,763,781,3,114,57,28,764,
	765,5,106,0,0,765,766,5,7,0,0,766,767,3,114,57,0,767,768,5,8,0,0,768,781,
	1,0,0,0,769,781,3,52,26,0,770,781,5,90,0,0,771,781,3,144,72,0,772,781,5,
	103,0,0,773,781,3,128,64,0,774,781,3,98,49,0,775,781,3,118,59,0,776,777,
	5,7,0,0,777,778,3,112,56,0,778,779,5,8,0,0,779,781,1,0,0,0,780,728,1,0,
	0,0,780,730,1,0,0,0,780,735,1,0,0,0,780,739,1,0,0,0,780,741,1,0,0,0,780,
	744,1,0,0,0,780,746,1,0,0,0,780,748,1,0,0,0,780,750,1,0,0,0,780,752,1,0,
	0,0,780,754,1,0,0,0,780,756,1,0,0,0,780,758,1,0,0,0,780,760,1,0,0,0,780,
	762,1,0,0,0,780,764,1,0,0,0,780,769,1,0,0,0,780,770,1,0,0,0,780,771,1,0,
	0,0,780,772,1,0,0,0,780,773,1,0,0,0,780,774,1,0,0,0,780,775,1,0,0,0,780,
	776,1,0,0,0,781,869,1,0,0,0,782,783,10,46,0,0,783,784,5,16,0,0,784,868,
	3,114,57,47,785,786,10,27,0,0,786,787,5,29,0,0,787,868,3,114,57,27,788,
	789,10,26,0,0,789,790,7,0,0,0,790,868,3,114,57,27,791,792,10,25,0,0,792,
	793,7,1,0,0,793,868,3,114,57,26,794,795,10,24,0,0,795,796,5,30,0,0,796,
	868,3,114,57,25,797,798,10,23,0,0,798,799,7,2,0,0,799,868,3,114,57,24,800,
	801,10,22,0,0,801,802,7,3,0,0,802,868,3,114,57,23,803,804,10,21,0,0,804,
	805,5,74,0,0,805,868,3,114,57,22,806,807,10,20,0,0,807,808,5,96,0,0,808,
	868,3,114,57,21,809,810,10,19,0,0,810,811,7,4,0,0,811,868,3,114,57,20,812,
	813,10,18,0,0,813,814,5,43,0,0,814,868,3,114,57,19,815,816,10,17,0,0,816,
	817,5,44,0,0,817,868,3,114,57,18,818,819,10,16,0,0,819,820,5,45,0,0,820,
	868,3,114,57,17,821,822,10,15,0,0,822,823,5,46,0,0,823,868,3,114,57,16,
	824,825,10,14,0,0,825,826,5,47,0,0,826,868,3,114,57,15,827,828,10,13,0,
	0,828,829,5,15,0,0,829,830,3,114,57,0,830,831,5,17,0,0,831,832,3,114,57,
	14,832,868,1,0,0,0,833,834,10,12,0,0,834,835,5,14,0,0,835,868,3,114,57,
	12,836,837,10,11,0,0,837,838,3,126,63,0,838,839,3,114,57,11,839,868,1,0,
	0,0,840,842,10,45,0,0,841,843,5,16,0,0,842,841,1,0,0,0,842,843,1,0,0,0,
	843,844,1,0,0,0,844,845,5,5,0,0,845,846,3,112,56,0,846,847,5,6,0,0,847,
	868,1,0,0,0,848,850,10,44,0,0,849,851,5,15,0,0,850,849,1,0,0,0,850,851,
	1,0,0,0,851,852,1,0,0,0,852,854,5,19,0,0,853,855,5,31,0,0,854,853,1,0,0,
	0,854,855,1,0,0,0,855,856,1,0,0,0,856,868,3,142,71,0,857,858,10,41,0,0,
	858,868,3,108,54,0,859,860,10,39,0,0,860,861,4,57,30,0,861,868,5,20,0,0,
	862,863,10,38,0,0,863,864,4,57,32,0,864,868,5,21,0,0,865,866,10,9,0,0,866,
	868,3,130,65,0,867,782,1,0,0,0,867,785,1,0,0,0,867,788,1,0,0,0,867,791,
	1,0,0,0,867,794,1,0,0,0,867,797,1,0,0,0,867,800,1,0,0,0,867,803,1,0,0,0,
	867,806,1,0,0,0,867,809,1,0,0,0,867,812,1,0,0,0,867,815,1,0,0,0,867,818,
	1,0,0,0,867,821,1,0,0,0,867,824,1,0,0,0,867,827,1,0,0,0,867,833,1,0,0,0,
	867,836,1,0,0,0,867,840,1,0,0,0,867,848,1,0,0,0,867,857,1,0,0,0,867,859,
	1,0,0,0,867,862,1,0,0,0,867,865,1,0,0,0,868,871,1,0,0,0,869,867,1,0,0,0,
	869,870,1,0,0,0,870,115,1,0,0,0,871,869,1,0,0,0,872,876,3,144,72,0,873,
	876,3,98,49,0,874,876,3,118,59,0,875,872,1,0,0,0,875,873,1,0,0,0,875,874,
	1,0,0,0,876,117,1,0,0,0,877,889,5,9,0,0,878,883,3,104,52,0,879,880,5,13,
	0,0,880,882,3,104,52,0,881,879,1,0,0,0,882,885,1,0,0,0,883,881,1,0,0,0,
	883,884,1,0,0,0,884,887,1,0,0,0,885,883,1,0,0,0,886,888,5,13,0,0,887,886,
	1,0,0,0,887,888,1,0,0,0,888,890,1,0,0,0,889,878,1,0,0,0,889,890,1,0,0,0,
	890,891,1,0,0,0,891,892,5,11,0,0,892,119,1,0,0,0,893,915,3,78,39,0,894,
	896,5,107,0,0,895,894,1,0,0,0,895,896,1,0,0,0,896,897,1,0,0,0,897,899,5,
	89,0,0,898,900,5,26,0,0,899,898,1,0,0,0,899,900,1,0,0,0,900,901,1,0,0,0,
	901,903,5,7,0,0,902,904,3,88,44,0,903,902,1,0,0,0,903,904,1,0,0,0,904,905,
	1,0,0,0,905,906,5,8,0,0,906,915,3,94,47,0,907,909,5,107,0,0,908,907,1,0,
	0,0,908,909,1,0,0,0,909,910,1,0,0,0,910,911,3,122,61,0,911,912,5,60,0,0,
	912,913,3,124,62,0,913,915,1,0,0,0,914,893,1,0,0,0,914,895,1,0,0,0,914,
	908,1,0,0,0,915,121,1,0,0,0,916,923,3,144,72,0,917,919,5,7,0,0,918,920,
	3,88,44,0,919,918,1,0,0,0,919,920,1,0,0,0,920,921,1,0,0,0,921,923,5,8,0,
	0,922,916,1,0,0,0,922,917,1,0,0,0,923,123,1,0,0,0,924,927,3,114,57,0,925,
	927,3,94,47,0,926,924,1,0,0,0,926,925,1,0,0,0,927,125,1,0,0,0,928,929,7,
	5,0,0,929,127,1,0,0,0,930,938,5,61,0,0,931,938,5,62,0,0,932,938,5,120,0,
	0,933,938,3,130,65,0,934,938,5,4,0,0,935,938,3,134,67,0,936,938,3,136,68,
	0,937,930,1,0,0,0,937,931,1,0,0,0,937,932,1,0,0,0,937,933,1,0,0,0,937,934,
	1,0,0,0,937,935,1,0,0,0,937,936,1,0,0,0,938,129,1,0,0,0,939,943,5,121,0,
	0,940,942,3,132,66,0,941,940,1,0,0,0,942,945,1,0,0,0,943,941,1,0,0,0,943,
	944,1,0,0,0,944,946,1,0,0,0,945,943,1,0,0,0,946,947,5,121,0,0,947,131,1,
	0,0,0,948,954,5,128,0,0,949,950,5,127,0,0,950,951,3,114,57,0,951,952,5,
	10,0,0,952,954,1,0,0,0,953,948,1,0,0,0,953,949,1,0,0,0,954,133,1,0,0,0,
	955,956,7,6,0,0,956,135,1,0,0,0,957,958,7,7,0,0,958,137,1,0,0,0,959,960,
	4,69,34,0,960,961,3,144,72,0,961,962,3,106,53,0,962,139,1,0,0,0,963,964,
	4,70,35,0,964,965,3,144,72,0,965,966,3,106,53,0,966,141,1,0,0,0,967,970,
	3,144,72,0,968,970,3,146,73,0,969,967,1,0,0,0,969,968,1,0,0,0,970,143,1,
	0,0,0,971,972,7,8,0,0,972,145,1,0,0,0,973,977,3,148,74,0,974,977,5,61,0,
	0,975,977,5,62,0,0,976,973,1,0,0,0,976,974,1,0,0,0,976,975,1,0,0,0,977,
	147,1,0,0,0,978,1025,5,72,0,0,979,1025,5,73,0,0,980,1025,5,74,0,0,981,1025,
	5,75,0,0,982,1025,5,76,0,0,983,1025,5,77,0,0,984,1025,5,78,0,0,985,1025,
	5,79,0,0,986,1025,5,80,0,0,987,1025,5,81,0,0,988,1025,5,82,0,0,989,1025,
	5,83,0,0,990,1025,5,84,0,0,991,1025,5,85,0,0,992,1025,5,86,0,0,993,1025,
	5,87,0,0,994,1025,5,88,0,0,995,1025,5,89,0,0,996,1025,5,90,0,0,997,1025,
	5,91,0,0,998,1025,5,92,0,0,999,1025,5,93,0,0,1000,1025,5,94,0,0,1001,1025,
	5,95,0,0,1002,1025,5,96,0,0,1003,1025,5,97,0,0,1004,1025,5,100,0,0,1005,
	1025,5,101,0,0,1006,1025,5,102,0,0,1007,1025,5,103,0,0,1008,1025,5,104,
	0,0,1009,1025,5,105,0,0,1010,1025,5,106,0,0,1011,1025,5,110,0,0,1012,1025,
	3,150,75,0,1013,1025,5,113,0,0,1014,1025,5,114,0,0,1015,1025,5,115,0,0,
	1016,1025,5,116,0,0,1017,1025,5,117,0,0,1018,1025,5,118,0,0,1019,1025,5,
	109,0,0,1020,1025,5,107,0,0,1021,1025,5,108,0,0,1022,1025,5,99,0,0,1023,
	1025,5,98,0,0,1024,978,1,0,0,0,1024,979,1,0,0,0,1024,980,1,0,0,0,1024,981,
	1,0,0,0,1024,982,1,0,0,0,1024,983,1,0,0,0,1024,984,1,0,0,0,1024,985,1,0,
	0,0,1024,986,1,0,0,0,1024,987,1,0,0,0,1024,988,1,0,0,0,1024,989,1,0,0,0,
	1024,990,1,0,0,0,1024,991,1,0,0,0,1024,992,1,0,0,0,1024,993,1,0,0,0,1024,
	994,1,0,0,0,1024,995,1,0,0,0,1024,996,1,0,0,0,1024,997,1,0,0,0,1024,998,
	1,0,0,0,1024,999,1,0,0,0,1024,1000,1,0,0,0,1024,1001,1,0,0,0,1024,1002,
	1,0,0,0,1024,1003,1,0,0,0,1024,1004,1,0,0,0,1024,1005,1,0,0,0,1024,1006,
	1,0,0,0,1024,1007,1,0,0,0,1024,1008,1,0,0,0,1024,1009,1,0,0,0,1024,1010,
	1,0,0,0,1024,1011,1,0,0,0,1024,1012,1,0,0,0,1024,1013,1,0,0,0,1024,1014,
	1,0,0,0,1024,1015,1,0,0,0,1024,1016,1,0,0,0,1024,1017,1,0,0,0,1024,1018,
	1,0,0,0,1024,1019,1,0,0,0,1024,1020,1,0,0,0,1024,1021,1,0,0,0,1024,1022,
	1,0,0,0,1024,1023,1,0,0,0,1025,149,1,0,0,0,1026,1027,7,9,0,0,1027,151,1,
	0,0,0,1028,1033,5,12,0,0,1029,1033,5,0,0,1,1030,1033,4,76,36,0,1031,1033,
	4,76,37,0,1032,1028,1,0,0,0,1032,1029,1,0,0,0,1032,1030,1,0,0,0,1032,1031,
	1,0,0,0,1033,153,1,0,0,0,113,155,158,184,188,195,201,205,212,220,225,227,
	236,240,248,253,262,270,274,279,290,296,311,331,335,339,347,356,361,369,
	374,379,386,393,400,418,422,424,431,437,442,457,460,465,468,479,483,488,
	499,505,514,516,525,529,535,538,541,546,552,555,563,566,571,576,583,588,
	591,596,603,610,619,623,628,633,639,643,658,661,666,683,686,695,703,707,
	709,714,718,725,732,780,842,850,854,867,869,875,883,887,889,895,899,903,
	908,914,919,922,926,937,943,953,969,976,1024,1032];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!JavaScriptParser.__ATN) {
			JavaScriptParser.__ATN = new ATNDeserializer().deserialize(JavaScriptParser._serializedATN);
		}

		return JavaScriptParser.__ATN;
	}


	static DecisionsToDFA = JavaScriptParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(JavaScriptParser.EOF, 0);
	}
	public HashBangLine(): TerminalNode {
		return this.getToken(JavaScriptParser.HashBangLine, 0);
	}
	public sourceElements(): SourceElementsContext {
		return this.getTypedRuleContext(SourceElementsContext, 0) as SourceElementsContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_program;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceElementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_sourceElement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSourceElement) {
			return visitor.visitSourceElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public variableStatement(): VariableStatementContext {
		return this.getTypedRuleContext(VariableStatementContext, 0) as VariableStatementContext;
	}
	public importStatement(): ImportStatementContext {
		return this.getTypedRuleContext(ImportStatementContext, 0) as ImportStatementContext;
	}
	public exportStatement(): ExportStatementContext {
		return this.getTypedRuleContext(ExportStatementContext, 0) as ExportStatementContext;
	}
	public emptyStatement_(): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, 0) as EmptyStatement_Context;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
	public iterationStatement(): IterationStatementContext {
		return this.getTypedRuleContext(IterationStatementContext, 0) as IterationStatementContext;
	}
	public continueStatement(): ContinueStatementContext {
		return this.getTypedRuleContext(ContinueStatementContext, 0) as ContinueStatementContext;
	}
	public breakStatement(): BreakStatementContext {
		return this.getTypedRuleContext(BreakStatementContext, 0) as BreakStatementContext;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
	public yieldStatement(): YieldStatementContext {
		return this.getTypedRuleContext(YieldStatementContext, 0) as YieldStatementContext;
	}
	public withStatement(): WithStatementContext {
		return this.getTypedRuleContext(WithStatementContext, 0) as WithStatementContext;
	}
	public labelledStatement(): LabelledStatementContext {
		return this.getTypedRuleContext(LabelledStatementContext, 0) as LabelledStatementContext;
	}
	public switchStatement(): SwitchStatementContext {
		return this.getTypedRuleContext(SwitchStatementContext, 0) as SwitchStatementContext;
	}
	public throwStatement(): ThrowStatementContext {
		return this.getTypedRuleContext(ThrowStatementContext, 0) as ThrowStatementContext;
	}
	public tryStatement(): TryStatementContext {
		return this.getTypedRuleContext(TryStatementContext, 0) as TryStatementContext;
	}
	public debuggerStatement(): DebuggerStatementContext {
		return this.getTypedRuleContext(DebuggerStatementContext, 0) as DebuggerStatementContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_statement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseBrace, 0);
	}
	public statementList(): StatementListContext {
		return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_block;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_statementList;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Import(): TerminalNode {
		return this.getToken(JavaScriptParser.Import, 0);
	}
	public importFromBlock(): ImportFromBlockContext {
		return this.getTypedRuleContext(ImportFromBlockContext, 0) as ImportFromBlockContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_importStatement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportFromBlockContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public importFrom(): ImportFromContext {
		return this.getTypedRuleContext(ImportFromContext, 0) as ImportFromContext;
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public importNamespace(): ImportNamespaceContext {
		return this.getTypedRuleContext(ImportNamespaceContext, 0) as ImportNamespaceContext;
	}
	public moduleItems(): ModuleItemsContext {
		return this.getTypedRuleContext(ModuleItemsContext, 0) as ModuleItemsContext;
	}
	public importDefault(): ImportDefaultContext {
		return this.getTypedRuleContext(ImportDefaultContext, 0) as ImportDefaultContext;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.StringLiteral, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_importFromBlock;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportFromBlock) {
			return visitor.visitImportFromBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleItemsContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseBrace, 0);
	}
	public aliasName_list(): AliasNameContext[] {
		return this.getTypedRuleContexts(AliasNameContext) as AliasNameContext[];
	}
	public aliasName(i: number): AliasNameContext {
		return this.getTypedRuleContext(AliasNameContext, i) as AliasNameContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(JavaScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(JavaScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_moduleItems;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitModuleItems) {
			return visitor.visitModuleItems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportDefaultContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public aliasName(): AliasNameContext {
		return this.getTypedRuleContext(AliasNameContext, 0) as AliasNameContext;
	}
	public Comma(): TerminalNode {
		return this.getToken(JavaScriptParser.Comma, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_importDefault;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportDefault) {
			return visitor.visitImportDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportNamespaceContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Multiply(): TerminalNode {
		return this.getToken(JavaScriptParser.Multiply, 0);
	}
	public identifierName_list(): IdentifierNameContext[] {
		return this.getTypedRuleContexts(IdentifierNameContext) as IdentifierNameContext[];
	}
	public identifierName(i: number): IdentifierNameContext {
		return this.getTypedRuleContext(IdentifierNameContext, i) as IdentifierNameContext;
	}
	public As(): TerminalNode {
		return this.getToken(JavaScriptParser.As, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_importNamespace;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportNamespace) {
			return visitor.visitImportNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportFromContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public From(): TerminalNode {
		return this.getToken(JavaScriptParser.From, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.StringLiteral, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_importFrom;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportFrom) {
			return visitor.visitImportFrom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AliasNameContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierName_list(): IdentifierNameContext[] {
		return this.getTypedRuleContexts(IdentifierNameContext) as IdentifierNameContext[];
	}
	public identifierName(i: number): IdentifierNameContext {
		return this.getTypedRuleContext(IdentifierNameContext, i) as IdentifierNameContext;
	}
	public As(): TerminalNode {
		return this.getToken(JavaScriptParser.As, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_aliasName;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAliasName) {
			return visitor.visitAliasName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_exportStatement;
	}
	public copyFrom(ctx: ExportStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ExportDefaultDeclarationContext extends ExportStatementContext {
	constructor(parser: JavaScriptParser, ctx: ExportStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Export(): TerminalNode {
		return this.getToken(JavaScriptParser.Export, 0);
	}
	public Default(): TerminalNode {
		return this.getToken(JavaScriptParser.Default, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExportDefaultDeclaration) {
			return visitor.visitExportDefaultDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExportDeclarationContext extends ExportStatementContext {
	constructor(parser: JavaScriptParser, ctx: ExportStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Export(): TerminalNode {
		return this.getToken(JavaScriptParser.Export, 0);
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public exportFromBlock(): ExportFromBlockContext {
		return this.getTypedRuleContext(ExportFromBlockContext, 0) as ExportFromBlockContext;
	}
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExportDeclaration) {
			return visitor.visitExportDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExportFromBlockContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public importNamespace(): ImportNamespaceContext {
		return this.getTypedRuleContext(ImportNamespaceContext, 0) as ImportNamespaceContext;
	}
	public importFrom(): ImportFromContext {
		return this.getTypedRuleContext(ImportFromContext, 0) as ImportFromContext;
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public moduleItems(): ModuleItemsContext {
		return this.getTypedRuleContext(ModuleItemsContext, 0) as ModuleItemsContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_exportFromBlock;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExportFromBlock) {
			return visitor.visitExportFromBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableStatement(): VariableStatementContext {
		return this.getTypedRuleContext(VariableStatementContext, 0) as VariableStatementContext;
	}
	public classDeclaration(): ClassDeclarationContext {
		return this.getTypedRuleContext(ClassDeclarationContext, 0) as ClassDeclarationContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_declaration;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getTypedRuleContext(VariableDeclarationListContext, 0) as VariableDeclarationListContext;
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_variableStatement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableStatement) {
			return visitor.visitVariableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varModifier(): VarModifierContext {
		return this.getTypedRuleContext(VarModifierContext, 0) as VarModifierContext;
	}
	public variableDeclaration_list(): VariableDeclarationContext[] {
		return this.getTypedRuleContexts(VariableDeclarationContext) as VariableDeclarationContext[];
	}
	public variableDeclaration(i: number): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, i) as VariableDeclarationContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(JavaScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(JavaScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_variableDeclarationList;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationList) {
			return visitor.visitVariableDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignable(): AssignableContext {
		return this.getTypedRuleContext(AssignableContext, 0) as AssignableContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(JavaScriptParser.Assign, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_variableDeclaration;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatement_Context extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(JavaScriptParser.SemiColon, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_emptyStatement_;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement_) {
			return visitor.visitEmptyStatement_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_expressionStatement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public If(): TerminalNode {
		return this.getToken(JavaScriptParser.If, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public Else(): TerminalNode {
		return this.getToken(JavaScriptParser.Else, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_ifStatement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_iterationStatement;
	}
	public copyFrom(ctx: IterationStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DoStatementContext extends IterationStatementContext {
	constructor(parser: JavaScriptParser, ctx: IterationStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Do(): TerminalNode {
		return this.getToken(JavaScriptParser.Do, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public While(): TerminalNode {
		return this.getToken(JavaScriptParser.While, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileStatementContext extends IterationStatementContext {
	constructor(parser: JavaScriptParser, ctx: IterationStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public While(): TerminalNode {
		return this.getToken(JavaScriptParser.While, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStatementContext extends IterationStatementContext {
	constructor(parser: JavaScriptParser, ctx: IterationStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public For(): TerminalNode {
		return this.getToken(JavaScriptParser.For, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public SemiColon_list(): TerminalNode[] {
	    	return this.getTokens(JavaScriptParser.SemiColon);
	}
	public SemiColon(i: number): TerminalNode {
		return this.getToken(JavaScriptParser.SemiColon, i);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public expressionSequence_list(): ExpressionSequenceContext[] {
		return this.getTypedRuleContexts(ExpressionSequenceContext) as ExpressionSequenceContext[];
	}
	public expressionSequence(i: number): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, i) as ExpressionSequenceContext;
	}
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getTypedRuleContext(VariableDeclarationListContext, 0) as VariableDeclarationListContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForInStatementContext extends IterationStatementContext {
	constructor(parser: JavaScriptParser, ctx: IterationStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public For(): TerminalNode {
		return this.getToken(JavaScriptParser.For, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public In(): TerminalNode {
		return this.getToken(JavaScriptParser.In, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getTypedRuleContext(VariableDeclarationListContext, 0) as VariableDeclarationListContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitForInStatement) {
			return visitor.visitForInStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForOfStatementContext extends IterationStatementContext {
	constructor(parser: JavaScriptParser, ctx: IterationStatementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public For(): TerminalNode {
		return this.getToken(JavaScriptParser.For, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getTypedRuleContext(VariableDeclarationListContext, 0) as VariableDeclarationListContext;
	}
	public Await(): TerminalNode {
		return this.getToken(JavaScriptParser.Await, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitForOfStatement) {
			return visitor.visitForOfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarModifierContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Var(): TerminalNode {
		return this.getToken(JavaScriptParser.Var, 0);
	}
	public let_(): Let_Context {
		return this.getTypedRuleContext(Let_Context, 0) as Let_Context;
	}
	public Const(): TerminalNode {
		return this.getToken(JavaScriptParser.Const, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_varModifier;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVarModifier) {
			return visitor.visitVarModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Continue(): TerminalNode {
		return this.getToken(JavaScriptParser.Continue, 0);
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_continueStatement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Break(): TerminalNode {
		return this.getToken(JavaScriptParser.Break, 0);
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_breakStatement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Return(): TerminalNode {
		return this.getToken(JavaScriptParser.Return, 0);
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_returnStatement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YieldStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Yield(): TerminalNode {
		return this.getToken(JavaScriptParser.Yield, 0);
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_yieldStatement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitYieldStatement) {
			return visitor.visitYieldStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public With(): TerminalNode {
		return this.getToken(JavaScriptParser.With, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_withStatement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitWithStatement) {
			return visitor.visitWithStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Switch(): TerminalNode {
		return this.getToken(JavaScriptParser.Switch, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public caseBlock(): CaseBlockContext {
		return this.getTypedRuleContext(CaseBlockContext, 0) as CaseBlockContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_switchStatement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseBlockContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseBrace, 0);
	}
	public caseClauses_list(): CaseClausesContext[] {
		return this.getTypedRuleContexts(CaseClausesContext) as CaseClausesContext[];
	}
	public caseClauses(i: number): CaseClausesContext {
		return this.getTypedRuleContext(CaseClausesContext, i) as CaseClausesContext;
	}
	public defaultClause(): DefaultClauseContext {
		return this.getTypedRuleContext(DefaultClauseContext, 0) as DefaultClauseContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_caseBlock;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCaseBlock) {
			return visitor.visitCaseBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseClausesContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public caseClause_list(): CaseClauseContext[] {
		return this.getTypedRuleContexts(CaseClauseContext) as CaseClauseContext[];
	}
	public caseClause(i: number): CaseClauseContext {
		return this.getTypedRuleContext(CaseClauseContext, i) as CaseClauseContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_caseClauses;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCaseClauses) {
			return visitor.visitCaseClauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseClauseContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Case(): TerminalNode {
		return this.getToken(JavaScriptParser.Case, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(JavaScriptParser.Colon, 0);
	}
	public statementList(): StatementListContext {
		return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_caseClause;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCaseClause) {
			return visitor.visitCaseClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultClauseContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Default(): TerminalNode {
		return this.getToken(JavaScriptParser.Default, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(JavaScriptParser.Colon, 0);
	}
	public statementList(): StatementListContext {
		return this.getTypedRuleContext(StatementListContext, 0) as StatementListContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_defaultClause;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDefaultClause) {
			return visitor.visitDefaultClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelledStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(JavaScriptParser.Colon, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_labelledStatement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLabelledStatement) {
			return visitor.visitLabelledStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Throw(): TerminalNode {
		return this.getToken(JavaScriptParser.Throw, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_throwStatement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Try(): TerminalNode {
		return this.getToken(JavaScriptParser.Try, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public catchProduction(): CatchProductionContext {
		return this.getTypedRuleContext(CatchProductionContext, 0) as CatchProductionContext;
	}
	public finallyProduction(): FinallyProductionContext {
		return this.getTypedRuleContext(FinallyProductionContext, 0) as FinallyProductionContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_tryStatement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CatchProductionContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Catch(): TerminalNode {
		return this.getToken(JavaScriptParser.Catch, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public assignable(): AssignableContext {
		return this.getTypedRuleContext(AssignableContext, 0) as AssignableContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_catchProduction;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCatchProduction) {
			return visitor.visitCatchProduction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FinallyProductionContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Finally(): TerminalNode {
		return this.getToken(JavaScriptParser.Finally, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_finallyProduction;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFinallyProduction) {
			return visitor.visitFinallyProduction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DebuggerStatementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Debugger(): TerminalNode {
		return this.getToken(JavaScriptParser.Debugger, 0);
	}
	public eos(): EosContext {
		return this.getTypedRuleContext(EosContext, 0) as EosContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_debuggerStatement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDebuggerStatement) {
			return visitor.visitDebuggerStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Function_(): TerminalNode {
		return this.getToken(JavaScriptParser.Function_, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	public Async(): TerminalNode {
		return this.getToken(JavaScriptParser.Async, 0);
	}
	public Multiply(): TerminalNode {
		return this.getToken(JavaScriptParser.Multiply, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_functionDeclaration;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclarationContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Class(): TerminalNode {
		return this.getToken(JavaScriptParser.Class, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public classTail(): ClassTailContext {
		return this.getTypedRuleContext(ClassTailContext, 0) as ClassTailContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_classDeclaration;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassTailContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseBrace, 0);
	}
	public Extends(): TerminalNode {
		return this.getToken(JavaScriptParser.Extends, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public classElement_list(): ClassElementContext[] {
		return this.getTypedRuleContexts(ClassElementContext) as ClassElementContext[];
	}
	public classElement(i: number): ClassElementContext {
		return this.getTypedRuleContext(ClassElementContext, i) as ClassElementContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_classTail;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassTail) {
			return visitor.visitClassTail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassElementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public methodDefinition(): MethodDefinitionContext {
		return this.getTypedRuleContext(MethodDefinitionContext, 0) as MethodDefinitionContext;
	}
	public assignable(): AssignableContext {
		return this.getTypedRuleContext(AssignableContext, 0) as AssignableContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(JavaScriptParser.Assign, 0);
	}
	public objectLiteral(): ObjectLiteralContext {
		return this.getTypedRuleContext(ObjectLiteralContext, 0) as ObjectLiteralContext;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(JavaScriptParser.SemiColon, 0);
	}
	public Static_list(): TerminalNode[] {
	    	return this.getTokens(JavaScriptParser.Static);
	}
	public Static(i: number): TerminalNode {
		return this.getToken(JavaScriptParser.Static, i);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public Async_list(): TerminalNode[] {
	    	return this.getTokens(JavaScriptParser.Async);
	}
	public Async(i: number): TerminalNode {
		return this.getToken(JavaScriptParser.Async, i);
	}
	public emptyStatement_(): EmptyStatement_Context {
		return this.getTypedRuleContext(EmptyStatement_Context, 0) as EmptyStatement_Context;
	}
	public propertyName(): PropertyNameContext {
		return this.getTypedRuleContext(PropertyNameContext, 0) as PropertyNameContext;
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public Hashtag(): TerminalNode {
		return this.getToken(JavaScriptParser.Hashtag, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_classElement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassElement) {
			return visitor.visitClassElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDefinitionContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public propertyName(): PropertyNameContext {
		return this.getTypedRuleContext(PropertyNameContext, 0) as PropertyNameContext;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	public Multiply(): TerminalNode {
		return this.getToken(JavaScriptParser.Multiply, 0);
	}
	public Hashtag(): TerminalNode {
		return this.getToken(JavaScriptParser.Hashtag, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
	public getter(): GetterContext {
		return this.getTypedRuleContext(GetterContext, 0) as GetterContext;
	}
	public setter(): SetterContext {
		return this.getTypedRuleContext(SetterContext, 0) as SetterContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_methodDefinition;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMethodDefinition) {
			return visitor.visitMethodDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterListContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public formalParameterArg_list(): FormalParameterArgContext[] {
		return this.getTypedRuleContexts(FormalParameterArgContext) as FormalParameterArgContext[];
	}
	public formalParameterArg(i: number): FormalParameterArgContext {
		return this.getTypedRuleContext(FormalParameterArgContext, i) as FormalParameterArgContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(JavaScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(JavaScriptParser.Comma, i);
	}
	public lastFormalParameterArg(): LastFormalParameterArgContext {
		return this.getTypedRuleContext(LastFormalParameterArgContext, 0) as LastFormalParameterArgContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_formalParameterList;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterList) {
			return visitor.visitFormalParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FormalParameterArgContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignable(): AssignableContext {
		return this.getTypedRuleContext(AssignableContext, 0) as AssignableContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(JavaScriptParser.Assign, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_formalParameterArg;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterArg) {
			return visitor.visitFormalParameterArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LastFormalParameterArgContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Ellipsis(): TerminalNode {
		return this.getToken(JavaScriptParser.Ellipsis, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_lastFormalParameterArg;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLastFormalParameterArg) {
			return visitor.visitLastFormalParameterArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseBrace, 0);
	}
	public sourceElements(): SourceElementsContext {
		return this.getTypedRuleContext(SourceElementsContext, 0) as SourceElementsContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_functionBody;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionBody) {
			return visitor.visitFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SourceElementsContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public sourceElement_list(): SourceElementContext[] {
		return this.getTypedRuleContexts(SourceElementContext) as SourceElementContext[];
	}
	public sourceElement(i: number): SourceElementContext {
		return this.getTypedRuleContext(SourceElementContext, i) as SourceElementContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_sourceElements;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSourceElements) {
			return visitor.visitSourceElements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenBracket, 0);
	}
	public elementList(): ElementListContext {
		return this.getTypedRuleContext(ElementListContext, 0) as ElementListContext;
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseBracket, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_arrayLiteral;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementListContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(JavaScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(JavaScriptParser.Comma, i);
	}
	public arrayElement_list(): ArrayElementContext[] {
		return this.getTypedRuleContexts(ArrayElementContext) as ArrayElementContext[];
	}
	public arrayElement(i: number): ArrayElementContext {
		return this.getTypedRuleContext(ArrayElementContext, i) as ArrayElementContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_elementList;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitElementList) {
			return visitor.visitElementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayElementContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public Ellipsis(): TerminalNode {
		return this.getToken(JavaScriptParser.Ellipsis, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_arrayElement;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayElement) {
			return visitor.visitArrayElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyAssignmentContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_propertyAssignment;
	}
	public copyFrom(ctx: PropertyAssignmentContext): void {
		super.copyFrom(ctx);
	}
}
export class PropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	constructor(parser: JavaScriptParser, ctx: PropertyAssignmentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public propertyName(): PropertyNameContext {
		return this.getTypedRuleContext(PropertyNameContext, 0) as PropertyNameContext;
	}
	public Colon(): TerminalNode {
		return this.getToken(JavaScriptParser.Colon, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyExpressionAssignment) {
			return visitor.visitPropertyExpressionAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComputedPropertyExpressionAssignmentContext extends PropertyAssignmentContext {
	constructor(parser: JavaScriptParser, ctx: PropertyAssignmentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenBracket, 0);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseBracket, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(JavaScriptParser.Colon, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitComputedPropertyExpressionAssignment) {
			return visitor.visitComputedPropertyExpressionAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyShorthandContext extends PropertyAssignmentContext {
	constructor(parser: JavaScriptParser, ctx: PropertyAssignmentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public Ellipsis(): TerminalNode {
		return this.getToken(JavaScriptParser.Ellipsis, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyShorthand) {
			return visitor.visitPropertyShorthand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertySetterContext extends PropertyAssignmentContext {
	constructor(parser: JavaScriptParser, ctx: PropertyAssignmentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public setter(): SetterContext {
		return this.getTypedRuleContext(SetterContext, 0) as SetterContext;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public formalParameterArg(): FormalParameterArgContext {
		return this.getTypedRuleContext(FormalParameterArgContext, 0) as FormalParameterArgContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertySetter) {
			return visitor.visitPropertySetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyGetterContext extends PropertyAssignmentContext {
	constructor(parser: JavaScriptParser, ctx: PropertyAssignmentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public getter(): GetterContext {
		return this.getTypedRuleContext(GetterContext, 0) as GetterContext;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyGetter) {
			return visitor.visitPropertyGetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionPropertyContext extends PropertyAssignmentContext {
	constructor(parser: JavaScriptParser, ctx: PropertyAssignmentContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public propertyName(): PropertyNameContext {
		return this.getTypedRuleContext(PropertyNameContext, 0) as PropertyNameContext;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	public Async(): TerminalNode {
		return this.getToken(JavaScriptParser.Async, 0);
	}
	public Multiply(): TerminalNode {
		return this.getToken(JavaScriptParser.Multiply, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionProperty) {
			return visitor.visitFunctionProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyNameContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifierName(): IdentifierNameContext {
		return this.getTypedRuleContext(IdentifierNameContext, 0) as IdentifierNameContext;
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.StringLiteral, 0);
	}
	public numericLiteral(): NumericLiteralContext {
		return this.getTypedRuleContext(NumericLiteralContext, 0) as NumericLiteralContext;
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenBracket, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseBracket, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_propertyName;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPropertyName) {
			return visitor.visitPropertyName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public argument_list(): ArgumentContext[] {
		return this.getTypedRuleContexts(ArgumentContext) as ArgumentContext[];
	}
	public argument(i: number): ArgumentContext {
		return this.getTypedRuleContext(ArgumentContext, i) as ArgumentContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(JavaScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(JavaScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_arguments;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArguments) {
			return visitor.visitArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public Ellipsis(): TerminalNode {
		return this.getToken(JavaScriptParser.Ellipsis, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_argument;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionSequenceContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(JavaScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(JavaScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_expressionSequence;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitExpressionSequence) {
			return visitor.visitExpressionSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_singleExpression;
	}
	public copyFrom(ctx: SingleExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class TemplateStringExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public templateStringLiteral(): TemplateStringLiteralContext {
		return this.getTypedRuleContext(TemplateStringLiteralContext, 0) as TemplateStringLiteralContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTemplateStringExpression) {
			return visitor.visitTemplateStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TernaryExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public QuestionMark(): TerminalNode {
		return this.getToken(JavaScriptParser.QuestionMark, 0);
	}
	public Colon(): TerminalNode {
		return this.getToken(JavaScriptParser.Colon, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public And(): TerminalNode {
		return this.getToken(JavaScriptParser.And, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Power(): TerminalNode {
		return this.getToken(JavaScriptParser.Power, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPowerExpression) {
			return visitor.visitPowerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreIncrementExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PlusPlus(): TerminalNode {
		return this.getToken(JavaScriptParser.PlusPlus, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPreIncrementExpression) {
			return visitor.visitPreIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ObjectLiteralExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public objectLiteral(): ObjectLiteralContext {
		return this.getTypedRuleContext(ObjectLiteralContext, 0) as ObjectLiteralContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitObjectLiteralExpression) {
			return visitor.visitObjectLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MetaExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public New(): TerminalNode {
		return this.getToken(JavaScriptParser.New, 0);
	}
	public Dot(): TerminalNode {
		return this.getToken(JavaScriptParser.Dot, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMetaExpression) {
			return visitor.visitMetaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public In(): TerminalNode {
		return this.getToken(JavaScriptParser.In, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitInExpression) {
			return visitor.visitInExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Or(): TerminalNode {
		return this.getToken(JavaScriptParser.Or, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OptionalChainExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public QuestionMarkDot(): TerminalNode {
		return this.getToken(JavaScriptParser.QuestionMarkDot, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitOptionalChainExpression) {
			return visitor.visitOptionalChainExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Not(): TerminalNode {
		return this.getToken(JavaScriptParser.Not, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreDecreaseExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MinusMinus(): TerminalNode {
		return this.getToken(JavaScriptParser.MinusMinus, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPreDecreaseExpression) {
			return visitor.visitPreDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArgumentsExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArgumentsExpression) {
			return visitor.visitArgumentsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AwaitExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Await(): TerminalNode {
		return this.getToken(JavaScriptParser.Await, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAwaitExpression) {
			return visitor.visitAwaitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public This(): TerminalNode {
		return this.getToken(JavaScriptParser.This, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitThisExpression) {
			return visitor.visitThisExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public anonymousFunction(): AnonymousFunctionContext {
		return this.getTypedRuleContext(AnonymousFunctionContext, 0) as AnonymousFunctionContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionExpression) {
			return visitor.visitFunctionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Minus(): TerminalNode {
		return this.getToken(JavaScriptParser.Minus, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpression) {
			return visitor.visitUnaryMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(JavaScriptParser.Assign, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostDecreaseExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public MinusMinus(): TerminalNode {
		return this.getToken(JavaScriptParser.MinusMinus, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPostDecreaseExpression) {
			return visitor.visitPostDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeofExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Typeof(): TerminalNode {
		return this.getToken(JavaScriptParser.Typeof, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTypeofExpression) {
			return visitor.visitTypeofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InstanceofExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Instanceof(): TerminalNode {
		return this.getToken(JavaScriptParser.Instanceof, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitInstanceofExpression) {
			return visitor.visitInstanceofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryPlusExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Plus(): TerminalNode {
		return this.getToken(JavaScriptParser.Plus, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitUnaryPlusExpression) {
			return visitor.visitUnaryPlusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeleteExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Delete(): TerminalNode {
		return this.getToken(JavaScriptParser.Delete, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitDeleteExpression) {
			return visitor.visitDeleteExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ImportExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Import(): TerminalNode {
		return this.getToken(JavaScriptParser.Import, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitImportExpression) {
			return visitor.visitImportExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Equals_(): TerminalNode {
		return this.getToken(JavaScriptParser.Equals_, 0);
	}
	public NotEquals(): TerminalNode {
		return this.getToken(JavaScriptParser.NotEquals, 0);
	}
	public IdentityEquals(): TerminalNode {
		return this.getToken(JavaScriptParser.IdentityEquals, 0);
	}
	public IdentityNotEquals(): TerminalNode {
		return this.getToken(JavaScriptParser.IdentityNotEquals, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitXOrExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public BitXOr(): TerminalNode {
		return this.getToken(JavaScriptParser.BitXOr, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitXOrExpression) {
			return visitor.visitBitXOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SuperExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Super(): TerminalNode {
		return this.getToken(JavaScriptParser.Super, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSuperExpression) {
			return visitor.visitSuperExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Multiply(): TerminalNode {
		return this.getToken(JavaScriptParser.Multiply, 0);
	}
	public Divide(): TerminalNode {
		return this.getToken(JavaScriptParser.Divide, 0);
	}
	public Modulus(): TerminalNode {
		return this.getToken(JavaScriptParser.Modulus, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitShiftExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public LeftShiftArithmetic(): TerminalNode {
		return this.getToken(JavaScriptParser.LeftShiftArithmetic, 0);
	}
	public RightShiftArithmetic(): TerminalNode {
		return this.getToken(JavaScriptParser.RightShiftArithmetic, 0);
	}
	public RightShiftLogical(): TerminalNode {
		return this.getToken(JavaScriptParser.RightShiftLogical, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitShiftExpression) {
			return visitor.visitBitShiftExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public Plus(): TerminalNode {
		return this.getToken(JavaScriptParser.Plus, 0);
	}
	public Minus(): TerminalNode {
		return this.getToken(JavaScriptParser.Minus, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public LessThan(): TerminalNode {
		return this.getToken(JavaScriptParser.LessThan, 0);
	}
	public MoreThan(): TerminalNode {
		return this.getToken(JavaScriptParser.MoreThan, 0);
	}
	public LessThanEquals(): TerminalNode {
		return this.getToken(JavaScriptParser.LessThanEquals, 0);
	}
	public GreaterThanEquals(): TerminalNode {
		return this.getToken(JavaScriptParser.GreaterThanEquals, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostIncrementExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public PlusPlus(): TerminalNode {
		return this.getToken(JavaScriptParser.PlusPlus, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression) {
			return visitor.visitPostIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class YieldExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public yieldStatement(): YieldStatementContext {
		return this.getTypedRuleContext(YieldStatementContext, 0) as YieldStatementContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitYieldExpression) {
			return visitor.visitYieldExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitNotExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BitNot(): TerminalNode {
		return this.getToken(JavaScriptParser.BitNot, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitNotExpression) {
			return visitor.visitBitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NewExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public New(): TerminalNode {
		return this.getToken(JavaScriptParser.New, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public arguments(): ArgumentsContext {
		return this.getTypedRuleContext(ArgumentsContext, 0) as ArgumentsContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitNewExpression) {
			return visitor.visitNewExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayLiteralExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public arrayLiteral(): ArrayLiteralContext {
		return this.getTypedRuleContext(ArrayLiteralContext, 0) as ArrayLiteralContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteralExpression) {
			return visitor.visitArrayLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberDotExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public Dot(): TerminalNode {
		return this.getToken(JavaScriptParser.Dot, 0);
	}
	public identifierName(): IdentifierNameContext {
		return this.getTypedRuleContext(IdentifierNameContext, 0) as IdentifierNameContext;
	}
	public QuestionMark(): TerminalNode {
		return this.getToken(JavaScriptParser.QuestionMark, 0);
	}
	public Hashtag(): TerminalNode {
		return this.getToken(JavaScriptParser.Hashtag, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberDotExpression) {
			return visitor.visitMemberDotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ClassExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Class(): TerminalNode {
		return this.getToken(JavaScriptParser.Class, 0);
	}
	public classTail(): ClassTailContext {
		return this.getTypedRuleContext(ClassTailContext, 0) as ClassTailContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitClassExpression) {
			return visitor.visitClassExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberIndexExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public OpenBracket(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenBracket, 0);
	}
	public expressionSequence(): ExpressionSequenceContext {
		return this.getTypedRuleContext(ExpressionSequenceContext, 0) as ExpressionSequenceContext;
	}
	public CloseBracket(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseBracket, 0);
	}
	public QuestionMarkDot(): TerminalNode {
		return this.getToken(JavaScriptParser.QuestionMarkDot, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitMemberIndexExpression) {
			return visitor.visitMemberIndexExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitAndExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public BitAnd(): TerminalNode {
		return this.getToken(JavaScriptParser.BitAnd, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitAndExpression) {
			return visitor.visitBitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitOrExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public BitOr(): TerminalNode {
		return this.getToken(JavaScriptParser.BitOr, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBitOrExpression) {
			return visitor.visitBitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentOperatorExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getTypedRuleContext(AssignmentOperatorContext, 0) as AssignmentOperatorContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperatorExpression) {
			return visitor.visitAssignmentOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VoidExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Void(): TerminalNode {
		return this.getToken(JavaScriptParser.Void, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitVoidExpression) {
			return visitor.visitVoidExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CoalesceExpressionContext extends SingleExpressionContext {
	constructor(parser: JavaScriptParser, ctx: SingleExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public singleExpression_list(): SingleExpressionContext[] {
		return this.getTypedRuleContexts(SingleExpressionContext) as SingleExpressionContext[];
	}
	public singleExpression(i: number): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, i) as SingleExpressionContext;
	}
	public NullCoalesce(): TerminalNode {
		return this.getToken(JavaScriptParser.NullCoalesce, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitCoalesceExpression) {
			return visitor.visitCoalesceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public arrayLiteral(): ArrayLiteralContext {
		return this.getTypedRuleContext(ArrayLiteralContext, 0) as ArrayLiteralContext;
	}
	public objectLiteral(): ObjectLiteralContext {
		return this.getTypedRuleContext(ObjectLiteralContext, 0) as ObjectLiteralContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_assignable;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignable) {
			return visitor.visitAssignable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectLiteralContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OpenBrace(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenBrace, 0);
	}
	public CloseBrace(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseBrace, 0);
	}
	public propertyAssignment_list(): PropertyAssignmentContext[] {
		return this.getTypedRuleContexts(PropertyAssignmentContext) as PropertyAssignmentContext[];
	}
	public propertyAssignment(i: number): PropertyAssignmentContext {
		return this.getTypedRuleContext(PropertyAssignmentContext, i) as PropertyAssignmentContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(JavaScriptParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(JavaScriptParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_objectLiteral;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitObjectLiteral) {
			return visitor.visitObjectLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnonymousFunctionContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_anonymousFunction;
	}
	public copyFrom(ctx: AnonymousFunctionContext): void {
		super.copyFrom(ctx);
	}
}
export class AnonymousFunctionDeclContext extends AnonymousFunctionContext {
	constructor(parser: JavaScriptParser, ctx: AnonymousFunctionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Function_(): TerminalNode {
		return this.getToken(JavaScriptParser.Function_, 0);
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
	public Async(): TerminalNode {
		return this.getToken(JavaScriptParser.Async, 0);
	}
	public Multiply(): TerminalNode {
		return this.getToken(JavaScriptParser.Multiply, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAnonymousFunctionDecl) {
			return visitor.visitAnonymousFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrowFunctionContext extends AnonymousFunctionContext {
	constructor(parser: JavaScriptParser, ctx: AnonymousFunctionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public arrowFunctionParameters(): ArrowFunctionParametersContext {
		return this.getTypedRuleContext(ArrowFunctionParametersContext, 0) as ArrowFunctionParametersContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(JavaScriptParser.ARROW, 0);
	}
	public arrowFunctionBody(): ArrowFunctionBodyContext {
		return this.getTypedRuleContext(ArrowFunctionBodyContext, 0) as ArrowFunctionBodyContext;
	}
	public Async(): TerminalNode {
		return this.getToken(JavaScriptParser.Async, 0);
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrowFunction) {
			return visitor.visitArrowFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionDeclContext extends AnonymousFunctionContext {
	constructor(parser: JavaScriptParser, ctx: AnonymousFunctionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitFunctionDecl) {
			return visitor.visitFunctionDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowFunctionParametersContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public OpenParen(): TerminalNode {
		return this.getToken(JavaScriptParser.OpenParen, 0);
	}
	public CloseParen(): TerminalNode {
		return this.getToken(JavaScriptParser.CloseParen, 0);
	}
	public formalParameterList(): FormalParameterListContext {
		return this.getTypedRuleContext(FormalParameterListContext, 0) as FormalParameterListContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_arrowFunctionParameters;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrowFunctionParameters) {
			return visitor.visitArrowFunctionParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrowFunctionBodyContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public functionBody(): FunctionBodyContext {
		return this.getTypedRuleContext(FunctionBodyContext, 0) as FunctionBodyContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_arrowFunctionBody;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitArrowFunctionBody) {
			return visitor.visitArrowFunctionBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MultiplyAssign(): TerminalNode {
		return this.getToken(JavaScriptParser.MultiplyAssign, 0);
	}
	public DivideAssign(): TerminalNode {
		return this.getToken(JavaScriptParser.DivideAssign, 0);
	}
	public ModulusAssign(): TerminalNode {
		return this.getToken(JavaScriptParser.ModulusAssign, 0);
	}
	public PlusAssign(): TerminalNode {
		return this.getToken(JavaScriptParser.PlusAssign, 0);
	}
	public MinusAssign(): TerminalNode {
		return this.getToken(JavaScriptParser.MinusAssign, 0);
	}
	public LeftShiftArithmeticAssign(): TerminalNode {
		return this.getToken(JavaScriptParser.LeftShiftArithmeticAssign, 0);
	}
	public RightShiftArithmeticAssign(): TerminalNode {
		return this.getToken(JavaScriptParser.RightShiftArithmeticAssign, 0);
	}
	public RightShiftLogicalAssign(): TerminalNode {
		return this.getToken(JavaScriptParser.RightShiftLogicalAssign, 0);
	}
	public BitAndAssign(): TerminalNode {
		return this.getToken(JavaScriptParser.BitAndAssign, 0);
	}
	public BitXorAssign(): TerminalNode {
		return this.getToken(JavaScriptParser.BitXorAssign, 0);
	}
	public BitOrAssign(): TerminalNode {
		return this.getToken(JavaScriptParser.BitOrAssign, 0);
	}
	public PowerAssign(): TerminalNode {
		return this.getToken(JavaScriptParser.PowerAssign, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_assignmentOperator;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NullLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.NullLiteral, 0);
	}
	public BooleanLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.BooleanLiteral, 0);
	}
	public StringLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.StringLiteral, 0);
	}
	public templateStringLiteral(): TemplateStringLiteralContext {
		return this.getTypedRuleContext(TemplateStringLiteralContext, 0) as TemplateStringLiteralContext;
	}
	public RegularExpressionLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.RegularExpressionLiteral, 0);
	}
	public numericLiteral(): NumericLiteralContext {
		return this.getTypedRuleContext(NumericLiteralContext, 0) as NumericLiteralContext;
	}
	public bigintLiteral(): BigintLiteralContext {
		return this.getTypedRuleContext(BigintLiteralContext, 0) as BigintLiteralContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_literal;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateStringLiteralContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BackTick_list(): TerminalNode[] {
	    	return this.getTokens(JavaScriptParser.BackTick);
	}
	public BackTick(i: number): TerminalNode {
		return this.getToken(JavaScriptParser.BackTick, i);
	}
	public templateStringAtom_list(): TemplateStringAtomContext[] {
		return this.getTypedRuleContexts(TemplateStringAtomContext) as TemplateStringAtomContext[];
	}
	public templateStringAtom(i: number): TemplateStringAtomContext {
		return this.getTypedRuleContext(TemplateStringAtomContext, i) as TemplateStringAtomContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_templateStringLiteral;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTemplateStringLiteral) {
			return visitor.visitTemplateStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TemplateStringAtomContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TemplateStringAtom(): TerminalNode {
		return this.getToken(JavaScriptParser.TemplateStringAtom, 0);
	}
	public TemplateStringStartExpression(): TerminalNode {
		return this.getToken(JavaScriptParser.TemplateStringStartExpression, 0);
	}
	public singleExpression(): SingleExpressionContext {
		return this.getTypedRuleContext(SingleExpressionContext, 0) as SingleExpressionContext;
	}
	public TemplateCloseBrace(): TerminalNode {
		return this.getToken(JavaScriptParser.TemplateCloseBrace, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_templateStringAtom;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitTemplateStringAtom) {
			return visitor.visitTemplateStringAtom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DecimalLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.DecimalLiteral, 0);
	}
	public HexIntegerLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.HexIntegerLiteral, 0);
	}
	public OctalIntegerLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.OctalIntegerLiteral, 0);
	}
	public OctalIntegerLiteral2(): TerminalNode {
		return this.getToken(JavaScriptParser.OctalIntegerLiteral2, 0);
	}
	public BinaryIntegerLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.BinaryIntegerLiteral, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_numericLiteral;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BigintLiteralContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BigDecimalIntegerLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.BigDecimalIntegerLiteral, 0);
	}
	public BigHexIntegerLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.BigHexIntegerLiteral, 0);
	}
	public BigOctalIntegerLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.BigOctalIntegerLiteral, 0);
	}
	public BigBinaryIntegerLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.BigBinaryIntegerLiteral, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_bigintLiteral;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitBigintLiteral) {
			return visitor.visitBigintLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetterContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public propertyName(): PropertyNameContext {
		return this.getTypedRuleContext(PropertyNameContext, 0) as PropertyNameContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_getter;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitGetter) {
			return visitor.visitGetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetterContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public propertyName(): PropertyNameContext {
		return this.getTypedRuleContext(PropertyNameContext, 0) as PropertyNameContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_setter;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitSetter) {
			return visitor.visitSetter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierNameContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public reservedWord(): ReservedWordContext {
		return this.getTypedRuleContext(ReservedWordContext, 0) as ReservedWordContext;
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_identifierName;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifierName) {
			return visitor.visitIdentifierName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(JavaScriptParser.Identifier, 0);
	}
	public NonStrictLet(): TerminalNode {
		return this.getToken(JavaScriptParser.NonStrictLet, 0);
	}
	public Async(): TerminalNode {
		return this.getToken(JavaScriptParser.Async, 0);
	}
	public As(): TerminalNode {
		return this.getToken(JavaScriptParser.As, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_identifier;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedWordContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public keyword(): KeywordContext {
		return this.getTypedRuleContext(KeywordContext, 0) as KeywordContext;
	}
	public NullLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.NullLiteral, 0);
	}
	public BooleanLiteral(): TerminalNode {
		return this.getToken(JavaScriptParser.BooleanLiteral, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_reservedWord;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitReservedWord) {
			return visitor.visitReservedWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Break(): TerminalNode {
		return this.getToken(JavaScriptParser.Break, 0);
	}
	public Do(): TerminalNode {
		return this.getToken(JavaScriptParser.Do, 0);
	}
	public Instanceof(): TerminalNode {
		return this.getToken(JavaScriptParser.Instanceof, 0);
	}
	public Typeof(): TerminalNode {
		return this.getToken(JavaScriptParser.Typeof, 0);
	}
	public Case(): TerminalNode {
		return this.getToken(JavaScriptParser.Case, 0);
	}
	public Else(): TerminalNode {
		return this.getToken(JavaScriptParser.Else, 0);
	}
	public New(): TerminalNode {
		return this.getToken(JavaScriptParser.New, 0);
	}
	public Var(): TerminalNode {
		return this.getToken(JavaScriptParser.Var, 0);
	}
	public Catch(): TerminalNode {
		return this.getToken(JavaScriptParser.Catch, 0);
	}
	public Finally(): TerminalNode {
		return this.getToken(JavaScriptParser.Finally, 0);
	}
	public Return(): TerminalNode {
		return this.getToken(JavaScriptParser.Return, 0);
	}
	public Void(): TerminalNode {
		return this.getToken(JavaScriptParser.Void, 0);
	}
	public Continue(): TerminalNode {
		return this.getToken(JavaScriptParser.Continue, 0);
	}
	public For(): TerminalNode {
		return this.getToken(JavaScriptParser.For, 0);
	}
	public Switch(): TerminalNode {
		return this.getToken(JavaScriptParser.Switch, 0);
	}
	public While(): TerminalNode {
		return this.getToken(JavaScriptParser.While, 0);
	}
	public Debugger(): TerminalNode {
		return this.getToken(JavaScriptParser.Debugger, 0);
	}
	public Function_(): TerminalNode {
		return this.getToken(JavaScriptParser.Function_, 0);
	}
	public This(): TerminalNode {
		return this.getToken(JavaScriptParser.This, 0);
	}
	public With(): TerminalNode {
		return this.getToken(JavaScriptParser.With, 0);
	}
	public Default(): TerminalNode {
		return this.getToken(JavaScriptParser.Default, 0);
	}
	public If(): TerminalNode {
		return this.getToken(JavaScriptParser.If, 0);
	}
	public Throw(): TerminalNode {
		return this.getToken(JavaScriptParser.Throw, 0);
	}
	public Delete(): TerminalNode {
		return this.getToken(JavaScriptParser.Delete, 0);
	}
	public In(): TerminalNode {
		return this.getToken(JavaScriptParser.In, 0);
	}
	public Try(): TerminalNode {
		return this.getToken(JavaScriptParser.Try, 0);
	}
	public Class(): TerminalNode {
		return this.getToken(JavaScriptParser.Class, 0);
	}
	public Enum(): TerminalNode {
		return this.getToken(JavaScriptParser.Enum, 0);
	}
	public Extends(): TerminalNode {
		return this.getToken(JavaScriptParser.Extends, 0);
	}
	public Super(): TerminalNode {
		return this.getToken(JavaScriptParser.Super, 0);
	}
	public Const(): TerminalNode {
		return this.getToken(JavaScriptParser.Const, 0);
	}
	public Export(): TerminalNode {
		return this.getToken(JavaScriptParser.Export, 0);
	}
	public Import(): TerminalNode {
		return this.getToken(JavaScriptParser.Import, 0);
	}
	public Implements(): TerminalNode {
		return this.getToken(JavaScriptParser.Implements, 0);
	}
	public let_(): Let_Context {
		return this.getTypedRuleContext(Let_Context, 0) as Let_Context;
	}
	public Private(): TerminalNode {
		return this.getToken(JavaScriptParser.Private, 0);
	}
	public Public(): TerminalNode {
		return this.getToken(JavaScriptParser.Public, 0);
	}
	public Interface(): TerminalNode {
		return this.getToken(JavaScriptParser.Interface, 0);
	}
	public Package(): TerminalNode {
		return this.getToken(JavaScriptParser.Package, 0);
	}
	public Protected(): TerminalNode {
		return this.getToken(JavaScriptParser.Protected, 0);
	}
	public Static(): TerminalNode {
		return this.getToken(JavaScriptParser.Static, 0);
	}
	public Yield(): TerminalNode {
		return this.getToken(JavaScriptParser.Yield, 0);
	}
	public Async(): TerminalNode {
		return this.getToken(JavaScriptParser.Async, 0);
	}
	public Await(): TerminalNode {
		return this.getToken(JavaScriptParser.Await, 0);
	}
	public From(): TerminalNode {
		return this.getToken(JavaScriptParser.From, 0);
	}
	public As(): TerminalNode {
		return this.getToken(JavaScriptParser.As, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_keyword;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitKeyword) {
			return visitor.visitKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Let_Context extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NonStrictLet(): TerminalNode {
		return this.getToken(JavaScriptParser.NonStrictLet, 0);
	}
	public StrictLet(): TerminalNode {
		return this.getToken(JavaScriptParser.StrictLet, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_let_;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitLet_) {
			return visitor.visitLet_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EosContext extends ParserRuleContext {
	constructor(parser?: JavaScriptParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SemiColon(): TerminalNode {
		return this.getToken(JavaScriptParser.SemiColon, 0);
	}
	public EOF(): TerminalNode {
		return this.getToken(JavaScriptParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return JavaScriptParser.RULE_eos;
	}
	// @Override
	public accept<Result>(visitor: JavaScriptParserVisitor<Result>): Result {
		if (visitor.visitEos) {
			return visitor.visitEos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
