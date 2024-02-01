import { Container, Title, Group, Button, AppShell, useMantineTheme, Flex, Text, Grid } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const headerStyles = {
    backgroundColor: theme.colors.dark[0],
    color: theme.colors.light[0],
  };


  return (
    <AppShell shadow="xl" style={headerStyles}>
      <Container size="xl" style={headerStyles} align="left" display={Flex}  heigh="128">
        <Grid 
        w='100%'
        px="10px"
        py="md"
      gap="xs"
      justify="space-between"
      align="center"
      direction="row"
      wrap="nowrap">
      <Group align="left">
        <Text order={1} size="xl" tt="uppercase" style={{ cursor: 'pointer' }} c="white"  onClick={() => navigate('/')}>
          city Eventer
        </Text>
      </Group>
        <Group align="right">
          <Button variant="filled" bg={theme.colors.dark[1]} size="xs" radius="xl" onClick={() => navigate('/user')}>User profile</Button>
          <Button variant="filled" bg={theme.colors.dark[1]} size="xs" radius="xl" onClick={() => navigate('/addevent')}>Create Event</Button>
          <Button variant="filled" bg={theme.colors.dark[1]} size="xs" radius="xl" onClick={() => navigate('/login')}>Login</Button>
          <Button variant="filled" bg={theme.colors.dark[1]} size="xs" radius="xl" onClick={() => navigate('/signup')}>Signup</Button>
        </Group>
        </Grid>
      </Container>
    </AppShell>
  );
}
