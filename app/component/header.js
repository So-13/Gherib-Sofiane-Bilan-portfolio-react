import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const links = [
        { title: 'HOME', path: '/' },
        { title: 'SERVICES', path: '/services' },
        { title: 'PORTFOLIO', path: '/portfolio' },
        { title: 'CONTACT', path: '/contact' },
        { title: 'MENTION LEGALES', path: '/mentionleg' },
    ];

    return (
        <header>
          
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light ps-5" href="#">JOHN DOE</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
                        <ul className="navbar-nav">
                            {links.map((element) => (
                                <li key={element.path} className="nav-item">
                                    <a className={`nav-link text-light ${pathname === element.path ? "is-active" : ""}`} href={element.path}>{element.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
