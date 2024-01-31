import { Container, Text } from "@mantine/core";
import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  return (
    <Container size="xs">
      <Text  size="xl">Login</Text>
      <AuthForm isLogin />
    </Container>
  );
};

export default LoginPage;
