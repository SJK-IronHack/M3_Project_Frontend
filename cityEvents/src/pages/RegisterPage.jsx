//import AuthForm from "../components/AuthForm";

import { Container, Text, useMantineTheme } from "@mantine/core";
import AuthForm from "../components/AuthForm";

const SignUpPage = () => {

    // Mantine theme ->
    const theme = useMantineTheme();
    const cardStyles = {
      backgroundColor: theme.colors.dark[0],
      color: theme.colorScheme === "dark" ? theme.light : theme.dark,
    };
    //

  return (
    <Container sx={{ paddingX: 24, paddingY: 4 }} size="sm" c={theme.colors.dark[4]}>
    <Text  size="xl">Sign up</Text>
      <AuthForm />
    </Container>
  );
};

export default SignUpPage;

// import { useState } from "react";

// export default function SignupPage() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   async function signup(ev) {
//     ev.preventDefault();
//     console.log({ username, email, password });
//     await fetch("http://localhost:5005/auth/signup", {
//       method: "POST",
//       body: JSON.stringify({ username, email, password }),
//       headers: { "Content-Type": "application/json" },
//     });
//   }
//   return (
//     <form className="signup" onSubmit={signup}>
//       <h1>Signup</h1>
//       <input
//         type="text"
//         placeholder="username"
//         value={username}
//         onChange={(ev) => setUsername(ev.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="email"
//         value={email}
//         onChange={(ev) => setEmail(ev.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="password"
//         value={password}
//         onChange={(ev) => setPassword(ev.target.value)}
//       />
//       <button>Signup</button>
//     </form>
//   );
// }

// // const SignUpPage = () => {
// //   return (
// //     <div>
// //       <p>forsignup</p>

// //       <AuthForm />
// //     </div>
// //   );
// // };

// // export default SignUpPage;
