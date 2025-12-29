import React from "react";
import CircularGallery from "./CircularGallery";

const items = [
  {
    image: "/200-gsm-woven-roving-fabric-500x500.webp",
    text: "200 GSM Woven Roving Fabric",
  },
  {
    image: "/fiberglass-roving-500x500.webp",
    text: "Fiberglass Roving",
  },
  {
    image: "/fiberglass-raw-material-125x125.webp",
    text: "Fiberglass fabric raw material",
  },
  {
    image: "/ewr360-gsm-fiberglass-woven-roving-125x125.webp",
    text: "EWR 360 GSM Fiberglass Woven Roving",
  },
  {
    image:
      "/fiberglass-continuous-filament-mats-cfm300-gsm-cfm450-gsm-125x125.webp",
    text: "fiberglass continuous filament mats",
  },
  {
    image: "/fiberglass-stitch-mats-emk300-gsm-emk450-gsm-125x125.webp",
    text: "fiberglass stitch mats EMK300 gsm & EMK450 gsm",
  },
];

export default function Image() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <CircularGallery items={items} />
    </div>
  );
}
