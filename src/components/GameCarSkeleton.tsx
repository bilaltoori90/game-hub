import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCarSkeleton = () => {
  return (
    <Card.Root width={"260px"} borderRadius={10} overflow="hidden">
      <Skeleton height={"200px"} />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCarSkeleton;
