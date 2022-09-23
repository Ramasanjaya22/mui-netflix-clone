import { useState } from "react";
import Header from "../components/Page/Home/Header";
import Features from "../components/Page/Home/Features";
import FAQ from "../components/Page/Home/FAQ";
import Footer from "../components/Page/Home/Footer";
import LoginModal from "../components/Page/Home/LoginModal";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header OpenModal={() => setOpen(true)} />
      <Features />
      <FAQ />
      <Footer />
      <LoginModal open={open} CloseModal={() => setOpen(false)} />
    </>
  );
}
