"use client";

import { useState } from "react";
import Img1 from "@/app/assets/productImg/image 822.png"
import Img2 from "@/app/assets/productImg/image 823.png"
import Img3 from "@/app/assets/productImg/image 824.png"
import Img4 from "@/app/assets/productImg/image 825.png"
import Img5 from "@/app/assets/productImg/image 826.png"
import Img6 from "@/app/assets/productImg/image 827.png"
import Image from "next/image";


const galleryImages = [
  {
    id: 1,
    src: Img1,
    alt: "Black leather handbag with crossbody strap",
    hotspots: [{ x: 52, y: 72, label: "Leather Tote Bag", price: "$189" }],
  },
  {
    id: 2,
    src: Img2,
    alt: "Man in blue floral blazer with bow tie",
    hotspots: [{ x: 60, y: 68, label: "Floral Velvet Blazer", price: "$320" }],
  },
  {
    id: 3,
    src: Img3,
    alt: "Red and black plaid flannel shirt",
    hotspots: [{ x: 68, y: 38, label: "Buffalo Plaid Shirt", price: "$79" }],
  },
  {
    id: 4,
    src: Img4,
    alt: "Woman in black leather moto jacket",
    hotspots: [{ x: 45, y: 52, label: "Quilted Moto Jacket", price: "$265" }],
  },
  {
    id: 5,
    src:Img5,
    alt: "Person in grey varsity letterman jacket",
    hotspots: [{ x: 50, y: 55, label: "Varsity Jacket", price: "$145" }],
  },
  {
    id: 6,
    src:Img6,
    alt: "Blonde woman in denim jacket with sunglasses",
    hotspots: [{ x: 72, y: 62, label: "Classic Denim Jacket", price: "$110" }],
  },
];

interface ActivePin {
  imageId: number;
  hotspotIndex: number;
}

export default function ShoppableGallery() {
  const [activePin, setActivePin] = useState<ActivePin | null>(null);

  const handlePinClick = (
    e: React.MouseEvent,
    imageId: number,
    hotspotIndex: number
  ) => {
    e.stopPropagation();
    if (
      activePin?.imageId === imageId &&
      activePin?.hotspotIndex === hotspotIndex
    ) {
      setActivePin(null);
    } else {
      setActivePin({ imageId, hotspotIndex });
    }
  };

  return (
    <section
      className="w-full max-w-6xl mx-auto px-6 py-12"
      onClick={() => setActivePin(null)}
    >
      {/* Heading */}
      <h2 className="text-3xl font-serif font-normal text-gray-900 mb-8 tracking-tight">
        Tisso vison in the wild
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden bg-gray-100  group"
          >
            {/* Photo */}
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hotspot Pins */}
            {image.hotspots.map((hotspot, index) => {
              const isActive =
                activePin?.imageId === image.id &&
                activePin?.hotspotIndex === index;

              return (
                <div
                  key={index}
                  className="absolute"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                >
                  {/* Tooltip */}
                  {isActive && (
                    <div
                      className="absolute z-20 bottom-full mb-3 left-1/2 -translate-x-1/2
                        bg-white shadow-xl rounded-sm px-4 py-3 min-w-[160px]
                        border border-gray-100 pointer-events-none"
                    >
                      <p className="text-xs font-semibold text-gray-800 whitespace-nowrap">
                        {hotspot.label}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {hotspot.price}
                      </p>
                      {/* Arrow */}
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2
                          border-4 border-transparent border-t-white"
                      />
                    </div>
                  )}

                  {/* Pin Button */}
                  <button
                    onClick={(e) => handlePinClick(e, image.id, index)}
                    className={`
                      w-8 h-8 rounded-full flex items-center justify-center
                      -translate-x-1/2 -translate-y-1/2
                      border-2 border-white shadow-md
                      transition-all duration-200 cursor-pointer
                      ${
                        isActive
                          ? "bg-gray-900 scale-110"
                          : "bg-white/90 hover:bg-white hover:scale-110"
                      }
                    `}
                    aria-label={`View product: ${hotspot.label}`}
                  >
                    <span
                      className={`text-lg leading-none select-none font-light
                        ${isActive ? "text-white" : "text-gray-800"}`}
                    >
                      +
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}