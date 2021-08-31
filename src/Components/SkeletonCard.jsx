import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = () => {
  const item = {
    id: 1,
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/8/89/Pikachu.jpg",
    title: "title title title title title title",
    views: "0 views",
    published: "1 day ago",
  };

  const channel = "channel";
  const w = 150;

  return (
    <li className="card">
      <SkeletonTheme color="gray" highlightColor="#444">
        <div>
          <Skeleton height={w} width={3 * w} />
        </div>
        <div>
          <Skeleton circle={true} height={40} width={40} />
        </div>
        <Skeleton variant="text" count={3} />
      </SkeletonTheme>
    </li>
  );
};

export default SkeletonCard;
