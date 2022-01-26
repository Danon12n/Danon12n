import React from "react";

import { changeButtonLabel } from "../../slice";
import { useDispatch, useSelector } from "react-redux";

import dollar from "../../../../styles/img/svg/dollar-ico.svg"

import styles from "./JobList.module.scss"

const JobList = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.JobList.cards);

    return (
        <section className={styles.jobs_list}>
            <div className={styles.jobs_list__wrap}>
                {
                    cards.map(card => {
                        
                        return (
                            <div key={card.id} className={styles.jobs__card}>
                                <h2 className={styles.jobs__card__title}>
                                    {card.jobName}
                                </h2>
                                <p className={styles.jobs__card__level}>
                                    С {card.jobLevel} уровня
                                </p>
                                <p className={styles.jobs__card__desc1}>
                                    Каждый из нас понимает очевидную вещь: современная методология разработки создаёт необходимость 
                                </p>
                                <p className={styles.jobs__card__desc2}>
                                    Средний заработок:
                                </p>
                                <div className={styles.jobs__card__img}>
                                    <img src={dollar} alt="dollar"/>
                                    <p className={styles.jobs__card__money}>
                                    {" " + card.money}
                                    </p>
                                </div>
                                
                                <button
                                    type="submit" 
                                    className = {card.jobStatus ? styles.jobs__card__btn__employed : styles.jobs__card__btn}
                                    onClick={() => {dispatch(changeButtonLabel(card.id))}}
                                    >
                                    <p>
                                        <svg className={styles.jobs__card__btn__check__mark} xmlns="http://www.w3.org/2000/svg" fill={card.jobStatus ? "white" : "black"} width="16" height="16" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                                        {` ${card.jobStatus ? "Уволиться" : "Устроиться"}`}   
                                    </p>
                                </button>
                            </div>)
                    })
                }
            </div>
        </section>
    );
}


export default JobList;
