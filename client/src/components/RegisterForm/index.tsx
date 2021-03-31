import { Container, Content } from "./styles";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export function RegisterForm() {
  return(
    <Container>
      <Content>
        <Link to="/" >
          <FiArrowLeft size={21} color="#fff" />
        </Link>
        <h2>Novo Agendamento</h2>
        <input placeholder="Nome"/>
        <input placeholder="Doutor"/>
        <input type="calendar" placeholder="Data" />
        <button type="button">
          Salvar
        </button>
      </Content>
    </Container>
  );
}