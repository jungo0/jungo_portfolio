import styled from "styled-components";
const LoadingWrapper = styled.div`
  width: 100%;
  height: 300px;
  line-height: 300px;
  text-align: center;
  font-size: 24px;
`;

export const Loading = () => {
  return <LoadingWrapper>Loading.......</LoadingWrapper>;
};
