import Link from 'next/link';
import styled from 'styled-components';
import EventLink from './EventLink';

const data = {
  src: '/store-event-logo/week.webp',
  href: '/',
  name: '시즌위크',
};

const StoreEventWrapper = styled.div`
  margin-top: 20px;
  display: flex;
`;

export default function StoreEventLink() {
  return (
    <>
      <StoreEventWrapper>
        {/* map LInk */}
        <Link href={data.href}>
          <a>
            <EventLink src={data.src} name={data.name} />
          </a>
        </Link>
      </StoreEventWrapper>
    </>
  );
}
