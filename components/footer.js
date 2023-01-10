const templateFooter = document.createElement('template')
templateFooter.innerHTML = 
`
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
<script src="https://kit.fontawesome.com/eb2ab83883.js" crossorigin="anonymous"></script>

<div class="container p-4 pb-0">
    <section class="mb-4">
      <a class="btn text-white btn-floating m-1" style="background-color: #3b5998;" href="#!" role="button">
        <i class="fab fa-facebook-f"></i>
      </a>

      <a class="btn text-white btn-floating m-1" style="background-color: #55acee;" href="#!" role="button">
        <i class="fab fa-twitter"></i>
      </a>

      <a class="btn text-white btn-floating m-1" style="background-color: #dd4b39;" href="#!" role="button">
        <i class="fab fa-google"></i>
      </a>

      <a class="btn text-white btn-floating m-1" style="background-color: #ac2bac;" href="#!" role="button">
        <i class="fab fa-instagram"></i>
      </a>
    </section>
  </div>

  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 
    <a class="text-white">Igreja Cristã Evangélica Betel</a>
  </div>
`

class FooterPersonalizada extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(templateFooter.content)
    }
}

window.customElements.define('footer-template', FooterPersonalizada)