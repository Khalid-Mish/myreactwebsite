
function Header({ buttons }) {
    return (
        <>
        <header>
            <h1 className='title'>Khalid Mustafa Al-Roubaie</h1>
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
