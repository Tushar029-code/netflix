import React, { useState } from "react";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Section from "./Section";
import FaqSection from "./FaqSection";
import post from "../Javascrpit/post";
console.log(post);

export default function Home() {
  let [Status, setStatus] = useState([]);

  return (
    <>
      <Header />
      <Section />

      {post.map((v, i) => {
        return <FaqSection v={v} i={i} Status={Status} setStatus={setStatus} />;
        
      })}
      <Footer />
    </>
  );
}
