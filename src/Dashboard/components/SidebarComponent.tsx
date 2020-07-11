import React, {useState} from 'react';
import StyleObject from "../../utils/StyleObject";

export const SidebarComponent = () => {

    const [sidebarExpanded, expandSidebar] = useState(false);

    let sidebarStyle = new StyleObject()
        .setBoxShadow("0px 1px 8px 0px rgba(0,0,0,1)")
        .setWidth(sidebarExpanded ? "15%" : "5%")
        .setTransition("width", 0.3)
        .getStyle();

    return (
            <div style={sidebarStyle} onClick={() => {expandSidebar(!sidebarExpanded)}}></div>
    );
};

export default SidebarComponent;
