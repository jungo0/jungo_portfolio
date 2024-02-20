import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  basicSkills,
  librarySkills,
  databaseSkills,
  othersSkills,
} from "../etc/skillsdb";
import { gaugeAnimation } from "../keyframe/keyFrame";
import media from "../styles/media";
const TitleText = styled.div`
  overflow: hidden;
  font-size: 2.3rem;
  margin-bottom: 0rem;
  color: rgba(1, 1, 1, 0.7);
  span {
    display: inline-block;
    padding-bottom: 0.5rem;
    position: relative;
    letter-spacing: 7px;
    text-transform: uppercase;
    font-weight: 700;
    color: #333;
    &::after {
      content: "";
      margin-left: 1.563rem;
      position: absolute;
      width: 5000px;
      height: 1.2px;
      background-color: #7d7789;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  @media ${(props) => props.theme.mobile} {
    span {
      letter-spacing: 2px;
    }
  }
`;
interface titleText {
  titleName: string;
}
interface titleText {
  titleName: string;
}

function TitleForm(props: titleText) {
  return (
    <TitleText>
      <span>{props.titleName}</span>
    </TitleText>
  );
}

interface StyledLiProps {
  isSelected: boolean;
}
const StyledLi = styled.li<StyledLiProps>`
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease-in-out;

  color: ${({ isSelected }) => (isSelected ? "#222935" : "#b6b8bc")};

  &:hover {
    color: #222935;
  }
`;

const categories: ("Basic" | "Library" | "DataBase" | "Others")[] = [
  "Basic",
  "Library",
  "DataBase",
  "Others",
];

const Wrapper = styled.div`
  height: auto;
  background-color: #f9f6f0;
  padding: 6rem 9rem 6rem 9rem;

  ${media.tablet`
    padding: 4rem;
  `}

  ${media.mobile`
    padding: 2rem;
  `}
`;

const IndicatorCircle = styled.div<{ isSelected?: boolean }>`
  width: 120px;
  margin-top: 11px;
  height: 6px;
  border-radius: 5px;
  background-color: #0553dd;
  opacity: ${({ isSelected }) => (isSelected ? 0.8 : 0)};
  transition: opacity 0.3s ease-in-out;
`;
const Container = styled.div`
  display: flex;
  height: auto;
`;
const Sidebar = styled.aside`
  flex: 0 0 20%;
  display: flex;
  font-size: 1.7rem;
  background-color: rgba(249, 246, 240, 0);
  color: #b6b8bc;
  padding: 30px;

  ul {
    padding: 0px;
    margin: 0;
    list-style: none;
  }
  @media (max-width: 1220px) {
    font-size: 1.3rem;
    flex: 0 0 10%;
  }
  ${media.mobile`
  display:none;
  font-size:0.2rem;
  display:none;
  padding: 10px;
  `}
  ${media.tablet`
  flex: 0 0 10%;
  bottom:-6%;
  `}
`;
const ContentContainer = styled.section`
  flex: 1;
  box-sizing: border-box;
  background-color: #f9f6f0;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  color: #333;
  min-height: 800px;
  position: relative;
  box-sizing: border-box;

  ${media.mobile`
    padding: 10px;
  `}
`;
const ListItem = styled.div`
  width: calc(50% - 20px);
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  max-width: 500px;
  min-width: 230px;
  margin: 20px 10px 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 12px;

  ${media.tablet`

    width: calc(50% - 10px);
    max-width: 100%;
  `}

  ${media.mobile`

    width: calc(70% - 20px);
  `}
`;
const Image = styled.img`
  width: 24%;
  max-width: 100%;
`;

const TextContainer = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const SubTitle = styled.h3`
  font-size: 0.8rem;
  margin-top: 8px;
  text-align: left;
  background-color: white;
  border: 2px solid #ced5de;
  width: fit-content;
  padding: 2px 5px;
  border-radius: 15px;
  @media (max-width: 1220px) {
    font-size: 0.7rem;
  }
  ${media.tablet`
  font-size:0.6rem;

  `}

  ${media.mobile`
  font-size:0.6rem;
  `}
`;

const Title = styled.h2`
  margin-top: 8px;
  font-size: 0.9rem;

  @media (max-width: 1220px) {
    font-size: 0.7rem;
  }
  ${media.tablet`
  font-size:0.7rem;

  `}

  ${media.mobile`
  font-size:0.7rem;
  `}
`;

