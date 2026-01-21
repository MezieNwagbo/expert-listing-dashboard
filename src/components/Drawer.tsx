// src/components/Drawer.tsx
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: "left" | "right";
  className?: string;
}

const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  children,
  position = "right",
  className = "",
}) => {
  const [portalElement] = React.useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(portalElement);
    return () => {
      document.body.removeChild(portalElement);
    };
  }, [portalElement]);

  // Close with ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!open) return null;

  const slideAnimation =
    position === "right" ? "animate-slideInRight" : "animate-slideInLeft";

  return createPortal(
    <div className="fixed inset-0 z-9999 flex" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeIn" />

      {/* Drawer */}
      <div
        className={`
          relative ml-auto bg-white shadow-xl
          w-full max-w-md h-full
          ${slideAnimation}
          ${position === "left" ? "mr-auto ml-0" : ""}
          ${className}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    portalElement,
  );
};

export default Drawer;
