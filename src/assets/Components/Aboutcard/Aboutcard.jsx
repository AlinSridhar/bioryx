import style from './Aboutcard.module.css'
export default function Aboutcard(props) {
			  return (
              <>
                <div className={style.card}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
              </>);
}