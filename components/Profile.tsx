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
    desc: "A melhor fase para criar o hábito da escovação e adaptação à rotina.",
    details: [
      { h: "Frequência", p: "Comece 3x por semana e evolua gradualmente para o hábito diário." },
      { h: "Escova", p: "Dedeira ou escova macia própria para filhotes." },
      { h: "Atenção", p: "Faça sessões curtas e positivas durante a troca de dentes." },
    ],
  },
  adulto: {
    label: "Adulto",
    age: "1 a 7 anos",
    icon: "dog",
    desc: "A fase ideal para manter a saúde bucal e prevenir acúmulo de placa.",
    details: [
      { h: "Frequência", p: "Escovação diária ou, no mínimo, várias vezes por semana." },
      { h: "Escova", p: "Escova de cerdas macias com pasta enzimática própria para cães." },
      { h: "Atenção", p: "Mau hálito persistente pode indicar doença periodontal." },
    ],
  },
  idoso: {
    label: "Idoso",
    age: "8 anos ou mais",
    icon: "dog",
    desc: "Cães idosos precisam de cuidados mais delicados e acompanhamento frequente.",
    details: [
      { h: "Frequência", p: "Escovação diária com sessões curtas e suaves." },
      { h: "Escova", p: "Escova ultra macia ou dedeira de silicone." },
      { h: "Atenção", p: "Observe sinais como dor, dificuldade para mastigar ou sangramento gengival." },
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
