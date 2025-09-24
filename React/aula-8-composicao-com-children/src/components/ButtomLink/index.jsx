import style from './style.module.css';

export default function ButtomLink(props) {
    return (
        <a
         href={props.href} target='_blank'
        className={style.link}>
        {props.children}
        </a>
    )
}