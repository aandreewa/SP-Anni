import '../css/NavBar.css';
import '../css/logo.css';
import Logo from '../components/Logo.js';

function NavBar() {
  return (
    <div className="NavBar-header">
     <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="navbar-collapse collapse w-100">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a id="logo" class="nav-link" href="/"><Logo/></a>
            </li>
        </ul>
    </div>
    <div class="navbar-collapse collapse w-200 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="/Schedule">Schedule</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/Practices">Practices</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/Prices">Prices</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/Contacts">Contacts</a>
            </li>
        </ul>
    </div>
</nav>
    </div>
  );
}

export default NavBar;
