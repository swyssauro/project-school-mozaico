import styled from "styled-components";

export const ContentBoxs = styled.div`

  display: flex;
  align-items: center;
  border: 1px solid #006aff69;
  margin-bottom: 10px;
  border-radius: 10px;
  line-height: 0px;
  padding: 17px;

  .icon_group {
    padding: 16px;
    background: #006aff38;
    border-radius: 10px;
    margin-right: 20px;
  }

  .group_info {
    line-height: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .description_p {
    font-weight: 100;
    color: #031b4e;
  }
  .description_info {
    font-weight: 800;
    font-size: 22px;
    color: #031b4e;
    padding: 20px;
  }
`;
