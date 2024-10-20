"use client";
import { BookmarkSimple, Play } from "@phosphor-icons/react";
import Button from "../../ui/button";

const ButtonHouse = () => {
  return (
    <div className="space-x-2">
      <Button text="Learn More" icon={<Play size={14} />} />
      <Button text="Collection" icon={<BookmarkSimple size={16} />} black />
    </div>
  );
};

export default ButtonHouse;
