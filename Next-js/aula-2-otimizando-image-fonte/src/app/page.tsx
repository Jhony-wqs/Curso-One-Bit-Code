import Image from "next/image"
import { Card, Heading } from "@radix-ui/themes";
import styles from "./page.module.scss";
import {Science_Gothic} from "next/font/google"
import "./globals.scss"

const space = Science_Gothic({
  weight: '400',
  variable: '--font-gothic',
  subsets: ["latin"]
})


export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Heading as="h1">Olá, Next.js!</Heading>
        <Card>

        <p className={` ${space.variable}`}>Otimização de imagens com Next</p>
        <ul>
          <li>
            <div>Via Lactea</div>
              <Image src="/via-lactea.jpg" alt="via-lactea"  width={400} height={225}/>
            
          </li>
          <li>
            <div>Andromeda</div>
            <Image src="https://images-assets.nasa.gov/image/PIA04921/PIA04921~medium.jpg" width={400} height={225}  style={{objectFit:"cover"}}  alt="Andromeda" />
          </li>
          <li>Item 3</li>
        </ul>
        </Card>
      </main>
    </div>
  );
}