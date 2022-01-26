import React from "react";
import { Outlet } from "react-router-dom";

export default class Title extends React.Component {
    render() {
        return (
            <div className="">
                <Outlet/>
            </div>
            
        )
    }
}