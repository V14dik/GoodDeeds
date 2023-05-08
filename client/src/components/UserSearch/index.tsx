import axios from "axios";
import styles from "./userSearch.module.css";
import { useState } from "react";

export default function SearchUser() {
  const [usersList, setList] = useState([]);

  const search = async (userName: string) => {
    const res = await axios.get("http://localhost:8000/user/search", {
      params: { userName },
    });
    setList(res.data);
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.searchInput}
        placeholder="User name"
        onChange={(e) => {
          search(e.target.value);
        }}
      />
      {usersList.length ? (
        <div className={styles.usersList}>
          {usersList.map((user: { _id: number; userName: string }, index) => {
            return (
              <div className={styles.searchResult} key={index + user._id}>
                {user.userName}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
