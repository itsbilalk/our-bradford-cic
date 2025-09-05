import {
  ArrowRight,
  Call,
  Copyright,
  Email,
  Facebook,
  Instagram,
  LocationPin,
  Twitter,
} from "@mui/icons-material";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="row-start-3 flex flex-col gap-4 flex-wrap items-center justify-center  mt-auto">
      <span className="w-full h-1 border-b-1 flex mt-2 border-gray-300"></span>
      <h2 className="font-montserrat font-bold text-xl  md:text-2xl">
        FOLLOW US
      </h2>
      <div className="flex gap-2 ">
        <div className="p-2 bg-[#2C2C6D] rounded-4xl cursor-pointer">
          <span className="md:hidden">
            <Facebook fontSize="medium" style={{ color: "white" }} />
          </span>
          <span className="hidden md:block">
            <Facebook fontSize="large" style={{ color: "white" }} />
          </span>
        </div>
        <div className="p-2 bg-[#2C2C6D] rounded-4xl cursor-pointer">
          <span className="md:hidden">
            <Instagram fontSize="medium" style={{ color: "white" }} />
          </span>
          <span className="hidden md:block">
            <Instagram fontSize="large" style={{ color: "white" }} />
          </span>
        </div>
        <div className="p-2 bg-[#2C2C6D] rounded-4xl cursor-pointer">
          <span className="md:hidden">
            <Twitter fontSize="medium" style={{ color: "white" }} />
          </span>
          <span className="hidden md:block">
            <Twitter fontSize="large" style={{ color: "white" }} />
          </span>
        </div>
      </div>
      <h2 className="font-montserrat font-bold text-xl mr-auto ml-3 md:text-2xl">
        QUICK LINKS
      </h2>
      <nav
        className={`
    grid grid-cols-2 font-bold text-lg gap-1 mr-auto text-start md:text-xl font-montserrat`}
      >
        <div>
          <ArrowRight fontSize="large" />
          <Link href={"/"} className="text-center">
            Home
          </Link>
        </div>
        <div>
          <ArrowRight fontSize="large" />
          <Link href={"/about-us"} className="text-center">
            About
          </Link>
        </div>
        <div>
          <ArrowRight fontSize="large" />
          <Link href={"/impact"} className="self-center">
            Impact
          </Link>
        </div>

        <div>
          <ArrowRight fontSize="large" />
          <Link href={"/our-team"}>Our Team</Link>
        </div>
        <div>
          <ArrowRight fontSize="large" />
          <Link href={""}>Contact</Link>
        </div>
      </nav>
      <h2 className="font-montserrat font-bold text-xl mr-auto ml-3 md:text-2xl">
        INFORMATION
      </h2>
      <div className="flex mr-auto ml-2 gap-2 md:text-xl">
        <LocationPin fontSize="medium" className="self-center" />
        <p className="font-lato font-bold">
          249 Kensington Street, Bradford, BD8 9LN
        </p>
      </div>
      <div className="flex mr-auto ml-2 gap-2  md:text-xl">
        <Email fontSize="medium" className="self-center" />
        <p className="font-lato font-bold">info@almustafacentre.org.uk</p>
      </div>
      <div className="flex mr-auto ml-2 gap-2  md:text-xl">
        <Call fontSize="medium" className="self-center" />
        <p className="font-lato font-bold">01274 780452</p>
      </div>
      <div className="bg-[#2C2C6D] text-[#FDF10B] w-full rounded-bl-lg rounded-br-lg lg:rounded-b-none px-2 py-4">
        <div className="flex gap-2  md:text-xl">
          <Copyright fontSize="large" style={{ color: "#FDF10B" }} />
          <p className="font-lato self-center">
            2025 Our Bradford. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
