import React from "react";
import coding from "../Animation/coding.json";
import Anime from "./Anime";
import { greetings } from "Portfolio";
import Link from "next/link";
import { Hi } from "./Anime";
import Icons from "./Icons";
import { useSelector, useDispatch } from "react-redux";

const Content1 = () => {
  const bgTheme = useSelector((state) => state.theme.value);

  // const dispatch = useDispatch();

  return (
    <>
      <div
        className=" grid sm:grid-cols-5  md:mt-10 background grid-cols-1 md:px-28 "
        id="Home"
        style={{
          color: bgTheme.text,
          backgroundColor: bgTheme.color,
        }}
      >
        <div className=" col-span-3  md:pt-28 mx-8 pt-20">
          <div className=" flex flex-row gap-1">
            <h4 className=" text-3xl md:text-4xl mt-2 font">
              {greetings.title}
            </h4>
            <Hi />
          </div>
          <p className="text-2xl md:text-4xl">
            I'm <span className="text-[#2978b5] font1">Faruk Taiwo</span>
          </p>
          <p
            className="text-xl md:text-2xl font1"
            style={{ color: bgTheme.text }}
          >
            {greetings.description}
          </p>
          <Icons />
          {/* <button className=""><a></a>See ny resume</button> */}
          <Link href={greetings.resumeLink} target={"_blank"}>
            <button
              className="btn btn-dark"
              style={{ backgroundColor: bgTheme.button, color: bgTheme.color }}
            >
              see my resume
            </button>
          </Link>
        </div>

        <div className="col-span-2 w-auto">
          <Anime />
          {/* <img src={coding} alt="sss" /> */}
        </div>
      </div>
    </>
  );
};

export default Content1;
