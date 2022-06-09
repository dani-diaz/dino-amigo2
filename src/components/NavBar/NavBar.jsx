import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      <Link to="/home">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/about">About Us</Link>
      &nbsp; | &nbsp;
      <Link to="/classes">Classes</Link>
      &nbsp; | &nbsp;
      <Link to="/testimonies">Testimonies</Link>
      &nbsp; | &nbsp;
      <Link to="/contact">Contact Us</Link>
      &nbsp; | &nbsp;
      <Link to="/MyClassroom">My Classroom</Link>
      &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}