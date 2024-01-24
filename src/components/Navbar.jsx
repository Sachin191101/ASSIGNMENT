
function Navbar() {
    return (
        <nav>
            <ul>
                <div class="left">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Integrations</a></li>
                    <li><a href="#">Tracking Page</a></li>
                    <li><a href="#">Partner with Us</a></li>
                </div>
                <div class="right">
                    <li class="search-box"><img src="./images/search-outline.svg" alt="search" /> <input type="text" /></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#"><img src="./images/settings-outline.svg" />Settings</a></li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;