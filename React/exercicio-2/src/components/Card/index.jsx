import styles from './styles.module.css'
import Button from '../Button/index.jsx'

 function Card({title,posterImg}) {  //usando destructuring para pegar as props
    return (
        <div className={styles.container}>
          <img className={styles.poster} src={posterImg} alt={title} />
          <div>
            <h1 className={styles.title}>{title} </h1>
            <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quisquam, non labore ducimus explicabo blanditiis ea enim sunt cum. Dignissimos obcaecati ipsam sunt. Hic assumenda accusantium exercitationem eligendi ipsam nostrum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga tempora quod eius, dolor delectus, placeat deleniti maiores recusandae eligendi rem distinctio quis minima, animi libero? Quo ullam fuga exercitationem molestias? lore</p>
            <Button />
          </div>
            
        </div>
    )
}


export default Card