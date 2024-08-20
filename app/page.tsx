import Image from "next/image";
import styles from "./page.module.css";
import ChatBody from './components/chatBody/layout';

export default function Home() {
  return (
    <div className={styles.root}>
      <ChatBody />
    </div>
  );
}
