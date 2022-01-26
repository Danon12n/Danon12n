import React from "react";

import styles from "./Animation.module.scss"

export default class Animation extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.ellipse1}></div>
                <div className={styles.ellipse2}></div>
                <div className={styles.ellipse3}></div>
                <div className={styles.ellipse4}></div>
            </div>
        )
    }
}