import React from "react"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Layout from "@theme/Layout"
import HomepageFeatures from "@site/src/components/HomepageFeatures"
import styles from "./index.module.css"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={styles.hero}>
      <div className="container">
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <div className={styles.actions}>
          <Link className="button button--primary" to="/docs/projects">Projects</Link>
          <Link className="button button--secondary button--outline" to="/docs/about">About</Link>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Jasen Qin (hyperswine): FP-RISC, QOS, SimpleRisc, coscad, NeoMusic and other projects."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
