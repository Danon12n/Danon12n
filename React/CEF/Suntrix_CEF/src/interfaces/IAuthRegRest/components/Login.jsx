import React from "react";
import { NavLink } from "react-router-dom";
import CustomButton from "./CustomButton";

import styles from "../IAuthRegRest.module.scss";

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.root__reg__auth}>
                    <div className={styles.form}>
                        <div className={styles.form__wrapper}>
                            <div className={styles.form__title}>
                                <svg
                                    width='43'
                                    height='42'
                                    viewBox='0 0 43 42'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <rect
                                        y='11'
                                        width='9.25946'
                                        height='34.7916'
                                        rx='4.62973'
                                        transform='rotate(-30.1379 0 11)'
                                        fill='#23D2E2'
                                    />
                                    <path
                                        d='M29.6177 28.3244C28.4722 30.3703 25.5278 30.3703 24.3823 28.3244L15.6436 12.7155C14.5241 10.7158 15.9695 8.25 18.2613 8.25L35.7387 8.25C38.0305 8.25 39.4759 10.7158 38.3564 12.7155L29.6177 28.3244Z'
                                        fill='#615DFA'
                                    />
                                </svg>
                                <b>Авторизация</b>
                            </div>
                            <div className={styles.inputs__form}>
                                <div
                                    className={
                                        styles.input__form +
                                        " " +
                                        styles.login__from
                                    }
                                >
                                    <input type='text' id='login' />
                                    <div className={styles.label__immitate}>
                                        логин
                                    </div>
                                </div>
                                <div
                                    className={
                                        styles.input__form +
                                        " " +
                                        styles.password__from
                                    }
                                >
                                    <input />
                                    <div className={styles.label__immitate}>
                                        пароль
                                    </div>
                                    <svg
                                        width='23'
                                        height='14'
                                        viewBox='0 0 23 14'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M21.88 6.21L22.02 6.42V6.48L22.29 7.03L21.97 7.55V7.61L21.83 7.82L21.815 7.84073C21.6863 8.01898 21.5113 8.26135 21.29 8.55C20.6691 9.34538 19.9761 10.0818 19.22 10.75C17.0249 12.7821 14.1607 13.9385 11.17 14C8.19668 13.9263 5.3523 12.7708 3.17 10.75C2.37865 10.0834 1.65208 9.34339 1 8.54C0.778723 8.25138 0.603725 8.00903 0.475007 7.83078L0.46 7.81L0.32 7.6V7.54L0 7L0.42 6.45V6.39L0.56 6.18L0.575004 6.15922C0.703723 5.98097 0.878721 5.73862 1.1 5.45C1.72094 4.65462 2.41387 3.91817 3.17 3.25C5.3523 1.2292 8.19668 0.0736732 11.17 0C14.182 0.0575256 17.0666 1.22561 19.27 3.28C20.0261 3.94817 20.7191 4.68462 21.34 5.48C21.5613 5.76865 21.7363 6.01102 21.865 6.18927L21.88 6.21ZM17.9 9.25C18.5614 8.66374 19.1673 8.01767 19.71 7.32C19.7433 7.28006 19.7899 7.24233 19.8346 7.20608C19.9243 7.13343 20.0067 7.06671 19.96 7C19.89 6.9 19.81 6.8 19.71 6.68C19.1673 5.98233 18.5614 5.33626 17.9 4.75C16.0706 3.03783 13.675 2.05893 11.17 2C8.66504 2.05893 6.26941 3.03783 4.44 4.75C3.77835 5.33917 3.16938 5.98496 2.62 6.68L2.38 7L2.62 7.32C3.16938 8.01505 3.77835 8.66083 4.44 9.25C6.26941 10.9622 8.66504 11.9411 11.17 12C13.675 11.9411 16.0706 10.9622 17.9 9.25Z'
                                            fill='#BEC2D6'
                                        />
                                        <path
                                            d='M11.1699 10C12.8268 10 14.1699 8.65685 14.1699 7C14.1699 5.34315 12.8268 4 11.1699 4C9.51307 4 8.16992 5.34315 8.16992 7C8.16992 8.65685 9.51307 10 11.1699 10Z'
                                            fill='#BEC2D6'
                                        />
                                    </svg>
                                </div>
                            </div>
                            <button className={styles.main__button}>
                                Войти в аккаунт
                            </button>
                            <div className={styles.other__buttons}>
                                <NavLink
                                    style={{
                                        marginRight: "1.5657620041753653vw",
                                    }}
                                    to='/Auth/Registration'
                                >
                                    <CustomButton
                                        text='Создать аккаунт'
                                        hoverBG='#23d2e2'
                                        paddings='18px 50px'
                                        background='#23d2e2'
                                    ></CustomButton>
                                </NavLink>
                                <NavLink to='/Auth/RestorePassword'>
                                    <CustomButton
                                        text='Забыли пароль?'
                                        paddings='18px 50px'
                                        hoverBG='transparent'
                                        background='transparent'
                                        color='#a4a4c2'
                                        border='1px solid #eff0f6'
                                        hoverBorder='1px solid #eff0f6'
                                    ></CustomButton>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
