/** @format */

import React from "react";
import project from "./explanation";
import { useValue } from "../../../reducer/ValuePro";
import styles from "./HoverPage.module.css";
const HoverPage = () => {
  const value = useValue().alt;

  const selectedProjects = project.filter((pro) => pro.name === value);

  return (
    <>
      {value && (
        <div className={styles.fade}>
          {selectedProjects.map((project) => (
            <div key={project.name}>
              <p>{project.expl}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HoverPage;
