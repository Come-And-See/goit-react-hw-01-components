import PropTypes from 'prop-types';
import * as css from './transaction.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <css.Table>
      <css.Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </css.Thead>

      <tbody>
        {items.map(item => (
          <css.Tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </css.Tr>
        ))}
      </tbody>
    </css.Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
