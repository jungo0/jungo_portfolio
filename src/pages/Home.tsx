import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #f6fbff;
  align-items: center;
`;
const Wrapper = styled(motion.div)`
  padding-left: 100px;
  .name {
    font-size: 72px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  .line {
    display: inline-block;
    width: 70px;
    height: 5px;
    background-color: #333;
    margin-bottom: 30px;
  }
  #job {
    font-size: 25px;
    margin-bottom: 35px;
    line-height: 30px;
    font-weight: 400;
    color: #7d7789;
    display: flex;
    #textAni {
      position: relative;
      margin-left: 15px;
      height: 30px;
      & > div {
        font-weight: bold;
        color: #000;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: all 0.5s;
        perspective: 300px;
        transform-origin: 50% 100%;
        &.active {
          animation: changeText 1s;
        }
        &.hidden {
          animation: changeText 1s;
        }
      }
    }
  }
  .button {
    width: 100%;
    height: auto;
    clear: both;
    float: left;
    & > a {
      text-decoration: none;
      color: #fff;
      display: inline-block;
      background-color: #333;
      padding: 28px 38px;
      line-height: 6px;
      text-transform: none;
      border: 2px solid #333;
      font-weight: 500;
      font-size: 16px;
      text-transform: capitalize;
      letter-spacing: 1px;
      transition: all 0.3s ease;
      &:hover {
        background-color: transparent;
        color: #333;
      }
    }
  }
`;
const showHide = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};
const showHideChild = {
  start: {
    y: -5,
    opacity: 0,
  },
  end: {
    y: 0,
    opacity: 1,
  },
};
function Home() {
  return (
    <Container>
      <Wrapper variants={showHide}>
        <motion.h3 variants={showHideChild} className="name">
          Min jeongho
        </motion.h3>
        <motion.span variants={showHideChild} className="line"></motion.span>
        <motion.h3 variants={showHideChild} id="job">
          소제목1
          <motion.div
            id="textAni"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                staggerChildren: 0.5,
              },
            }}
          >
            <motion.div
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="textPart1"
            >
              소제목2
            </motion.div>
            <motion.div
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="textPart2"
            >
              소제목3
            </motion.div>
            <motion.div
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="textPart3"
            >
              소제목4
            </motion.div>
          </motion.div>
        </motion.h3>
        <motion.div variants={showHideChild} className="button">
          <Link to="etc">button</Link>
        </motion.div>
      </Wrapper>
    </Container>
  );
}
export default Home;
