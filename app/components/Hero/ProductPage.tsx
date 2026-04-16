"use client";

import { useState } from "react";
import Img1 from "@/app/assets/productImg/image 822.png"
import Img2 from "@/app/assets/productImg/image 823.png"
import Img3 from "@/app/assets/productImg/image 824.png"
import Img4 from "@/app/assets/productImg/image 825.png"
import Img5 from "@/app/assets/productImg/image 826.png"
import Img6 from "@/app/assets/productImg/image 827.png"

import Image from "next/image";


const products = [
  {
    id: 1,
    image: Img1,
    pin: { x: 55, y: 72 },
    tag: { name: "Leather Tote Bag", price: "$189", category: "Accessories" },
  },
  {
    id: 2,
    image: Img2,
    pin: { x: 60, y: 55 },
    tag: { name: "Velvet Blazer", price: "$349", category: "Outerwear" },
  },
  {
    id: 3,
    image: Img3,
    pin: { x: 52, y: 38 },
    tag: { name: "Buffalo Plaid Shirt", price: "$98", category: "Tops" },
  },
  {
    id: 4,
    image: Img4,
    pin: { x: 48, y: 42 },
    tag: { name: "Moto Leather Jacket", price: "$425", category: "Outerwear" },
  },
  {
    id: 5,
    image: Img5,
    pin: { x: 50, y: 55 },
    tag: { name: "Varsity Jacket", price: "$210", category: "Outerwear" },
  },
  {
    id: 6,
    image: Img6,
    pin: { x: 68, y: 62 },
    tag: { name: "Denim Jacket", price: "$145", category: "Outerwear" },
  },
];

export default function ProductPage() {
  const [activePin, setActivePin] = useState(null);

  const handlePinClick = (e, id) => {
    e.stopPropagation();
    setActivePin(activePin === id ? null : id);
  };

  return (
    <section
      className="w-full max-w-6xl mx-auto px-6 py-16 font-sans"
      onClick={() => setActivePin(null)}>

      {/* Header */}
      <div className="mb-10">
        <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-2 font-light">
          Community
        </p>
        <h2
          className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Tisso vision{" "}
          <em className="italic text-neutral-500">in the wild</em>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {products.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden bg-neutral-100 group cursor-pointer"
            
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.tag.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle dark overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

            {/* Pin button */}
            <button
              onClick={(e) => handlePinClick(e, item.id)}
              className={`
                absolute z-10 w-8 h-8 rounded-full border-2 border-white bg-white/90
                flex items-center justify-center shadow-md
                transition-all duration-200 hover:scale-110 hover:bg-white
                ${activePin === item.id ? "scale-110 bg-neutral-900 border-neutral-900" : ""}
              `}
              style={{
                left: `${item.pin.x}%`,
                top: `${item.pin.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              aria-label={`Shop ${item.tag.name}`}
            >
              <svg
                className={`w-3.5 h-3.5 transition-colors duration-200 ${
                  activePin === item.id ? "text-white" : "text-neutral-900"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>

            {/* Product tooltip */}
            {activePin === item.id && (
              <div
                className="absolute z-20 bg-white shadow-xl border border-neutral-100 px-4 py-3 min-w-[160px] animate-fadeIn"
                style={{
                  left: `${Math.min(item.pin.x, 65)}%`,
                  top: `${Math.max(item.pin.y - 28, 8)}%`,
                  transform: "translateX(-50%)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <p className="text-[10px] tracking-widest uppercase text-neutral-400 mb-0.5">
                  {item.tag.category}
                </p>
                <p
                  className="text-sm font-medium text-neutral-900 leading-snug"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.tag.name}
                </p>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-100">
                  <span className="text-sm font-semibold text-neutral-900">
                    {item.tag.price}
                  </span>
                  <button className="text-[10px] tracking-widest uppercase text-neutral-500 hover:text-neutral-900 transition-colors">
                    Shop →
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
