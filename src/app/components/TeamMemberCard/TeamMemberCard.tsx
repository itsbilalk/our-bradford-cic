"use client";

import { East } from "@mui/icons-material";
import { Button, Card, CardContent, Chip } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface CardProps {
  initials: "sk" | "ma" | "nh" | "mk";
  fullName: string;
  title: string;
  keyRoles: string[];
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setInitials: Dispatch<SetStateAction<"sk" | "ma" | "nh" | "mk">>;
}

export const TeamMemberCard = ({
  initials,
  fullName,
  title,
  keyRoles,
  setIsOpen,
  setInitials,
}: CardProps) => {
  const onReadMoreClickHandler = () => {
    setIsOpen(true);
    setInitials(initials);
  };
  return (
    <Card className=" md:w-72 justify-center">
      <CardContent>
        <div className="flex flex-col">
          <div className=" rounded-full bg-[#2C2C6D] text-white w-20 h-20 mx-auto flex">
            <p className="text-2xl lg:text-3xl font-montserrat font-bold m-auto ">
              {initials.toUpperCase()}
            </p>
          </div>
          <p className="font-montserrat font-bold text-[#333333] mt-1 text-center w-fit mx-auto">
            {fullName}
          </p>
          <p className="text-xs text-center">{title}</p>
          <div className="grid md:grid-cols-[repeat(auto-fit, minmax(250px, 1fr))] gap-2 mt-1 mb-1 md:w-fit md:justify-center mx-auto">
            {keyRoles.map((role) => (
              <Chip
                key={role}
                label={role}
                sx={{
                  backgroundColor: "#FDF10B",
                  width: "fit-content",
                }}
                className="font-bold"
                size="small"
              />
            ))}
          </div>
        </div>
        <Button
          variant="text"
          endIcon={<East />}
          size="small"
          sx={{ color: "#2C2C6D" }}
          className="text-[#2C2C6D] "
          onClick={onReadMoreClickHandler}
        >
          Read more
        </Button>
      </CardContent>
    </Card>
  );
};
