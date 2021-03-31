import logoPng from '../../assets/logo.png';
import { Container, Content } from "./styles";

export function Header () {
  return (
    <Container>
      <Content>
        <img src={logoPng} alt=""/>
        <button type="button">
          Agendar
        </button>
      </Content>
    </Container>
  );
}