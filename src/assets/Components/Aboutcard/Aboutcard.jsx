import style from './Aboutcard.module.css'
export default function Aboutcard(props) {
			  return (
              <>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
              </>);
}