import JSNodePattern from "../../JSNodePattern";
import JSConditionIfPattern from "../if/JSConditionIfPattern";
import JSConditionBodyPattern from "../body/JSConditionBodyPattern";
import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSConditionElseKeywordToken from "../../../tokens/condition/else/keyword/JSConditionElseKeywordToken";

export default class JSConditionElsePattern extends AbstractParserPattern
{
    keyword = undefined as JSConditionElseKeywordToken | undefined;
    if = undefined as JSConditionIfPattern | undefined;
    body = undefined as JSConditionBodyPattern | JSNodePattern | undefined;
    else = undefined as JSConditionElsePattern | undefined;

    properties = () => [
        'keyword',
        'if',
        'body',
        'else',
    ];

    pattern = () => [
        {
            name: 'keyword',
            required: true,
            element: JSConditionElseKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'if',
            required: false,
            element: JSConditionIfPattern,
        }, {
            skip: /[\s]/,
            required: false,
            disabled: () => this.if != undefined,
        }, {
            name: 'body',
            required: false,
            disabled: () => this.if != undefined,
            element: JSConditionBodyPattern,
        }, {
            name: 'body',
            required: () => this.body === undefined && this.if === undefined,
            disabled: () => this.body != undefined || this.if != undefined,
            element: JSNodePattern,
        }, {
            skip: /[\s]/,
            required: false,
        },  {
            name: 'else',
            required: false,
            disabled: () => this.if === undefined,
            element: JSConditionElsePattern,
        },
    ];
};
