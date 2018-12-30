import React from "react";

import UIHolder from "../../hoc/UIHolder";

const layout = (props) => (
    <UIHolder>
        <div>Toolbar,SideDrawer,Backdrop</div>
        <main className="content">{props.children}</main>
    </UIHolder>
);

export default layout;
