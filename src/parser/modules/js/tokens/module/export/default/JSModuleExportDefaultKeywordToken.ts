import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class JSModuleExportDefaultKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'default',
    });
};
