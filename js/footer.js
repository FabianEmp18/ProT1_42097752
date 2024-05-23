// Crear una variable para el contenido del footer
let miFooter = `
<div class="footer-content">
<div class="footer-icons">
    <a href="https://www.facebook.com" target="_blank">
        <img src="img/facebook.png" alt="Facebook" class="footer-icon">
    </a>
    <a href="https://www.instagram.com" target="_blank">
        <img src="img/instagram.png" alt="Instagram" class="footer-icon">
    </a>
    <a href="https://www.linkedin.com" target="_blank">
        <img src="img/linkedin.png" alt="LinkedIn" class="footer-icon">
    </a>
    <a href="wa.link/ve2bbo" target="_blank">
        <img src="img/whatsapp.png" alt="WhatsApp" class="footer-icon">
    </a>
</div>
</div>
<p class="footer-text">Todos los derechos reservados. <span class="year">&copy; 2024</span> Nuestra Empresa.</p>
`;


// Seleccionar el footer y agregar el contenido
document.querySelector("footer").innerHTML = miFooter;
