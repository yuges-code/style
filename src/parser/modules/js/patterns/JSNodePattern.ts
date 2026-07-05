import JSLoopWhilePattern from "./loop/while/JSLoopWhilePattern";
import JSConditionIfPattern from "./condition/if/JSConditionIfPattern";
import JSModuleImportPattern from "./module/import/JSModuleImportPattern";
import JSModuleExportPattern from "./module/export/JSModuleExportPattern";
import AbstractParserPattern from "../../../abstracts/AbstractParserPattern";
import JSExpressionBinaryPattern from "./expression/binary/JSExpressionBinaryPattern";
import JSExpressionDeclarationPattern from "./expression/declaration/JSExpressionDeclarationPattern";

export default class JSNodePattern extends AbstractParserPattern
{
    morphs = () => [
        JSModuleImportPattern,
        JSModuleExportPattern,
        JSConditionIfPattern,
        JSExpressionDeclarationPattern,
        JSLoopWhilePattern,
        JSExpressionBinaryPattern,

        // for
        // switch
        // comment
    ];
};
