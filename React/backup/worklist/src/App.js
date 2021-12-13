import React from "react";
import Intro from "./components/JobList/Intro";
import JobList from "./components/JobList/JobList";
import Animation from "./components/JobList/Animation";
import './css/App.css'
import { Provider } from "react-redux";
import { store } from "./redux/store"



export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <Intro/>
          <JobList/>
          <Animation/>
        </div>
      </Provider>
    )
  }
}
