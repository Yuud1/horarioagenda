"use client"; // Define como Client Component

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaWhatsapp, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Controla rolagem de forma segura
  useEffect(() => {
    // Verificar se é cliente antes de modificar o body
    if (typeof window !== "undefined") {
      document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }

    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, [menuOpen]);

  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        {/* Header fixo com flex */}
        <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 py-4 px-6 md:px-20 text-black flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo do site"
              width={200}
              height={50}
              className="rounded-md"
            />
          </Link>

          {/* Menu Hamburguer para mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Abrir menu"
          >
            <FaBars />
          </button>

          {/* Menu de Navegação para Desktop */}
          <nav
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex gap-5 items-center font-bold text-gray-800`}
          >
            <Link href="/" className="hover:text-gray-600">
              Como funciona?
            </Link>
            <Link
              href="/"
              className="bg-gray-800 text-white rounded-md px-6 py-3 hover:bg-gray-700 transition-colors"
              aria-label="Fazer agenda"
            >
              Fazer agenda
            </Link>
          </nav>
        </header>

        {/* Conteúdo principal */}
        <div className="pt-20"> {/* Adicionando margem superior para compensar o header fixo */}
          {children}
        </div>

        {/* Footer */}
        <footer className="flex bg-[#FAFBFC] p-5 justify-center mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-20 text-center md:text-left text-gray-700">
            {/* Links de Privacidade */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-5">
              <Link href="/" className="hover:text-gray-800">
                Privacidade
              </Link>
              <Link href="/" className="hover:text-gray-800">
                Jurídico
              </Link>
              <Link href="/" className="hover:text-gray-800">
                Opções de privacidade e cookies
              </Link>
              <Link href="/" className="hover:text-gray-800">
                Política de cookies
              </Link>
            </div>

            {/* Redes Sociais */}
            <div className="flex gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                className="text-2xl text-black hover:text-gray-800"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                className="text-2xl text-black hover:text-gray-800"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                aria-label="WhatsApp"
                className="text-2xl text-black hover:text-gray-800"
              >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
