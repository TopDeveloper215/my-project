import { Link } from 'react-router-dom';

const ListItem = ({ to, children }) => {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default ListItem;