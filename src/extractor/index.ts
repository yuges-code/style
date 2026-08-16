import ParserTs from "@yuges/parser-ts";

function extract(content: string, type: string) {
    const classes = new Set();

    const parsed = ParserTs.parse(content, type as any)

    if (parsed.root) {
        console.log(parsed);
    }

    return classes;
}

const extractor = {
    extract: extract,
};

export default extractor;