import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    haveJob: false,
    cards: [ 
        {id: 0, jobName: "Строитель", jobLevel: "2", money: "1 500", color: "black", jobStatus: false },
        {id: 1, jobName: "Каменщик", jobLevel: "2", money: "3 000", color: "black", jobStatus: false },
        {id: 2, jobName: "Грузчик", jobLevel: "2", money: "6 000", color: "black", jobStatus: false },
        {id: 3, jobName: "Механик", jobLevel: "2", money: "10 000", color: "black", jobStatus: false },
        {id: 4, jobName: "Инкасатор", jobLevel: "2", money: "15 000", color: "black", jobStatus: false },
        {id: 5, jobName: "Механик", jobLevel: "2", money: "10 000", color: "black", jobStatus: false },
        {id: 6, jobName: "Инкасатор", jobLevel: "2", money: "15 000", color: "black", jobStatus: false },
    ]
};

export const changeButtonLabel = createAction('CHANGEBUTTONLABEL');

export default createReducer(initialState, {
    [changeButtonLabel]: (state, id) => {
        state.cards.map(card => {
            if (card.id === id.payload) {
                if (!card.jobStatus && !state.haveJob) {
                    card.jobStatus = true;
                    state.haveJob = true;
                    return 0;
                }
                if (card.jobStatus && state.haveJob){
                    card.jobStatus = false;
                    state.haveJob = false;
                }
                
            }
            return 0;
        })
    }

})

