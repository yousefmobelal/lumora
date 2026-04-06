import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const WonderNavigationItem: React.FC<{
  tabIndex: number;
  Image: string;
  activeImage: string;
  alt: string;
}> = ({ tabIndex, Image, activeImage, alt }) => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("t") || "0";
  return (
    <Link to={`?t=${tabIndex}`}>
      <img
        src={tab === tabIndex.toString() ? activeImage : Image}
        alt={alt}
        className="size-6"
      />
    </Link>
  );
};

export default WonderNavigationItem;
