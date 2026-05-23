import Image from "next/image";

interface ImgBoxProps {
  className?: string;
  src?: string;
  alt?: string;
  label?: string;
  sizes?: string;
  /** Como a imagem preenche o container. "cover" (padrão) recorta; "contain" mostra a imagem inteira. */
  fit?: "cover" | "contain";
  /** Ponto de foco do recorte quando fit="cover". Ex.: "top center", "center", "50% 20%" */
  position?: string;
}

export default function ImgBox({
  className = "",
  src,
  alt = "",
  label,
  sizes = "(max-width: 640px) 100vw, (max-width: 980px) 50vw, 600px",
  fit = "cover",
  position = "center",
}: ImgBoxProps) {
  return (
    <div className={className}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: fit, objectPosition: position }}
          sizes={sizes}
        />
      ) : (
        label && <span className="img-placeholder-label">{label}</span>
      )}
    </div>
  );
}
