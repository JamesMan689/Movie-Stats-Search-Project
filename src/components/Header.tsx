import "../components-css/Header.css"
import movieIcon from "../img/movie-icon.png"

const Header = () =>{
  return(
    <div>
      <div className="header-container">
      <h1 className="header-title">Movie Stats Search</h1>
      <img src={movieIcon}></img>
    </div>
    </div>
    
  )
}

export default Header