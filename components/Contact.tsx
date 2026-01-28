import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Let's Build Together</h2>
          <p className={styles.subheading}>
            If you're a scientist or tech entrepreneur building something meaningful, 
            we'd love to hear from you.
          </p>
          
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <h3 className={styles.infoLabel}>Email</h3>
              <a href="mailto:contact@airx.com" className={styles.infoValue}>
                contact@airx.com
              </a>
            </div>
            
            <div className={styles.infoItem}>
              <h3 className={styles.infoLabel}>Location</h3>
              <p className={styles.infoValue}>
                12F 245 Main St<br />
                Cambridge, MA 02142
              </p>
            </div>
          </div>
          
          <div className={styles.footer}>
            <p className={styles.footerText}>
              AIRX — The second phase of BRC (Brain Robotics Capital)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
