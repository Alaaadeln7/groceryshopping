import { Link } from "react-router-dom";
import { FaEnvira } from "react-icons/fa"
export default function Logo() {
  return (
    <div className="logo">
      <h1><FaEnvira /><Link to={'/'}>Grocery</Link></h1>
    </div>
  )
}