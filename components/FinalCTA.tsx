import Icon from "./Icon";
import ImgBox from "./ImgBox";

const items = [
  {
    num: "01",
    t: "Guia ilustrado sobre tártaro e saúde bucal",
    s: "Entenda o que causa o tártaro, os sinais de alerta e como prevenir problemas antes que virem dor ou mau hálito.",
  },
  {
    num: "02",
    t: "Plano de escovação em 9 dias",
    s: "Um passo a passo simples para acostumar seu pet à escova sem forçar, com evolução gradual dia após dia.",
  },
];

const benefits = [
  { t: "Material 100% gratuito", s: "Sem pegadinhas, sem upsell. Só conteúdo de qualidade pra cuidar do sorriso do seu pet." },
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
                Comece <em>hoje</em>. Uma adaptação gradual para tornar a escovação mais tranquila.
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
              {/*
               * MOCKUP_KIT_DIGITAL.png — 528×633 (ratio ~5:6)
               * container é mais alto (ratio 1:1) → contain + bottom ancoram o cachorro
               * na base do card com espaço de respiro no topo.
               */}
              <ImgBox
                className="kit-image"
                src="/images/MOCKUP_KIT_DIGITAL.png"
                alt="Mockup do kit digital PetMouth"
                fit="contain"
                position="center bottom"
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
              <div className="kit-cta-row">
                <a className="kit-cta kit-cta-primary" href="/downloads/kit-petmouth.pdf" download="Kit PetMouth.pdf">
                  <Icon name="download" size={15} /> Cartilha PetMouth
                </a>
                <a className="kit-cta kit-cta-secondary" href="/downloads/kit-calendar.pdf" download="Calendário de Escovação.pdf">
                  <Icon name="calendar" size={15} /> Calendário
                </a>
              </div>
              <p style={{ fontSize: 11, color: "var(--muted)", textAlign: "center", marginTop: 12 }}>
                Dois materiais gratuitos — basta clicar e baixar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