const Gauge = styled.div<{ percentage: number }>`
  width: 100%;
  height: 13px;
  border-radius: 15px;
  background-color: #e2e8f0;
  margin-top: 5px;
  overflow: hidden;
  position: relative;

  &:after {
    content: "";
    display: block;
    height: 100%;
    width: ${({ percentage }) => `${percentage}%`};
    background-color: #0553dd;
    animation: ${({ percentage }) => gaugeAnimation(percentage)} 1s ease-in-out;
  }
  @media (max-width: 1220px) {
    width: 100%;
    height: 9px;
  }
  ${media.tablet`
  width: 100%;
  height: 7px;

  `}

  ${media.mobile`
  width: 100%;
  height: 7px;
  `}
`;
const PaginationContainer = styled.div`
  position: absolute;
  bottom: -7%;
  right: 3%;
  justify-content: flex-end;
  ${media.tablet`
  bottom:-6%;
  `}

  ${media.mobile`
  display:none;
  bottom:20%;
  `}
`;
const PageButton = styled.button`
  padding: 8.5px 11px;
  background-color: white;
  margin: 2px;
  color: #808080;
  border-radius: 50%;
  border: 1px solid #c9d1db;
  cursor: pointer;
  transition: background-color 0.4s, color 0.3s;
`;

const LeftArrow = styled.button`
  padding: 8.5px 11px;
  border: 1px solid #c9d1db;
  background-color: white;
  color: #808080;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #e7e7e7;
  }
`;

const RightArrow = styled.button`
  padding: 8.5px 11px;
  border: 1px solid #c9d1db;
  background-color: white;
  color: #808080;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #e7e7e7;
  }
`;

function Skills() {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<
    "Basic" | "Library" | "DataBase" | "Others"
  >(categories[0]);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [key, setKey] = useState(0);
  const totalItems =
    selectedCategory === "Basic"
      ? Object.keys(basicSkills).length
      : selectedCategory === "Library"
      ? Object.keys(librarySkills).length
      : selectedCategory === "DataBase"
      ? Object.keys(databaseSkills).length
      : Object.keys(othersSkills).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  const handleCategoryClick = (
    category: "Basic" | "Library" | "DataBase" | "Others"
  ) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setKey((prevKey) => prevKey + 1);
  };

  const getCategorySkills = () => {
    switch (selectedCategory) {
      case "Basic":
        return basicSkills as Record<string, any>;
      case "Library":
        return librarySkills as Record<string, any>;
      case "DataBase":
        return databaseSkills as Record<string, any>;
      case "Others":
        return othersSkills as Record<string, any>;
      default:
        return {} as Record<string, any>;
    }
  };

  const paginatedData = Array.from(
    { length: totalItems },
    (_, index) => index + 1
  ).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    setCurrentPercentage(0);

    const timeoutId = setTimeout(() => {
      setCurrentPercentage(
        getCategorySkills()[`${selectedCategory}${currentPage}`]?.percentage ||
          0
      );
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [selectedCategory, currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };

  return (
    <>
      <Wrapper>
        <TitleForm titleName="Skills" />
        <Container>
          <Sidebar>
            <ul>
              {categories.map((category) => (
                <StyledLi
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  isSelected={selectedCategory === category}
                >
                  {category}
                  <IndicatorCircle isSelected={selectedCategory === category} />
                </StyledLi>
              ))}
            </ul>
          </Sidebar>
          <ContentContainer id="skills-section">
            {paginatedData.map((item) => (
              <ListItem key={item}>
                <TextContainer>
                  <SubTitle>
                    {
                      getCategorySkills()[`${selectedCategory}${item}`]
                        ?.subtitle
                    }{" "}
                  </SubTitle>
                  <Gauge
                    key={key}
                    percentage={
                      getCategorySkills()[`${selectedCategory}${item}`]
                        ?.percentage || 0
                    }
                  />
                  <Title>
                    {getCategorySkills()[`${selectedCategory}${item}`]?.title}{" "}
                  </Title>
                </TextContainer>
                <Image
                  src={getCategorySkills()[`${selectedCategory}${item}`]?.image}
                  alt={`${selectedCategory} Image ${item}`}
                />
              </ListItem>
            ))}
            <PaginationContainer>
              <LeftArrow onClick={handlePrevPage}> ˂</LeftArrow>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <PageButton
                    key={page}
                    onClick={() => handlePageChange(page)}
                    style={{
                      backgroundColor:
                        currentPage === page ? "RGB(77, 161, 248)" : "white",
                      color: currentPage === page ? "white" : "#828282",
                    }}
                  >
                    {page}
                  </PageButton>
                )
              )}
              <RightArrow onClick={handleNextPage}>˃</RightArrow>
            </PaginationContainer>
          </ContentContainer>
        </Container>
      </Wrapper>
    </>
  );
}

export default Skills;
