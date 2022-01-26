import React from "react";
import { NavLink } from "react-router-dom";

import styles from "../IAuthRegRest.module.scss";
import CustomButton from "./CustomButton";

export default class RestorePassword extends React.Component {
    render() {
        return (
            <div className={styles.forgot__password + " " + styles.root__reg__auth}>
                <div className={styles.form}>
                <div className={styles.form__wrapper + " " +  styles.reg__overflow}>
                <div className={styles.form__title}>
                    <img src="../../assets/RAF/img/gachi.gif" alt="" />
                    <b>Восстановление пароля</b>
                </div>
                <div className={styles.inputs__form}>
                    <div className={styles.input__form + " " +  styles.login__from}>
                    <input
                        type="text"
                        id="login"
                    />
                    <div className={styles.label__immitate}>Логин</div>
                    </div>
                </div>
                <button className={styles.main__button}>Восстановить</button>
                {/* <main-button @click.native="$store.dispatch('USER__SAVE')" :hoverBG="'#615DFA'">Восстановить</main-button> */}
                <div className={styles.other__buttons}>
                    <NavLink to="/Auth/Login"><CustomButton text="Назад" paddings="18px 41px" color="#a4a4c2" hoverBorder="1px solid #eff0f6" border="1px solid #eff0f6" background="transparent"></CustomButton></NavLink>
                    {/* <main-button  "></main-button> */}
                </div>
                </div>


                <div  className={styles.resetPassWindow + " " +  styles.form__wrapper}>
                <div className={styles.form__title}>
                    <b>Восстановление пароля</b>
                    <p>Код восстановения был отправлен на почту привязанную к этому аккаунту</p>
                </div>
                <div className={styles.inputs__form}>
                    <div className={styles.input__form + " " +  styles.password__from}>
                    <input type="text" placeholder="Введите код" maxLength="6"/>
                    </div>
                    <div className={styles.buttons}>
                        
                    {/* :hoverBG="code.length === 6 ? '#615DFA' : '#FBFBFF'" :background="code.length === 6 ? '#615DFA' : '#FBFBFF'" :color="code.length === 6 ? 'white' : '#a4a4c2'">Далее
                    margin-top: 10px;"  :paddings="'18px 41px'" :background="'transparent'"  :border="'1px solid #EFF0F6'"  :hoverBorder="'1px solid rgba(164, 164, 194, .25)'" :color="'#a4a4c2'" @click.native="windowBoot = 0">Назад< */}
                    </div>
                </div>
                </div>



                </div>
            </div>
        )
    }
}