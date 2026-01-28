import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>We Are Entrepreneurs Who Have Done It</h2>
          <p className={styles.intro}>
            AIRX is the second phase of BRC (Brain Robotics Capital). Unlike traditional 
            passive LPs, we function as fellow co-founders. We've been invested in, we've 
            invested, we've been merged and exited, and we've acquired companies. We've 
            sat on both sides of the table. Now we can help.
          </p>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>VC + SPV + Incubation</h3>
              <p className={styles.cardText}>
                We combine venture capital, special purpose vehicles, and hands-on 
                incubation to provide comprehensive support from idea to exit.
              </p>
            </div>
            
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Expert Network</h3>
              <p className={styles.cardText}>
                We bring together domain experts, engineers, and operators who understand 
                the journey from technology to market success.
              </p>
            </div>
            
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Operational Excellence</h3>
              <p className={styles.cardText}>
                We don't just write checks. We roll up our sleeves and help with product 
                development, market validation, and execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
