import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Content1 from "@/Components/Content1";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Headin from "@/Components/Header";
import Skill from "@/Components/Skill";
// import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import { Project } from "Portfolio";
import { Card } from "flowbite-react";
import Footer from "@/Components/Footer";
import { BsBoxArrowInRight } from "react-icons/bs";
import { CardBody, CardFooter } from "reactstrap";
import { Def, Nee } from "@/Components/Header";
// import Mage from "../../public/vercel.svg";
// import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Headin /> */}
      <Nee />
      <Content1 />
      <Skill />

      <div className="">
        <p className="mt-20 text-4xl font md:pl-32 pl-8">Projects </p>
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
      <Contact />
      <Footer />

      {/* <Def /> */}
    </>
  );
}
