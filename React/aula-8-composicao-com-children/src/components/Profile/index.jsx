import style from "./styles.module.css"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import ButtomLink from "..//ButtomLink"

function handleFollow() {
    alert('followed')
}
export default function Profile(props) {
    return (
        <div className={style.container}>
            <img className={style.avatar} src={props.avatar} alt={props.name} />
            <Title>
                {props.name}
                <button className={style.butttonFollow} onClick={ handleFollow} >
                    Follow  {/*Usando eventos de click igual a js chamando a função handleFollow*/}
                </button>
            </Title>
            <ProfileSection>
                {props.bio}
            </ProfileSection>

            <ProfileSection>
                Phone: {props.phone}
            </ProfileSection>

            <ProfileSection>     
               Email: {props.email}
            </ProfileSection>
           
            <ProfileSection
            // passando varias propriedades para o componente ProfileSection e usando no modulo profileSection com operador rest paraments.
             className={style.link}
             id="links"
             data-test="links"
             aria-label="social media links"
            >
                <ButtomLink href={props.githubUrl} >GitHub</ButtomLink>


                <ButtomLink href={props.linkedinUrl} >LinkedIn</ButtomLink>


                <ButtomLink href={props.twitterUrl} >Twitter</ButtomLink> 
            </ProfileSection>
        </div>
  
    )
}