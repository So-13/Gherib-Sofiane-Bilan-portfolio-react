


export default function Header() {
    return (
       
        <header>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">JOHN DOE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-light is-active" href="/">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/services">SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/portfolio">PORTFOLIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light " href="/contact">CONTACT</a> 
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/mentionleg">MENTION LEGALES</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
