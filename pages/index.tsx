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
        <div className="scroll">
          <p>scroll -----</p>
        </div>
        <Projects />
      </main>
      <Contact />
    </React.Fragment>
  );
}
