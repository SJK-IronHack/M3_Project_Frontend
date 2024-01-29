//import AuthForm from "../components/AuthForm";

import AuthForm from "../components/AuthForm";

const SignUpPage = () => {
  return (
    <div>
      <p>forsignup</p>

      <AuthForm />
    </div>
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
