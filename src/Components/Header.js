import React from "react";
import { useState } from "react";
// import Skill from "./Skill";
import { MdDarkMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

import { Navbar, NavbarComponentProps } from "flowbite-react";
import { Theme } from "@/Store/Index";

export const Nee = () => {
  const Changetheme = useSelector((state) => state.theme.value);
  // console.log(Changetheme);

  const dispatch = useDispatch();

  const faruk = "<Faruk />";

  const HandleChangeTheme = () => {
    dispatch(
      Theme({
        color: "#121212",
        text: "white",
        button: "white",
        // dark: true,
        // HeaderColor:{}
      })
    );
  };

  const DefaultTheme = () => {
    dispatch(
      Theme({
        color: "white",
        text: "black",
        dark: true,
      })
    );
  };
  return (
    <Navbar
      // fluid={true}
      // rounded={true}
      className="fixed px-2 sm:px-10 md:border-b-2 border-b-[0.4vh]  md:px-28 dark:bg-gray-900 w-full z-20 top-0 left-0  border-gray-200 dark:border-gray-600"
    >
      {/* <div className="flex"> */}
      <Navbar.Brand className="no-underline">
        <span className="self-center whitespace-nowrap text-2xl text-[#2978b5] font font-semibold dark:text-white ">
          {faruk}
        </span>
      </Navbar.Brand>

      <div className="md:ml-[50vh] md:mt-3 mt-2 ml-[20vh]">
        {Changetheme.dark ? (
          <button onClick={HandleChangeTheme} className="text-xl text-black">
            <MdDarkMode />
          </button>
        ) : (
          <button onClick={DefaultTheme} className="text-xl text-black">
            <MdDarkMode />
          </button>
        )}
      </div>
      <Navbar.Toggle />
      {/* </div> */}
      <Navbar.Collapse>
        {/* <div className=""> */}
        <Navbar.Link
          href="#Home"
          // active={true}
          className="text-[#2978b5] md:text-md"
        >
          Home
        </Navbar.Link>
        {/* <Navbar.Link
          // as={
          //   {
          //     // $$typeof: Symbol(react.forward_ref),
          //     // render: LinkWithRef,
          //   }
          // }
          to="/navbars"
          className="text-[#2978b5] hover:text-blue-300 md:text-md"
        >
          Home
        </Navbar.Link> */}
        <Navbar.Link
          href="#Skills"
          className="text-[#2978b5] md:text-md hover:text-blue-300"
        >
          Skills
        </Navbar.Link>
        <Navbar.Link href="#Projects" className="text-[#2978b5] md:text-md">
          Projects
        </Navbar.Link>
        <Navbar.Link href="#Contact" className="text-[#2978b5] md:text-md">
          Contact
        </Navbar.Link>
        {/* </div> */}
      </Navbar.Collapse>
    </Navbar>
  );
};
