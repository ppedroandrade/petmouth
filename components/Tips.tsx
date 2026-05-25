import Icon, { IconName } from "./Icon";

const tips: { icon: IconName; title: string; body: string }[] = [
  { icon: "paw", title: "Comece pelos caninos", body: "São os dentes mais fáceis de alcançar e os primeiros que seu cão aceita escovar." },
  { icon: "tooth", title: "Use a escova certa", body: "Cerdas extra-macias e cabo longo." },
  { icon: "heart", title: "Recompense sempre", body: "Reforço positivo é o que transforma escovação em algo que ele espera com vontade." },
  { icon: "clock", title: "Mesmo horário, todo dia", body: "Manter um horário fixo todos os dias ajuda o cão a criar rotina e contribui para um hálito mais saudável." },
  { icon: "sparkle", title: "2 minutos é suficiente", body: "Escovações curtas e diárias funcionam mais que longas e raras. Qualidade > duração." },
  { icon: "shield", title: "Pasta de dente canina", body: "Prefira pastas específicas para cães. Além de serem seguras para ingestão, versões com sabor ajudam na adaptação e tornam a escovação mais fácil no dia a dia." },
];

export default function Tips() {
  return (
    <section>
      <div className="container">
        <div className="tips-bg">
          <div className="section-head center">
            <span className="eyebrow">Dicas práticas</span>
            <h2 style={{ marginTop: 18 }}>O que ninguém te conta sobre escovar dentes de cachorro</h2>
            <p>Seis princípios que mudam tudo</p>
          </div>
          <div className="tips-grid">
            {tips.map((t, i) => (
              <div key={i} className="tip-card">
                <div className="tip-card-icon"><Icon name={t.icon} size={28} stroke={1.5} /></div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
