import React from "react";

import styles from "./Title.module.scss"

export default class Title extends React.Component {
    render() {
        return (
            <section className={styles.title}>Крафт оружия</section>
        );
    }
}