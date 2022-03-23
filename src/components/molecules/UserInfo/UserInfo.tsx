import avatar from 'assets/images/dummyAvatar.jpg';
import { ImageWrapper, InfoWrapper, Messagge, UserName, Wrapper } from './UserInfo.styles';
const UserInfo = () => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={avatar} alt="user avatar" />
      </ImageWrapper>
      <InfoWrapper>
        <Messagge>Welcome back 👋 </Messagge>
        <UserName>Jeremy Whiteman</UserName>
      </InfoWrapper>
    </Wrapper>
  );
};

export default UserInfo;
