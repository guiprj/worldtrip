import { Flex, Heading } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import SeparatorLine from "../components/SeparatorLine";
import TravelTypes from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <TravelTypes />
      <SeparatorLine />
      <Heading
        textAlign="center" fontWeight="500"
        mb={["5", "14"]} fontSize={["lg", "3xl", "4xl"]}
      >
        Vamos nessa?<br /> Então escolha seu continente
      </Heading>
      <Carousel />
    </Flex>
  )
}
