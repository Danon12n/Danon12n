import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
];

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <div className='container'>
                    {routes.map(({ path, Component }) => (
                        <Route key={path} exact path={path}>
                            {({ match }) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    classNames='page'
                                    unmountOnExit
                                >
                                    <div className='page'>
                                        <Component />
                                    </div>
                                </CSSTransition>
                            )}
                        </Route>
                    ))}
                </div>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
