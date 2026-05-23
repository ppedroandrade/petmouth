"use client";

import { useState } from "react";
import Icon, { IconName } from "./Icon";

type ProfileKey = "filhote" | "adulto" | "idoso";

interface ProfileDef {
  label: string;
  age: string;
  icon: IconName;
  desc: string;
  details: { h: string; p: string }[];
}

const profiles: Record<ProfileKey, ProfileDef> = {
  filhote: {
    label: "Filhote",
    age: "2 a 12 meses",
    icon: "puppy",
    desc: "A fase ideal para criar o hábito — eles aceitam quase qualquer coisa.",
    details: [
      { h: "Frequência", p: "Comece com 3x/semana, evolua para diário aos 6 meses." },
      { h: "Escova", p: "Dedeira de silicone macia (cabe na embalagem do kit)." },
      { h: "Atenção", p: "Aguarde a troca de dentes (4–7 meses) para escovar com pasta enzimática." },
    ],
  },
  adulto: {
    label: "Adulto",
    age: "1 a 7 anos",
    icon: "dog",
    desc: "A fase de manutenção. A escovação diária previne 95% dos problemas.",
    details: [
      { h: "Frequência", p: "Diária, sempre no mesmo horário. 2 minutos." },
      { h: "Escova", p: "Cerda extra-macia + pasta enzimática com clorexidina." },
      { h: "Atenção", p: "Avaliação veterinária bucal anual a partir dos 3 anos." },
    ],
  },
  idoso: {
    label: "Idoso",
    age: "8 anos ou mais",
    icon: "elder",
    desc: "Escovação delicada e atenção redobrada — é a fase de maior risco periodontal.",
    details: [
      { h: "Frequência", p: "Diária, sessões mais curtas (1 minuto)." },
      { h: "Escova", p: "Dedeira de silicone — gengivas são mais sensíveis." },
      { h: "Atenção", p: "Avaliação veterinária a cada 6 meses; observe dificuldade pra mastigar." },
    ],
  },
};

export default function Profile() {
  const [active, setActive] = useState<ProfileKey>("adulto");
  const p = profiles[active];
  return (
    <section id="perfil">
      <div className="container">
        <div className="profile-bg">
          <div className="section-head center">
            <span className="eyebrow">Personalize por idade</span>
            <h2 style={{ marginTop: 18 }}>O cuidado certo muda com a idade do pet.</h2>
            <p>Escolha a fase do seu cão para receber o protocolo específico.</p>
          </div>
          <div className="profile-options">
            {(Object.entries(profiles) as [ProfileKey, ProfileDef][]).map(([key, v]) => (
              <button
                key={key}
                className={"profile-card" + (active === key ? " active" : "")}
                onClick={() => setActive(key)}
              >
                <div className="profile-card-icon"><Icon name={v.icon} size={28} /></div>
                <h3>{v.label}</h3>
                <div className="age">{v.age}</div>
                <p>{v.desc}</p>
              </button>
            ))}
          </div>
          <div className="profile-detail">
            {p.details.map((d, i) => (
              <div key={i} className="profile-detail-item">
                <h4>{d.h}</h4>
                <p>{d.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
