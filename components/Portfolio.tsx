import styles from './Portfolio.module.css'

export default function Portfolio() {
  const portfolio = [
    { name: 'Aifi', category: 'Smart Retail', url: 'https://www.aifi.com/' },
    { name: 'AiTreat', category: 'Med Robot', url: 'https://www.aitreat.com/' },
    { name: 'AnChain', category: 'BlockChain Tech', url: 'https://www.anchain.ai/' },
    { name: 'Bito (宾通智能)', category: 'Smart Manufacturing', url: 'https://www.bitorobotics.com/' },
    { name: 'Exyn', category: 'Autonomous Aerial', url: 'https://www.exyn.com/' },
    { name: 'Fathom Optics (Lumii)', category: '3D Display Tech', url: 'https://www.lumiidisplay.com/' },
    { name: 'Kinderlab Robotics', category: 'STEM Ed Robot', url: 'https://kinderlabrobotics.com/' },
    { name: 'MemVerge', category: 'Big Memory', url: 'https://www.memverge.com/' },
    { name: 'NeuralGalaxy (优脑银河)', category: 'NLP/Neural Science', url: 'https://www.neuralgalaxy.com/' },
    { name: 'TVision Insight', category: 'Ad Tech', url: 'https://www.tvisioninsights.com/' },
    { name: 'Ghost Robotics', category: 'Acquired by LIG Nex1', url: 'https://www.ghostrobotics.io/', status: 'acquired' },
    { name: 'Turing Video (图灵视频)', category: 'Patrolling Robot', status: 'exited' },
    { name: 'Conjur', category: 'DevOps', status: 'acquired', note: 'Acquired by CyberArk' },
    { name: 'Giaran', category: 'Beauty Tech', status: 'acquired', note: 'Acquired by Shiseido' },
    { name: 'American Robotics', category: 'Ag Drone Tech', status: 'public', note: 'Listed on Nasdaq (ONDS)' },
    { name: 'Empirical', category: 'Big Data', status: 'acquired', note: 'Acquired by Tableau' },
    { name: 'Butterfleye', category: 'Smart Camera', status: 'acquired', note: 'Acquired by Ooma' },
  ]

  const activeCompanies = portfolio.filter(p => !p.status || p.status === 'active')
  const exitedCompanies = portfolio.filter(p => p.status && p.status !== 'active')

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Our Track Record</h2>
          <p className={styles.subheading}>
            Building on the success of BRC Phase I portfolio companies
          </p>
        </div>

        {activeCompanies.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Portfolio Companies</h3>
            <div className={styles.grid}>
              {activeCompanies.map((company, index) => (
                <a
                  key={index}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <div className={styles.cardContent}>
                    <h4 className={styles.companyName}>{company.name}</h4>
                    <p className={styles.category}>{company.category}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {exitedCompanies.length > 0 && (
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Exits & Acquisitions</h3>
            <div className={styles.grid}>
              {exitedCompanies.map((company, index) => (
                <div key={index} className={`${styles.card} ${styles.exited}`}>
                  <div className={styles.cardContent}>
                    <h4 className={styles.companyName}>{company.name}</h4>
                    <p className={styles.category}>{company.category}</p>
                    {company.note && (
                      <p className={styles.note}>{company.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
