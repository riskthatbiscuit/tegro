import { useEffect } from 'react';
import GridBackground from '../backgrounds/grid';

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
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
        <div
          className="w-modal mx-2 rounded-md bg-mainLight p-5 shadow-lg overflow-auto"
          style={{ maxHeight: 'calc(100vh - 64px)' }}
        >
          {children}
          <button
            className="my-6 ml-6 flex-none rounded-md bg-mainBlue px-3.5 py-2.5 text-b4_custom text-white shadow-sm hover:bg-mainLight hover:text-mainBlue "
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};
