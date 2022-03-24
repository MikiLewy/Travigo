import React from 'react';
import marker from 'assets/images/marker.svg';
import star from 'assets/images/star.svg';
import calendar from 'assets/images/calendar.svg';
import { Container, ImageWrapper, ContentWrapper, PlaceName, DetailsWrapper, InfoWrapper } from './PlaceDetail.styles';

interface PlaceDetailProps {
  isCard: boolean;
  isSchelude?: boolean;
  name: string;
  imageUrl: string;
  region: string;
  rating?: string;
  date?: string;
}

const PlaceDetail: React.FC<PlaceDetailProps> = ({ isCard, isSchelude, name, region, date, imageUrl, rating }) => {
  return (
    <Container isCard={isCard}>
      <ImageWrapper>
        <img src={imageUrl} alt={name} />
      </ImageWrapper>
      <ContentWrapper>
        <PlaceName>{name}</PlaceName>
        <DetailsWrapper>
          <InfoWrapper>
            <img src={marker} alt="marker" />
            <p>{region}</p>
          </InfoWrapper>
          <InfoWrapper>
            <img src={isSchelude ? calendar : star} alt="" />
            <p>{isSchelude ? date : rating}</p>
          </InfoWrapper>
        </DetailsWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default PlaceDetail;
