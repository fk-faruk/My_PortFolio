import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
// ;
// ;
// ;

const Icons = () => {
  return (
    <>
      <div className="flex flex-row gap-3">
        <Link href="https://github.com/fk-faruk">
          <div
            className="my-4 rounded-full bg-gray-900 hover:bg-gray-500"
            style={{ fontSize: "5vh" }}
          >
            <span className="" style={{ color: "white" }}>
              <AiFillGithub style={{ padding: "1vh" }} />
            </span>
          </div>
        </Link>

        {/* <div className="my-4 rounded-full bg-black" style={{ fontSize: "8vh" }}>
          <BsLinkedin />
        </div> */}

        <Link href="https://www.linkedin.com/in/faruk-taiwo-6790141a2/">
          <div
            className="my-4 rounded-full bg-blue-600 hover:bg-blue-400"
            style={{ fontSize: "5vh" }}
          >
            <span className="" style={{ color: "white" }}>
              <FaLinkedinIn style={{ padding: "1vh" }} />
            </span>
          </div>
        </Link>
        <Link href="https://www.twitter.com/farukblue5">
          <div
            className="my-4 rounded-full bg-blue-600 hover:bg-blue-400"
            style={{ fontSize: "5vh" }}
          >
            <span className="" style={{ color: "white" }}>
              <BsTwitter style={{ padding: "1vh" }} />
            </span>
          </div>
        </Link>

        {/* <div className="my-4 rounded-full bg-[red]" style={{ fontSize: "6vh" }}>
          <span className="" style={{ color: "white" }}>
            <SiGmail style={{ padding: "1vh" }} />
          </span>
        </div> */}
      </div>
    </>
  );
};

export default Icons;
