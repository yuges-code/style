import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class JSConditionIfKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'if',
    });
};
