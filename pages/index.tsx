import Head from "next/head";
import React from "react";
import Contact from "../Components/Contact/Index";
import Projects from "../Components/Projects/Index";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Rocodes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="app">
        <nav className="nav">
          <div className="logo">Rocodes</div>
          <div className="nav-items hidden">
            <span className="nav-items--link">Projects</span>
            <span className="nav-items--link">About</span>
          </div>
          {/* <div className="action">
            <button className="action-btn">Ping Me</button>
          </div> */}
        </nav>
        <div className="hero ml-12 pt-16">
          <p className="header-font font-bold">
            <span className="opacity-50">Hi,</span> I am{" "}
            <span className="text-blue-900">Rohit Singh</span>, A JavaScript
            Developer
          </p>
        </div>
        <div className="scroll flex justify-center">
          <p className="font-semibold rotate-90 text-xl ">scroll -----</p>
        </div>
        <Projects />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ducimus
        possimus nisi officia ab! Officia atque architecto ducimus labore nobis
        saepe id quae esse deserunt beatae tenetur quaerat hic rerum illum,
        ullam accusamus maxime ipsam, tempora repellat iste voluptas? Rerum,
        consequuntur quaerat aut quidem expedita harum porro sint nihil ex iure
        quos voluptates dolores velit aspernatur, similique praesentium
        reiciendis repellendus, sapiente impedit. Necessitatibus quos placeat
        alias ex possimus laudantium illo tenetur fugiat quibusdam rem et nemo
        commodi reprehenderit, voluptate dolorum! Inventore quae quis voluptatem
        minus. Iure reprehenderit dignissimos, consectetur, veritatis amet
        sequi, nulla sapiente exercitationem accusamus deserunt porro atque
        odit.
      </main>
      <Contact />
    </React.Fragment>
  );
}
