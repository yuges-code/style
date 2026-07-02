import JSDataFunctionBodyPattern from "./body/JSDataFunctionBodyPattern";
import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSVariableNameToken from "../../../tokens/variable/name/JSVariableNameToken";
import JSDataFunctionArgumentsPattern from "./arguments/JSDataFunctionArgumentsPattern";
import JSDataFunctionKeywordToken from "../../../tokens/data/function/keyword/JSDataFunctionKeywordToken";

export default class JSDataFunctionPattern extends AbstractParserPattern
{
    keyword = undefined as JSDataFunctionKeywordToken | undefined;
    identifier = undefined as JSVariableNameToken | undefined;
    arguments = undefined as JSDataFunctionArgumentsPattern | undefined;
    body = undefined as JSDataFunctionBodyPattern | undefined;

    properties = () => [
        'keyword',
        'identifier',
        'arguments',
        'body',
    ];

    pattern = () => [
        {
            name: 'keyword',
            required: true,
            element: JSDataFunctionKeywordToken,
        }, {
            skip: /[\s]/,
            required: true,
        }, {
            name: 'identifier',
            required: false,
            element: JSVariableNameToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'arguments',
            required: true,
            element: JSDataFunctionArgumentsPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'body',
            required: true,
            element: JSDataFunctionBodyPattern,
        },
    ];
};
