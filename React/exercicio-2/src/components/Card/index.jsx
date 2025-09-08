import styles from './styles.module.css'
import posterImg from '../../assets/ba9464145eba8762f6286a3c8387c951.jpg'

function Card() {
    return (
        <div className={styles.container}>
          <img className={styles.poster} src={posterImg} alt="Star Wars poster" />
          <div>
            <h1 className={styles.title}>Poster: Star Wars (1977) </h1>
            <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quisquam, non labore ducimus explicabo blanditiis ea enim sunt cum. Dignissimos obcaecati ipsam sunt. Hic assumenda accusantium exercitationem eligendi ipsam nostrum?</p>
            <button className={styles.button}>Comprar agora</button>
          </div>
            
        </div>
    )
}


export default Card