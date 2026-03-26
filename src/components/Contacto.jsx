import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap, useMapEvent } from "react-leaflet";
import L from "leaflet";

const finalPosition = [25.7617, -80.1918];

function Contacto() {
  const sectionRef = useRef(null);
  const [shouldZoom, setShouldZoom] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldZoom(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        height: { xs: "38vh", md: "52vh" },
        minHeight: { xs: "38vh", md: "52vh" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: 12, md: 18 },
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          background: "rgba(0, 0, 0, 0.55)",
          border: "1px solid rgba(255,255,255,0.22)",
          borderRadius: "999px",
          px: { xs: 1.8, md: 2.8 },
          py: { xs: 0.45, md: 0.6 },
          backdropFilter: "blur(6px)",
          display: "flex",
          alignItems: "center",
          gap: { xs: 0.6, md: 0.8 },
        }}
      >
        <Typography
          component="h2"
          sx={{
            color: "#ffffff",
            fontFamily: '"Roboto Condensed", "Roboto-BoldCondensed", sans-serif',
            fontWeight: 900,
            fontSize: { xs: "1.08rem", md: "1.52rem" },
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            textShadow: "0 4px 18px rgba(0,0,0,0.65)",
            textAlign: "center",
            lineHeight: 1,
          }}
        >
          Location
        </Typography>
        <LocationOnOutlinedIcon
          sx={{
            color: "#ffffff",
            fontSize: { xs: "1rem", md: "1.35rem" },
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
          }}
        />
      </Box>
      <MapContainer
        center={finalPosition}
        zoom={12}
        style={{ width: "100%", height: "100%" }}
        scrollWheelZoom={false}
        dragging={false}
        touchZoom={false}
        doubleClickZoom={false}
        boxZoom={false}
        keyboard={false}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={finalPosition}
          icon={new L.Icon({
            iconUrl: "/logo-mapa.png",
            iconSize: [160, 160],
            iconAnchor: [80, 80],
            popupAnchor: [0, -80],
          })}
        />
        <MapZoomController active={shouldZoom} />
        <MapClickHandler />
      </MapContainer>
    </Box>
  );
}

const MapZoomController = ({ active }) => {
  const map = useMap();

  useEffect(() => {
    if (!active) return;
    map.flyTo(finalPosition, 16, {
      duration: 1.6,
      easeLinearity: 0.35,
    });
  }, [active, map]);

  return null;
};

const MapClickHandler = () => {
  useMapEvent("click", () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${finalPosition[0]},${finalPosition[1]}`;
    window.open(googleMapsUrl, "_blank");
  });

  return null;
};

export default Contacto;
