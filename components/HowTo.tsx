import Icon, { IconName } from "./Icon";

interface Step {
  title: string;
  body: string;
  tipIcon: IconName;
  tip: string;
}

const steps: Step[] = [
  {
    title: "Apresente a escova como brinquedo",
    body: "Deixe seu cão cheirar e lamber a escova por alguns dias. Sem pressão. Recompense com carinho.",
    tipIcon: "lightbulb",
    tip: "Faça em momentos de calma — depois do passeio funciona bem.",
  },
  {
    title: "Introduza o creme dental canino",
    body: "Coloque uma pequena quantidade no dedo e ofereça pra ele lamber. Os sabores são pensados pra serem irresistíveis.",
    tipIcon: "ban",
    tip: "Nunca use pasta de dente humana — flúor é tóxico para cães.",
  },
  {
    title: "Toque os dentes sem escovar",
    body: "Por 2–3 dias, levante o lábio e toque os dentes com o dedo. Recompense imediatamente.",
    tipIcon: "timer",
    tip: "30 segundos por sessão é o suficiente nesta fase.",
  },
  {
    title: "Comece a escovar — pouco a pouco",
    body: "Escove só os caninos da frente nas primeiras vezes. Vá expandindo até alcançar os molares.",
    tipIcon: "tooth",
    tip: "Movimentos circulares, sempre a 45° em relação à gengiva.",
  },
  {
    title: "Crie a rotina diária",
    body: "Sempre no mesmo horário, sempre seguido de uma recompensa. Assim fica mais fácil de criar o hábito.",
    tipIcon: "calendar",
    tip: "Use o calendário do kit pra marcar cada dia.",
  },
];

export default function HowTo() {
  return (
    <section id="como">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Como começar</span>
            <h2 style={{ marginTop: 18 }}>5 passos para acostumar seu pet sem trauma</h2>
          </div>
          <p>
            Não comece tentando escovar todos os dentes no primeiro dia. O segredo é a progressão
            gradual — em duas semanas você está escovando a boca toda.
          </p>
        </div>
        <div className="timeline">
          {steps.map((s, i) => (
            <div key={i} className="timeline-step">
              <div className="timeline-num">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="tip">
                <Icon name={s.tipIcon} size={16} stroke={1.8} />
                <span>{s.tip}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
