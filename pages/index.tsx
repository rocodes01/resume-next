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
        <div className="flex flex-wrap ml-12 h-80 w-3/4 md:4/5">
          <span className="text-3xl text-purple-300 self-end ">Hi, I'm </span>
          <p className="text-8xl text-white font-bold p-0 self-end">
            Rohit Singh
          </p>
          <span className="text-7xl text-gray-300 mt-8">
            A JavaScript Developer
          </span>
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
