import MainLayout from "@/layouts/MainLayout";
import { signIn } from "@/redux/user";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  const onSignInHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signIn({ userName, password }));
    router.push("/");
  };

  return (
    <MainLayout>
      <form onSubmit={onSignInHandler}>
        <h1>Sign In</h1>
        <input
          placeholder={"username"}
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          placeholder={"password"}
          type={"password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type={"submit"}>Sign In</button>
      </form>
    </MainLayout>
  );
}
