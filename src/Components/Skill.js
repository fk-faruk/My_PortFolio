import React from "react";
import { skills } from "Portfolio";
import { Row, col } from "reactstrap";
// import Icon from "react-icons/all";
import { RxVercelLogo } from "react-icons/rx";
import { FaNodeJs } from "react-icons/fa";

const Skill = () => {
  return (
    <div className=" mt-14" id="skill">
      <div className=" my-4 md:pl-32 ">
        <div className="">
          <p className="text-3xl font">Skills</p>
        </div>
        <div
          className="grid grid-cols-5 mt-4
        "
        >
          {skills.map((skill) => {
            return (
              <div>
                <div className="" style={{ fontSize: "6vh" }}>
                  {skill.fontAwesomeClassname}
                </div>
                <p className="text-xl font">{skill.skillName}</p>

                {/* <SingleSkill /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skill;

// const individual = () => {

//     return (

//     )
// }

const SingleSkill = () => {
  return (
    <div>
      <div className="">
        Python <RxVercelLogo />
      </div>
      <span></span>
    </div>
  );
};
