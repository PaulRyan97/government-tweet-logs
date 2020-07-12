import StyleObject from "../../utils/StyleObject";

export const ColumnHeaderStyle = new StyleObject()
    .setFontSize(24)
    .setFontWeight("bold")
    .setBoxShadow("0 4px 2px -2px gray")
    .setDisplay("flex")
    .setJustifyContent("center")
    .setAlignItems("center")
    .setHeight(60)
    .getStyle();

export const TwitterIconStyle = new StyleObject()
    .setColor("#00acee")
    .setMarginRight(5)
    .getStyle();