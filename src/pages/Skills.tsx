import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  basicSkills,
  librarySkills,
  databaseSkills,
  othersSkills,
} from "../etc/skillsdb";
import { gaugeAnimation } from "../keyframe/keyFrame";
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
  position: relative;
  max-height: 1500px;
  min-height: 700px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  max-width: 1800px;
  min-width: 1200px;
  box-sizing: border-box;
`;

const MainContainer = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  padding-top: 150px;
  align-items: center;
  background-color: #f9f6f0;
`;
const IndicatorCircle = styled.div<{ isSelected?: boolean }>`
  width: inline;
  margin-top: 11px;
  height: 6px;
  border-radius: 5px;
  background-color: #0553dd;
  opacity: ${({ isSelected }) => (isSelected ? 0.8 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const Sidebar = styled.aside`
  width: 20%;
  display: flex;
  font-size: 1.7rem;
  background-color: rgba(249, 246, 240, 0);
  color: #b6b8bc;
  padding: 30px;
  position: relative;

  ul {
    padding: 0px;
    margin: 0;
    list-style: none;
  }
`;

const ContentContainer = styled.section`
  flex: 1;
  box-sizing: border-box;
  background-color: #f9f6f0;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  color: #333;
  min-height: 650px;

  overflow-y: auto;
  position: relative;
`;

const ListItem = styled.div`
  width: calc(50.33% - 20px);
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  max-width: 400px;
  margin: 20px 10px 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 12px;
`;

const Image = styled.img`
  width: 24%;
  max-width: 100%;
`;

const TextContainer = styled.div`
  flex: 1;
  padding-left: 20px;
`;

const FrontendText = styled.h1`
  font-size: 3rem;
  color: #333;
  position: absolute;
  top: -140px;
  left: -23px;
  margin: 50px 0 0 50px;
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
`;

const Title = styled.h2`
  margin-top: 8px;
  font-size: 0.9rem;
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
`;
const PaginationContainer = styled.div`
  position: absolute;
  justify-content: flex-end;
  margin-top: 650px;
  margin-left: 770px;
`;

const PageButton = styled.button`
  margin-left: 20px;
  padding: 5px 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
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

  return (
    <>
      <MainContainer>
        <Wrapper>
          <FrontendText>FE/SKills</FrontendText>
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
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <PageButton
                    key={page}
                    onClick={() => handlePageChange(page)}
                    style={{
                      backgroundColor:
                        currentPage === page ? "#2980b9" : "#3498db",
                    }}
                  >
                    {page}
                  </PageButton>
                )
              )}
            </PaginationContainer>
          </ContentContainer>
        </Wrapper>
      </MainContainer>
    </>
  );
}

export default Skills;
