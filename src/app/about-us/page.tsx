import Image from "next/image";
import community from "../../../public/community.png";
import teensWithMentor from "../../../public/teensWithMentor.png";
import motherWithChild from "../../../public/motherWithChild.png";
import transparent from "../../../public/transparent.png";
import friends from "../../../public/friends.png";

export default function AboutUs() {
  return (
    <div className="mt-6 text-start mx-6 font-lato text-lg lg:text-3xl text-[#2C2C6D]">
      <h1 className="text-3xl lg:text-4xl font-bold text-[#2C2C6D] font-montserrat text-center mb-4 md:hidden">
        ABOUT US
      </h1>
      <div
        className="flex flex-col align-middle justify-center bg-[url('/friends-mobile.png')] md:hidden
                        bg-cover bg-center bg-no-repeat h-78 mx-8 rounded-2xl"
      >
        <div className="h-35 bg-[#16161673] rounded-2xl mt-auto text-center">
          <p className="mt-4 text-[#FDF10B] font-bold ">
            Our Mission and Approach to Building a stronger Bradford community.
          </p>
        </div>
      </div>
      <div className="hidden md:flex gap-4">
        <div className="text-center self-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#2C2C6D] font-montserrat text-center mb-4 ">
            ABOUT US
          </h1>
          <h2 className="mt-4 font-bold text-2xl">
            Our Mission and Approach to Building a stronger Bradford community.
          </h2>
        </div>
        <Image
          src={friends}
          alt="Two friends talking"
          height={550}
          className="rounded-tl-4xl rounded-bl-4xl lg:ml-auto"
        />
      </div>
      <h2 className="text-3xl lg:text-4xl font-bold  font-montserrat text-center my-4 md:text-start">
        OUR MISSION
      </h2>
      <p className="mt-4 font-normal font-lato ">
        We are proud to call Bradford home - a city of resilience diversity and
        potential. Yet too many of our neighbours still face barriers that limit
        opportunity. Poverty, poor health, and lack of safe spaces for growth.
      </p>
      <br />
      <p className=" font-normal ">
        Our Bradford exists when communities are empowered to tackle a symptom
        of social disadvantage through direct community engagement, not by
        speaking for people, but by working alongside them.
      </p>
      <br />
      <p>
        At its core, our mission is simple: to build a Bradford where no one is
        left behind, and where every resident can thrive as a valued member of
        community.
      </p>
      <h3 className="text-3xl lg:text-4xl font-bold  font-montserrat text-center my-4 md:text-start">
        OUR APPROACH
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <Image src={community} alt="Teenagers having fun in the community" />
          <h6 className="font-montserrat font-bold ">COMMUNITY LED</h6>
          <p className="font-lato text-md md:text-xl mb-4">
            Projects shaped by lived experience.
          </p>
        </div>
        <div className="text-center">
          <Image
            src={teensWithMentor}
            alt="Teenagers collaborating with their coach"
          />
          <h6 className="font-montserrat font-bold">COLLABORATIVE</h6>
          <p className="font-lato text-md md:text-xl mb-4">
            Working with schools, NHS, police, and local services.
          </p>
        </div>
        <div className="text-center">
          <Image src={motherWithChild} alt="A mother teaching her child" />
          <h6 className="font-montserrat font-bold">TRANSPARENT</h6>
          <p className="font-lato text-md md:text-xl mb-4">
            Projects shaped by lived experience.
          </p>
        </div>
        <div className="text-center">
          <Image
            src={transparent}
            alt="Teenagers from all backgrounds hanging out"
          />
          <h6 className="font-montserrat font-bold">INCLUSIVE</h6>
          <p className="font-lato text-md md:text-xl mb-4">
            Projects shaped by lived experience.
          </p>
        </div>
      </div>
    </div>
  );
}
