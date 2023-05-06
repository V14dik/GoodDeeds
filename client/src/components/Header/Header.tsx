import styles from "./header.module.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logOut, setIsLogin } from "@/redux/user";
import { useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const { isLogin } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logOut());
    router.push("/");
  };

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      dispatch(setIsLogin(true));
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Good Deeds </div>
      <div className={styles.buttonGroup}>
        {isLogin ? (
          <button className={styles.button} onClick={logOutHandler}>
            Log Out{" "}
          </button>
        ) : (
          <>
            <button
              className={styles.button}
              onClick={() => router.push("sign-in")}
            >
              Sign In{" "}
            </button>
            <button
              className={styles.button}
              onClick={() => router.push("sign-up")}
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </header>
  );
}
