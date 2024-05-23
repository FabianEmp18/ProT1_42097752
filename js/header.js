//Crear una variable miHeader
let miHeader = `
<div class="header">
<a href="" class="logo">
    <img src="Img/logoheader.png" alt="Logo de la empresa" class="logoheader" />
</a>
<h1>Bienvenidos a Nuestra Empresa</h1>
</div>
`;

//Selecciono el header y con un innerHTML agrego lo que definí en la variable miHeader
document.querySelector("header").innerHTML = miHeader;

