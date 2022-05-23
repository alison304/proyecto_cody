import { useContext } from "react";
import styled from "styled-components";
import { LinkPrimaryButton, LinkSecondaryButton } from "../collections/Buttons";
import { titleStyles } from "../collections/styles";
import { UserContext } from "../contexts/UserContext";
import CircleImage from "../elements/CircleImage";
import Container from "../elements/Container";
import Row from "../elements/Row";
import StyledSpan from "../elements/StyledSpan";

const H1Tittle = styled.h1`
  ${titleStyles};
  margin: 0;
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Header = ({ className }) => {
  let [user] = useContext(UserContext);

  return (
    <Container>
      <header className={className}>

        <InfoContainer>
          <H1Tittle>
            Bienvenidos, soy <StyledSpan>Alison Paico</StyledSpan>😄desarrolladora web
          </H1Tittle>
          <Row>
            <LinkPrimaryButton>Mis proyectos</LinkPrimaryButton>
            <LinkPrimaryButton>Descargar mi CV</LinkPrimaryButton>
          </Row>
          <LinkSecondaryButton> Ó lee mis artículos ({user.articlesFromDevTo.length})</LinkSecondaryButton>
        </InfoContainer>
        <CircleImage
          src="/Alison.jpg"
          alt="Foto Ali"
          width="295"
          height="320"
        />
      </header>
    </Container>
  );
};

export default styled(Header)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 60px;
  padding-bottom: 50px;
  color: darkblue;
  align-items: center;
`;
