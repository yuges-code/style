import JSDataStringPattern from "../../data/string/JSDataStringPattern";
import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSModuleImportIdentifiersPattern from "./identifiers/JSModuleImportIdentifiersPattern";
import JSModuleFromKeywordToken from "../../../tokens/module/from/keyword/JSModuleFromKeywordToken";
import JSModuleImportKeywordToken from "../../../tokens/module/import/keyword/JSModuleImportKeywordToken";

export default class JSModuleImportPattern extends AbstractParserPattern
{
    keyword = undefined as JSModuleImportKeywordToken | undefined;
    identifiers = undefined as JSModuleImportIdentifiersPattern | undefined;
    from = undefined as JSModuleFromKeywordToken | undefined;
    source = undefined as JSDataStringPattern | undefined;


    properties = () => [
        'keyword',
        'identifiers',
        'from',
        'source',
    ];

    pattern = () => [
        {
            name: 'keyword',
            required: true,
            element: JSModuleImportKeywordToken,
        }, {
            skip: /[\s]/,
            required: true,
        }, {
            name: 'identifiers',
            required: true,
            element: JSModuleImportIdentifiersPattern,
        }, {
            skip: /[\s]/,
            required: true,
        }, {
            name: 'from',
            required: true,
            element: JSModuleFromKeywordToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'source',
            required: true,
            element: JSDataStringPattern,
        },
    ];
};
