import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Container } from './styles';

export function Appointment() {
  return(
    <Container>
      <ul>
        <li>
          <strong>NOME</strong>
          <p>Nome teste</p>

          <strong>DOUTOR</strong>
          <p>Nome do Doutor</p>

          <strong>DATA</strong>
          <p>07/07/2077</p>

          <button type="button">
            <AiOutlineCloseCircle size={20} color="red" />
          </button>
        </li>


        <li>
          <strong>NOME</strong>
          <p>Nome teste</p>

          <strong>DOUTOR</strong>
          <p>Julius Winfield Erving II</p>

          <strong>DATA</strong>
          <p>07/07/2077</p>

          <button type="button">
            <AiOutlineCloseCircle size={20} color="red" />
          </button>
        </li>


        <li>
          <strong>NOME</strong>
          <p>Nome teste</p>

          <strong>DOUTOR</strong>
          <p>Julius Winfield Erving II</p>

          <strong>DATA</strong>
          <p>07/07/2077</p>

          <button type="button">
            <AiOutlineCloseCircle size={20} color="red" />
          </button>
        </li>

        <li>
          <strong>NOME</strong>
          <p>Nome teste</p>

          <strong>DOUTOR</strong>
          <p>Julius Winfield Erving II</p>

          <strong>DATA</strong>
          <p>07/07/2077</p>

          <button type="button">
            <AiOutlineCloseCircle size={20} color="red" />
          </button>
        </li>
      </ul>
    </Container>
  );
}