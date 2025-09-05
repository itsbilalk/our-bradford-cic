"use client";

import { useState } from "react";
import { TeamMemberCard } from "./TeamMemberCard";
import { Chip, SwipeableDrawer } from "@mui/material";
import { teamMembersInfos } from "./content";

const iOS =
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

export const TeamMemberCardWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [initials, setInitials] = useState<"sk" | "ma" | "nh" | "mk">("sk");

  const content = teamMembersInfos[initials];

  const toggleDrawer =
    (openOrClose: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen(openOrClose);
    };

  return (
    <>
      <TeamMemberCard
        initials="sk"
        fullName="Shahida Karim"
        keyRoles={["Education", "Community"]}
        title="Educator / Community Learning"
        setIsOpen={setIsOpen}
        setInitials={setInitials}
      />
      <TeamMemberCard
        initials="ma"
        fullName="Mariam Ahmed"
        keyRoles={["Admin Assistant", "Student"]}
        title="Support / Student"
        setIsOpen={setIsOpen}
        setInitials={setInitials}
      />
      <TeamMemberCard
        initials="nh"
        fullName="Nav Hussain"
        keyRoles={["Community outreach", "Mentor", "Management"]}
        title="Mentor / Fitness Coach"
        setIsOpen={setIsOpen}
        setInitials={setInitials}
      />
      <TeamMemberCard
        initials="mk"
        fullName="Mohsin Javed Karim"
        keyRoles={["Organisation", "Support", "Management"]}
        title="Management / Admin"
        setIsOpen={setIsOpen}
        setInitials={setInitials}
      />
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <div className="mt-4 text-start p-4 max-w-70 md:max-w-90">
          <div className=" rounded-full bg-[#2C2C6D] text-white w-20 h-20 mx-auto flex">
            <p className="text-2xl lg:text-3xl font-montserrat font-bold m-auto ">
              {content.initials}
            </p>
          </div>
          <p className="font-montserrat font-bold text-[#333333] mt-1 text-center">
            {content.fullName}
          </p>
          <p className="text-xs text-center">{content.title}</p>
          <div className="grid  gap-2 mt-1 mb-4 grid-cols-[repeat(auto-fit, minmax(250px, 1fr))] w-fit mx-auto">
            {content.keyRoles.map((role) => (
              <Chip
                key={role}
                label={role}
                sx={{ backgroundColor: "#FDF10B", width: "fit-content" }}
                className="font-bold"
                size="small"
              />
            ))}
          </div>

          <div className="font-lato">{content.description()}</div>
        </div>
      </SwipeableDrawer>
    </>
  );
};
