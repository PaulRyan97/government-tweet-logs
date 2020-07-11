import React, {useState} from 'react';
import StyleObject from "../../utils/StyleObject";
import ExpandIcon from "@material-ui/icons/LastPage"

export const SidebarComponent = () => {

    const [sidebarExpanded, expandSidebar] = useState(false);

    let sidebarStyle = new StyleObject()
        .setBoxShadow("0px 1px 8px 0px rgba(0,0,0,1)")
        .setWidth(sidebarExpanded ? 250 : 56)
        .setDisplay("flex")
        .setFlexDirection("column")
        .setTransition("width", 0.3)
        .getStyle();

    let expandButtonStyle = new StyleObject()
        .setDisplay("flex")
        .setAlignItems("center")
        .setMargin("auto 13px 13px")
        .getStyle();

    let expandIconStyle = new StyleObject()
        .setRotation(sidebarExpanded ? 180 : 0)
        .setFontSize(30)
        .setTransition("transform", 0.5)
        .getStyle();

    let textStyle = new StyleObject()
        .setWhiteSpace("nowrap")
        .setOpacity(sidebarExpanded ? 1 : 0)
        .setTransition("opacity", 0.2)
        .getStyle();


    return (
            <div style={sidebarStyle} onClick={() => {expandSidebar(!sidebarExpanded)}}>
                <div style={expandButtonStyle}>
                    <ExpandIcon style={expandIconStyle}/>
                    <span style={textStyle}>Collapse Sidebar</span>
                </div>
            </div>
    );
};

export default SidebarComponent;
