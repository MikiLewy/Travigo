import React from 'react';
import { DestinationModel } from 'interfaces/DestinationModel';
import {
  Container,
  ContentWrapper,
  Day,
  DetailsWrapper,
  ImageWrapper,
  InfoWrapper,
  PlaceName,
  Price,
  PriceWrapper,
  Wrapper,
} from './DestinationsListItem.styles';
import marker from 'assets/images/marker.svg';
import star from 'assets/images/star.svg';

interface DestinationsListItemProps {
  destination: DestinationModel;
}

const DestinationsListItem: React.FC<DestinationsListItemProps> = ({ destination: { name, region, rating, price, imageUrl } }) => {
  return (
    <Wrapper>
      <Container>
        <ImageWrapper>
          <img src={imageUrl} alt={name} />
        </ImageWrapper>
        <ContentWrapper>
          <PlaceName>{name}</PlaceName>
          <DetailsWrapper>
            <InfoWrapper>
              <img src={marker} alt="" />
              <p>{region}</p>
            </InfoWrapper>
            <InfoWrapper>
              <img src={star} alt="" />
              <p>{rating}</p>
            </InfoWrapper>
          </DetailsWrapper>
        </ContentWrapper>
      </Container>
      <PriceWrapper>
        <Price>${price}</Price>
        <Day>/day</Day>
      </PriceWrapper>
    </Wrapper>
  );
};

export default DestinationsListItem;
