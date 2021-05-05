import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1.3fr auto;
  grid-template-rows: 150px 1fr 150px;
  gap: 0px 0px;
  height: 100vh;
  grid-template-areas:
    "header header header"
    "left_bar main rigth_bar"
    "footer footer footer";

  .footer {
    grid-area: footer;
  }
  .header {
    grid-area: header;
    background: #006aff;
  }
  .left_bar {
    grid-area: left_bar;
    padding: 20px;
  }
  .rigth_bar {
    grid-area: rigth_bar;
    padding: 20px;
  }
  .main {
    grid-area: main;
    padding: 20px;
  }
`;
