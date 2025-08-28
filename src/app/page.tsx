import Image from "next/image";
import { NavBar } from "./components/NavBar/NavBar";
import BoxingMobile from "../../public/boxing-mobile.png";
import BoxingDesktop from "../../public/boxing.png";

// bg-[url(../../public/boxing.png)] bg-no-repeat bg-contain bg-right
export default function Home() {
  return (
    <div className=" min-h-screen p-2">
      <NavBar />
      <main className="flex flex-col mt-8 pl-2">
        <div className="flex">
          <div className="md:mt-15">
            <h1 className="font-montserrat text-4xl md:text-6xl font-extrabold">
              YOUTH <br /> CENTER <br /> EXPANSION <br /> FUNDING
            </h1>
            <Image
              src={BoxingMobile}
              alt="Boxing activity"
              className="absolute top-30 right-4 rounded-lg md:hidden"
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
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
