import {
  EmojiFoodBeverageRounded,
  FitnessCenterRounded,
  LocalLibraryRounded,
  RealEstateAgentRounded,
} from "@mui/icons-material";
import Image from "next/image";
import cayaking from "../../../public/cayaking.png";
import youthFitness from "../../../public/youthFitness.png";
import office from "../../../public/office.png";
import caffe from "../../../public/caffe.png";
import ImpactCarousel from "../components/Carousel/Carousel";

export default function Impact() {
  return (
    <div className="lg:mx-45 xl:mx-58">
      <div className="bg-[#474194] mx-4 rounded-b-2xl mt-4 font-lato text-lg lg:text-3xl text-[#2C2C6D] p-8">
        <h1 className="text-2xl lg:text-4xl font-bold text-white font-montserrat ">
          WHAT WE&apos;VE DONE
        </h1>
        <p className="text-white ">
          &quot;The team at Our Bradford have built a foundation for endless
          impact and social development. I can&apos;t wait to see what they do
          next.&quot;
        </p>
        <p className="mt-4 text-white">- Community Leader</p>
      </div>
      <h2 className="text-2xl lg:text-4xl font-bold text-[#2C2C6D] font-montserrat text-center mt-4 mx-3">
        OUR APPROACH TO IMPACT
      </h2>
      <p className="text-center md:text-lg mx-4">
        When we set out to design our first programmes, we asked a simple
        question:
        <br />
        <span className="font-bold">
          What are the most urgent barriers holding Bradford’s communities back,
          and how can we address them in practical, immediate ways?
        </span>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center align-middle gap-2 mx-4 font-montserrat text-sm md:text-md lg:text-lg font-bold mt-2">
        <div className=" bg-[#f3f8fd] text-center flex flex-col p-3">
          <div className="bg-[#FDF10B] p-4 w-fit rounded-4xl mx-auto">
            <EmojiFoodBeverageRounded fontSize="large" />
          </div>
          <p className=" mt-2 text-lg">FOOD & SOCIAL CONNECTION</p>
          <p className="font-normal font-lato text-lg">
            The need for safe, affordable food and social connection.
          </p>
        </div>
        <div className=" bg-[#f3f8fd] flex flex-col text-center p-3 w-full">
          <div className="bg-[#FDF10B] p-4 w-fit rounded-4xl mx-auto">
            <RealEstateAgentRounded fontSize="large" />
          </div>
          <p className=" mt-2 text-lg">YOUTH SPACES FACILITIES</p>
          <p className="font-normal font-lato text-lg">
            The need for Positive spaces for young people to reduce anti-social
            behaviour.
          </p>
        </div>
        <div className=" bg-[#f3f8fd] flex flex-col text-center p-3">
          <div className="bg-[#FDF10B] p-4 w-fit rounded-4xl mx-auto">
            <FitnessCenterRounded fontSize="large" />
          </div>
          <p className=" mt-2 text-lg">FITNESS & CONFIDENCE</p>
          <p className="font-normal font-lato text-lg">
            The need for accessible ways to build health, confidence, and
            discipline.
          </p>
        </div>
        <div className=" bg-[#f3f8fd] flex flex-col text-center p-3">
          <div className="bg-[#FDF10B] p-4 w-fit rounded-4xl mx-auto">
            <LocalLibraryRounded fontSize="large" />
          </div>
          <p className="mt-2 text-lg">LEARNING & DIGITAL ACCESS</p>
          <p className="font-normal font-lato text-lg">
            The need for learning hubs to improve skills, digital access, and
            civic awareness.
          </p>
        </div>
      </div>
      <p className="font-lato text-xl mx-4 mt-4">
        That is why our first wave of Initiatives have focused on{" "}
        <span className="font-bold">food, youth, fitness, and knowledge</span> —
        the foundations of healthier, more resilient communities.
      </p>
      <p className="font-lato text-xl mx-4 mt-4">
        Since launching, we’ve established initiatives that already show real
        results:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4 mt-4">
        <div className="text-center">
          <Image
            src={caffe}
            alt="Teenagers having fun in the community"
            className="h-44"
          />
          <h6 className="font-montserrat font-bold ">Community Café</h6>
          <p className="font-lato text-md md:text-xl mb-4">
            Over [insert number] meals served; a safe hub for connection,
            support, and dignity.
          </p>
        </div>
        <div className="text-center">
          <Image
            src={youthFitness}
            alt="Teenagers having fun in the community"
            className="h-44"
          />
          <h6 className="font-montserrat font-bold ">SPORTS & FITNESS</h6>
          <p className="font-lato text-md md:text-xl mb-4">
            [insert number] young people participated in boxercise, martial
            arts, and archery sessions — boosting health and confidence.
          </p>
        </div>
        <div className="text-center">
          <Image
            src={office}
            alt="Teenagers having fun in the community"
            className="h-44"
          />
          <h6 className="font-montserrat font-bold ">Community Library</h6>
          <p className="font-lato text-md md:text-xl mb-4">
            A co-working and learning hub equipped with PCs, dedicated to
            spreading knowledge, improving literacy, and fostering civic
            responsibility.
          </p>
        </div>
        <div className="text-center">
          <Image
            src={cayaking}
            alt="Teenagers having fun in the community"
            className="w-44 md:h-44 lg:max-w-lg"
          />
          <h6 className="font-montserrat font-bold ">SPORTS & FITNESS</h6>
          <p className="font-lato text-md md:text-xl mb-4">
            [insert number] young people participated in boxercise, martial
            arts, and archery sessions — boosting health and confidence.
          </p>
        </div>
      </div>
      <ImpactCarousel />
    </div>
  );
}
