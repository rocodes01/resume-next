import "tailwindcss/tailwind.css";
import "../styles/index.scss";
import "../styles/card.scss";
interface Props {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}

export default MyApp;
