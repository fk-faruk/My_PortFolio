import React from "react";
import coding from "../Animation/coding.json";
import Anime from "./Anime";
import { greetings } from "Portfolio";
import Link from "next/link";
import { Hi } from "./Anime";
import Icons from "./Icons";

const Content1 = () => {
  return (
    <>
      <div className=" grid grid-cols-2 mt-10 background">
        <div className="md:mx-36  pt-28">
          <div className=" flex flex-row gap-1">
            <h4 className="text-3xl mt-2">{greetings.title}</h4>
            <Hi />
          </div>
          <p className="text-4xl">
            I'm <span className="text-[#2978b5]">Faruk Taiwo</span>
          </p>
          <p className="text-xl font">{greetings.description}</p>
          <Icons />
          {/* <button className=""><a></a>See ny resume</button> */}
          <Link href={greetings.resumeLink}>
            <button className="btn btn-dark">see my resume</button>
          </Link>
        </div>

        <div className="">
          <Anime />
          {/* <img src={coding} alt="sss" /> */}
        </div>
      </div>
    </>
  );
};

export default Content1;
