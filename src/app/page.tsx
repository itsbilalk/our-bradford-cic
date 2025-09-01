import {
  Diversity1,
  Diversity3,
  Handshake,
  SvgIconComponent,
} from "@mui/icons-material";

const Card = ({
  Icon,
  heading,
  info,
}: {
  Icon: SvgIconComponent;
  heading: string;
  info: string;
}) => {
  return (
    <div className="text-xl bg-[#F8F9FA] p-6 flex flex-col self-center justify-center ">
      <Icon fontSize="large" className="self-center" />
      <h6 className="font-montserrat font-bold text-center md:text-2xl">
        {heading}
      </h6>
      <p className="text-sm text-center md:text-lg">{info}</p>
    </div>
  );
};

export default function Home() {
  const cardInfoList = [
    {
      icon: Diversity1,
      heading: `COMMUNITY LED`,
      info: `Lorem ipsum dolor sit amgt, consectetur alipiscing elit. Mauris ultricies ries efficitur lorem ipsum.`,
    },
    {
      icon: Diversity3,
      heading: `COLLABORATIVE`,
      info: `Lorem ipsum dolor sit amgt, consectetur alipiscing elit. Mauris ultricies ries efficitur lorem ipsum.`,
    },
    {
      icon: Handshake,
      heading: `TRANSPARENT`,
      info: `Lorem ipsum dolor sit amgt, consectetur alipiscing elit. Mauris ultricies ries efficitur lorem ipsum.`,
    },
  ];
  return (
    <div className=" min-h-screen p-2 text-center">
      <main className="flex flex-col mt-4 pl-2">
        <div
          className="
    relative h-[520px] w-full
    bg-[linear-gradient(to_top,white,rgba(44,44,109,0.5),transparent),url('/teenagersMobile.png')]
    md:bg-[linear-gradient(to_top,white,rgba(44,44,109,0.5),transparent),url('/teenagers.png')]
    bg-cover bg-center bg-no-repeat
    flex flex-col items-center justify-end pb-10 text-center
  "
        >
          <h1 className="text-3xl lg:text-4xl font-extrabold text-white">
            YOUTH CENTER EXPANSION
          </h1>
          <p className="mt-2 text-lg lg:text-3xl text-[#FDF10B] font-bold">
            Building Bradford’s Future
          </p>
          <button className="mt-4 rounded-lg bg-[#FDF10B] px-5 py-2 font-bold text-[#2C2C6D]">
            ABOUT US
          </button>
        </div>

        <div className="mt-6 ">
          <h1 className="font-montserrat text-4xl md:text-6xl font-extrabold">
            OUR MISSION
          </h1>
          <p className="mt-4 font-lato font-medium text-xl md:text-2xl">
            Lorem ipsum dolor sit amgt, consectetur alipiscing elit. Mauris
            ultricies ries efficitur lorem ipsum.
          </p>
          <div className="flex flex-col mt-4 gap-6 mb-6 mx-1">
            {cardInfoList.map((cardInfo) => (
              <Card
                key={`${cardInfo.heading}`}
                Icon={cardInfo.icon}
                heading={cardInfo.heading}
                info={cardInfo.info}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
