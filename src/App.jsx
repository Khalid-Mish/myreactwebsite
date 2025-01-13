import { useState } from "react";
import Header from "./assets/header";
import Home from "./pages/Home"; // import Home component
import AboutMe from "./pages/AboutMe"; // import AboutMe component
import MyBlog from "./pages/MyBlog"; // import MyBlog component
import ContactMe from "./pages/ContactMe"; // import ContactMe component

function App() {
    const buttonNames = ['Home', 'About Me', 'My Blog', 'Contact Me'];
    const [currentPage, setCurrentPage] = useState('Home'); // state to track the current page

    const handleButtonClick = (page) => {
        setCurrentPage(page); // update the current page on button click
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <Home />;
            case 'About Me':
                return <AboutMe />;
            case 'My Blog':
                return <MyBlog />;
            case 'Contact Me':
                return <ContactMe />;
            default:
                return <Home />;
        }
    };

    return (
        <>
            <Header buttons={buttonNames} onButtonClick={handleButtonClick} />
            <div className="page-content">
                {renderPage()} {/* Conditionally render the page based on the currentPage state */}
            </div>
        </>
    );
}

export default App;
