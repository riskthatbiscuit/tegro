'use client' 
import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext({
  setCurrentModal: (modalName: string, data?:any) => {},
  closeModal: () => {},
  currentModal: null as string | null,
  additionalData: null as any,
});

export function useModal() {
  return useContext(ModalContext);
}

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const [additionalData, setAdditionalData] = useState<any>(null)

  const handleOpenModal = (modalName: string, data?:any) => {
    setCurrentModal(modalName);
    setAdditionalData(data);
  };

  const handleCloseModal = () => {
    setCurrentModal(null);
    setAdditionalData(null)
  };

  return (
    <ModalContext.Provider
      value={{
        setCurrentModal: handleOpenModal,
        closeModal: handleCloseModal,
        currentModal,
        additionalData
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
