import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  basicSkills,
  librarySkills,
  databaseSkills,
  othersSkills,
} from "../etc/skillsdb";
import { gaugeAnimation } from "../keyframe/keyFrame";

const categories: ("Basic" | "Library" | "DataBase" | "Others")[] = [
  "Basic",
  "Library",
  "DataBase",
  "Others",
];

const Wrapper = styled.div`
  position: relative;
  max-height: 1500px;
  min-height: 600px;
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
  align-items: center;
`;

const Sidebar = styled.aside`
  width: 20%;
  display: flex;
  font-size: 1.7rem;
  background-color: #9e8361;
  color: #333;
  padding: 30px;
  position: relative;
  ul {
    padding: 0px;
    margin: 0;
    list-style: none;
  }
  li {
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

const ContentContainer = styled.section`
  flex: 1;
  box-sizing: border-box;
  background-color: #9e6971;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333;
  text-align: center;
  flex-wrap: wrap;
  min-height: 650px;
  overflow-y: auto;
`;

const ListItem = styled.div`
  width: calc(100% - 50px);
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  max-width: 400px;
  margin: 20px;
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
  position: absolute;
  font-size: 2.2rem;
  left: 50px;
  top: 50px;
  color: #333;
`;

const SubTitle = styled.h3`
  font-size: 0.8rem;
  margin-top: 5px;
  text-align: left;
  background-color: white;
  border: 2px solid #ced5de;
  width: fit-content;
  padding: 2px 5px;
  border-radius: 15px;
`;

const Title = styled.h2`
  margin-top: 5px;
`;

const Gauge = styled.div<{ percentage: number }>`
  width: 100%;
  height: 13px;
  border-radius: 15px;
  background-color: #fff;
  margin-top: 5px;
  overflow: hidden;
  position: relative;

  &:after {
    content: "";
    display: block;
    height: 100%;
    width: ${({ percentage }) => `${percentage}%`};
    background-color: #3498db;
    animation: ${({ percentage }) => gaugeAnimation(percentage)} 2s ease-in-out;
  }
`;
const PaginationContainer = styled.div`
  position: absolute;
  justify-content: flex-end;
  margin-top: 600px;
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
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<
    "Basic" | "Library" | "DataBase" | "Others"
  >(categories[0]);
  const [currentPercentage, setCurrentPercentage] = useState(0);

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
        <FrontendText>frontend</FrontendText>
        <Wrapper>
          <Sidebar>
            <ul>
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  style={{
                    backgroundColor:
                      selectedCategory === category ? "#2980b9" : "#3498db",
                  }}
                >
                  {category}
                </li>
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
                    {item}
                  </SubTitle>
                  <Gauge
                    percentage={
                      getCategorySkills()[`${selectedCategory}${item}`]
                        ?.percentage || 0
                    }
                  />
                  <Title>
                    {getCategorySkills()[`${selectedCategory}${item}`]?.title}{" "}
                    {item}
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
