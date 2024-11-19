import Header from "./assets/header";
import Toggle from "./assets/toggle";

function App() {
    const buttonNames = ['Home', 'About Me', 'My Blog', 'Contact Me'];

    return (
        <>
        <Header buttons={buttonNames} />
        <Toggle />
        </>
    );
}

export default App;
