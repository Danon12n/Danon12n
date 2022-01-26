import React from "react";

import Title from "./components/Title";
import { Outlet } from "react-router-dom";

import styles from "./IAuthRegRest.module.scss";

const IAuthRegRest = () => {
    return (
        <div className={styles.root__of__RAF}>
            <Title />
            <Outlet />
        </div>
    );
};

export default IAuthRegRest;
