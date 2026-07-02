import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class JSModuleAsKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'as',
    });
};
