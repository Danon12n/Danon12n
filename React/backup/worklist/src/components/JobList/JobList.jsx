import React from "react";

import { changeButtonLabel } from "../../redux/JobListReducer";
import { useDispatch, useSelector } from "react-redux";

import dollar from "../../css/img/svg/dollar-ico.svg"
import '../../css/App.css'

const JobList = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.JobList.cards);

    return (
        <section className="jobs_list">
            <div className="jobs_list__wrap">
                {
                    cards.map(card => {
                        
                        return (
                            <div key={card.id} className="jobs__card">
                                <h2 className="jobs__card-title">
                                    {card.jobName}
                                </h2>
                                <p className="jobs__card-level">
                                    С {card.jobLevel} уровня
                                </p>
                                <p className="jobs__card-desc1">
                                    Каждый из нас понимает очевидную вещь: современная методология разработки создаёт необходимость 
                                </p>
                                <p className="jobs__card-desc2">
                                    Средний заработок:
                                </p>
                                <div className="jobs__card-img">
                                    <img src={dollar} alt="dollar"/>
                                </div>
                                <p className="jobs__card-money">
                                    {" " + card.money}
                                </p>
                                <button
                                    type="submit" 
                                    className = {card.jobStatus ? "jobs__card-btn-employed" : "jobs__card-btn"}
                                    onClick={() => {dispatch(changeButtonLabel(card.id))}}
                                    >
                                    <p>
                                        <svg className="jobs__card-btn-check-mark" xmlns="http://www.w3.org/2000/svg" fill={card.jobStatus ? "white" : "black"} width="16" height="16" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
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
