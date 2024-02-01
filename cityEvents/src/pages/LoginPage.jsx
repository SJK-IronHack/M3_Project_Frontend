import { Container, Text, useMantineTheme } from "@mantine/core";
import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  useMantineTheme();
  // Mantine theme ->
  const theme = useMantineTheme();
  const cardStyles = {
    backgroundColor: theme.colors.dark[0],
    color: theme.colorScheme === "dark" ? theme.light : theme.dark,
  };
  //

  return (
    <Container sx={{ paddingX: 24, paddingY: 4 }} size="sm" c={theme.colors.dark[4]}>
    <Text  size="xl">Log in</Text>
      <AuthForm isLogin />
    </Container>
  );
};

export default LoginPage;
