
import { useNavigate, Link, NavLink } from 'react-router-dom';
import './styles.css';
export default function App () {

  return (
    <div id = "navigate">
        <Link to="/">
          Home
        </Link>

        <Link to = "/mimic">
          MimicSweeper
        </Link>

        <Link to = "/randomizer">
          Randomizer
        </Link>
    </div>

        
  )

}