import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCard = () => {
  const dur = 1.3;

  return (
    <li className="card">
      <SkeletonTheme color="gray" highlightColor="#444">
        <div className="skeleton-picdiv">
          <Skeleton height="100%" width="100%" duration={dur} />
        </div>
      </SkeletonTheme>
      <div>
        <SkeletonTheme color="gray" highlightColor="#444">
          <Skeleton circle={true} height={40} width={40} duration={dur} />
        </SkeletonTheme>
      </div>
      <div>
        <SkeletonTheme color="gray" highlightColor="#444">
          <Skeleton width="90%" variant="text" duration={dur} />
        </SkeletonTheme>
      </div>
      <div>
        <SkeletonTheme color="gray" highlightColor="#444">
          <Skeleton width="20%" variant="text" duration={dur} />
        </SkeletonTheme>
      </div>
      <div>
        <SkeletonTheme color="gray" highlightColor="#444">
          <Skeleton width="65%" variant="text" duration={dur} />
        </SkeletonTheme>
      </div>
    </li>
  );
};

export default SkeletonCard;
