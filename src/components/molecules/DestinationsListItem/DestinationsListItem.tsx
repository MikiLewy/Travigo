import React from 'react';
import { DestinationModel } from 'interfaces/DestinationModel';
import { Day, Price, PriceWrapper, Wrapper } from './DestinationsListItem.styles';
import PlaceDetail from 'components/atoms/PlaceDetail/PlaceDetail';

interface DestinationsListItemProps {
  destination: DestinationModel;
}

const DestinationsListItem: React.FC<DestinationsListItemProps> = ({ destination: { name, region, rating, price, imageUrl } }) => {
  return (
    <Wrapper>
      <PlaceDetail isCard={false} name={name} region={region} rating={rating} imageUrl={imageUrl} />
      <PriceWrapper>
        <Price>${price}</Price>
        <Day>/day</Day>
      </PriceWrapper>
    </Wrapper>
  );
};

export default DestinationsListItem;
