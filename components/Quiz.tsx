"use client";

import { useState } from "react";
import Icon, { IconName } from "./Icon";

interface Option { icon: IconName; title: string; sub: string; }
interface Question { q: string; options: Option[]; }

const questions: Question[] = [
  {
    q: "Como está o hálito do seu cão hoje?",
    options: [
      { icon: "leaf", title: "Neutro ", sub: "Sem cheiro forte" },
      { icon: "drop", title: "Levemente alterado ", sub: "Notei nas últimas semanas" },
      { icon: "alert", title: "Muito forte ", sub: "Sinto à distância" },
      { icon: "clock", title: "Não sei dizer ", sub: "Nunca prestei atenção" },
    ],
  },
  {
    q: "Você já viu manchas amareladas nos dentes dele?",
    options: [
      { icon: "check", title: "Não, dentes brancos ", sub: "Sem alterações visíveis" },
      { icon: "tooth", title: "Manchas no fundo ", sub: "Só nos dentes do fundo" },
      { icon: "alert", title: "Sim, vários dentes ", sub: "Tártaro visível" },
      { icon: "chat", title: "Ele não deixa eu ver ", sub: "Não consigo abrir a boca" },
    ],
  },
  {
    q: "Com que frequência você escova os dentes dele?",
    options: [
      { icon: "sparkle", title: "Todos os dias ", sub: "Faz parte da rotina" },
      { icon: "calendar", title: "1–2x por semana ", sub: "Quando lembro" },
      { icon: "clock", title: "Raramente ", sub: "Já tentei e desisti" },
      { icon: "x", title: "Nunca ", sub: "Nem sei como começar" },
    ],
  },
];

type Risk = "low" | "med" | "high";
const riskCopy: Record<Risk, { title: string; body: string }> = {
  low: { title: "Risco baixo — continue assim! ", body: "Seu cão está em boas mãos. Mantenha a frequência atual e baixe o calendário para não perder nenhum dia." },
  med: { title: "Atenção: sinais leves de alerta ", body: "Alguns sinais leves podem melhorar com uma rotina consistente de higiene oral, mas a avaliação veterinária é importante se houver dor, sangramento ou tártaro visível." },
  high: { title: "Recomendamos avaliação veterinária ", body: "Os sinais descritos indicam que vale agendar uma avaliação veterinária." },
};

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const total = questions.length;
  const progress = step >= total ? 100 : (step / total) * 100;

  const choose = (idx: number) => {
    setAnswers([...answers, idx]);
    setStep(step + 1);
  };
  const reset = () => { setStep(0); setAnswers([]); };

  const riskScore = answers.reduce((s, i) => s + i, 0);
  const risk: Risk | null = step >= total ? (riskScore <= 2 ? "low" : riskScore <= 5 ? "med" : "high") : null;

  return (
    <section id="quiz">
      <div className="container">
        <div className="quiz">
          <div className="quiz-grid">
            <div>
              <span className="eyebrow" style={{ color: "var(--salmon)" }}>Check-up guiado</span>
              <h2 style={{ marginTop: 18 }}>Seu cão precisa de atenção bucal agora?</h2>
              <p style={{ marginTop: 16, opacity: 0.78, fontSize: 16 }}>
                3 perguntas rápidas para identificar sinais de atenção e entender por onde começar os cuidados em casa.
              </p>
              <div className="quiz-progress">
                <div className="quiz-progress-meta">
                  <span>Progresso</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="quiz-progress-bar">
                  <div className="quiz-progress-fill" style={{ width: progress + "%" }}></div>
                </div>
              </div>
            </div>
            <div>
              {step < total ? (
                <>
                  <div className="quiz-step">Pergunta {step + 1} de {total}</div>
                  <div className="quiz-question" style={{ marginTop: 12 }}>{questions[step].q}</div>
                  <div className="quiz-options">
                    {questions[step].options.map((o, i) => (
                      <button key={i} className="quiz-option" onClick={() => choose(i)}>
                        <span className="quiz-option-icon"><Icon name={o.icon} size={20} /></span>
                        <span className="quiz-option-text">
                          <span className="quiz-option-title">{o.title}</span>
                          {o.sub}
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="quiz-step">Resultado</div>
                  <div className="quiz-question" style={{ marginTop: 12 }}>{risk && riskCopy[risk].title}</div>
                  <div className="quiz-result">
                    <div className="quiz-result-icon"><Icon name="check" size={22} /></div>
                    <div>
                      <p style={{ fontWeight: 600, marginBottom: 6 }}>{risk && riskCopy[risk].body}</p>
                      <p style={{ fontSize: 14, opacity: 0.8 }}>O material gratuito traz orientações gerais para começar os cuidados de forma gradual.</p>
                    </div>
                  </div>
                  <div className="quiz-actions">
                    <button
                      className="quiz-step"
                      style={{ background: "transparent", color: "var(--cream)", cursor: "pointer", textDecoration: "underline" }}
                      onClick={reset}
                    >
                      Refazer diagnóstico
                    </button>
                    {/* PDF → /public/downloads/kit-petmouth.pdf */}
                    <a className="btn btn-primary" href="/downloads/kit-petmouth.pdf" download="Kit PetMouth.pdf" style={{ background: "var(--salmon)", color: "var(--navy)" }}>
                      Baixar material <Icon name="arrow-right" size={14} />
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
