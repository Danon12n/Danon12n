
import React from "react";
import JobList from "./components/JobList/JobList";
import Intro from "./components/Intro/Intro";
import Animation from "./components/Animation/Animation";


import styles from "./IJobList.module.scss";


const IJobList = () => {
    console.log(window.location.href);
        return (
            <div className={styles.main}>
                <Intro/>
                <JobList/>
                <Animation/>
            </div>
        )
}

export default IJobList;