import Icon from "./Icon";
import ImgBox from "./ImgBox";

export default function Hero() {
  return (
    <header className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Saúde bucal canina</span>
          <h1 style={{ marginTop: 18 }}>
            O sorriso do seu cão <em>começa</em> com um hábito de 2 minutos.
          </h1>
          <p className="hero-sub">
            80% dos cães com mais de 3 anos têm doença periodontal — e quase nenhum tutor percebe a
            tempo. Comece hoje escovar sem briga.
          </p>
          <div className="hero-cta-row">
            <a className="btn btn-primary btn-large" href="#kit">
              <Icon name="download" size={18} /> Baixe o material grátis
            </a>
            <a className="btn btn-ghost" href="#quiz">
              <Icon name="play" size={14} /> Fazer o diagnóstico
            </a>
          </div>
          {/* <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="hero-meta-num">12k+</span>
              <span className="hero-meta-label">tutores escovando todo dia</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-num">4.9</span>
              <span className="hero-meta-label">avaliação média do método</span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-num">7d</span>
              <span className="hero-meta-label">para criar o hábito</span>
            </div>
          </div> */}
        </div>

        <div className="hero-visual">
          {/*
           * hero-dog.jpg é landscape (759×603).
           * O container é portrait (4:5) — object-fit:cover escala pela altura
           * e object-position centraliza o foco no cão.
           */}
          <ImgBox
            className="hero-photo"
            src="/images/hero-dog2.png"
            alt="Golden Retriever sorrindo"
            fit="cover"
            position="center center"
            sizes="(max-width: 640px) 100vw, (max-width: 980px) 480px, 560px"
          />

          <div className="seal">
            <div className="seal-content">
              <div className="seal-eyebrow">Estudo feito por</div>
              <div className="seal-inner">
                Alunos da
                <br />
                UDC
              </div>
              <div className="seal-stars">★★★★★</div>
            </div>
          </div>

          <div className="floating-card fc-1">
            <div className="fc-icon" style={{ background: "var(--success-bg)", color: "var(--success)" }}>
              <Icon name="check" size={18} />
            </div>
            <div className="fc-text">
              <div className="fc-title">Hálito fresco</div>
            </div>
          </div>

          <div className="floating-card fc-2">
            <div className="fc-icon" style={{ background: "var(--sky)", color: "var(--navy)" }}>
              <Icon name="shield" size={18} />
            </div>
            <div className="fc-text">
              <div className="fc-title">Sem tártaro</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
