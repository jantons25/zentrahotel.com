// Catálogo de servicios del hotel con su icono y su foto (fuente única del grid de servicios).
import {
  Bath,
  Bell,
  Brush,
  Camera,
  CarFront,
  Coffee,
  ConciergeBell,
  Flame,
  PawPrint,
  Plane,
  Plug,
  Printer,
  Receipt,
  Shield,
  Shirt,
  ShowerHead,
  Siren,
  Tv,
  Users,
  Utensils,
  WashingMachine,
  Wifi,
  Wine,
} from "lucide-react";

import type { HotelService } from "@/features/services/types";

export const hotelServices: HotelService[] = [
  {
    label: { es: "Servicio de habitación 24/7", en: "24/7 room service" },
    icon: Bell,
    image: "/images/velada-romantica2.webp",
  },
  {
    label: { es: "Jacuzzi", en: "Jacuzzi" },
    icon: Bath,
    image: "/images/suite-jacuzzi.jpg",
  },
  {
    label: { es: "Wi-Fi 5G", en: "5G Wi-Fi" },
    icon: Wifi,
    image: "/images/nexus/oficina-privada.webp",
  },
  {
    label: { es: "Desayuno buffet", en: "Buffet breakfast" },
    icon: Utensils,
    image: "/images/sanjose/comedor.webp",
  },
  {
    label: { es: "Ducha española", en: "Rainfall shower" },
    icon: ShowerHead,
    image: "/images/zen-room3.webp",
  },
  {
    label: { es: "Enchufe cerca a la cama", en: "Bedside outlets" },
    icon: Plug,
    image: "/images/plaza/individual.webp",
  },
  {
    label: { es: "Lavandería", en: "Laundry" },
    icon: WashingMachine,
    image: "/images/zen-room5.webp",
  },
  {
    label: {
      es: "Café e infusiones ilimitadas",
      en: "Unlimited coffee and tea",
    },
    icon: Coffee,
    image: "/images/balta/comedor.webp",
  },
  {
    label: {
      es: "Estacionamiento (previa reserva)",
      en: "Parking (on request)",
    },
    icon: CarFront,
    image: "/images/lambayeque/chiclayo-003.jpg",
  },
  {
    label: { es: "Cámara de seguridad", en: "Security cameras" },
    icon: Camera,
    image: "/images/plaza/cowork-plaza-tres.webp",
  },
  {
    label: { es: "Pet-friendly", en: "Pet-friendly" },
    icon: PawPrint,
    image: "/images/zen-room2.webp",
  },
  {
    label: { es: "Zonas comunes", en: "Common areas" },
    icon: Users,
    image: "/images/cowork-plaza.webp",
  },
  {
    label: { es: "Champán y vino", en: "Champagne and wine" },
    icon: Wine,
    image: "/images/velada-romantica.webp",
  },
  {
    label: { es: "Seguridad", en: "Security" },
    icon: Shield,
    image: "/images/lambayeque/chiclayo-004.jpg",
  },
  {
    label: { es: "Traslado al aeropuerto", en: "Airport transfer" },
    icon: Plane,
    image: "/images/lambayeque/chiclayo-001.jpg",
  },
  {
    label: { es: "Recepción", en: "Reception" },
    icon: ConciergeBell,
    image: "/images/plaza/cowork-plaza-uno.webp",
  },
  {
    label: { es: "Factura", en: "Invoicing" },
    icon: Receipt,
    image: "/images/nexus/sala-b.webp",
  },
  {
    label: { es: "Limpieza", en: "Housekeeping" },
    icon: Brush,
    image: "/images/sanjose/hab-matrimonial.webp",
  },
  {
    label: { es: "Planchado", en: "Ironing" },
    icon: Shirt,
    image: "/images/balta/hab-suite-dos.webp",
  },
  {
    label: { es: "Impresiones", en: "Printing" },
    icon: Printer,
    image: "/images/nexus/sala-flex.webp",
  },
  {
    label: { es: "Alarma contra incendios", en: "Fire alarm" },
    icon: Flame,
    image: "/images/balta/hab-suite-002.webp",
  },
  {
    label: { es: "Alarma de seguridad", en: "Security alarm" },
    icon: Siren,
    image: "/images/sanjose/comedor-001.webp",
  },
  {
    label: { es: "Smart TV", en: "Smart TV" },
    icon: Tv,
    image: "/images/zen-room4.webp",
  },
];
