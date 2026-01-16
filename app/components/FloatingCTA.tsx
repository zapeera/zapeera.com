'use client'

import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40 animate-fade-in">
      <Button
        className="bg-transparent hover:bg-transparent transition-all duration-300 rounded-full"
        asChild
      >
        <Link href="https://wa.me/+923107100663">
        <Image src="/images/whatsapp.png" alt="WhatsApp" width={70} height={70} className="w-12 h-12" />
        </Link>
      </Button>
    </div>
  );
};

export default FloatingCTA;
