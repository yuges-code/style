import JSDataFunctionBodyPattern from "../body/JSDataFunctionBodyPattern";
import AbstractParserPattern from "../../../../../../abstracts/AbstractParserPattern";
import JSVariableNameToken from "../../../../tokens/variable/name/JSVariableNameToken";
import JSDataFunctionArgumentsPattern from "../arguments/JSDataFunctionArgumentsPattern";
import JSExpressionBinaryPattern from "../../../expression/binary/JSExpressionBinaryPattern";
import JSDataFunctionArrowKeywordToken from "../../../../tokens/data/function/arrow/keyword/JSDataFunctionArrowKeywordToken";

export default class JSDataFunctionArrowPattern extends AbstractParserPattern
{
    argument = undefined as JSVariableNameToken | undefined;
    arguments = undefined as JSDataFunctionArgumentsPattern | undefined;
    keyword = undefined as JSDataFunctionArrowKeywordToken | undefined;
    body = undefined as JSExpressionBinaryPattern | JSDataFunctionBodyPattern | undefined;

    properties = () => [
        'argument',
        'arguments',
        'keyword',
        'body',
    ];

    pattern = () => [
        {
            name: 'argument',
            required: false,
            element: JSVariableNameToken,
        }, {
            name: 'arguments',
            required: () => this.argument === undefined,
            disabled: () => this.argument != undefined,
            element: JSDataFunctionArgumentsPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'keyword',
            required: true,
            element: JSDataFunctionArrowKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'body',
            required: false,
            element: JSExpressionBinaryPattern,
        }, {
            name: 'body',
            required: () => this.body === undefined,
            disabled: () => this.body != undefined,
            element: JSDataFunctionBodyPattern,
        },
    ];
};
