import { Link } from 'react-router-dom';

const ListItem = ({ to, children }) => {
  return (
    <li>
      <Link className='linkstyle' to={to}>{children}</Link>
    </li>
  );
};

export default ListItem;