"use client";

/**
 * VideoBox — player de vídeo inline estilo reel/post.
 *
 * Como usar:
 *  1. Salve o .mp4 em /public/videos/   (ex.: /public/videos/tutorial-reel.mp4)
 *  2. Descomente a prop `src` abaixo e coloque o caminho.
 *
 * Enquanto `src` não estiver definido, o placeholder é exibido normalmente.
 *
 * O vídeo toca automaticamente, sem som e em loop (comportamento padrão de reel).
 * O usuário pode pausar/dar play clicando.
 */

import { useRef, useState, useCallback } from "react";
import Icon from "./Icon";

interface VideoBoxProps {
  className?: string;
  // src="/videos/tutorial-reel.mp4"   ← descomente quando tiver o vídeo pronto
  src?: string;
  label?: string;
}

export default function VideoBox({ className = "", src, label }: VideoBoxProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  const toggle = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  }, []);

  /* ── sem src: placeholder idêntico ao ImgBox ── */
  if (!src) {
    return (
      <div className={className}>
        <span className="img-placeholder-label">{label ?? "VÍDEO · 1:1"}</span>
      </div>
    );
  }

  /* ── com src: player ── */
  return (
    <div className={`${className} video-box`} onClick={toggle} role="button" aria-label="Play/Pause">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      {/* Ícone de pause visível só quando pausado */}
      {paused && (
        <div className="video-play-overlay">
          <div className="video-play-btn">
            <Icon name="play" size={28} />
          </div>
        </div>
      )}
    </div>
  );
}
