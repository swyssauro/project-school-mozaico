import styled from "styled-components";
import Backdrop from "../../Images/Component.svg";
import Backdrop2 from "../../Images/bacdrop.svg";

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
  ${(props) => props.collapse && media[props.collapse]}
`;

export const ResponsiveContainer = styled.div`
  ${(props) => props.collapse && media[props.collapse]}
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1.3fr auto;
  grid-template-rows: 200px 100px 1fr 150px;
  gap: 0px 0px;
  height: 100vh;
  grid-template-areas:
    "nav nav nav"
    "header header header"
    "left_bar main rigth_bar"
    "footer footer footer";

  .nav {
    grid-area: nav;
    background: #0021c9;
    background-image: url(${Backdrop2});
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    padding: 20px;

    @media only screen and (max-width: 600px) {
      background-size: initial !important;
    }
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
  button.button-main:hover {
    transform: scale(1.1);
    transition: 400ms !important;
  }
`;
