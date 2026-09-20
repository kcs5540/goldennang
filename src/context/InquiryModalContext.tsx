'use client';

import React, { createContext, useContext, useState } from 'react';
import B2BInquiryModal from '@/components/B2BInquiryModal';
import DirectOrderModal from '@/components/DirectOrderModal';

interface ModalContextType {
  openInquiryModal: () => void;
  closeInquiryModal: () => void;
  openDirectOrderModal: () => void;
  closeDirectOrderModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  openInquiryModal: () => {},
  closeInquiryModal: () => {},
  openDirectOrderModal: () => {},
  closeDirectOrderModal: () => {},
});

export const useInquiryModal = () => useContext(ModalContext);

export function InquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [b2bOpen, setB2bOpen] = useState(false);
  const [directOrderOpen, setDirectOrderOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openInquiryModal: () => setB2bOpen(true),
        closeInquiryModal: () => setB2bOpen(false),
        openDirectOrderModal: () => setDirectOrderOpen(true),
        closeDirectOrderModal: () => setDirectOrderOpen(false),
      }}
    >
      {children}
      <B2BInquiryModal isOpen={b2bOpen} onClose={() => setB2bOpen(false)} />
      <DirectOrderModal isOpen={directOrderOpen} onClose={() => setDirectOrderOpen(false)} />
    </ModalContext.Provider>
  );
}
