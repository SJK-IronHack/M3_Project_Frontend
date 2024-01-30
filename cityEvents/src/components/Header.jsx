import { Container, Title, Group, Button, AppShell, useMantineTheme, Flex } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const headerStyles = {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.dark[5],
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  };


  return (
    <AppShell shadow="xl" style={headerStyles}>
      <Container size="xl" style={headerStyles} align="left" display={Flex}  heigh="128">
        <Flex mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="xs"
      justify="space-around"
      align="center"
      direction="row"
      wrap="nowrap">
      <Group align="left">
        <Title order={1} style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          EVENTER
        </Title>
      </Group>
        <Group align="right">
          <Button variant="filled" color={theme.colors.dark[4]} size="xs" radius="xl" onClick={() => navigate('/addevent')}>Create Event</Button>
          <Button  variant="filled" color={theme.colors.dark[4]} size="xs" radius="xl" onClick={() => navigate('/login')}>Login</Button>
          <Button  variant="filled" color={theme.colors.dark[4]} size="xs" radius="xl" onClick={() => navigate('/signup')}>Signup</Button>
        </Group>
        </Flex>
      </Container>
    </AppShell>
  );
}
