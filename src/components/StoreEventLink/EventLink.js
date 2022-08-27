import styled from 'styled-components';

const EventLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  img {
    width: 54px;
    height: 54px;
    border-radius: 10px;
  }
  div {
    text-align: center;
    font-size: 12px;
  }
`;

export default function EventLink({ src, name }) {
  return (
    <EventLogo>
      <img src={src} />
      <div>{name}</div>
    </EventLogo>
  );
}
