import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class JSConditionElseKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'else',
    });
};
