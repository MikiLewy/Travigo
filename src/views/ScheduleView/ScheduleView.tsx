import React, { useReducer, useState } from 'react';
import Headline from 'components/atoms/Headline/Headline';
import { ButtonsWrapper, ContentWrapper, ScheduleList, ScheduleListItem, TitleWrapper, Wrapper } from './ScheduleView.styles';
import Calendar from 'components/molecules/Calendar/Calendar';
import { Button } from 'components/atoms/Button/Button';
import { ScheduleData } from 'data/ScheduleData';
import { Link } from 'react-router-dom';
import Modal from 'components/organisms/Modal/Modal';

interface ScheduleViewProps {}

const initialValue = {
  title: '',
  isInfo: false,
  hasForm: false,
  isEditing: false,
  show: false,
};

const reducers = {
  CREATING: 'CREATING',
  EDITING: 'EDITING',
  INFO: 'INFO',
};

const modalReducer = (state: any, action: any) => {
  switch (action.type) {
    case reducers.CREATING:
      return {
        title: 'Create a new event',
        isInfo: false,
        hasForm: true,
        isEditing: false,
        show: true,
      };
    case reducers.EDITING:
      return {
        title: 'Edit an existing event',
        isInfo: false,
        hasForm: true,
        isEditing: true,
        show: true,
      };
    case reducers.INFO:
      return {
        title: '',
        isInfo: true,
        hasForm: false,
        isEditing: false,
        show: true,
      };
  }
};

const ScheduleView: React.FC<ScheduleViewProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [modalState, modalDispatch] = useReducer(modalReducer, initialValue);

  const dispatchModalAction = (action: string) => {
    modalDispatch({
      type: action,
    });
    setOpen(true);
  };

  return (
    <>
      <Wrapper>
        <Headline title="Schedule" content="Plan the trip of your dreams " />
        <ContentWrapper>
          <TitleWrapper>
            <h3>Upcoming events</h3>
            <Button onClick={() => dispatchModalAction(reducers.CREATING)}>Add new</Button>
          </TitleWrapper>
          <ScheduleList>
            {ScheduleData.length > 0 ? (
              ScheduleData.map(({ id, name }) => (
                <ScheduleListItem key={id}>
                  <h4>{name}</h4>
                  <ButtonsWrapper>
                    <Link to={`/schedule/${id}`} onClick={() => dispatchModalAction(reducers.INFO)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#e5d64e" viewBox="0 0 24 24">
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
                      </svg>
                    </Link>
                    <Link to={`/schedule/${id}`} onClick={() => dispatchModalAction(reducers.EDITING)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0B94BF" viewBox="0 0 24 24">
                        <path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z" />
                      </svg>
                    </Link>
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FF3A00" viewBox="0 0 24 24">
                        <path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z" />
                      </svg>
                    </button>
                  </ButtonsWrapper>
                </ScheduleListItem>
              ))
            ) : (
              <p>You haven't got any upcoming event!</p>
            )}
          </ScheduleList>
        </ContentWrapper>
        <Calendar />
      </Wrapper>
      <Modal modalData={modalState} isOpen={open} setIsOpen={setOpen} />
    </>
  );
};

export default ScheduleView;
