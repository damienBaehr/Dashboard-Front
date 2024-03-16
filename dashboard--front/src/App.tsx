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
  };

  const isEmailCorrect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(email)) {
      console.log("email correct");
    } else {
      console.log("email incorrect");
    }
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
    if(username !== "" && email !== "" && password !== ""){
    const user: User = {
      username: username,
      email: email,
      password: password,
    };
    console.log(user);
    try {
      const reponse = await register(user);
      console.log(reponse.status);
    } catch (e) {
      console.log(e);
    }
  }else{
    console.log("Veuillez remplir tous les champs")
  }
  }
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div className="w-1.5/3 h-fit bg-white rounded-2xl p-7 ">
          <p className="flex justify-center">Login</p>
          <div className="mt-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col space-y-2">
                <label>Username</label>
                <input
                  type="text"
                  className="border-2 rounded"
                  onChange={usernameInput}
                  placeholder="Set username"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>Email</label>
                <input
                  type="text"
                  className="border-2 rounded"
                  onChange={emailInput}
                  onBlur={isEmailCorrect}
                  placeholder="Set email"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label>Password</label>
                <input
                  type="text"
                  className="border-2 rounded"
                  onChange={passwordInput}
                  placeholder="Set password"
                />
              </div>
            </div>
            <div className="flex flex-row-reverse gap-5 mt-8">
              <button
                className="bg-blue-500 text-white rounded p-1 "
                onClick={envoyer}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
