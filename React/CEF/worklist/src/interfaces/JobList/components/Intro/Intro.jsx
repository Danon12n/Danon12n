import React from "react";

import styles from "./Intro.module.scss"

export default class Intro extends React.Component {
  render() {
    return (
      <section className={styles.intro}>
        <h1 className={styles.intro__title}>Список работ</h1>
        <p className={styles.intro__subtitle}>
          Каждый из нас понимает очевидную вещь: современная методология
          разработки создаёт необходимость включения
        </p>
      </section>
    );
  }
}
