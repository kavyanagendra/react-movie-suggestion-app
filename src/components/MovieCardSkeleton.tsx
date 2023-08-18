import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const MovieCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10}>
      <Skeleton height="350px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
