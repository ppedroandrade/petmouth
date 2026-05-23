import Icon from "./Icon";
import ImgBox from "./ImgBox";

const items = [
  {
    num: "01",
    t: "Cartilha digital ilustrada (PDF, 24 páginas)",
    s: "Protocolo completo de escovação por idade, raça e nível de aceitação.",
  },
  {
    num: "02",
    t: "Calendário de escovação de 30 dias",
    s: "Imprima ou use no celular. Marque cada dia, comemore cada semana.",
  },
  {
    num: "03",
    t: "Desafio 7 dias por e-mail",
    s: "Uma dica curta por dia, pra você criar o hábito sem desistir.",
  },
];

const benefits = [
  { t: "Material 100% gratuito", s: "Você só precisa do e-mail." },
  { t: "Revisado por veterinários", s: "Dra. Mariana Quintela e equipe." },
  { t: "Pra qualquer raça e idade", s: "Filhote, adulto ou idoso — tem protocolo específico." },
];

export default function FinalCTA() {
  return (
    <section id="kit">
      <div className="container">
        <div className="final-cta">
          <div className="final-cta-grid">
            <div>
              <span className="eyebrow" style={{ color: "var(--salmon)" }}>
                O kit completo, grátis
              </span>
              <h2 style={{ marginTop: 18 }}>
                Comece <em>hoje</em>. Em 7 dias seu cão já te recebe pra escovar.
              </h2>
              <p className="final-cta-sub">
                Tudo que você precisa pra transformar a higiene bucal num momento de carinho — e não
                de briga.
              </p>
              <div className="benefits">
                {benefits.map((b, i) => (
                  <div key={i} className="benefit">
                    <div className="benefit-check">
                      <Icon name="check" size={16} />
                    </div>
                    <div>
                      <strong>{b.t}</strong>
                      <span>{b.s}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="kit-card">
              {/*
               * MOCKUP_KIT_DIGITAL.png — 473×681 (portrait, ratio ~0.69)
               * O container kit-image usa aspect-ratio: 2/3 pra combinar com a
               * proporção real da imagem. object-fit:contain exibe o mockup inteiro.
               */}
              <ImgBox
                className="kit-image"
                src="/images/MOCKUP_KIT_DIGITAL.png"
                alt="Mockup do kit digital PetMouth"
                fit="contain"
                position="center center"
                sizes="(max-width: 980px) 100vw, 400px"
              />

              <h4>O que você vai receber</h4>
              <div className="kit-list">
                {items.map((it, i) => (
                  <div key={i} className="kit-item">
                    <span className="kit-num">{it.num}</span>
                    <div>
                      <strong>{it.t}</strong>
                      <p style={{ color: "var(--muted)", fontSize: 13, marginTop: 2 }}>{it.s}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="kit-cta">
                Baixar agora — é grátis <Icon name="arrow-right" size={14} />
              </button>
              <p style={{ fontSize: 11, color: "var(--muted)", textAlign: "center", marginTop: 12 }}>
                Você pode cancelar o e-mail quando quiser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
