
const navbar = `
  <nav class="navbar navbar-expand-lg navbarCustom">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">
        <div class="logo">
          <img src="./img/logo.png" alt="Mixtecatl Logo">
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
        aria-controls="menu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>

      </button>
      <div class="collapse navbar-collapse" id="menu">
        <div class="nav-buttons ms-auto">
          <button type="button" class="btn custom-btn">Main</button>
          <button type="button" class="btn custom-btn">Products</button>
          <button type="button" class="btn custom-btn">Categories</button>
          <button type="button" class="btn custom-btn">Contact</button>
          <button type="button" class="btn custom-btn"> <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
`;

document.getElementById("navbar-container").innerHTML = navbar;

