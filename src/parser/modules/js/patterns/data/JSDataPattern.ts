import JSDataNullPattern from "./null/JSDataNullPattern";
import JSDataArrayPattern from "./array/JSDataArrayPattern";
import JSDataStringPattern from "./string/JSDataStringPattern";
import JSDataNumberPattern from "./number/JSDataNumberPattern";
import JSDataObjectPattern from "./object/JSDataObjectPattern";
import JSDataBooleanPattern from "./boolean/JSDataBooleanPattern";
import JSDataFunctionPattern from "./function/JSDataFunctionPattern";
import JSDataUndefinedPattern from "./undefined/JSDataUndefinedPattern";
import AbstractParserPattern from "../../../../abstracts/AbstractParserPattern";

export default class JSDataPattern extends AbstractParserPattern
{
    morphs = () => [
        JSDataStringPattern,
        JSDataNumberPattern,
        JSDataArrayPattern,
        JSDataNullPattern,
        JSDataBooleanPattern,
        JSDataUndefinedPattern,
        JSDataObjectPattern,
        JSDataFunctionPattern,

        // Class
    ];
};
