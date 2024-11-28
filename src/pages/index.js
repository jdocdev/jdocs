import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Construccion from "@site/static/img/enConstruccion.png";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    const styleConstruccion = {
        padding: "0rem 0rem 1rem 0rem",
    };

    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <img src={Construccion} style={styleConstruccion} />
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <a
                    href="https://www.youtube.com/@juandavid_dev"
                    target="_blank"
                    className="hero__subtitle"
                >
                    {siteConfig.tagline}
                </a>
                <p>
                    Un espacio diseñado para principiantes que desean sumergirse
                    en el mundo de la programación. Aprende los fundamentos
                    básicos, explora conceptos esenciales y avanza gradualmente
                    hacia temas más complejos. Tendremos un enfoque claro y
                    práctico, este sitio es tu guía completa para convertirte en
                    un desarrollador competente.
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro"
                    >
                        ¡Comencemos! ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.tagline}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
