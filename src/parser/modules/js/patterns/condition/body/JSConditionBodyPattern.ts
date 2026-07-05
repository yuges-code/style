import JSNodeCollection from "../../../collections/JSNodeCollection";
import AbstractParserPattern from "../../../../../abstracts/AbstractParserPattern";
import JSConditionBodyClosingQuoteToken from "../../../tokens/condition/body/quote/JSConditionBodyClosingQuoteToken";
import JSConditionBodyOpeningQuoteToken from "../../../tokens/condition/body/quote/JSConditionBodyOpeningQuoteToken";

export default class JSConditionBodyPattern extends AbstractParserPattern
{
    openingQuote = undefined as JSConditionBodyOpeningQuoteToken | undefined;
    instructions = undefined as JSNodeCollection | undefined;
    closingQuote = undefined as JSConditionBodyClosingQuoteToken | undefined;

    properties = () => [
        'openingQuote',
        'instructions',
        'closingQuote',
    ];

    pattern = () => [
        {
            name: 'openingQuote',
            required: true,
            element: JSConditionBodyOpeningQuoteToken,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'instructions',
            required: false,
            element: JSNodeCollection,
        }, {
            skip: /[\s]/,
            required: false,
        }, {
            name: 'closingQuote',
            required: true,
            element: JSConditionBodyClosingQuoteToken,
        },
    ];
};
