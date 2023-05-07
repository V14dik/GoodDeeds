import styles from "./deed.module.css";
import bin from "../../assets/icons/bin-svgrepo-com.svg";
import Image from "next/image";
import axios from "axios";

export default function Deed({ deed }: any) {
  const deleteDeed = async () => {
    const res = await axios.delete("http://localhost:8000/deed", {
      params: { deedId: deed._id },
    });
  };

  return (
    <div className={styles.deed}>
      {deed.content}
      <Image
        className={styles.bin}
        src={bin}
        alt="delete"
        onClick={deleteDeed}
      />
    </div>
  );
}
