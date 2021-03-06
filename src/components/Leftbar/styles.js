import styled from "styled-components";
import Backdrop from "../../Images/backdrop.svg";

const media = {
  xs: () => `
    @media only screen and (max-width: 600px) {
      display: none;
    }
  `,
  ld: () => `
    @media only screen and (min-width: 992px) {
      display: none;
    }
  `,
};
export const Lefbar = styled.div`
  grid-area: left_bar;
  padding: 20px;
`;

export const ResponsiveContainer = styled.div`
  ${(props) => props.collapse && media[props.collapse]}
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1.3fr auto;
  grid-template-rows: auto 100px 1fr 300px;
  gap: 0px 0px;
  height: 100vh;
  grid-template-areas:
    "nav nav nav"
    "header header header"
    "left_bar main main"
    "subfooter subfooter subfooter"
    "footer footer footer";

  .nav {
    grid-area: nav;
    background: #0021c9;

    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-content: center;
    padding: 20px;

    @media only screen and (max-width: 600px) {
      background-size: initial !important;
    }
  }

  .box-not {
    padding: 20px;
    border-radius: 16px;
    width: fit-content;
    margin-block-end: 10px;
    margin-right: 10px;
  }
  .container-bot {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer {
    grid-area: footer;
    background: #031b4e;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    line-height: 0px;
    align-content: flex-end;
    padding: 20px;
  }
  .flex-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-block-start: 10px;
  }
  .header {
    grid-area: header;
    background: #006aff;
    background-image: url(${Backdrop});
    grid-area: header;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    line-height: 20px;
  }
  .main {
    grid-area: main;
    padding: 20px;
    @media only screen and (max-width: 600px) {
      padding: 0px;
    }
  }
  .subfooter {
    grid-area: subfooter;
    padding: 20px;
    display: flex;
    background: #001644;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }

  .title {
    font-size: 50px;
    line-height: 50px;
    width: fit-content;
    text-decoration: underline;
    color: #07276c;
    @media only screen and (max-width: 600px) {
      font-size: 30px;
      line-height: 30px;
    }
  }
  .button-main {
    padding: 20px;
    border: none;
    line-height: 0px;
    background: #fff;
    margin-left: 10px;

    color: #031b4e;
    font-weight: 600;
    transition: 400ms !important;
    cursor: pointer;

    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
  .description-turmar {
    font-size: 25px;
    color: #1456e2;

    @media only screen and (max-width: 600px) {
      font-size: 25px;
      text-align: center;
    }
  }
  button.button-main:hover {
    transform: scale(1.1);
    transition: 400ms !important;
  }
`;
