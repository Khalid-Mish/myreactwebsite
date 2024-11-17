function Header({ buttons }) {
    return (
        <>
        <header>
            <h1 className='title'>Mish's Website</h1>
            <div className="button-container">
                {buttons.map((buttonName, index) => (
                    <button key={index} className="headerbutton">
                        {buttonName}
                    </button>
                ))}
            </div>
        </header>
        </>
    );
}

export default Header;
