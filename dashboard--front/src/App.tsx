import { useState } from "react";
import "./App.css";
import { User } from "./models/User";
import { register } from "./services/User.services";

function App() {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const passwordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const usernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const envoyer = async () => {
    const user: User = {
      username: username,
      email: email,
      password: password,
    };
    console.log(user);
    try {
      await register(user);
    } catch(e) {
      console.log(e);
    }
    
  };
  return (
    <>
      <h1 className="font-bold">AD LAURENT</h1>
      <div>
        <input type="text" className="border-2" onChange={usernameInput} />
        <input type="text" className="border-2" onChange={emailInput} />
        <input type="text" className="border-2" onChange={passwordInput} />
        <button className="bg-blue-500 text-white" onClick={envoyer}>
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
