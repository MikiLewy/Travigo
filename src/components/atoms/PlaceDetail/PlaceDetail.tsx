import React from 'react';
import { Container, ImageWrapper, ContentWrapper, PlaceName, DetailsWrapper, InfoWrapper, Day, Price, PriceWrapper } from './PlaceDetail.styles';

interface PlaceDetailProps {
  isCard: boolean;
  isSchelude?: boolean;
  title: string;
  imageUrl: string;
  place: string;
  rating?: string;
  date?: string;
  price?: number;
}

const PlaceDetail: React.FC<PlaceDetailProps> = ({ isCard, isSchelude, title, place, date, imageUrl, rating, price }) => {
  return (
    <>
      <Container isCard={isCard}>
        <ImageWrapper>
          <img src={imageUrl} alt={title} />
        </ImageWrapper>
        <ContentWrapper>
          <PlaceName>{title}</PlaceName>
          <DetailsWrapper>
            <InfoWrapper>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                <path d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602" />
              </svg>
              <p>{place}</p>
            </InfoWrapper>
            <InfoWrapper>
              {isSchelude ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                </svg>
              ) : (
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                  <path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" />
                </svg>
              )}
              <p>{isSchelude ? date : rating}</p>
            </InfoWrapper>
          </DetailsWrapper>
        </ContentWrapper>
        {isSchelude ? (
          ''
        ) : (
          <PriceWrapper>
            <Price>${price}</Price>
            <Day>/day</Day>
          </PriceWrapper>
        )}
      </Container>
    </>
  );
};

export default PlaceDetail;
