import styled from "styled-components";

export const LandingPageContainer = styled.div`
  /* min-height: 100vh; */
  position: relative;
  margin-top: -108px;
  .left-vector {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    max-width: 899.15px;
    max-height: 820px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .hero-image {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 845.37px;
    max-height: 685.35px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .hero-content {
    padding-top: 214px;
    position: relative;
    z-index: 2;
    .sub-title {
      font: 600 22px "Manrope";
      color: #000000;
      margin-bottom: 4px;
    }
    .hero-text {
      font: 800 60px "Manrope";
      line-height: 80px;
      margin-bottom: 12px;
      color: #000000;
    }
    .description {
      font: 400 20px "Manrope";
      line-height: 35px;
      color: #757095;
      margin-bottom: 20px;
    }
    .connection-box {
      background: #fff;
      padding: 16px 20px;
      display: flex;
      align-items: center;
      max-width: 622px;

      .left {
        flex: 1;
        label {
          font: 400 16px "Manrope";
          line-height: 19px;
          margin-bottom: 6px;
          color: rgba(0, 0, 0, 0.5);
          display: block;
        }

        input {
          background: transparent;
          outline: none;
          border: none;
          width: 100%;
          font: 700 24px "Manrope";
          &::placeholder {
            color: #000000;
          }
        }
      }
      button {
        font: 700 20px "Manrope";
        line-height: 24px;
        color: #fff;
        width: 211px;
        height: 65px;
        border: none;
        outline: none;
        background-color: #1b1c31;
      }
    }
    .key-points {
      margin-top: 53px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 0 26px;
      .point-item {
        font: 400 17px Manrope;
        color: #757095;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0 5px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .sub-title {
      font-size: 18px !important;
    }
    .hero-content {
      padding-top: 154px;
    }
    .hero-text {
      font-size: 38px !important;
      line-height: 48px !important;
    }
    .description {
      font-size: 16px !important;
    }
    .connection-box {
      padding: 8px !important;
      .left {
        label {
          font-size: 12px !important;
        }
        input {
          font-size: 16px !important;
        }
      }
      button {
        height: 48px !important;
        width: 150px !important;
      }
    }
    .hero-image {
      display: none !important;
    }
  }
`;

export const SoftwareSectionContainer = styled.div`
  border-top: 1px solid rgb(196, 196, 196, 0.3);
  border-bottom: 1px solid rgb(196, 196, 196, 0.3);
  padding: 63px 0 75px 0;
  margin: 42px 0 0 0;
  text-align: center;
  width: 100%;
  background-color: #fff;

  .section-title {
    font: 600 22px "Manrope";
    line-height: 25px;
    color: #000000;
    margin-bottom: 39px;
  }
  .logo-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    padding: 52px 0;
    .section-title {
      font-size: 18px;
    }
  }
`;

export const ProcessSectionContainer = styled.div`
  padding-top: 70px;
  padding-bottom: 340px;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  .section-sub-title {
    font: 700 14px "Poppins";
    line-height: 17.33px;
    color: #f57059;
    margin-bottom: 25px;
    margin-top: 64px;
    text-align: center;
  }
  .section-title,
  .section-description {
    text-align: center;
  }
  .button-container {
    text-align: center;
  }
  .left-circle,
  .right-circle {
    width: 456px;
    height: 456px;
    background-color: #f2f2f2;
    border-radius: 50%;
    position: absolute;
  }
  .left-circle {
    top: 0px;
    left: -336px;
  }
  .right-circle {
    top: 0px;
    right: -336px;
  }
  .row {
    margin-left: -55.5px;
    margin-right: -55.5px;
    .col-lg-4,
    .col-md-4,
    .col-sm-12 {
      padding-left: 55.5px;
      padding-right: 55.5px;
    }
  }
  .process-list {
    margin-top: 125px;
    .process-item {
      position: relative;
      .point {
        width: 64px;
        height: 64px;
        border-radius: 20px;
        box-shadow: 0px 4px 17px 0px #dee6fa;
        display: flex;
        justify-content: center;
        align-items: center;
        .dark-dot {
          width: 24px;
          height: 24px;
          border-radius: 10px;
          background-color: #f57059;
        }
      }
      .index {
        font: 900 204px "Poppins";
        line-height: 204px;
        color: rgba(0, 0, 0, 0.05);
        position: absolute;
        right: 120px;
        top: -25px;
      }
      .content {
        margin-top: 24px;
        max-width: 290px;
        .card-title {
          font: 800 16px "Manrope";
          line-height: 30px;
          color: #000000;
        }
        .card-description {
          font: 500 16px "Manrope";
          line-height: 30px;
          color: #64607d;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    padding-top: 50px;
    padding-bottom: 340px;
    .container {
      position: relative;
      z-index: 2;
    }
    .section-sub-title {
      margin-top: 0px !important;
    }
    .section-title {
      font-size: 32px;
      line-height: 40px;
    }
    .row {
      margin-left: 0px;
      margin-right: 0px;
      .col-lg-4,
      .col-md-4,
      .col-sm-12 {
        padding-top: 30px;
        padding-left: 0px;
        padding-right: 0px;
      }
    }
    .index {
      right: 10px !important;
    }
  }
`;

