import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const MovieCardSkeleton = () => {
  return (
    <Card width="100%" borderRadius={10}>
      <Skeleton height="350px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
