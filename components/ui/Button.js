import Link from 'next/link'
import style from "../../styles/Button.module.css"
const Button = (props) => {
  if(props.link){
    return (
      <Link href={props.link}>
          <a className={style.btn}>
          {props.children}
          </a>
      </Link>
    )
  }
  return <button className={style.btn} onClick={props.onClick}>{props.children}</button>
  
}

export default Button