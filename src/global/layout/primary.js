import styled from "styled-components";

export const Container = styled.div`
`;

export const Row = styled.div`
  display: flex;
`;


const media = {
  xs: (styles) => `
    @media only screen and (max-width: 600px) {
      ${styles}
    }
  `,
};

export const Col = styled.div`
  display: flex;
  justify-content: center;
  flex: ${(props) => props.size};
  width: 100%;
  ${(props) =>
    props.collapse &&
    media[props.collapse](`
    display: none;
  `)}
`;