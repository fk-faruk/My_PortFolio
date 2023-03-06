import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import Content1 from "@/Components/Content1";

import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Headin from "@/Components/Header";
import Skill from "@/Components/Skill";
import Projects from "@/Components/Projects";
import Contact from "@/Components/Contact";
import { Project } from "Portfolio";
import { Card } from "flowbite-react";
import Footer from "@/Components/Footer";
// import { BsBoxArrowInRight } from "react-icons/bs";

import { Def, Nee } from "@/Components/Header";
// import Mage from "../../public/vercel.svg";
// import Image from "next/image";
import Store from "@/Store/Store";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const bgTheme = useSelector((state) => state.theme);
  return (
    <Provider store={Store}>
      <>
        {/* <Headin /> */}
        <Nee />
        <Content1 />
        <Skill />

        <Projects />
        <Contact />
        <Footer />

        {/* <Def /> */}
      </>
    </Provider>
  );
}
