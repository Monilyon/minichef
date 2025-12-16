import{ html, render} from 'lit-html';
export const FooterComponentHtml = () => html`
  <footer class="row h-auto w-100 p-5">
    <div class="d-flex text-light justify-content-around text-bg-secondary flex-wrap h-100">
        <div class="col-sm-12 col-lg-2 mb-4">
        <h4 class="text-uppercase my-3">Contact Us</h4>
        <ul class="list-unstyled">
            <li><i class="fa-solid fa-phone me-2"></i>+703-327-7844</li>
            <li><i class="fa-solid fa-envelope me-2"></i>info@volupa.com</li>
            <li><i class="fa-solid fa-paper-plane me-2"></i>Via Solferino, 7-20121 Milano-Italy</li>
        </ul>
        </div>
        <div class="col-sm-12 col-lg-2 mb-4">
        <h4 class="text-uppercase my-3">Useful Links</h4>
        <ul class="list-unstyled">
            <li><a href="#" class="text-light text-decoration-none">Contact Us</a></li>
            <li><a href="#" class="text-light text-decoration-none">Payments</a></li>
            <li><a href="#" class="text-light text-decoration-none">Shipping Info</a></li>
            <li><a href="#" class="text-light text-decoration-none">Returns & Refunds</a></li>
            <li><a href="#" class="text-light text-decoration-none">FAQs</a></li>
            <li><a href="#" class="text-light text-decoration-none">Terms & Conditions</a></li>
        </ul>
        </div>
        <div class="col-sm-12 col-lg-2 mb-4">
        <h4 class="text-uppercase my-3">My Account</h4>
        <ul class="list-unstyled">
            <li><a href="#" class="text-light text-decoration-none">Login</a></li>
            <li><a href="#" class="text-light text-decoration-none">My Orders</a></li>
            <li><a href="#" class="text-light text-decoration-none">Personal Data</a></li>
            <li><a href="#" class="text-light text-decoration-none">Wishlist</a></li>
        </ul>
        </div>
    </div>
  </footer>
`;

export function setupFooter(){
  const footerContainer = document.getElementById('footer');
  render(FooterComponentHtml(),footerContainer);
}