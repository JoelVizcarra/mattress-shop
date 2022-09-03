import React, { useEffect, useMemo } from "react";
import { useQuery } from "react-query";

import { getMattresses } from "../services";
import { Container, Flex, Loader } from "../components/styled";
import MattressCarousel from "../components/MattressCarousel";

function Homepage() {
  const { isLoading, data } = useQuery("mattresses", getMattresses);

  return isLoading ? (
    <Loader />
  ) : (
    <Container fullWidth>
      <MattressCarousel mattresses={data} />
    </Container>
  );
}

export default Homepage;
