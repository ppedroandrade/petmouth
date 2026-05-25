"use client";

import { useState } from "react";
import Icon from "./Icon";

type CardType = "myth" | "truth";
const cards: { type: CardType; front: string; back: string }[] = [
  { type: "myth", front: "“Cachorro não precisa escovar dente — osso já limpa.”", back: "Ossos podem até ajudar mecanicamente, mas não removem placa bacteriana sub-gengival. É exatamente onde o tártaro se forma." },
  { type: "truth", front: "“Mau hálito é sinal de problema, não normal.”", back: "Hálito forte (halitose) é o primeiro sinal de doença periodontal. Mau hálito persistente não deve ser tratado como normal e pode indicar doença oral." },
  { type: "myth", front: "“Posso usar pasta de dente humana sem problema.”", back: "Não. Pasta humana contém flúor e xilitol, ambos tóxicos pra cães mesmo em pequena quantidade. Use sempre pasta canina." },
  { type: "truth", front: "“Limpeza profissional não substitui escovação diária.”", back: "A profilaxia (sob anestesia) remove o que já está formado.Sem higiene oral regular, a placa volta a se acumular e pode evoluir novamente para tártaro." },
  { type: "myth", front: "“Cão pequeno tem dente mais resistente.”", back: "É o oposto: raças pequenas têm dentes apinhados e mais propensas a tártaro. Cães de pequeno porte e cães com dentes apinhados tendem a exigir mais cuidado preventivo." },
  { type: "truth", front: "“Doença periodontal afeta coração e rins.”", back: "A doença periodontal pode causar dor, inflamação e piora da qualidade de vida, além de estar associada a impactos na saúde geral." },
];

export default function Mitos() {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const toggle = (i: number) => setFlipped({ ...flipped, [i]: !flipped[i] });

  return (
    <section id="mitos">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Mitos × Verdades</span>
            <h2 style={{ marginTop: 18 }}>O que tutores acreditam — e o que a ciência mostra.</h2>
          </div>
          <p>Toque em cada card para ver a explicação.</p>
        </div>
        <div className="mitos-grid">
          {cards.map((c, i) => (
            <div key={i} className={"flip-card" + (flipped[i] ? " flipped" : "")} onClick={() => toggle(i)}>
              <div className="flip-inner">
                <div className="flip-face flip-front">
                  <span className={"flip-tag " + c.type}>
                    {c.type === "myth" ? (
                      <><Icon name="x" size={12} /> Mito</>
                    ) : (
                      <><Icon name="check" size={12} /> Verdade</>
                    )}
                  </span>
                  <div>
                    <p>{c.front}</p>
                    <div className="flip-hint">[ toque para ver a explicação ]</div>
                  </div>
                </div>
                <div className="flip-face flip-back">
                  <span className="flip-tag" style={{ background: "rgba(253,245,236,.12)", color: "var(--cream)" }}>
                    {c.type === "myth" ? "Por que é mito" : "Por que é verdade"}
                  </span>
                  <p>{c.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
