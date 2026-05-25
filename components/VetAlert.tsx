import Icon from "./Icon";
import ImgBox from "./ImgBox";

const signs = [
  { t: "Mau hálito persistente", s: "Cheiro forte que não passa nem com escovação." },
  { t: "Sangramento ao escovar", s: "Gengiva que sangra com toque leve pode indicar inflamação e precisa de avaliação." },
  { t: "Dificuldade pra mastigar", s: "Mastiga só de um lado, deixa pedaços, evita ração dura." },
  { t: "Salivação excessiva ou com sangue", s: "Pode indicar inflamação, dor oral, ferida ou infecção." },
  { t: "Mudança de comportamento ao comer", s: "Recusa alimento, reage ao toque ou muda o jeito de mastigar — pode haver dor ou desconforto." },
  {
    t: "Dente quebrado ou móvel",
    s: "Emergência. Pode comprometer a raiz e gerar infecção sistêmica.",
  },
];

export default function VetAlert() {
  return (
    <section>
      <div className="container">
        <div className="vet-grid">
          {/*
           * FOTO_VETERINARIA_CONSULTA.png — 630×673 (~portrait)
           * Container vet-image é 5:6 (0.833). Imagem ratio = 0.94.
           * object-fit:cover com position top para manter o rosto/procedimento visível.
           */}
          {/*
           * FOTO_VETERINARIA_CONSULTA.png — 373×559 (ratio ~2:3)
           * container vet-image tem aspect-ratio: 2/3 → contain preenche
           * o espaço todo sem cortar nenhuma parte da imagem.
           */}
          <ImgBox
            className="vet-image"
            src="/images/FOTO_VETERINARIA_CONSULTA.png"
            alt="Cachorro com estetoscópio"
            fit="contain"
            position="center center"
            sizes="(max-width: 980px) 100vw, 520px"
          />

          <div>
            <span className="eyebrow" style={{ color: "var(--danger)" }}>
              Quando ir ao veterinário
            </span>
            <h2 style={{ marginTop: 18, fontSize: "clamp(36px, 4.5vw, 52px)" }}>
              6 sinais que pedem consulta — não adie.
            </h2>
            <p style={{ marginTop: 18, color: "var(--muted)" }}>
              Se o seu cão apresentar um ou mais destes sinais, procure orientação veterinária. Dor intensa, sangramento, dente móvel ou secreção exigem atenção mais rápida.
            </p>
            <div className="vet-list">
              {signs.map((s, i) => (
                <div key={i} className="vet-item">
                  <div className="vet-item-icon">
                    <Icon name="alert" size={18} />
                  </div>
                  <div>
                    <h4>{s.t}</h4>
                    <p>{s.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
