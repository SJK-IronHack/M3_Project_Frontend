import { Container, Title, Group, Button, AppShell } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <AppShell shadow="sm">
      <Container size="xl">
        <Title order={1} style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          EVENTER
        </Title>
        <Group align="right">
          <Button variant="outline" color="gray" size="xs" radius="xl" onClick={() => navigate('/addevent')}>Create Event</Button>
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/signup')}>Signup</Button>
        </Group>
      </Container>
    </AppShell>
  );
}
