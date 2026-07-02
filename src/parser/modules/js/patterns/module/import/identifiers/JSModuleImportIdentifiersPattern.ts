import AbstractParserPattern from "../../../../../../abstracts/AbstractParserPattern";
import JSModuleImportIdentifierPattern from "../identifier/JSModuleImportIdentifierPattern";
import JSDataObjectOpeningQuoteToken from "../../../../tokens/data/object/quote/JSDataObjectOpeningQuoteToken";
import JSDataObjectClosingQuoteToken from "../../../../tokens/data/object/quote/JSDataObjectClosingQuoteToken";
import JSModuleImportIdentifierCollection from "../../../../collections/module/import/identifier/JSModuleImportIdentifierCollection";

export default class JSModuleImportIdentifiersPattern extends AbstractParserPattern
{
    openingQuote = undefined as JSDataObjectOpeningQuoteToken | undefined;
    values = undefined as JSModuleImportIdentifierCollection | JSModuleImportIdentifierPattern | undefined;
    closingQuote = undefined as JSDataObjectClosingQuoteToken | undefined;

    properties = () => [
        'openingQuote',
        'values',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'openingQuote',
            required: false,
            element: JSDataObjectOpeningQuoteToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'values',
            required: true,
            element: () => this.openingQuote === undefined
                ? JSModuleImportIdentifierPattern
                : JSModuleImportIdentifierCollection,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'closingQuote',
            required: () => this.openingQuote != undefined,
            disabled: () => this.openingQuote === undefined,
            element: JSDataObjectClosingQuoteToken,
        },
    ];
};
