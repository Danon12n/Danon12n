const Notify = {
    state: {
        show: false,
        title: 'Внимание!',
        body: 'Нажмите &К& для остановки кей-капа',
        type: 'Error'
    },
    mutations: {
        showNotify: (state, payload)=>{
            state.show = true;
            state.title = payload[0];
            state.body = payload[1];
            state.type = payload[2]
            if(payload[3]){
                setTimeout(()=>{
                    state.show = false;
                }, payload[3])
            }else{
                setTimeout(()=>{
                    state.show = false;
                }, 3500)
                console.log('exit')
            }
        }
    },
    getters: {
        NotifyInfo(state){
            return state
        }
    }
}

export default Notify