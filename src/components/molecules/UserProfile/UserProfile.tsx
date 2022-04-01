import avatar from 'assets/images/dummyAvatar.jpg';
import { ImageWrapper, InfoWrapper, Rank, UserName, Wrapper } from './UserProfile.styles';
const UserProfile = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={avatar} alt="user avatar" />
      </ImageWrapper>
      <InfoWrapper>
        <UserName>Jeremy Whiteman</UserName>
        <Rank>Traveler Enthusiast</Rank>
      </InfoWrapper>
    </Wrapper>
  );
};

export default UserProfile;
