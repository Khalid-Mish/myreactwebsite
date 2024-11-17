import Header from "./assets/header";

function App() {
    const buttonNames = ['Home', 'About Me', 'My Blog', 'Contact Me'];

    return (
        <Header buttons={buttonNames} />
    );
}

export default App;
