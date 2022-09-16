/** @format */
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Layouts/Navbar";
import Introduction from "./Components/Introduction";
import Companies from "./Components/Companies";
import BuildTeam from "./Components/BuildTeam";
import Cards from "./Components/Cards";
import About from "./Components/About";
import Footer from "./Components/Layouts/Footer";
import "./styles/index.scss";

function App() {
  return (
    <div className="home">
      <Navbar />
      <Introduction />
      <Companies />
      <BuildTeam />
      <Cards />
      <About/>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
