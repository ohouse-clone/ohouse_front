import React from 'react';
import { MainBlock } from 'components/CommunityMain/main.styles';
import { FilterBar } from './Party.styles';
import { PARTY_FILTER } from '../../../constants/communityParty';
const index = () => {
  return (
    <MainBlock>
      <FilterBar>
        {PARTY_FILTER.map((e, i) => (
          <li key={i}>
            <button>
              {PARTY_FILTER[i]}
              <span>
                <svg
                  width="12"
                  height="10"
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path d="M6.069 6.72l4.123-3.783 1.216 1.326-5.32 4.881L.603 4.273l1.196-1.346z"></path>
                </svg>
              </span>
            </button>
          </li>
        ))}
      </FilterBar>
    </MainBlock>
  );
};

export default index;
