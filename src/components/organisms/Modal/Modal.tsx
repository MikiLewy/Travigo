import React from 'react';
import { Wrapper, Overlay } from './Modal.styles';
interface ModalProps {
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen, children }) => {
  return (
    <>
      {isOpen ? (
        <>
          <Overlay onClick={() => setIsOpen(false)}></Overlay>
          <Wrapper>{children}</Wrapper>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default Modal;
