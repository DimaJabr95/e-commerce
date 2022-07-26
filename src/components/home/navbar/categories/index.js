import Search from "../search";

const Categories = (props) => {
  return (
    <>
      <div className="navbar-container container">
        <ul className="menu-items" style={{ marginLeft: "-130px" }}>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Promo</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li class="ml-auto">
            <Search test={props.test} />
          </li>

          <li className="nav-item pl-1">
            <a className="nav-link" href="#">
              <i class="icon-gittip"></i>
            </a>
          </li>
          <li className="nav-item pl-1">
            <a className="nav-link" href="#">
              <i class="icon-shopping-cart"></i>
            </a>
          </li>
          <li className="nav-item pl-1">
            <a className="nav-link" href="#">
              <i class="icon-user"></i>
            </a>
          </li>
          <li className="nav-item pl-1">
            <a class="nav-link" href="#">
              <i class="icon-bell"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Categories;
