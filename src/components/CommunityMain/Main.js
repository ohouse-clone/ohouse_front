import styled from 'styled-components';
import SectionMain from './SectionMain';
import SectionNav from './SectionNav';
import SectionStory from './SectionStory';
import SectionCate from './SectionCate';
import SectionDeal from './SectionDeal';
import SectionPPL from './SectionPPL';
import SectionReview from './SectionReview';
import SectionExhibition from './SectionExhibition';
import SectionPremium from './SectionPremium';
import SectionBest from './SectionBest';


const MainBlock = styled.div`
  padding: 30px 0;
  width: 1136px;
  margin: 0 auto;
`;

function Main() {
  return (
    <MainBlock>
      <SectionMain />
      <SectionNav />
      <SectionStory />
      <SectionCate />
      <SectionDeal />
      <SectionPPL />
      <SectionReview />
      <SectionExhibition />
      <SectionPremium />
      <SectionBest />
    </MainBlock>
  );
}

export default Main;
