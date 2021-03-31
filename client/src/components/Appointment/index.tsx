import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Container } from './styles';

import { api } from '../../services/api';
import { useEffect, useState } from 'react';

interface Listing {
  id: number;
  name: string;
  doctor: string;
  date: string;
}

export function Appointment() {
  const [listing, setListing] = useState<Listing[]>([]);

  useEffect(() => {
    api.get('/class')
      .then(response => {
    setListing(response.data);
    })
  }, []);

  return(
    <Container>
      <ul>
        {listing.map(listing => (
          <li key={listing.id}>
            <strong>NOME</strong>
            <p>{listing.name}</p>

            <strong>DOUTOR</strong>
            <p>{listing.doctor}</p>

            <strong>DATA</strong>
            <p>{listing.date}</p>

            <button type="button">
              <AiOutlineCloseCircle size={20} color="red" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}