document.getElementById('footer').innerHTML = 
`
<!-- div com as configuracoes do footer -->
<footer class="bg-dark text-center text-white">
  <div class="container p-4 pb-0">
    <section class="mb-4">

      <!-- icone Youtube -->
      <a class="btn text-white btn-floating m-1" style="background-color: #f44336;" 
        href="https://www.youtube.com/@canalicebetel" role="button" target="_blank">
        <i class="fab fa-youtube"></i>
      </a>

      <!-- icone Facebook -->
      <a class="btn text-white btn-floating m-1" style="background-color: #3b5998;"
        href="https://www.facebook.com/icebetel" role="button" target="_blank">
        <i class="fab fa-facebook-f"></i>
      </a>

      <!-- icone Instagram -->
      <a class="btn text-white btn-floating m-1" style="background-color: #ac2bac;" 
        href="https://www.instagram.com/ice_betel" role="button" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>

    </section>
  </div>

  <!-- copyrigth -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2023
    <a class="text-white">Igreja Cristã Evangélica Betel</a>
  </div>
</footer>
`

var linkCSS = document.createElement("link")
linkCSS.rel = "stylesheet"
linkCSS.href = "/components/footer.css"
document.head.appendChild(linkCSS)

var script = document.createElement("script")
script.setAttribute("src", "https://kit.fontawesome.com/eb2ab83883.js")
script.setAttribute("type", "text/javascript")
document.head.appendChild(script)