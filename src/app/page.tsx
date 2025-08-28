import Image from "next/image";
import { NavBar } from "./components/NavBar/NavBar";
import BoxingMobile from "../../public/boxing-mobile.png";
import BoxingDesktop from "../../public/boxing.png";

export default function Home() {
  return (
    <div className=" min-h-screen p-2">
      <main className="flex flex-col mt-4 pl-2">
        <div className="flex">
          <div className="md:mt-15">
            <h1 className="font-montserrat text-4xl md:text-6xl font-extrabold">
              YOUTH <br /> CENTER <br /> EXPANSION <br /> FUNDING
            </h1>
            <Image
              src={BoxingMobile}
              alt="Boxing activity"
              className="absolute top-26 right-4 rounded-lg md:hidden"
            />

            <p className="mt-4 font-lato font-medium text-xl md:text-2xl">
              Lorem ipsum dolor sit amet, <br /> consectetur alipiscing
            </p>
            <button className="mt-6 bg-[#fdf000] px-5 py-2 rounded-lg font-bold md:text-2xl">
              ABOUT US
            </button>
          </div>
          <Image
            src={BoxingDesktop}
            alt="Boxing activity"
            className=" top-30 right-4 rounded-lg hidden md:block h-120"
          />
        </div>

        <div className="mt-6">
          <h1 className="font-montserrat text-4xl md:text-6xl font-extrabold">
            OUR MISSION
          </h1>
          <p className="mt-4 font-lato font-medium text-xl md:text-2xl">
            Lorem ipsum dolor sit amgt, consectetur alipiscing elit. Mauris
            ultricies ries efficitur lorem ipsum.
          </p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
