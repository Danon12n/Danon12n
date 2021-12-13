import React from "react";
import Intro from "./components/JobList/Intro";
import JobList from "./components/JobList/JobList";
import Animation from "./components/JobList/Animation";
import { Provider } from "react-redux";
import { store } from "./redux/store"

import './css/App.css'
// import './css/style.css'



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
