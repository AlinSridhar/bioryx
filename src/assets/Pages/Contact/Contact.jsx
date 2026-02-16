import Navbar from "../../Components/Navbar/Navbar";
import style from "./Contact.module.css";
import Contactus from "../../Components/Contactus/Contactus";
import Footer from "../../Components/Footer/Footer";
export default function Contact() {
	return (
        <>
        <Navbar/>
        <Contactus/>
        <div className={style.devs}>
            <div className={style.title}>FOR WEBSITE RELATED ISSUES/ENQUIRIES : </div>
            <div className={style.contact}>
                <div className={style.dev}>
                <p className={style.devName}><a href="https://www.linkedin.com/in/alin-sridhar-a35420328" target="_blank" rel="noopener noreferrer">Alin Sridhar </a></p>
                </div>
                <div className={style.dev}>
                <p><a href="https://www.linkedin.com/in/albert-joy-62a90a2ab" target="_blank" rel="noopener noreferrer">Albert Joy</a></p>
                </div>
            </div>
        </div>
        <Footer/>
        </>
);}