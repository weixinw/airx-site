import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            We help the daring
            <br />
            build legendary companies.
          </h1>
          <p className={styles.subtitle}>
            AIRX is VC + SPV + Incubation. We partner with scientists and tech 
            entrepreneurs as fellow co-founders, providing expert networks, 
            go-to-market execution, and financial connections to create lasting impact.
          </p>
          <div className={styles.cta}>
            <a href="#contact" className={styles.button}>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
