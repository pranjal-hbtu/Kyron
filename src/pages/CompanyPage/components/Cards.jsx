import React from "react";
import iiitPng from "../assetes/iiitd.png";
import incPng from "../assetes/incubation.png";
import midasPng from "../assetes/midas.png";

function Card({ title, url, learn }) {
  return (
    <div className="flex-1 rounded bg-white hover:drop-shadow-xl hover:scale-105 explore-card shadow-lg flex flex-col p-4 m-2 sm:m-4">
      <div className="bg-white h-48 flex justify-center items-center">
        <img className="" src={url} alt="/" height={"100%"} width={"100%"} />
      </div>
      <div className="font-medium text-xl mb-2 sm:mb-4">{title}</div>
      <div className="flex-1 flex items-end justify-center">
        <button
          className="select-none font-sans font-bold text-center uppercase disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-[#B8FB3C] text-black shadow-md shadow-gray-900/10 hover:bg-black hover:text-white focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
          onClick={() => window.open(learn)}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

const Cards = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex flex-col items-center px-4 py-2 text-center md:py-6 md:px-8 lg:px-10 xl:max-w-5xl">
        <h1 className="my-6 text-3xl font-bold leading-tight sm:text-5xl">
          Collaborations
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <Card
            url={iiitPng}
            learn="https://iiitd.ac.in/"
            title="Indraprastha Institute of Information Technology (IIIT) Delhi"
          />
          <Card
            url={incPng}
            learn="https://iiitdic.in/"
            title="IIITD Innovation and Incubation Center"
          />
          <Card
            url={midasPng}
            learn="https://midas.iiitd.ac.in/"
            title="MIDAS: Multimodal Digital Media Analysis Lab"
          />
        </div>
      </div>
    </section>
  );
};

export default Cards;
