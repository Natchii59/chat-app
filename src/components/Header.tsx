import styled from 'styled-components';
import pfp from '../assets/profile-pic.png';

const HeaderBody = styled.header`
  background-color: white;
  z-index: 10;
  width: 96%;
  margin: 0.8rem auto 0 auto;
  padding: 0.8rem 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 8px #16161643;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  & img {
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
  }
`;

const ProfileInfo = styled.div`
  & p {
    color: gray;
    font-size: 0.8rem;
    margin-top: -0.3rem;
  }
`;

export default function Header() {
  return (
    <HeaderBody>
      <img src={pfp} alt='Profile' />

      <ProfileInfo>
        <h2>Natchi</h2>
        <p>Online</p>
      </ProfileInfo>
    </HeaderBody>
  );
}
