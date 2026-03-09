
import styles from "./page.module.css";
import { PlanetManager } from "@/components/PlanetManager";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Planetas</h1>

      <PlanetManager/>
    </div>
  );
}
