import { useLocation } from "react-router-dom";
import './home.css'

const Home = () => {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <div>
      {/* <h1 className="Title">Finance Manager</h1> */}

      {user ? (
        <div>
          <div className="header">
            <h1 className="Title">Finance Manager</h1>
            <img src={user.picture} alt="Profile" style={{ borderRadius: "50%" }}  className="proimg"/>
          </div>
          <h2>{user.name}</h2>
        
          {/* <p>{user.email}</p> */}
        </div>
      ) : (
        <p>No user data found. Please login.</p>
      )}
    </div>
  );
};

export default Home;
