import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
  width: 100%;
  background: #f7f9fa;
  padding: 30px 0;
  font-size: 12px;
  .footer-inn {
    position: relative;
    max-width: 1256px;
    padding: 0 60px;
    margin: 0 auto;
    color: #2f3438;
  }
  h3 {
    font-weight: 700;
    margin-bottom:6px;
  }
  .footer-info > strong {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
  }
  .footer-info > p {
    font-size: 12px;
    margin-top: 6px;
  }
  .social-link {
    position: absolute;
    top: 0;
    right: 100px;
    background: blue;
    padding: 10px 200px;
  }
  .footer-fnb-top {
    line-height: 14px;
    padding-top: 2px;
  }
  .footer-fnb-top > span {
    display: inline-block;
    margin-top: 8px;
    margin-right: 10px;
    font-size: 10px;
  }
  .footer-fnb-top > span:nth-child(5) {
    font-weight: 700;
  }
  .footer-fnb-bottom,
  .desc,
  .copyright,
  .mark {
    margin-top: 10px;
    line-height: 14px;
    color: #828c94;
    font-size: 10px;
  }
  .footer-fnb-bottom > span {
    margin-right: 9px;
    line-height: 16px;
  }
  .footer-fnb-bottom > span:last-child , .footer-fnb-bottom > span:nth-child(6) {
    font-weight: 700;
  }
  .copyright {
    color: #2f3438;
  }
  .mark {
    margin-top: 26px;
    height: 32px;
    display: flex;
    gap:8px;
  }
  .mark > div {
    
    display: flex;
    gap: 8px;
  }
  .mark > div > img {
    width: 32px;
    height: 32px;
  }
  .mark > div > p {
    width: 140px;
    line-height:14px;
    letter-spacing: -0.3px;
    display: flex;
  }
`;
function Footer() {
  const fnbTop = ['브랜드스토리','회사소개','채용정보', '이용약관', '개인정보처리방침', '공지사항', '고객센터', '고객의 소리', '전문가 등록', '사업자구매회원', '제휴/광고','문의입점신청','문의안전거래센터'];
  const fnbBot1 = ['상호명 :(주)버킷플레이스', '이메일 :(고객문의) cs@bucketplace.net (제휴문의) contact@bucketplace.net', '대표이사 :이승재', '사업자등록번호 :119-86-91245', '통신판매업신고번호 :제2018-서울서초-0580호', '사업자정보확인'];
  const fnbBot2 = ['주소 :서울 서초구 서초대로74길 4 삼성생명서초타워 25층, 27층', '우리은행 채무지급보증안내 :(주)버킷플레이스는 고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.', '서비스가입사실확인' ];
  return (
    <FooterBlock>
      <div className="footer-inn">
        <div className="footer-info">
          <h3>고객센터 &#62;</h3>
          <strong>1670-0876</strong>
          <p>
            09:00~18:00 (주말, 공휴일은 오늘의집 직접배송 및 이사/시공/수리
            문의에 한해 전화 상담 가능)
          </p>
        </div>
        <div className="social-link">
          <p>이미지</p>
        </div>
        <div className="footer-fnb">
          <p className="footer-fnb-top">
            {fnbTop.map(item => (
              <span>{item}</span>
            ))}
          </p>
          <p className="footer-fnb-bottom">
            {fnbBot1.map(item => (
              <span>{item}</span>
              ))}
            <br />
            {fnbBot2.map(item => (
              <span>{item}</span>
            ))}
          </p>
          <div className="desc">
            <p>
              오늘의집은 개별 판매자가 상품을 판매하는 오픈마켓이며
              (주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로,
              판매자가 등록한 상품정보 및 거래 등에 대해 일체 책임을 지지
              않습니다.
            </p>
            <p>
              단 ㈜버킷플레이스가 판매자로 등록 판매한 상품의 경우는 판매자로서
              책임을 부담합니다.
            </p>
          </div>
          <div className="copyright">
            Copyright 2014. bucketplace, Co., Ltd. All rights reserved
          </div>
          <div className="mark">
            <div>
              <img
                src="https://assets.ohou.se/design-system/8f5b2c2e98ea1196.png"
                alt="마크1"
              />
              <p className="markDesc">
                ISMS 정보보호 관리체계 인증 2021. 09. 08 ~ 2024. 09. 07
              </p>
            </div>
            <div>
              <img
                src="https://assets.ohou.se/design-system/d5fb816a58bb6a06.png"
                alt="마크2"
              />
            </div>
          </div>
        </div>
      </div>
    </FooterBlock>
  );
}

export default Footer;
