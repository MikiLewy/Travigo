import React from 'react';
import { Wrapper } from './DestinationsListItem.styles';
import PlaceDetail from 'components/atoms/PlaceDetail/PlaceDetail';
import { Destination } from 'interfaces/Destination';

interface DestinationsListItemProps {
  destination: Destination;
}

const DestinationsListItem: React.FC<DestinationsListItemProps> = ({ destination: { title, place, rating, price, imageUrl } }) => {
  return (
    <Wrapper>
      <PlaceDetail isCard={false} title={title} place={place} rating={rating} imageUrl={imageUrl} price={price} />
    </Wrapper>
  );
};

export default DestinationsListItem;
