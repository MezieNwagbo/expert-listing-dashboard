import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  className,
}) => {
  // Create a div in document.body for the portal
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

  return createPortal(
    <div
      className="
        fixed inset-0 z-9999
        flex items-center justify-center 
        bg-black/50 backdrop-blur-sm
        animate-fadeIn
      "
      onClick={onClose}
    >
      <div
        className={`
            w-140 md:w-109.5 m-3 md:m-0
          bg-white rounded-2xl shadow-xl
          transform animate-scaleIn 
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

export default Modal;
