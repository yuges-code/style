import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSExpressionBinaryPattern from "../../expression/binary/JSExpressionBinaryPattern";
import JSExpressionDeclarationPattern from "../../expression/declaration/JSExpressionDeclarationPattern";
import JSModuleExportKeywordToken from "../../../tokens/module/export/keyword/JSModuleExportKeywordToken";
import JSModuleExportDefaultKeywordToken from "../../../tokens/module/export/default/JSModuleExportDefaultKeywordToken";
import JSModuleFromKeywordToken from "../../../tokens/module/from/keyword/JSModuleFromKeywordToken";
import JSDataStringPattern from "../../data/string/JSDataStringPattern";
import JSModuleAllKeywordToken from "../../../tokens/module/all/keyword/JSModuleAllKeywordToken";

export default class JSModuleExportPattern extends AbstractParserPattern
{
    keyword = undefined as JSModuleExportKeywordToken | undefined;
    default = undefined as JSModuleExportDefaultKeywordToken | undefined;
    all = undefined as JSModuleAllKeywordToken | undefined;
    expression = undefined as JSExpressionDeclarationPattern | JSExpressionBinaryPattern | undefined;
    from = undefined as JSModuleFromKeywordToken | undefined;
    source = undefined as JSDataStringPattern | undefined;

    properties = () => [
        'keyword',
        'default',
        'all',
        'expression',
        'from',
        'source',
    ];

    pattern = () => [
        {
            name: 'keyword',
            required: true,
            element: JSModuleExportKeywordToken,
        }, {
            skip: /[\s]/,
            required: true,
        }, {
            name: 'default',
            required: false,
            element: JSModuleExportDefaultKeywordToken,
        }, {
            skip: /[\s]/,
            required: true,
        }, {
            name: 'all',
            required: false,
            disabled: () => this.default != undefined,
            element: JSModuleAllKeywordToken,
        }, {
            name: 'expression',
            required: false,
            disabled: () => this.default != undefined || this.all != undefined,
            element: JSExpressionDeclarationPattern,
        }, {
            name: 'expression',
            required: true,
            disabled: () => this.expression != undefined || this.all != undefined,
            element: JSExpressionBinaryPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'from',
            required: () => this.all != undefined,
            element: JSModuleFromKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'source',
            required: () => this.from != undefined,
            disabled: () => this.from === undefined,
            element: JSDataStringPattern,
        },
    ];
};
