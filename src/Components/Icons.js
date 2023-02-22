import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
// ;
// ;
// ;

const Icons = () => {
  return (
    <>
      <div className="flex flex-row gap-3">
        <div className="my-4 rounded-full bg-black" style={{ fontSize: "6vh" }}>
          <span className="" style={{ color: "white" }}>
            <AiFillGithub style={{ padding: "1vh" }} />
          </span>
        </div>

        {/* <div className="my-4 rounded-full bg-black" style={{ fontSize: "8vh" }}>
          <BsLinkedin />
        </div> */}

        <div
          className="my-4 rounded-full bg-[blue]"
          style={{ fontSize: "6vh" }}
        >
          <span className="" style={{ color: "white" }}>
            <FaLinkedinIn style={{ padding: "1vh" }} />
          </span>
        </div>

        <div
          className="my-4 rounded-full bg-[blue]"
          style={{ fontSize: "6vh" }}
        >
          <span className="" style={{ color: "white" }}>
            <BsTwitter style={{ padding: "1vh" }} />
          </span>
        </div>

        <div className="my-4 rounded-full bg-[red]" style={{ fontSize: "6vh" }}>
          <span className="" style={{ color: "white" }}>
            <SiGmail style={{ padding: "1vh" }} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Icons;
