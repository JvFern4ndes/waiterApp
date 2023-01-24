import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '63cafc78575089323eb22e04',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1674245010478-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '63cafc78575089323eb22e05'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1674246191131-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '63cafc78575089323eb22e06'
      }
    ],
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕒️"
        title="Fila de espera"
        orders={orders}
      />

      <OrdersBoard
        icon="🧑‍🍳️"
        title="Em preparação"
        orders={[]}
      />

      <OrdersBoard
        icon="✅️"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}
