import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="gaegu-korean">
            <h2>홈 페이지</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/react-site">Home</Link>
                    </li>
                    <li>
                        <Link to="login">Login</Link>
                    </li>
                    <li>
                        <Link to="work1">Day_0812</Link>
                    </li>
                    <li>
                        <Link to="work2">Day_0813</Link>
                    </li>
                    <li>
                        <Link to="work3">Day_0814</Link>
                    </li>
                    <li>
                        <Link to="work4">Day_0818</Link>
                    </li>
                    <li>
                        <Link to="Miniblog">MiniBlog</Link>
                    </li>

                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    );
}
export default Layout;