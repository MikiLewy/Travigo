import React, { useState } from 'react';
import Headline from 'components/atoms/Headline/Headline';
import {
  ButtonsWrapper,
  ContentWrapper,
  ScheduleList,
  ScheduleListItem,
  TitleWrapper,
  Wrapper,
  Background,
  CategoryWrapper,
  Content,
  Form,
  Title,
  Overlay,
  Message,
  Buttons,
} from './ScheduleView.styles';
import Calendar from 'components/molecules/Calendar/Calendar';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import Modal from 'components/organisms/Modal/Modal';
import FormField from 'components/molecules/FormField/FormField';
import { useModal } from 'hooks/useModal';
import { useEvents } from 'hooks/useEvents';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { data } from 'interfaces/FormData';

const ScheduleView: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { modalState, open, reducers, setOpen, dispatchModalAction } = useModal();
  const { events, event } = useEvents();
  const [image, setImage] = useState<any>();

  const fileChangeHandler = (e: any) => {
    setImage(e.target.files[0]);
  };

  const handleAddEvent = async (data: data | any) => {
    const formData = new FormData();
    if (modalState!.isEditing) {
      console.log(event);
      formData.append('oldPath', event.imageUrl);
    }
    if (image !== undefined) {
      formData.append('image', image, image.name);
    }
    formData.append('title', data.title);
    formData.append('date', data.date);
    formData.append('place', data.place);
    formData.append('description', data.description);

    let url = 'http://localhost:8080/schedule/create-event';
    let method: any = 'POST';
    if (modalState!.isEditing) {
      url = `http://localhost:8080/schedule/edit-event/${id}`;
      method = 'PUT';
    }
    try {
      const result = await axios({
        method: method,
        url: url,
        data: formData,
      });
      if (result.status !== 200 && result.status !== 201) {
        throw new Error('Failed to create or edit an event ');
      }
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteEvent = async (_id: string) => {
    if (!_id) {
      throw new Error('err');
    }
    try {
      const result = await axios({
        method: 'DELETE',
        url: `http://localhost:8080/schedule/delete-event/${_id}`,
      });
      if (result.status !== 200 && result.status !== 200) {
        throw new Error('Failed to delete an event ');
      }
      navigate(`/schedule`);
    } catch (err) {
      console.log(err);
    }
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
            {events.length > 0 ? (
              events.map(({ _id, title }) => (
                <ScheduleListItem key={_id}>
                  <h4>{title}</h4>
                  <ButtonsWrapper>
                    <Link to={`/schedule/${_id}`} onClick={() => dispatchModalAction(reducers.INFO)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#e5d64e" viewBox="0 0 24 24">
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
                      </svg>
                    </Link>
                    <Link to={`/schedule/${_id}`} onClick={() => dispatchModalAction(reducers.EDITING)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0B94BF" viewBox="0 0 24 24">
                        <path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z" />
                      </svg>
                    </Link>
                    <Link to={`/schedule/${_id}`} onClick={() => handleDeleteEvent(_id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#FF3A00" viewBox="0 0 24 24">
                        <path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z" />
                      </svg>
                    </Link>
                  </ButtonsWrapper>
                </ScheduleListItem>
              ))
            ) : (
              <Message>You haven't got any upcoming event!</Message>
            )}
          </ScheduleList>
        </ContentWrapper>
        <Calendar
          dates={events.map((event) => {
            return {
              title: event.title,
              date: event.date,
            };
          })}
        />
      </Wrapper>
      <Modal isOpen={open} setIsOpen={setOpen}>
        {modalState!.isInfo ? (
          <>
            <Background url={`http://localhost:8080/images/${event.imageUrl}`}>
              <Overlay></Overlay>
              <Title isWhite>{event.title}</Title>
            </Background>
            <Content>
              <CategoryWrapper>
                <p>Date</p>
                <p>{event.date}</p>
              </CategoryWrapper>
              <CategoryWrapper>
                <p>Place</p>
                <p>{event.place}</p>
              </CategoryWrapper>
              <CategoryWrapper>
                <p>Description</p>
                <p>{event.description}</p>
              </CategoryWrapper>
            </Content>
            <Button isWhite onClick={() => setOpen(false)}>
              Close
            </Button>
          </>
        ) : (
          <>
            <Title>{modalState!.title}</Title>
            <Content>
              <Form onSubmit={handleSubmit(handleAddEvent)}>
                <FormField label="Title" id="title" {...register('title', { required: true, minLength: 4 })} />
                {errors.title && <Message isError>Title should be at least 4 character long</Message>}
                <FormField label="Date" id="date" {...register('date', { required: true, minLength: 4 })} />
                {errors.date && <Message isError>Please provide date in YY-MM-DD format</Message>}
                <FormField label="Place" id="place" {...register('place', { required: true, minLength: 4 })} />
                {errors.place && <Message isError>This field should be at least 4 character long</Message>}
                <FormField
                  label="Image"
                  id="image"
                  type="file"
                  {...register('image', { required: modalState!.isEditing ? false : true })}
                  onChange={fileChangeHandler}
                />
                {errors.image && <Message isError>This field cannot be empty</Message>}
                <FormField label="Description" id="description" isTextArea {...register('description', { required: true, minLength: 5 })} />
                {errors.description && <Message isError>This field should be at least 4 character long</Message>}
                <Buttons>
                  <Button>{modalState!.isEditing ? 'Save' : 'Add'}</Button>
                  <Button isWhite onClick={() => setOpen(false)}>
                    Close
                  </Button>
                </Buttons>
              </Form>
            </Content>
          </>
        )}
      </Modal>
    </>
  );
};

export default ScheduleView;
