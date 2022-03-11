import {Link} from 'react-router-dom';
import "./../styles/main.css";


const Main = () => {
    
  return (
    <div className="main-body">
        <div className="btn btn-success main-btn"><Link to="/Products">Buyer</Link></div>
        <div className="btn btn-success main-btn"><Link to="/Products/form">Seller</Link></div>
    </div>
  );
};

export default Main;