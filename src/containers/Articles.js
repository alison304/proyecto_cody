import { useContext } from "react";
import styled from "styled-components";
import Article from "../blocks/Article";
import DevChanger from "../blocks/DevChanger";
import { UserContext } from "../contexts/UserContext";
import Container from "../elements/Container";
import Row from "../elements/Row";

const Articles = ({className}) => {
  let [user] = useContext(UserContext);
  return (
    <div className={className}>
      <Container>
        <h2>Estos son mis artículos en Dev.to</h2>
        <DevChanger />
        <Row>
          {
          user.articlesFromDevTo.map((article) => (
            <Article article={article} key={article.id}></Article>
          ))
          }
        </Row>
      </Container>
    </div>
  );
};

export default styled(Articles)`
  background-color: ${ props => props?.theme?.colors?.background || "black" };
  color: ${ props => props?.theme?.colors?.ligthText || "#fff" };
  padding-top: 60px;
  padding-botton: 60px;
`;
