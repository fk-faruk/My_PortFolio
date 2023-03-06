import React from "react";
import { Card } from "flowbite-react";
import { Project } from "Portfolio";
import Image from "next/image";
import { CardBody, CardFooter } from "reactstrap";

import { BsBoxArrowInRight } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

const Projects = () => {
  const bgTheme = useSelector((state) => state.theme.value);

  return (
    <>
      <div
        className=""
        id="Projects"
        style={{
          color: bgTheme.text,
          backgroundColor: bgTheme.color,
        }}
      >
        <p className="pt-20 text-4xl font md:pl-32 pl-8">Projects </p>
        {/* <img src={Mage} alt=" " style={{ width: "20vh" }} /> */}
        {/* <Image src={Mage} alt="great resources" /> */}
        <div className="flex md:flex-row flex-col mx-8 gap-8 md:mx-32">
          {Project.map((single) => {
            return (
              // <div className="">
              <Card className="md:w-100">
                <Image
                  src={single.Image}
                  alt=""
                  className="w-full object-fill m-0"
                />
                <CardBody>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {single.name}
                  </h5>

                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {single.content}
                  </p>
                </CardBody>

                <CardFooter>
                  <button className="w-20 ">
                    <div className=" flex flex-row ">
                      <BsBoxArrowInRight
                        style={{ fontSize: "5vh" }}
                        className="hover:text-green-600"
                      />
                    </div>
                  </button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
