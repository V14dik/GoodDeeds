import axios from "axios";
import { useState, useEffect } from "react";
import Deed from "../Deed";
import styles from "./deedsList.module.css";
import CreateDeed from "../CreateDeed";

interface DeedListProps {
  isFriendList: boolean;
  friendId?: number;
}

export default function DeedsList(props: DeedListProps) {
  const [deedsList, setDeeds] = useState([]);
  const [isFriend, setIsFriend] = useState(false);

  async function getDeeds() {
    const res = await axios.get("http://localhost:8000/deed/list", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setDeeds(res.data.reverse());
  }

  useEffect(() => {
    getDeeds();
  }, []);

  return (
    <div className={styles.deedsList}>
      <CreateDeed onChange={getDeeds} />
      {deedsList.map((deed, index) => (
        <Deed key={deed + index} deed={deed} onChange={getDeeds} />
      ))}
    </div>
  );
}
