"use client"
import { TopHero } from "../assets/components";

const ClickableTopHero = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="text-decoration-none pointer"
    >
      <TopHero {...item} />
    </div>
  );
};

export default ClickableTopHero;