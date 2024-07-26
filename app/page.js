"use client";
import Head from 'next/head';
import BusinessEconomy from "./welcome/BusinessEconomy";
import Education from "./welcome/Education";
import Entertainment from "./welcome/Entertainment";
import Fashion from "./welcome/Fashion";
import HeroSlider from "./welcome/HeroSlider";
import Health from "./welcome/Health";
import Interviews from "./welcome/Interviews";
import Lifestyle from "./welcome/Lifestyle";
import News from "./welcome/News";
import Novella from "./welcome/Novella";
import Opinion from "./welcome/Opinion";
import Politics from "./welcome/Politics";
import PressRelease from "./welcome/PressRelease";
import Religion from "./welcome/Religion";
import Sports from "./welcome/Sports";
import Technology from "./welcome/Technology";
import SideBar from "./welcome/SideBar";
import Layout from "./layout/index";
import { Adverts } from "./assets/components";
import "./welcome/index.css";
import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    const resizePostListings = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth <= 770) return;
      const sideBarDiv = document.getElementById("my-side-bar");
      const postLists = document.getElementById("my-post-listing");
      let height = 0;
      for (let div of sideBarDiv.children) height += div.clientHeight;
      height += 150;
      postLists.style.height = `${height}px`;
    };

    setTimeout(resizePostListings, 4000);
  }, []); 

  return (
    <>
      <Head>
        <title>Welcome to Pacesetter Frontier</title>
        <meta name="description" content="Explore a wide range of topics including news, politics, entertainment, and more on our site." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <Layout>
        <HeroSlider />
        <div className="row">
          <div className="col-md-9 mt-5" id="my-post-listing">
            <News />
            <Adverts index={1} />
            <Politics />
            <Adverts index={2} />
            <Opinion />
            <Adverts index={3} />
            <PressRelease />
            <Adverts index={4} />
            <Entertainment />
          </div>
          <div className="col-md-3 p-md-4" id="my-side-bar">
            <SideBar />
          </div>
        </div>
        <div className="row m-auto my-5 px-2 w-75-lg">
          <div className="col-md-12">
            <Interviews />
          </div>
          <Adverts index={5} />
        </div>
        <div className="row m-auto my-5 px-2 w-75-lg">
          <div className="col-md-12">
            <Lifestyle />
          </div>
        </div>
        <div className="row my-5 px-2">
          <div className="col-md-6">
            <BusinessEconomy />
          </div>
          <div className="col-md-6">
            <Technology />
          </div>
        </div>
        <div className="row m-auto my-5 px-2 w-75-lg">
          <div className="col-md-12">
            <Education />
          </div>
        </div>
        <div className="row my-5 px-2">
          <div className="col-md-6">
            <Fashion />
          </div>
          <div className="col-md-6">
            <Novella />
          </div>
        </div>
        <div className="row m-auto my-5 px-2 w-75-lg">
          <div className="col-md-12">
            <Sports />
          </div>
        </div>
        <div className="row my-5 px-2">
          <div className="col-md-6">
            <Religion />
          </div>
          <div className="col-md-6">
            <Health />
          </div>
          <div className="col-md-10 offset-md-1">
            <Adverts index={5} />
          </div>
        </div>
      </Layout>
    </>
  );
}
