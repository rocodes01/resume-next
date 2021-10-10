import Head from "next/head";
import Contact from "../Components/Contact/Index";

export default function Home() {
  return (
    <div className="">
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
        <div className=" ml-12 mt-16 ">
          <p className="header-font font-bold">
            <span className="opacity-50">Hi,</span> I am{" "}
            <span className="text-blue-900">Rohit Singh</span>, A JavaScript
            Developer
          </p>
        </div>
      </main>

      <footer className="">
        <div className="absolute bottom-4 w-full text-center">
          <h1 className="text-3xl font-bold animate-pulse">
            Rest Coming Up...
          </h1>
        </div>
      </footer>
      <Contact />
    </div>
  );
}
