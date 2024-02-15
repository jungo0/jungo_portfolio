import { keyframes } from "styled-components";

export const showHide = {
  start: {
    opacity: 0,
    transition: {
      duration: 0,
      staggerChildren: 0.5,
    },
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};
export const showHideChild = {
  start: {
    y: -5,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
  },
};

export const gaugeAnimation = (percentage: number) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${percentage}%;
  }
`;
