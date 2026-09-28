import styles from "./instalacion.module.css";
import { responsiveImage } from "../lib/responsiveImage";

const posteImage = responsiveImage(
  "/images/poste-placa.png",
  { width: 900, height: 1200, fileWidth: 1600 },
  { width: 800, height: 1067 }
);

const STEP_LARGE = { width: 1200, height: 900 };
const STEP_MOBILE = { width: 800, height: 600 };

const CORNER_POSITIONS = ["tl", "tr", "bl", "br"] as const;

function CornerMarks() {
  return (
    <>
      {CORNER_POSITIONS.map((pos) => (
        <i key={pos} className={`${styles["ah-c"]} ${styles[pos]}`} />
      ))}
    </>
  );
}

type Step = {
  number: string;
  image: string;
  alt: string;
  title: string;
  description: string;
};

const STAGE_1_STEPS: Step[] = [
  {
    number: "1.1",
    image: "/images/paso-1-1.jpg",
    alt: "Marcando la ubicación de la placa sobre el hormigón",
    title: "Marca la ubicación",
    description:
      "Apoya la placa donde irá cada poste y marca los cuatro agujeros con ella misma como plantilla.",
  },
  {
    number: "1.2",
    image: "/images/paso-1-2.jpg",
    alt: "Perforando el hormigón y fijando los pernos de anclaje",
    title: "Perfora y fija",
    description:
      "Perfora los puntos marcados y clava los pernos de anclaje hasta que asomen parejos.",
  },
  {
    number: "1.3",
    image: "/images/paso-1-3.jpg",
    alt: "Poste aplomado con nivel de burbuja apoyado",
    title: "Monta y nivela",
    description: "Calza el poste en los topes de la placa, aplómalo en dos caras y aprieta.",
  },
];

const STAGE_2_STEPS: Step[] = [
  {
    number: "2.1",
    image: "/images/paso-2-1.jpg",
    alt: "Perfil inferior encajado entre dos postes",
    title: "Perfil inferior",
    description: "Va entre poste y poste, apoyado en los clips. Define el nivel de todo el paño.",
  },
  {
    number: "2.2",
    image: "/images/paso-2-2.jpg",
    alt: "Deslizando un tablón WPC por la ranura del poste",
    title: "Desliza los tablones",
    description:
      "Entran por la ranura del poste y calzan uno sobre otro hasta llegar a la altura.",
  },
  {
    number: "2.3",
    image: "/images/paso-2-3.jpg",
    alt: "Tapa de poste puesta a presión, paño terminado",
    title: "Cierra arriba",
    description:
      "Perfil superior y tapas de poste a presión. El paño queda terminado, sin tornillo a la vista.",
  },
];

function StepGrid({ steps }: { steps: Step[] }) {
  return (
    <div className={styles["ah-grid"]}>
      {steps.map((step) => {
        const image = responsiveImage(step.image, STEP_LARGE, STEP_MOBILE);
        return (
        <div key={step.number} className={styles["ah-cell"]}>
          <div className={styles["ah-shot"]}>
            <img
              src={image.src}
              srcSet={image.srcSet}
              sizes="(min-width: 900px) 33vw, 90vw"
              width={image.width}
              height={image.height}
              alt={step.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles["ah-cap"]}>
            <b>{step.number}</b>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span className={styles["ah-cap-t"]}>{step.title}</span>
              <span className={styles["ah-cap-d"]}>{step.description}</span>
            </div>
          </div>
        </div>
        );
      })}
    </div>
  );
}

export default function InstalacionSection() {
  return (
    <section className={styles["ah-inst"]} id="instalacion">
      <div className={styles["ah-head"]}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 300 }}>
          <h2 className={styles["ah-title"]}>Dos etapas, seis movimientos</h2>
          <p className={styles["ah-lead"]}>
            Postes primero, panel después. Sin corte, sin soldadura, sin pintura: todo
            el sistema calza por encaje.
          </p>
        </div>
        <div className={styles["ah-facts"]}>
          <div className={styles["ah-fact"]}>
            <span>Personas</span>
            <span>Dos</span>
          </div>
          <div className={styles["ah-fact"]}>
            <span>Tiempo</span>
            <span>Un fin de semana</span>
          </div>
        </div>
      </div>

      <div className={styles["ah-cols"]}>
        <aside className={styles["ah-aside"]}>
          <div className={`${styles["ah-frame"]} ${styles["ah-hero"]}`}>
            <CornerMarks />
            <div className={styles["ah-hero-clip"]}>
              <img
                src={posteImage.src}
                srcSet={posteImage.srcSet}
                sizes="(min-width: 900px) 380px, 100vw"
                width={posteImage.width}
                height={posteImage.height}
                alt="Poste WPC montado sobre su placa base"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <span className={styles["ah-h"]} style={{ fontSize: 22 }}>
              Poste sobre placa
            </span>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ah-body)" }}>
              La pieza que sostiene todo. Si los postes quedan a plomo y en línea, el
              resto del cerco se arma solo.
            </p>
          </div>
          <div className={styles["ah-tags"]}>
            <span className={styles["ah-tag"]}>Sin soldadura</span>
            <span className={styles["ah-tag"]}>Sin corte</span>
            <span className={`${styles["ah-tag"]} ${styles["is-accent"]}`}>
              Autoconstrucción
            </span>
          </div>
        </aside>

        <div className={styles["ah-steps"]}>
          <div className={`${styles["ah-frame"]} ${styles["ah-stage"]}`}>
            <CornerMarks />
            <div className={styles["ah-stage-head"]}>
              <span className={styles["ah-num"]}>01</span>
              <h3>Instalación de postes</h3>
              <span className={styles["ah-stage-meta"]}>Etapa base · 1 día</span>
            </div>

            <StepGrid steps={STAGE_1_STEPS} />

            <div className={styles["ah-note"]}>
              <span>Ojo</span>
              <span>
                Deja perfectos el primer y el último poste: son los que marcan la línea
                de todo el cerco. Los del medio se alinean con un lienzo entre ambos.
              </span>
            </div>
          </div>

          <div className={`${styles["ah-frame"]} ${styles["ah-stage"]}`}>
            <CornerMarks />
            <div className={styles["ah-stage-head"]}>
              <span className={styles["ah-num"]}>02</span>
              <h3>Montaje del panel</h3>
              <span className={styles["ah-stage-meta"]}>Etapa rápida · 20 min por paño</span>
            </div>

            <StepGrid steps={STAGE_2_STEPS} />

            <div className={styles["ah-note"]}>
              <span>Ojo</span>
              <span>
                Arma un paño completo antes de pasar al siguiente: si un tablón quedó
                forzado, se nota al cerrar arriba y todavía se puede sacar.
              </span>
            </div>
          </div>

          <div className={styles["ah-foot"]}>
            <span
              style={{
                fontSize: 16,
                lineHeight: 1.5,
                color: "var(--ah-body)",
                maxWidth: "54ch",
              }}
            >
              Cada kit llega con las piezas cortadas a medida, rotuladas y con el
              instructivo impreso.
            </span>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a className={`${styles["ah-btn"]} ${styles["ah-btn-primary"]}`} href="#kit">
                Ver el kit completo
              </a>
              <a
                className={`${styles["ah-btn"]} ${styles["ah-btn-secondary"]}`}
                href="#instructivo"
              >
                Descargar instructivo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
