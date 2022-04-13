import React from 'react';
import { Background, CategoryWrapper, ContentWrapper, Form, Overlay, Title, Wrapper } from './Modal.styles';
import { useParams } from 'react-router-dom';
import { ScheduleData } from 'data/ScheduleData';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

interface ModalProps {
  modalData:
    | {
        title: string;
        isInfo: boolean;
        hasForm: boolean;
        isEditing: boolean;
        show: boolean;
      }
    | undefined;
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, modalData, setIsOpen }) => {
  const { id } = useParams();
  const event = ScheduleData.find((data) => id === data.id);
  return (
    <>
      {isOpen ? (
        <>
          <Overlay onClick={() => setIsOpen(false)}></Overlay>
          <Wrapper>
            {modalData!.isInfo ? (
              <>
                <Background url={event!.imageUrl}>
                  <Overlay inside={true}></Overlay>
                  <Title isWhite={true}>{event!.name}</Title>
                </Background>
                <ContentWrapper>
                  <CategoryWrapper>
                    <p>Date</p>
                    <p>{event!.date}</p>
                  </CategoryWrapper>
                  <CategoryWrapper>
                    <p>Place</p>
                    <p>{event!.region}</p>
                  </CategoryWrapper>
                  <CategoryWrapper>
                    <p>Description</p>
                    <p>{event!.description}</p>
                  </CategoryWrapper>
                </ContentWrapper>
              </>
            ) : (
              <>
                <Title>{modalData!.title}</Title>
                <ContentWrapper>
                  <Form>
                    <FormField label="Title" id="title" name="title" type="text" />
                    <FormField label="Date" id="date" name="date" type="text" />
                    <FormField label="Place" id="place" name="place" type="text" />
                    <FormField label="Description" id="description" name="description" type="text" isTextArea />
                  </Form>
                </ContentWrapper>
              </>
            )}
            {modalData!.hasForm ? (
              <>
                <Button isWhite onClick={() => setIsOpen(false)}>
                  Close
                </Button>
                <Button style={{ marginLeft: '0.5rem' }}>{modalData!.isEditing ? 'Save' : 'Add'}</Button>
              </>
            ) : (
              <Button isWhite onClick={() => setIsOpen(false)}>
                Close
              </Button>
            )}
          </Wrapper>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default Modal;
