import styles from "./componentes.module.css";

type Componente = {
  number: string;
  image: string;
  alt: string;
  title: string;
  description: string;
};

const COMPONENTES: Componente[] = [
  {
    number: "01",
    image: "/images/componente-01-perfil-terminacion.png",
    alt: "Perfil de terminación de aluminio",
    title: "Perfil terminación",
    description: "Perfil de aluminio superior e inferior.",
  },
  {
    number: "02",
    image: "/images/componente-02-tapa-poste.png",
    alt: "Tapa superior del poste",
    title: "Tapa poste",
    description: "Tapa superior, evita acumulación de agua al interior del poste.",
  },
  {
    number: "03",
    image: "/images/componente-03-ensamble-elementos.png",
    alt: "Ensamble de poste de aluminio, tablón y perfil de terminación",
    title: "Ensamble elementos",
    description: "Poste de aluminio, tablón y perfil de terminación.",
  },
  {
    number: "04",
    image: "/images/componente-04-tablones-wpc.png",
    alt: "Tablón WPC de perfil hueco",
    title: "Tablones WPC",
    description: "Robusto, 20 mm de espesor y 20 cm de alto. Ensamble perfecto.",
  },
  {
    number: "05",
    image: "/images/componente-05-poste-cerca.png",
    alt: "Poste de cerca con riel para tablón WPC",
    title: "Poste cerca",
    description:
      "Poste de 7×7 cm con riel para ensamble de tablón WPC. Terminación frontal lisa.",
  },
  {
    number: "06",
    image: "/images/componente-06-base-poste-cerca.png",
    alt: "Base de acero para el poste de la cerca",
    title: "Base poste cerca",
    description:
      "Base de acero de 7 mm de espesor. Ensamble poste-base (incluye pernos de anclaje).",
  },
];

export default function ComponentesSection() {
  return (
    <div className={styles["cp-root"]}>
      <div className={styles["cp-grid"]}>
        {COMPONENTES.map((item) => (
          <div key={item.number} className={styles["cp-cell"]}>
            <div className={styles["cp-shot"]}>
              <img src={item.image} alt={item.alt} />
            </div>
            <div className={styles["cp-cap"]}>
              <span className={styles["cp-num"]}>{item.number}</span>
              <div className={styles["cp-text"]}>
                <h3 className={styles["cp-title"]}>{item.title}</h3>
                <p className={styles["cp-desc"]}>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles["cp-explode"]}>
        <div className={styles["cp-explode-text"]}>
          <h3 className={styles["cp-explode-title"]}>Vista de ensamble</h3>
          <p className={styles["cp-desc"]}>
            Así se relacionan las 6 piezas del sistema. Los números indican la posición
            de cada componente.
          </p>
        </div>
        <img
          src="/images/componente-07-vista-ensamble.png"
          alt="Vista explosionada del sistema con los 6 componentes numerados"
        />
      </div>
    </div>
  );
}
