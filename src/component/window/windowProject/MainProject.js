/** @format */

import React from "react";
import SimpleSlider from "./SimpleSlider";
import HoverPage from "./HoverPage";
import styles from "./MainProject.module.css";
const MainProject = () => {
  return (
  <div className={styles.margin}>
      <SimpleSlider />
    <HoverPage />
    </div>
  );
};

export default MainProject;
