"use client"

import { TopHero } from "../assets/components";

const ClickableSlide = ({ item, onPostClick }) => {
  return (
    <div
      onClick={() => onPostClick(item)}
      className="text-decoration-none pointer"
    >
      <TopHero {...item} />
    </div>
  );
};

export default ClickableSlide;