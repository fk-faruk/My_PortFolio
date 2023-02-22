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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Headin />
      <Content1 />
      <Skill />

      <div className="">
        <p className="mt-20 text-4xl font pl-32">Projects </p>
        <div className="flex flex-row gap-8 md:mx-32">
          {Project.map((single) => {
            return (
              <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {single.name}
                </h5>

                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {single.content}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
