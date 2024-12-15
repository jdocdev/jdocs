import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Empieza con los fundamentos',
    Png: require('@site/static/img/Empieza.png').default,
    description: (
      <>
        Todo gran proyecto comienza con una base sólida. Aprende qué es la programación, cómo funciona y por qué es clave en el mundo moderno. Con ejemplos claros y prácticos, darás tus primeros pasos para dominar los conceptos básicos.
      </>
    ),
  },
  {
    title: 'Crea y resuelve problemas',
    Png: require('@site/static/img/Crea.png').default,
    description: (
      <>
        La programación te enseña a pensar de manera lógica y estructurada. Aprende a resolver problemas reales, escribe tus primeras líneas de código, practica y disfruta con ejercicios interactivos que refuercen tu aprendizaje.
      </>
    ),
  },
  {
    title: 'Avanza hacia lo profesional',
    Png: require('@site/static/img/Avanza.png').default,
    description: (
      <>
        Una vez que domines los fundamentos, explora temas avanzados como algoritmos, estructuras de datos y frameworks populares. Este sitio te guiará para desarrollar proyectos prácticos y enfrentarte al mundo real con confianza.
      </>
    ),
  },  
];

function Feature({Png, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <img src={Png} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
