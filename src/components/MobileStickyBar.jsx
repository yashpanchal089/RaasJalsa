import React from 'react';
import { Phone } from 'lucide-react';

export default function MobileStickyBar() {
  return (
    <div className="floating-mobile-actions">
      {/* Floating Phone Icon - Bottom Left Corner */}
      <a
        href="tel:9502215750"
        className="floating-btn floating-phone"
        aria-label="Call Raas Jalsa"
        title="Call 95022 15750"
      >
        <Phone size={24} color="#FFFFFF" />
        <span className="floating-pulse-phone"></span>
      </a>

      {/* Floating WhatsApp Icon - Bottom Right Corner */}
      <a
        href="https://wa.me/919502215750?text=Hi%20Raas%20Jalsa,%20I%20want%20to%20enquire%20about%20Garba%20classes!"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp"
        aria-label="Chat on WhatsApp"
        title="WhatsApp Us"
      >
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.275-.1-.476-.15-.675.15-.199.299-.774.978-.949 1.178-.175.199-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.49-1.047-.933-1.754-2.086-1.959-2.436-.205-.35-.022-.539.128-.688.134-.134.3-.35.45-.525.15-.175.2-.299.3-.499.1-.199.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.582-.492-.503-.675-.512-.175-.009-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.899 1.225 3.1.15.199 2.113 3.227 5.12 4.527.715.31 1.273.495 1.708.633.717.228 1.369.196 1.885.119.575-.086 1.78-.727 2.03-1.429.25-.701.25-1.301.175-1.429-.075-.128-.275-.203-.575-.353z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 2.137.672 4.116 1.82 5.74L2.05 21.95l4.316-1.728A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.96 7.96 0 0 1-4.066-1.11l-.291-.173-2.563 1.025 1.043-2.5-.189-.301A7.957 7.957 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
        </svg>
        <span className="floating-pulse-whatsapp"></span>
      </a>
    </div>
  );
}
