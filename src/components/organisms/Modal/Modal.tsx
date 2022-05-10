import React from 'react';
import { Wrapper, Overlay } from './Modal.styles';
import { useDispatch } from 'react-redux';
import { close } from 'features/modal/modalSlice';
interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  const dispatch = useDispatch();
  return (
    <>
      {isOpen ? (
        <>
          <Overlay onClick={() => dispatch(close())}></Overlay>
          <Wrapper>{children}</Wrapper>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default Modal;
