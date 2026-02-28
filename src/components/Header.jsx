function Header() {
    const logoText = "React Practice Hub";
    const subtitle = "Practice all core Reat basics in one app";

    return (
        <header className="app-header">
            <h1>{logoText}</h1>
            <p>{subtitle}</p>
        </header>
    );
}

export default Header;