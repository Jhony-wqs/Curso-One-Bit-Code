import style from "./styles.module.css"

export default function Profile(props) {
    return (
        <div className={style.container}>
            <img className={style.avatar} src={props.avatar} alt={props.name} />
            <h1>{props.name}</h1>
            <di>
                <p>{props.bio}</p>
            </di>
            <div>
                <p>Phone: {props.phone}</p>
            </div>
            <div>
                <p>Email: {props.email}</p>
            </div>
            <div className={style.links}>
                <div className={style.link}>
                    <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                </div>
                <div className={style.link}>
                    <a href={props.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </div>
                <div className={style.link}>
                    <a href={props.twitterUrl} target="_blank" rel="noopener noreferrer">Twitter Profile</a>
                </div>
            </div>
        </div>
  
    )
}