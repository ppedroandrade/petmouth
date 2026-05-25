"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

const links = [
  { id: "quiz", label: "Diagnóstico" },
  { id: "como", label: "Como começar" },
  { id: "diagnostico", label: "Sintomas" },
  { id: "mitos", label: "Mitos" },
  { id: "kit", label: "O Kit" },
];

export default function Nav() {
  const [active, setActive] = useState("quiz");

  useEffect(() => {
    const ids = links.map((l) => l.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a
          className="logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="logo-mark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 4c-2 0-3.5.8-4.5.8S6 5.4 6 6.8C6 9 6.8 10.5 7.4 12c.3.9.5 2 .6 2.9.1.9.6 1.4 1.3 1.4s1-.6 1.2-1.7c.2-1.1.3-1.9 1-1.9s.8.8 1 1.9c.2 1.1.6 1.7 1.2 1.7s1.2-.5 1.3-1.4c.1-.9.3-2 .6-2.9.6-1.5 1.4-3 1.4-5.2 0-1.4-.6-1.4-1.5-2S14 4 12 4z" />
            </svg>
          </span>
          PetMouth
        </a>

        {/* Links — visíveis só no desktop */}
        <div className="nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              className={"nav-link" + (active === l.id ? " active" : "")}
              href={"#" + l.id}
              onClick={(e) => handleClick(e, l.id)}
            >
              {l.label}
            </a>
          ))}
          <a className="nav-cta" href="#kit" onClick={(e) => handleClick(e, "kit")}>
            Baixe o material <Icon name="arrow-right" size={14} />
          </a>
        </div>

        {/* Hamburger removido no mobile — nav mostra só a logo */}
      </div>
    </nav>
  );
}
