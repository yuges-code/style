import JSNodePattern from "../../JSNodePattern";
import JSConditionPattern from "../JSConditionPattern";
import JSConditionBodyPattern from "../body/JSConditionBodyPattern";
import JSConditionElsePattern from "../else/JSConditionElsePattern";
import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSConditionIfKeywordToken from "../../../tokens/condition/if/keyword/JSConditionIfKeywordToken";

export default class JSConditionIfPattern extends AbstractParserPattern
{
    keyword = undefined as JSConditionIfKeywordToken | undefined;
    condition = undefined as JSConditionPattern | undefined;
    body = undefined as JSConditionBodyPattern | JSNodePattern | undefined;
    else = undefined as JSConditionElsePattern | undefined;

    properties = () => [
        'keyword',
        'condition',
        'body',
        'else',
    ];

    pattern = () => [
        {
            name: 'keyword',
            required: true,
            element: JSConditionIfKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'condition',
            required: false,
            element: JSConditionPattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'body',
            required: false,
            element: JSConditionBodyPattern,
        }, {
            name: 'body',
            required: () => this.body === undefined,
            disabled: () => this.body != undefined,
            element: JSNodePattern,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'else',
            required: false,
            element: JSConditionElsePattern,
        },
    ];
};
