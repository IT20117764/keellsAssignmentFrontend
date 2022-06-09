function Header() {
    return (  
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light container p-5">
                <a class="navbar-brand" href="#">Employee Management</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/addemp">Add Empolyee</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/employees">Employees</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/adddepartment">AddDepartment</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;