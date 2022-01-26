import Vue from 'vue'
// import Notify from "@/store/modules/Notify";
// RAF + CC + CS module
const RAF =  {
    state: () => ({
        userInfo: {
            login: '',
            password: '',
            email: '',
            promo: ''
        },
        CreateCharacterSettings: {
            father: 0,
            mother: 0,
            gender: true,
            // facePARENTS
            sim: 0,
            pelt: 0,
            // face
            eyeScale: 0, //
            noseWidth: 0, //
            noseHeight: 0, //
            noseTipLength: 0, //
            noseDepth: 0, //
            noseTipHeight: 0, //
            noseBroke: 0, //
            eyebrowHeight: 0, //
            eyebrowDepth: 0, //
            cheekboneHeight: 0, //
            cheekboneWidth: 0, //
            cheekDepth: 0, //
            lipThickness: 0, //
            jawWidth: 0, //
            jawShape: 0, //
            chinHeight: 0, //
            chinDepth: 0, //
            chinWidth: 0, //
            chinIndent: 0, //
            neck: 0,//
            // HAIR
            hairM: 0,
            hairF: 0,
            eyebrows: 0,
            beard: 0, //
            hairColor: 0, //
            eyeColor: 0, //

            // INFO ARRAYS
            arrays: {
                mothers: [
                    {name: "Hannah", img: "https://i.imgur.com/AwndBO8.png"},
                    {name: "Aubrey", img: "https://i.imgur.com/9LDFnqN.png"},
                    {name: "Jasmine", img: "https://i.imgur.com/JbmEy2N.png"},
                    {name: "Gisele", img: "https://i.imgur.com/M4qoGP0.png"},
                    {name: "Amelia", img: "https://i.imgur.com/sOAo1aC.png"},
                    {name: "Isabella", img: "https://i.imgur.com/cMCYtrO.png"},
                    {name: "Zoe", img: "https://i.imgur.com/5fOVew6.png"},
                    {name: "Ava", img: "https://i.imgur.com/zCtlWjJ.png"},
                    {name: "Camila", img: "https://i.imgur.com/NSnAUQX.png"},
                    {name: "Violet", img: "https://i.imgur.com/zvl8NCt.png"},
                    {name: "Sophia", img: "https://i.imgur.com/JHkgUvv.png"},
                    {name: "Evelyn", img: "https://i.imgur.com/KNCguZI.png"},
                    {name: "Nicole", img: "https://i.imgur.com/El9D7oF.png"},
                    {name: "Ashley", img: "https://i.imgur.com/WIg420a.png"},
                    {name: "Gracie", img: "https://i.imgur.com/dfFyS6w.png"},
                    {name: "Brianna", img: "https://i.imgur.com/jFT55Tz.png"},
                    {name: "Natalie", img: "https://i.imgur.com/PjAQBia.png"},
                    {name: "Olivia", img: "https://i.imgur.com/bXufjcr.png"},
                    {name: "Elizabeth", img: "https://i.imgur.com/F9Py3k5.png"},
                    {name: "Charlotte", img: "https://i.imgur.com/9C6lKt4.png"},
                    {name: "Emma", img: "https://i.imgur.com/RIyHcO2.png"},
                    {name: "Misty", img: "https://i.imgur.com/lhdykeo.png"},
                ],
                fathers: [
                    {name: "Benjamin", img: "https://i.imgur.com/veWEdbu.png"},
                    {name: "Daniel", img: "https://i.imgur.com/wwQRgVm.png"},
                    {name: "Joshua", img: "https://i.imgur.com/XBjPqsK.png"},
                    {name: "Noah", img: "https://i.imgur.com/3Ze3Rzo.png"},
                    {name: "Andrew", img: "https://i.imgur.com/Wd1Fyku.png"},
                    {name: "Juan", img: "https://i.imgur.com/9SvX7KH.png"},
                    {name: "Alex", img: "https://i.imgur.com/6efPluR.png"},
                    {name: "Isaac", img: "https://i.imgur.com/sb3gzCs.png"},
                    {name: "Evan", img: "https://i.imgur.com/6U2lmgv.png"},
                    {name: "Ethan", img: "https://i.imgur.com/H34yXK7.png"},
                    {name: "Vincent", img: "https://i.imgur.com/HojOGgR.png"},
                    {name: "Angel", img: "https://i.imgur.com/DPvgLTo.png"},
                    {name: "Diego", img: "https://i.imgur.com/8yuSgvk.png"},
                    {name: "Adrian", img: "https://i.imgur.com/iWah6UN.png"},
                    {name: "Gabriel", img: "https://i.imgur.com/us7HNR8.png"},
                    {name: "Michael", img: "https://i.imgur.com/DdeozuP.png"},
                    {name: "Santiago", img: "https://i.imgur.com/ms0bkVu.png"},
                    {name: "Kevin", img: "https://i.imgur.com/VG81K8Q.png"},
                    {name: "Louis", img: "https://i.imgur.com/4WHlizk.png"},
                    {name: "Samuel", img: "https://i.imgur.com/WvOFjLx.png"},
                    {name: "Anthony", img: "https://i.imgur.com/ffGs7QH.png"},
                    {name: "Claude", img: "https://i.imgur.com/wlUQbgh.png"},
                    {name: "Niko", img: "https://i.imgur.com/g1Az7re.png"},
                    {name: "John", img: "https://i.imgur.com/B9PVil0.png"},
                ],
            }
        },
        userInfo_global: {
            // третий слот
            vipSlot: true,
            // Отображение логина аккаунта
            login: null,
            // Имеющиеся коины на аккаунте
            coins: 0,
            // Массив персонажей
            characters: [
                // FIRST FREE-SLOT
                {
                    nick: 'Richard Scarpelli',
                    lvl: 1,
                    fraction: false,
                    cash: 3520550,
                    bank: 40000000,
                    exp:2,
                    maxEXP: 10,
                    ban: {
                        Active: true,
                        Reason: 'ИЗП',
                        Date: '27.11.2021',
                        Until: '30.11.2021',
                        ByAdmin: 'Richi_Networks',
                    },
                },
                //  SECOND FREE-SLOT
                {
                    nick: 'Richard_NETWORKS',
                    lvl: 1,
                    fraction: false,
                    cash: 3520550,
                    bank: 40000000,
                    exp:2,
                    maxEXP: 10,
                    ban: false,
                },
                // VIP-SLOT
                {
                    InfoCreate: -1
                },
            ],
            lastExit: true, // !false
            house: true, // !false
            fraction: true,// !false
        },
        // Глобальные настройки приложения
        APP__SETTINGS: {
            afterRAF_comp:false, // !-
            greetings: false,
            vipModal: {
                show: false,
                header: false,
                body: false,
                buttonText: false,
            },
            resetPass: 0
        },
    }),
    mutations: {
        //установка значений персонажа
        setCharsInfo: (state, payload) => {
            state.userInfo_global.lastExit = payload[0]
            state.userInfo_global.fraction = payload[1]
            state.userInfo_global.house = payload[2]
            // Vue.set(state.userInfo_global.characters, payload.index, payload.info)
        },
        // установка окна восстановления пароля commit('setCharsInfo', {index: 0, data: {sex: 1, gay: 2}})
        resetPassMutation: (state, payload) => {
            state.APP__SETTINGS.resetPass = payload
             window.mp.trigger('cefC::resetPassWindow', payload)
        },
        // установка показа модального окна "вип/удаление аккаунта"
        hideVipModal: (state, payload) => {
            if(payload === false){
                state.APP__SETTINGS.vipModal.show = !state.APP__SETTINGS.vipModal.show
            return;
            }
            state.APP__SETTINGS.vipModal.show = !state.APP__SETTINGS.vipModal.show
            state.APP__SETTINGS.vipModal = payload
        },
        setCharacterInfo: (state, payload) => {
            Object.assign(state.CreateCharacterSettings, payload)
        },
        // установка информации об аккаунте
        setAccountInfo: (state, payload) => {
            console.log(payload[0], payload[1])
            state.userInfo_global[payload[0]] = payload[1]
        },
        // установка полного userInfo
        setFull: (state, payload) => {
            state.userInfo_global = payload
            console.log('без парса / итог')
            console.log(payload)
        },
        // установка массива персонажей юзера
        setGlobalUserInfo: (state, payload) => {
            state.userInfo_global.characters = payload
        },
        // удаление персонажа из массива персонажей
        deleteCharacterFromArray: (state, payload) => {
            Vue.set(state.userInfo_global.characters, payload, {InfoCreate: -1})

        },
        buyVipSlot: (state) => {
            state.userInfo_global.characters[2].InfoCreate = -1
        },
        // смена приветствия справа снизу: "Вы вошли как..."
        CHANGE_GREETINGS: (state, payload) => {
            state.APP__SETTINGS.greetings = payload
        },
    },
    actions: {
        // Восстановление пароля
        USER__SAVE(store) {
            let userInfo = {
                login: store.state.userInfo.login,
            }
            if (!userInfo.login && userInfo.login.length < 4) {
                return store.commit('showNotify', ['Ошибка', 'Логин не соответствует формату или слишком длинный!', 'Error'])
            }
            window.mp.trigger('cefC::restorepass', 0, userInfo.login);
        },
        // Регистрация
        USER__REGISTER(store, returnPassword) {
            let userInfo = {
                login: store.state.userInfo.login,
                password: store.state.userInfo.password,
                email: store.state.userInfo.email,
                promo: store.state.userInfo.promo,
            }
            //  !validation
            if (!userInfo.login && userInfo.login.length < 4) {
                return store.commit('showNotify', ['Ошибка', 'Логин не соответствует формату или слишком длинный!', 'Error'])
            }
            if (!userInfo.password && userInfo.password.length < 4 && returnPassword !== userInfo.password) {
                return store.commit('showNotify', ['Ошибка', 'incorrect password не соответствует формату или слишком длинный!', 'Error'])
            }
            if (!userInfo.email && userInfo.email.length < 4) {
                return store.commit('showNotify', ['Ошибка', 'incorrect email не соответствует формату или слишком длинный!', 'Error'])
            } else {
                const validation = /^[\w-]+@[\w-]+\.[a-z]{2,4}$/i;
                if (!validation.test(userInfo.email)) {
                    return store.commit('showNotify', ['Ошибка', 'incorrect email не соответствует формату или слишком длинный!', 'Error'])
                }
            }
            // ЕСЛИ ВАЛИДАЦИЯ ПРОЙДЕНА
            window.mp.trigger('cefC::userStartRegister', JSON.stringify(userInfo));
        },
        // Логин
        USER__AUTH(store) {
            let userInfo = {
                login: store.state.userInfo.login,
                password: store.state.userInfo.password,
            }
            if (!userInfo.login && userInfo.login.length < 4) {

                return store.commit('showNotify', ['Ошибка', 'Логин не соответствует формату или слишком длинный!', 'Error'])
            }
            if (!userInfo.password && userInfo.password.length < 4) {
                return store.commit('showNotify', ['Ошибка', 'Пароль не соответствует формату или слишком длинный!', 'Error'])
            }


            window.mp.trigger('cefC::userInfoAuth', JSON.stringify(userInfo));
        },
        // Отправка новых изменений в настройках персонажа(создание)
        USER_NEW_CHARACTER_SETTINGS(store, info) {
            console.log(store)
            console.log(info)
            // МЕСТО ДЛЯ ТРИГГЕРА НА СМЕНУ ГЕНДЕРА, ОТЦА, КОЖИ и т.п
            // info.key - изменившийся ключ Пример: gender
            // info.val - значение изменения
             window.mp.trigger('cefC::editorList', info.key, info.val);
            console.log('FROM FAMILY-COMP', info.key, info.val)
        },
        // Спавн персонажа после нажатия на кнопку "Создать персонажа"
        CREATE__CHARACTER(store){
            let characterInfo = store.state.CreateCharacterSettings
            console.log(characterInfo)
            // Спавн персонажа после нажатия на кнопку "Создать персонажа"
            window.mp.trigger('cefC::CreateCharacter')
        },
        // Спавн персонажа после выбора спавна
        SPAWN__USER(store, where){
            console.log(store)
            console.log(where)
            window.mp.trigger('cefC::spawnChoice', where)
            // mp для спавна хуюзера
        },
        // Кастомный триггер
        CUSTOM__TRIGGER(store, data){
            console.log(store, data)
            window.mp.trigger(`cefC::${data.name}`, data.data);
        }
    },
    getters: {
        nowaible(store) {
            return {
                ...store.CreateCharacterSettings
            }
        },
        userInfoGetter(store){
            return [...store.userInfo_global.characters]
        }
    }
}

export default RAF
