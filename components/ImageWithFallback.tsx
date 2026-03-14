"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface Props extends Omit<ImageProps, "src"> {
  src: string;
  fallbackSrc?: string;
}

const FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23141414'/%3E%3Crect x='350' y='270' width='100' height='4' fill='%23c9a84c' opacity='0.4'/%3E%3C/svg%3E";

export default function ImageWithFallback({ src, fallbackSrc = FALLBACK, ...props }: Props) {
  const [imgSrc, setImgSrc] = useState(src);
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image {...props} src={imgSrc} onError={() => setImgSrc(fallbackSrc)} />;
}
