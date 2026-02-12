import style from './About.module.css'
export default function About() {
			  return (
              <>
                    <div className={style.container}>
                        <div className={style.aboutus}>
                            <h1>ABOUT US</h1>
                            <p>
                            Bioryx is a student-run community created for biology enthusiasts across every domain of life sciences—from genetics and microbiology to ecology, botany, zoology, and conservation.
                            Founded on curiosity, collaboration, and respect for the living world, Bioryx provides a shared platform where students come together to explore ideas, strengthen academic skills, exchange research interests, and engage in thoughtful, science-driven conversations.
                            <br/><br />
                            We believe biology is more than a subject—it is a lens through which we understand life, protect biodiversity, and shape a sustainable future. Through discussions, study circles, field experiences, workshops, outreach programs, and student-led initiatives, Bioryx empowers emerging scientists to grow beyond textbooks and into real-world problem-solvers.
                            <br/><br />
                            <span className={style.highlight}>At its core, Bioryx is a space for learners who ask questions, think critically, and care deeply about the natural world.</span>
                            <br/><br />
                            <span className={style.tagline}>Bioryx — Where biology meets purpose</span>
                    
                            </p>
                        </div>
                        <div>
                            <div className={style.vision}>
                                <h1>VISION</h1>
                                <p>To build a vibrant, inclusive network of young biologists who collaborate across disciplines, pursue scientific excellence, and contribute meaningfully to research, conservation, and environmental stewardship.</p>
                            </div>
                            <div className={style.mission}>
                                <h1>MISSION</h1>
                                <ul>
                                    <li>Create a collaborative platform for learning and dialogue in biological sciences</li>
                                    <li>Support academic growth through peer-led study groups and shared resources</li>
                                    <li>Encourage research-oriented thinking and scientific literacy</li>
                                    <li>Promote awareness of biodiversity, sustainability, and conservation</li>
                                    <li>Provide opportunities for leadership, outreach, and interdisciplinary exchange</li>
                                    <li>Connect students who are passionate about shaping the future of biology</li>
                                </ul>
                            </div>
                        </div>
                        <div className={style.whatwedo}>
                            <h1>WHAT WE DO</h1>
                        </div>
                    </div>
              </>
);}