export const NextLevelSectionContainer = styled.div`
  background-color: #f5f8ff;
  padding-top: -340px;
  .section-image-container {
    max-width: 830px;
    margin: 0 auto;
    .image-cover {
      position: relative;
      top: -250px;
      max-width: 840px;
      height: 400px;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
      }
    }
    .content {
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
      background: rgba(22, 1, 44, 0.5);
      border-radius: 14px;
      .title {
        font: 800 42px "Manrope";
        color: #ffffff;
        margin-bottom: 13px;
        line-height: 60px;
      }
      .description {
        font: 400 20px "Poppins";
        color: #ffffff;
        margin-bottom: 21px;
        line-height: 30px;
        text-align: center;
      }
      .rounded-button {
        width: 162px;
        height: 60px;
      }
    }
  }
  .goth-section {
    margin-top: -127px;
    .section-title {
      text-align: center;
      font-size: 48px;
    }
    .section-description {
      text-align: center;
      font-size: 20px;
      margin-bottom: 75px;
    }
    .grow-list {
      &.row {
        margin-left: -15px;
        margin-right: -15px;
        .col-lg-4,
        .col-md-4,
        .col-sm-12 {
          padding-left: 15px;
          padding-right: 15px;
        }
      }
      .grow-item {
        background-color: #fff;
        padding: 54px 21px 39px 21px;
        border-radius: 20px;
        .icon-cover {
          width: 40px;
          height: 40px;
          margin-bottom: 15px;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .title {
          font: 800 24px "Manrope";
          line-height: 60px;
          color: #16012c;
        }
        .card-desc {
          font: 400 16px "Manrope";
          line-height: 30px;
          color: #64607d;
          margin-bottom: 20px;
        }
        .link {
          font: 600 16px "Manrope";
          color: #01966b;
          cursor: pointer;
          img {
            margin-left: 8px;
          }
        }
      }
    }
  }
  .footer-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 74px;
    position: relative;
    bottom: -26px;
    .footer-button {
      height: 52px;
      padding: 16px 42px;
    }
  }
  @media screen and (max-width: 991px) {
    .section-image-container {
      .image-cover {
        .content {
          .title {
            font-size: 32px;
            line-height: 40px;
            text-align: center;
          }
          .description {
            font-size: 18px;
            line-height: 24px;
          }
        }
      }
    }
    .goth-section {
      .section-title {
        font-size: 32px;
        line-height: 40px;
      }
      .section-description {
        font-size: 18px;
      }
      .grow-list {
        &.row {
          margin-left: -15px;
          margin-right: -15px;

          .col-lg-4,
          .col-md-4,
          .col-sm-12 {
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 30px;
          }
        }
      }
    }
  }
`;

export const BuiltNowSectionContainer = styled.div`
  padding-top: 126px;
  padding-bottom: 132px;
  background-color: #fff;
  .container {
    border: 1px solid #dee1e6;
    border-radius: 20px;
    padding: 41px 44px 37px 44px;
  }
  .title {
    font: 800 34px "Manrope";
    line-height: 46px;
    color: #000000;
  }
  .text-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0 18px;
    margin-top: 16px;
    .image-cover {
      min-width: 60px;
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #e9ecf2;
      border-radius: 5px;
    }
    .content {
      font: 600 20px "Poppins";
      line-height: 32px;
      color: #64607d;
    }
  }
  @media screen and (max-width: 991px) {
    padding-top: 60px;
    padding-bottom: 60px;
    .title {
      font-size: 24px;
      line-height: 32px;
    }
    .text-item {
      .content {
        font-size: 18px;
      }
    }
  }
`;

export const OfferedSectionContainer = styled.div`
  background-color: #fff;
  padding-bottom: 111px;
  .row {
    margin-left: -15px;
    margin-right: -15px;
    .col-lg-4,
    .col-md-4,
    .col-sm-12 {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  .card-item {
    background: #f8f9fd;
    border-radius: 20px;
    min-height: 354px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    .title {
      font: 800 38px "Manrope";
      color: #000000;
      margin-bottom: 20px;
    }
    .desc {
      font: 400 16px "Poppins";
      line-height: 30px;
      padding-bottom: 36px;
      color: #64607d;
    }
  }
  @media screen and (max-width: 991px) {
    .row {
    margin-left: -15px;
    margin-right: -15px;
    .col-lg-4,
    .col-md-4,
    .col-sm-12 {
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 30px;
    }
  }
    .card-item{
      .title{
        font-size: 24px;
        line-height: 30px;
      }
    }
  }
`;

export const WhyChooseUsContainer = styled.div`
  background-color: #05796b;
  padding: 75px 0;
  .sub-text {
    font: 700 14px "Poppins";
    color: #fff;
    margin-bottom: 15px;
  }
  .sec-title {
    font: 800 50px "Manrope";
    color: #ffffff;
    line-height: 60px;
    margin-bottom: 29px;
  }
  .sec-desc {
    font: 500 20px "Manrope";
    line-height: 30px;
    color: #ffffff;
  }
  .form-inputs {
    max-width: 371px;
    margin: 0 auto;
    input {
      background: rgba(242, 243, 244, 0.2);
      border: none;
      outline: none;
      padding: 15px 21px;
      height: 60px;
      width: 100%;
      color: #fff;
      margin-bottom: 24px;
      border-radius: 5px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.4);
      }
    }
    button {
      font: 700 16px "Poppins";
      color: #fff;
      background: #f57059;
      border-radius: 5px;
      line-height: 22px;
      width: 100%;
      border: none;
      outline: none;
      height: 60px;
    }
  }
  @media screen and (max-width: 991px) {
    .sec-title{
      font-size: 32px;
      line-height: 42px;
    }
    .sec-desc{
      font-size: 18px;
      margin-bottom: 32px;
    }
  }
`;
