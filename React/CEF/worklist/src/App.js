import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { Route, Routes } from "react-router-dom";

import Layout from "./interfaces/Layout";
import IJobList from "./interfaces/JobList";
import IWeaponCraft from "./interfaces/IWeaponCraft";
import IAuthRegRest from "./interfaces/IAuthRegRest";

import "./styles/App.module.scss";
import Login from "./interfaces/IAuthRegRest/components/Login";
import Registration from "./interfaces/IAuthRegRest/components/Registration";
import RestorePassword from "./interfaces/IAuthRegRest/components/RestorePassword";

const routes = [
    { path: "/Auth/Login", name: "Login", component: Login },
    {
        path: "/Auth/Registration",
        name: "Registration",
        component: Registration,
    },
    {
        path: "/Auth/RestorePassword",
        name: "RestorePassword",
        component: RestorePassword,
    },
];

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className=''>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route
                                index
                                path='JobList'
                                element={<IJobList />}
                            />
                            <Route
                                path='WeaponCraft'
                                element={<IWeaponCraft />}
                            />
                            <Route path='Auth' element={<IAuthRegRest />}>
                                <Route path='Login' element={<Login />} />
                                <Route
                                    path='Registration'
                                    element={<Registration />}
                                />
                                <Route
                                    path='RestorePassword'
                                    element={<RestorePassword />}
                                />
                            </Route>
                        </Route>
                    </Routes>
                </div>
            </Provider>
        );
    }
}
