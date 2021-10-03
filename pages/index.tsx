import Head from "next/head";

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
            <span className="nav-items--link">home</span>
          </div>
          <div className="action">
            <button className="action-btn">Ping Me</button>
          </div>
        </nav>
        <div className="flex items-center flex-wrap ml-12 h-96 w-1/3 mt-20 head">
          <h1 className="text-8xl text-black h1">
            Hi<span className="text-5xl">,</span>
          </h1>
          <h1 className="text-5xl text-purple-900 mt-8 font-bold name">
            I'm ROCODES
          </h1>
          <h1 className="text-8xl text-black js">A JavaScript Developer</h1>
        </div>

        <div className="placeholder flex justify-center mt-36">
          <h1 className="text-4xl font-bold animate-pulse">
            Rest Coming Up...
          </h1>
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}
