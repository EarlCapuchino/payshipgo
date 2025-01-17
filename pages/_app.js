import "@/styles/globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Head } from 'next/head'
export default function App({ Component, pageProps }) {
  return (
  <>
  <Header/>
    <Component {...pageProps} />;
  <Footer/>
  </>
  )
}
