import StyleObject from "../../utils/StyleObject";

export const DashboardPageStyle = new StyleObject()
    .setHeight("100%")
    .setFlexGrow(1)
    .setPadding(20)
    .setDisplay("flex")
    .setJustifyContent("space-around")
    .setBackgroundImage("linear-gradient(to right, #88b8bdcc, #88b8bde6,#88b8bdcc)")
    .getStyle();

export const ColumnStyle = new StyleObject()
    .setHeight("100%")
    .setWidth("30%")
    .setMargin("0px 10px")
    .setOverflowY("auto")
    .setBorderRadius(12)
    .getStyle();