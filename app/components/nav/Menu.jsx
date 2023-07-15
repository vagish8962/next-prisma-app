import React from "react";
import menuOptions from "./menuOptions.js";
import MenuItem from "./MenuItem"

function Menu() {
    console.log(menuOptions)
    return <>
        {
            menuOptions.map((menu, i) => {
                return <MenuItem label={menu.label} key={i} />
            })
        }
    </>
}

export default Menu;
