import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class JSModuleAllKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => '*',
    });
};
