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
`;

export const SoftwareSectionContainer = styled.div`
  border-top: 1px solid rgb(196, 196, 196, 0.3);
  border-bottom: 1px solid rgb(196, 196, 196, 0.3);
  padding: 63px 0 75px 0;
  margin: 42px 0;
  text-align: center;
  width: 100%;
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
  }
`;

export const ProcessSectionContainer = styled.div`
  margin-top: 70px;
  position: relative;
  overflow: hidden;
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
    z-index: -1;
  }
  .left-circle {
    top: 0px;
    left: -336px;
  }
  .right-circle {
    top: 70px;
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
        right: 55.5px;
        top: -25px;
        z-index: -1;
      }
      .content {
        margin-top: 24px;
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
`;

export const NextLevelSectionContainer = styled.div`
  background-color: #f5f8ff;
  margin-top: 340px;
  .section-image-container {
    max-width: 830px;
    margin: 0 auto;
    .image-cover {
      position: relative;
      top: -250px;
      width: 840px;
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
    text-align: center;
    margin-top: -127px;
    .section-title {
      font-size: 48px;
    }
    .section-description {
      font-size: 20px;
      margin-bottom: 75px;
    }
  }
`;
