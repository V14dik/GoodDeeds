import MainLayout from "@/layouts/MainLayout";
import { FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";

import { signUp } from "@/redux/user";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const signUpHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signUp({ userName, password }));
    router.push("/");
  };

  return (
    <MainLayout>
      <form
        onSubmit={(e) => {
          signUpHandler(e);
        }}
      >
        <h1>Sign Up</h1>
        <input
          placeholder={"username"}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
        />
        <input
          placeholder={"password"}
          type={"password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button type={"submit"}>Sign Up</button>
      </form>
    </MainLayout>
  );
}
