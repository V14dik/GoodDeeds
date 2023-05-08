import axios from "axios";
import { useState } from "react";
import styles from "./createDeed.module.css";

interface CreateDeedProps {
  onChange: () => void;
}

export default function CreateDeed({ onChange }: CreateDeedProps) {
  const [deed, setDeed] = useState("");

  const onCreateHandler = async () => {
    const res = await axios.post(
      "http://localhost:8000/deed",
      { content: deed },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    setDeed("");
    onChange();
  };
  return (
    <>
      <input
        className={styles.createDeed}
        placeholder="Enter new deed"
        value={deed}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onCreateHandler();
          }
        }}
        onChange={(e) => {
          setDeed(e.target.value);
        }}
      />
    </>
  );
}
