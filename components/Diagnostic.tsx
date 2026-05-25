import Image from "next/image";
import Icon from "./Icon";

type Status = "healthy" | "warn";

interface DiagCard {
  status: Status;
  label: string;
  body: string;
  src: string;
  alt: string;
  /** Ponto de foco do recorte (imagens landscape entrando num container portrait) */
  position?: string;
}

const cards: DiagCard[] = [
  {
    status: "healthy",
    label: "Gengiva saudável",
    body: "Cor rosa salmão, firme, sem inchaço ao redor do dente.",
    src: "/images/GENGIVA_SAUDAVEL.jpg",
    alt: "Gengiva canina saudável — cor rosa uniforme",
    // 1600×902 landscape → container 4:5 portrait; centraliza no tecido gengival
    position: "center center",
  },
  {
    status: "warn",
    label: "Gengivite inicial",
    body: "Vermelha nas bordas, sangra ao toque.",
    src: "/images/GENGIVITE_LEVE.jpg",
    alt: "Gengivite leve em cão — gengiva avermelhada nas bordas",
    // 1200×600 landscape → container 4:5; foca na borda gengival
    position: "center center",
  },
  {
    status: "healthy",
    label: "Dentes limpos",
    body: "Esmalte branco-marfim, sem manchas amareladas no contorno.",
    src: "/images/DENTES_BRANCOS.jpg",
    alt: "Dentes caninos limpos e brancos",
    // 800×800 square → container 4:5; leve corte no topo e base
    position: "center center",
  },
  {
    status: "warn",
    label: "Tártaro acumulado",
    body: "Crosta amarelada/marrom no contorno da gengiva. Pede limpeza profissional.",
    src: "/images/DENTES_TARTARO.jpg",
    alt: "Tártaro acumulado nos dentes caninos",
    // 800×800 square → container 4:5
    position: "center center",
  },
];

export default function Diagnostic() {
  return (
    <section id="diagnostico">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Diagnóstico visual</span>
            <h2 style={{ marginTop: 18 }}>Saiba reconhecer — antes que vire problema.</h2>
          </div>
          <p>
            Compare a boca do seu cão com as imagens abaixo. Se identificar tártaro ou gengivite,
            comece o protocolo hoje e agende avaliação veterinária.
          </p>
        </div>
        <div className="diag-grid">
          {cards.map((c, i) => (
            <div key={i} className="diag-card">
              <div className="diag-image">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  style={{ objectFit: "cover", objectPosition: c.position ?? "center" }}
                  sizes="(max-width: 480px) 100vw, (max-width: 640px) 50vw, (max-width: 980px) 25vw, 280px"
                />
                <span className={"diag-status " + c.status}>
                  {c.status === "healthy" ? (
                    <>
                      <Icon name="check" size={12} /> Saudável
                    </>
                  ) : (
                    <>
                      <Icon name="alert" size={12} /> Atenção
                    </>
                  )}
                </span>
              </div>
              <div className="diag-body">
                <h3>{c.label}</h3>
                <p>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
