import styles from './Services.module.css'

export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Get Funded & Shape Product',
      description: 'We help technologies and scientists get funded, shape their products, and pool connections together. Our expert network brings domain expertise in engineering, manufacturing, and supply chain to mitigate risks and improve efficiencies throughout productization.',
    },
    {
      number: '02',
      title: 'Go to Market',
      description: 'This is where tech founders often struggle. We bring in operational and execution expertise to help validate business models, secure piloting opportunities with large enterprises, and achieve market approval. We co-lead piloting projects to ensure success.',
    },
    {
      number: '03',
      title: 'Financial Market Connections',
      description: 'We help connect startups with investment banks to provide vehicles for going public, creating liquidity, or facilitating M&A and exits. Our network includes financial institutions that understand the path from startup to public company.',
    },
  ]

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>How We Help</h2>
          <p className={styles.subheading}>
            We partner with you at every stage of your journey
          </p>
        </div>
        
        <div className={styles.list}>
          {services.map((service, index) => (
            <div key={index} className={styles.service}>
              <div className={styles.number}>{service.number}</div>
              <div className={styles.content}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
