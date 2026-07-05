import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class JSConditionBodyClosingQuoteToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '}',
    });
};
