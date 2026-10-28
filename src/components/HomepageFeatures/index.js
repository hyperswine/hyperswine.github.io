import React from "react"
import Link from "@docusaurus/Link"
import styles from "./styles.module.css"

const Projects = [
  { name: "FP-RISC", to: "/docs/projects/fprisc", tag: "Language", desc: "A compiler, interpreter and runtime, with native code from typed IR for RISC-V, AArch64 and x64." },
  { name: "QOS", to: "/docs/projects/qos", tag: "OS", desc: "An operating system written in FP-RISC, in Native and Portable forms." },
  { name: "SimpleRisc", to: "/docs/projects/simple-risc", tag: "Hardware", desc: "An RV32IM(C) soft core in Clash, running on a Tang Nano 20K." },
  { name: "QRepo", to: "/docs/projects/qrepo", tag: "Tool", desc: "A local checkpoint tool written in native FP-RISC." },
  { name: "coscad", to: "/docs/projects/coscad", tag: "CAD", desc: "A CAD language that compiles to OpenSCAD and print-ready STLs." },
  { name: "NeoMusic", to: "/docs/projects/neomusic", tag: "Music", desc: "Algebraic music notation that renders to audio, MIDI and sheets." },
  { name: "Infera", to: "/docs/projects/infera", tag: "Logic", desc: "A Prolog-inspired language with modes, tabling and CLP(Z)." },
]

export default function HomepageFeatures() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Current projects</h2>
        <div className={styles.grid}>
          {Projects.map((p) => (
            <Link key={p.name} to={p.to} className={styles.card}>
              <span className={styles.tag}>{p.tag}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
