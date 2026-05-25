import Icon from "./Icon";
import VideoBox from "./VideoBox";

const items = [
  {
    t: "Escolha um momento tranquilo",
    s: "Ambientes calmos ajudam o cão a se sentir mais confortável durante a escovação.",
  },
  {
    t: "Apresente a escova aos poucos",
    s: "Deixe o cão cheirar, lamber e se acostumar com a pasta e a escova antes de começar.",
  },
  {
    t: "Escove com movimentos suaves",
    s: "Faça movimentos circulares firmes, porem leves, próximos à gengiva, sem forçar a abertura da boca.",
  },
  {
    t: "Priorize a parte externa dos dentes",
    s: "A região que fica em contato com a bochecha e os lábios tende a acumular mais placa e tártaro no dia a dia.",
  },
  {
    t: "Crie uma rotina positiva",
    s: "Elogios, carinho e recompensas após a escovação ajudam o cão a aceitar com mais facilidade.",
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
              A forma certa de escovar — em 5 movimentos.
            </h2>
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
                  <strong>petmouth.udc</strong>Escovar os dentes não precisa virar uma batalha diária. {" "}
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
