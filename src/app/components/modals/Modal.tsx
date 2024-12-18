import { useEffect } from 'react';

export const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

return (
  <div
    className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300"
    onClick={onClose}
  >
    <div
      className="relative mx-2 w-modal overflow-auto rounded-md bg-mainLight p-5 shadow-lg" 
      style={{ maxHeight: 'calc(100vh - 64px)' }}
      onClick={(e) => e.stopPropagation()} 
    >
      {children}
      <button
        type="button"
        className="relative my-6 ml-6 flex-none rounded-md bg-mainBlue px-3.5 py-2.5 text-b4_custom text-white shadow-sm hover:bg-mainLight hover:text-mainBlue"
        onClick={() => {
          // console.log('Close button clicked'); 
          onClose()
        }}
      >
        Close
      </button>
    </div>
  </div>
);
};
