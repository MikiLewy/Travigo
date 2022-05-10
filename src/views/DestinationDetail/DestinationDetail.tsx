import {
  CategoryWrapper,
  ContentWrapper,
  DescriptionWrapper,
  Header,
  IconWrapper,
  InfoWrapper,
  Message,
  ModalContent,
  Overlay,
  ReturnWrapper,
  StyledButton,
  Wrapper,
} from './DestinationDetail.styles';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import Loader from 'components/atoms/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { useDestinations } from 'hooks/useDestinations';
import { useFavorites } from 'hooks/useFavorites';
import { useExpenses } from 'hooks/useExpenses';
import { useSelector } from 'react-redux';
import { State } from 'interfaces/State';
import Modal from 'components/organisms/Modal/Modal';

interface DestinationDetailProps {}

const DestinationDetail: React.FC<DestinationDetailProps> = () => {
  const { isOpen } = useSelector((state: State) => state.modal);
  const { destination, error } = useDestinations();
  const { addToFavoriteHandler, isAdded, err } = useFavorites();
  const { buyTicketHandler, expensesError } = useExpenses();
  const navigate = useNavigate();
  return (
    <>
      {expensesError ? (
        <Modal isOpen={isOpen}>
          <ModalContent>
            <ErrorMessage message={expensesError} />
          </ModalContent>
        </Modal>
      ) : (
        ''
      )}

      <Wrapper>
        {error ? (
          <ErrorMessage message={error} />
        ) : destination ? (
          <>
            <Header imageUrl={destination.imageUrl}>
              <Overlay></Overlay>
              <ReturnWrapper onClick={() => navigate(-1)}>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                  <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z" />
                </svg>
                <p>back</p>
              </ReturnWrapper>
              <IconWrapper onClick={addToFavoriteHandler} isAdded={isAdded}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
                </svg>
              </IconWrapper>
              <h2>{destination.city}</h2>
            </Header>

            <ContentWrapper>
              {err ? <ErrorMessage message={err} /> : ''}
              {isAdded ? err ? '' : <Message>Destination added to favorites</Message> : ''}
              <InfoWrapper>
                <div>
                  <CategoryWrapper>
                    <h4>Continent</h4>
                    <p>{destination.continent}</p>
                  </CategoryWrapper>
                  <CategoryWrapper>
                    <h4>Date</h4>
                    <p>{destination.date}</p>
                  </CategoryWrapper>
                </div>
                <div>
                  <CategoryWrapper>
                    <h4>Rating</h4>
                    <p>
                      {destination.rating}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                      </svg>
                    </p>
                  </CategoryWrapper>
                  <CategoryWrapper>
                    <h4>Price</h4>
                    <p>{destination.price}$</p>
                  </CategoryWrapper>
                </div>
              </InfoWrapper>
              <DescriptionWrapper>
                <h4>Description</h4>
                <p>{destination.description}</p>
              </DescriptionWrapper>
              <StyledButton onClick={buyTicketHandler}>Buy ticket</StyledButton>
            </ContentWrapper>
          </>
        ) : (
          <Loader />
        )}
      </Wrapper>
    </>
  );
};

export default DestinationDetail;
