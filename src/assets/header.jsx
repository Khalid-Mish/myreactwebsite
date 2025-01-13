function Header({ buttons, onButtonClick }) {
    return (
        <header>
            <h1 className="title">Khalid Mustafa Al-Roubaie</h1>
            <div className="button-container">
                {buttons.map((buttonName, index) => (
                    <button
                        key={index}
                        className="headerbutton"
                        onClick={() => onButtonClick(buttonName)} // call the onButtonClick function when clicked
                    >
                        {buttonName}
                    </button>
                ))}
            </div>
        </header>
    );
}

export default Header;
