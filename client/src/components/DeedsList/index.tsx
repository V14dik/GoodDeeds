import axios from "axios";
import { useState, useEffect } from "react";
import Deed from "../Deed";
import styles from "./deedsList.module.css";

export default function DeedsList() {
  const [deedsList, setDeeds] = useState([]);

  const getDeeds = async () => {
    const res = await axios.get("http://localhost:8000/deed/list", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    setDeeds(res.data.reverse());
  };
  useEffect(() => {
    getDeeds();
  }, []);

  return (
    <div className={styles.deedsList}>
      {deedsList.map((deed, index) => (
        <Deed key={deed + index} deed={deed} />
      ))}
    </div>
  );
}
