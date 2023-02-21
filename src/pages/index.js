import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Content1 from "@/Components/Content1";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Headin from "@/Components/Header";
import Skill from "@/Components/Skill";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Headin />
      <Content1 />
      <Skill />

      <div className="">
        <p className="mt-8 text-4xl font pl-32">Projects </p>
        <div className="flex flex-row gap-8 md:mx-32">
          {[1, 2, 4].map(() => {
            return <Projects />;
          })}
        </div>
      </div>
      <Contact />
    </>
  );
}
