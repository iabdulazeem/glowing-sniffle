import styled from "styled-components";
import { Spinner } from "react-bootstrap";

export const StyledLogo = styled.svg`
  max-width: 70%;
  max-height: 70%;
  vertical-align: bottom;
  fill: #fff;
  text-align: center;
  cursor: pointer;
`;

export const CategoryTitleWrap = styled.div`
  margin-top: 1%;
`;

export const CategoryText = styled.h2`
  color: #fff;
  font-size: 1.4em;
`;

export const CategoryWrapper = styled.div`
  margin-top: 0.5%;
`;

export const CustomSpinner = styled(Spinner)`
  margin-top: 60px;
  margin-left: 45%;
`;
