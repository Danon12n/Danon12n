# suntrix

## Главное:
### Установка пакетов:
```
npm install
```

### Запуск сервера на локалке(localhost:8080):
```
npm run serve
```

### Сборка в прод:
```
npm run build
```

## Рабочие методы:

#### Изменение ссылки приложения:
```
app.changeUrl('/url') // где url - произвольная ссылка
```

### Как и обещал: теперь можно обращаться к хранилищу через  ```dispatch()``` ```state``` ```commit()``` ```getters```:
```
dispatch('названиеДействия', параметр)
state.названиеСтэйта
commit('названиеМутации', параметр)
getters.названиеГеттера
```

### Но и старый вид записи так же остался(если, он конечно интересен)
```
app.$store
app.$store.dispatch('USER__SAVE') // вызов действия
app.$store.state.userInfo // взятие данных из стэйта
app.$store.commit('НАЗВАНИЕ_МУТАЦИИ') // вызов мутаций, для взаимодействия со стейтом
```

# Готовое:
 ### RAF (Register Authorization Forgot)
 ### CC (Create Character)
 ### SCS (Select Character Spawn)

# В разработке или ожидании:
 ### SC (Select Character)
