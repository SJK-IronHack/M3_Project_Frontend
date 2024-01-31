import { Container } from "@mantine/core";
import image from "../assets/error-404-.avif";

const Error404Page = () => {
  return (
    <Container>
      <img src={image} alt="No page found" />
    </Container>
  
  );
};

export default Error404Page;
