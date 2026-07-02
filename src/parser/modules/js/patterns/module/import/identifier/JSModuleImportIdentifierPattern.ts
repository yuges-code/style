import AbstractParserPattern from "../../../../../../abstracts/AbstractParserPattern";
import JSVariableNameToken from "../../../../tokens/variable/name/JSVariableNameToken";
import JSOperatorCommaToken from "../../../../tokens/operator/comma/JSOperatorCommaToken";
import JSModuleAsKeywordToken from "../../../../tokens/module/as/keyword/JSModuleAsKeywordToken";
import JSModuleAllKeywordToken from "../../../../tokens/module/all/keyword/JSModuleAllKeywordToken";

export default class JSModuleImportIdentifierPattern extends AbstractParserPattern
{
    identifier = undefined as JSVariableNameToken | undefined;
    all = undefined as JSModuleAllKeywordToken | undefined;
    as = undefined as JSModuleAsKeywordToken | undefined;
    alias = undefined as JSVariableNameToken | undefined;
    operator = undefined as JSOperatorCommaToken | undefined;

    properties = () => [
        'identifier',
        'all',
        'as',
        'alias',
        'operator',
    ];

    pattern = () => [
        {
            name: 'identifier',
            required: false,
            element: JSVariableNameToken,
        }, {
            name: 'all',
            required: () => this.identifier === undefined,
            disabled: () => this.identifier != undefined,
            element: JSModuleAllKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'as',
            required: () => this.all != undefined,
            element: JSModuleAsKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'alias',
            required: () => this.as != undefined,
            disabled: () => this.as === undefined,
            element: JSVariableNameToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'operator',
            required: false,
            element: JSOperatorCommaToken,
        },
    ];
};
