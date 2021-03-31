import { Container, Content } from "./styles";

export function RegisterForm() {
  return(
    <Container>
      <Content>
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