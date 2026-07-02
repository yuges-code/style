import AbstractParserToken from "../../../../../../abstracts/AbstractParserToken";

export default class JSModuleExportKeywordToken extends AbstractParserToken
{
    rules = () => ({
        start: () => true,
        final: () => false,
        symbol: () => true,
        lexeme: () => 'export',
    });
};
