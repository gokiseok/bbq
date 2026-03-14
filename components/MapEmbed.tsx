"use client";

import { useEffect, useRef } from "react";

// 고기석 좌표
const home_x = 127.07123; // 경도 (longitude)
const home_y = 37.54092;  // 위도 (latitude)

export default function MapEmbed() {
  const mapRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!mapRef.current || initialized.current) return;
    initialized.current = true;

    let map: any = null;

    import("leaflet").then((L) => {
      if (!mapRef.current) return;

      // 마커 아이콘 CDN으로 설정 (webpack 빌드 이슈 방지)
      const DefaultIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      map = L.map(mapRef.current, {
        center: [home_y, home_x],
        zoom: 17,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      L.marker([home_y, home_x], { icon: DefaultIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:sans-serif;font-size:13px;line-height:1.6">
            <b>고기석</b><br>
            서울 광진구 동일로22길 117-13<br>
            건대입구역 2번 출구 바로 앞
          </div>`
        )
        .openPopup();
    });

    return () => {
      if (map) map.remove();
    };
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        crossOrigin=""
      />
      <div ref={mapRef} className="w-full h-full" />
    </>
  );
}
