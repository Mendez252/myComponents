import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import Searchbar from "./components/Searchbar/Searchbar";
import NavBar from "./components/NavBar/NavBar";
import LoginForm from "./components/Login Form/LoginForm";
import "./Container.css";

var text =
  "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like";

const Container = () => {
  return (
    <div className="main_container">
      <Searchbar />
    </div>
  );
};

export default Container;
