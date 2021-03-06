import styled from "styled-components";
import { primary } from "../styles/colors";

export const HomePresentation = styled.div`
  padding: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${primary};
  width: 50%;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
