import avatar from 'assets/images/dummyAvatar.jpg';
import { ImageWrapper, InfoWrapper, Rank, UserName, Wrapper } from './UserInfo.styles';
const UserInfo = () => {
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

export default UserInfo;
