import Icon from "./Icon";
import VideoBox from "./VideoBox";

const items = [
  {
    t: "Posicione-se ao lado do cão, nunca de frente",
    s: "De frente parece confronto. Ao lado, vocês são parceiros.",
  },
  {
    t: "Levante o lábio com o polegar, mantenha boca fechada",
    s: "A maioria dos cães prefere escovar com a boca fechada — menos invasivo.",
  },
  {
    t: "Movimentos circulares, sempre da gengiva pro dente",
    s: "Como na sua escovação. A 45° é o ângulo ideal pra remover placa.",
  },
  {
    t: "Foco na parte externa dos dentes",
    s: "É onde 90% do tártaro se forma. A parte interna a língua já limpa naturalmente.",
  },
  {
    t: "Termine sempre com elogio efusivo",
    s: "A última memória da sessão tem que ser positiva. Festinha vale ouro.",
  },
];

export default function Tutorial() {
  return (
    <section>
      <div className="container">
        <div className="tutorial-grid">
          <div>
            <span className="eyebrow">Tutorial detalhado</span>
            <h2 style={{ marginTop: 18, fontSize: "clamp(36px, 4.5vw, 56px)" }}>
              A técnica que veterinários usam — em 5 movimentos.
            </h2>
            <p style={{ marginTop: 18, color: "var(--muted)" }}>
              Inclui vídeo demonstrativo gravado pela Dra. Mariana Quintela (CRMV-SP 18.402) no
              canal oficial.
            </p>
            <div className="tutorial-list">
              {items.map((it, i) => (
                <div key={i} className="tutorial-item">
                  <div className="tutorial-item-num">{(i + 1).toString().padStart(2, "0")}</div>
                  <div className="tutorial-item-text">
                    <strong>{it.t}</strong>
                    <span>{it.s}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="social-mock">
              <div className="social-head">
                <div className="social-avatar">
                  <div className="social-avatar-inner">P</div>
                </div>
                <div>
                  <div className="social-name">@petmouth.udc</div>
                  <div className="social-handle">Foz do Iguaçu, PR</div>
                </div>
              </div>

              {/*
               * VÍDEO DO REEL
               * 1. Salve o .mp4 em /public/videos/tutorial-reel.mp4
               * 2. Descomente a linha src abaixo — só isso.
               *
               * O vídeo toca automaticamente em loop e sem som (padrão reel).
               * Clique na tela pausa / retoma.
               */}
              <VideoBox
                className="social-image"
                src="/videos/tutorial-reel.mp4"
                label="REEL_ESCOVACAO_TUTORIAL · 1:1"
              />

              <div className="social-actions">
                <Icon name="heart" size={22} />
                <Icon name="chat" size={22} />
                <Icon name="paw" size={22} />
              </div>
              <div className="social-caption">
                <strong>4.218 curtidas</strong>
                <p style={{ marginTop: 6 }}>
                  <strong>petmouth.br</strong> O segredo pra escovar sem briga? Posicionamento.
                  Salve esse reel{" "}
                  <Icon
                    name="tooth"
                    size={14}
                    stroke={1.8}
                    style={{ display: "inline", verticalAlign: "middle" }}
                  />
                </p>
                <p className="muted" style={{ marginTop: 4, fontSize: 12 }}>
                  Ver todos os 287 comentários · há 2 dias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
