<template>
  <div class="navbar">
  <header id="cabecalho">
   <img id="nine" src="../assets/fotos/nine-sites.png" >
   <nav id="menu-home">
           <ol type="1">
          <li>
            <router-link to="/Home">Home</router-link>
          </li>
          <li>
            <router-link to="/nine">A Nine Sites</router-link>
          </li>
          <li >
            <router-link to="/serv"> Serviços</router-link>
          </li>
          <li>
            <router-link to="/contato">Contato</router-link>
          </li>
        </ol>
      </nav>
<img id="insta" src="../assets/fotos/logo-insta.png" >
<a href="http://www.instagram.com"><img id="zap" src="../assets/fotos/logo-zap.png" ></a>
  </header>
  
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.navbar{
  position: absolute;
width: 100%;
height: 1024px;
left: 0px;
top: 0px;

background: #93D8E4;
}
header#cabecalho{
  position: absolute;
width: 100%;
height: 210px;
left: 0px;
top: 0px;
background: #FFFFFF;
}
header#cabecalho img#nine{
  position: absolute;
width: 230px;
height: 210px;
left: 131px;
top: 0px;
}
nav#menu-home{
  display: block;
}
nav#menu-home ol{
  list-style: none;
	text-transform: uppercase;/* nome maisculo*/
	position: absolute;
	top: 70px;
	left: 400px;
  color: black;
}
nav#menu-home li{
border-radius: 8px;
	display: inline-block;
	font-size: 20px;
  line-height: 35px;
	padding: 10px;
	margin: 2px;
  color: black;
}
nav#menu-home li a{
  text-decoration: none;
  color: black;
}

nav#menu-home li a:hover{
  color: #93D8E4;
}
header#cabecalho img#insta{
  position: absolute;
width: 102px;
height: 102px;
left: 1000px;
top: 54px;
}
header#cabecalho img#zap{
  position: absolute;
width: 99px;
height: 95px;
left: 1161px;
top: 54px;
}



</style>
