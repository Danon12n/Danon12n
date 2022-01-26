import React from "react";

import Title from "./components/Title/Title";
import SideMenu from "./components/SideMenu/SideMenu";
import WeaponList from "./components/WeaponList/WeaponList";


import styles from "./IWeaponCraft.module.scss"

const IWeaponCraft = () => {
    return (
        <div className={styles.main}>
            <Title/>
            <SideMenu/>
            <WeaponList/>
        </div>
    )
}


export default IWeaponCraft;