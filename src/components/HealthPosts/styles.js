import styled from "styled-components";

export const ContentBoxs = styled.div`
  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
  .container_box {
    display: flex;
    position: absolute;
    z-index: 99999;
    align-items: center;
    margin-bottom: 10px;
    border-radius: 10px;
    line-height: 0px;
    padding: 17px;
  }

  .icon_group {
    padding: 16px;
    background: #006aff38;
    border-radius: 10px;
    margin-right: 20px;
  }
`;
