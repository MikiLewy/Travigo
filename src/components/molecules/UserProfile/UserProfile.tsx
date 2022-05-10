import avatar from 'assets/images/dummyAvatar.jpg';
import { ImageWrapper, InfoWrapper, Rank, UserName, Wrapper } from './UserProfile.styles';
import { State } from 'interfaces/State';
import { useSelector } from 'react-redux';
const UserProfile = () => {
  const { userName } = useSelector((state: State) => state.auth);
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={avatar} alt="user avatar" />
      </ImageWrapper>
      <InfoWrapper>
        <UserName>{userName}</UserName>
        <Rank>Traveler Enthusiast</Rank>
      </InfoWrapper>
    </Wrapper>
  );
};

export default UserProfile;
