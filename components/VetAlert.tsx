import Icon from "./Icon";
import ImgBox from "./ImgBox";

const signs = [
  { t: "Mau hálito persistente", s: "Cheiro forte que não passa nem com escovação." },
  { t: "Sangramento ao escovar", s: "Gengiva sangra com toque leve — gengivite estabelecida." },
  { t: "Dificuldade pra mastigar", s: "Mastiga só de um lado, deixa pedaços, evita ração dura." },
  { t: "Salivação excessiva ou com sangue", s: "Sinal de inflamação avançada ou abscesso dental." },
  { t: "Mudança de comportamento ao comer", s: "Late, recusa, late ao tocar a boca — está doendo." },
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
          <ImgBox
            className="vet-image"
            src="/images/FOTO_VETERINARIA_CONSULTA.png"
            alt="Veterinária realizando consulta odontológica em cão"
            fit="cover"
            position="center top"
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
              Se o seu cão apresentar dois ou mais destes sinais, agende uma avaliação odontológica
              veterinária nos próximos 7 dias.
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
