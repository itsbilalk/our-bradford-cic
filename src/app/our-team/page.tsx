import { TeamMemberCardWrapper } from "../components/TeamMemberCard/TeamMemberCardWrapper";

export default function OurTeam() {
  return (
    <div className="lg:mx-45 xl:mx-58 text-[#2C2C6D] mt-4 font-lato flex flex-col mx-4">
      <h1 className="text-2xl lg:text-4xl font-bold  font-montserrat ">
        OUR TEAM
      </h1>
      <p className="text-md lg:text-xl font-montserrat font-semibold mb-2">
        Educators, mentors, and organisers serving Bradford.
      </p>
      <div className="grid grid-cols-2 xl:grid-cols-4 text-center gap-4 justify-center md:w-fit">
        <TeamMemberCardWrapper />
      </div>
    </div>
  );
}
