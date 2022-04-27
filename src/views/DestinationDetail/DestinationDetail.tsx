import {
  CategoryWrapper,
  ContentWrapper,
  DescriptionWrapper,
  Header,
  IconWrapper,
  InfoWrapper,
  Overlay,
  ReturnWrapper,
  StyledButton,
  Wrapper,
} from './DestinationDetail.styles';
import ErrorMessage from 'components/atoms/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';
import { useDestinations } from 'hooks/useDestinations';
import Loader from 'components/atoms/Loader/Loader';

interface DestinationDetailProps {}

const DestinationDetail: React.FC<DestinationDetailProps> = () => {
  const { destination, error } = useDestinations();
  const navigate = useNavigate();
  return (
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
            <IconWrapper>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" />
              </svg>
            </IconWrapper>
            <h2>{destination.city}</h2>
          </Header>
          <ContentWrapper>
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
            <StyledButton>Buy ticket</StyledButton>
          </ContentWrapper>
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};

export default DestinationDetail;
