import "./theme/scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/headerComponents/TopBar";
import Navigation from "./components/headerComponents/Navigation";

function App() {
    return (
        <div className="App">
            <TopBar />
            <Navigation />
        </div>
    );
}

export default App;
