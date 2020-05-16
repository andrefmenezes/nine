
<template>
  <div class="navbar">
    <header class="cabecalho container">
        <a class="logo" href="#"><img src="../assets/fotos/nine-sites.png" > </a>
         <Slide right class="menuMobile">

     <router-link to="/"> <span> Home</span> </router-link>
     <router-link to="/serv"><span> Serviços </span> </router-link>
      <router-link to="/nine"><span> A Nine Sites</span> </router-link>
      <router-link to="/contato"><span> Contato</span> </router-link>
   
    </Slide>
  
  <nav class="menu">     
      <div class="nav">
      <ul>       
         <li><router-link to="/"> Home </router-link></li> 
         <li><router-link to="/serv"> Serviços </router-link></li> 
         <li><router-link to="/nine"> A Nine Sites </router-link></li> 
         <li><router-link to="/contato"> Contato </router-link></li> 
      </ul>
      <a class="insta" href="https://www.instagram.com/jeanfcf/" target ="blank"> <img src="../assets/fotos/logo-insta.png" ></a>
      <a  href="https://api.whatsapp.com/send?phone=5581999487583" target ="blank"> <img src="../assets/fotos/logo-zap.png" ></a>
    </div>
  </nav>
</header> 
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
  name: 'navbar',
   components: {
     Slide
  }
}
</script>


<style >
body{
    background-color: #f5f5f5 !important;
}
.navbar{
    position: absolute;
    width: 100%;
    top: 0%;    
    background-color: #f5f5f5;
}
*{        
    margin: 0;
    padding: 0;
    font-size: 100%;
    border: none;
    outline: none;
    font-weight: 300;
    box-sizing: border-box;
    font-family: Arial,sans-serif;
}

ul{
    list-style: none;
}
a{
    text-decoration: none;
}
img{
    max-width: 100%;
}
.container{
    width: 100%;
    float: left;
    padding: 3% 4%;
    text-align: center;
}
.bg-gradiente{
    background: linear-gradient(to right, #93D8E4,#63CAC6);
}

.logo{
    height: 56px;
    width: 56px;
    float: left;
  margin-top: -25px;
    font-size: 0;
}

.btn-close{
    font-size: 1.5em;
    color: #fff;
    float: right;
    cursor: pointer;
    margin: 2% 3% 0 0;
  
}

.menu{
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.9);
    top: 0;
    left: 0;

}

.menu ul{
    width: 100%;
    float: left; 
    text-align: center;
    }
.menu li{
    padding: 1.5%;
    }
    .menu li a{
        font-size: 2em;
        color: white;
        padding: 1.5% 3%S;
    }
     .menu li a:hover{
border: 1px solid #93D8E4;
     }


.insta{
    margin-right: 2%;
}
.nav{
    display: flex;
    justify-content: space-around;
    
}
    /*mobile*/

    @media screen and (min-width: 360px){

        .logo{
            margin-top: 0.8%;
           width: 214px;           
            background: url(../assets/fotos/nine-sites.png) center center/214px no-repeat;
                 }
        .btn{
          font-size: 2em;
                   
        }
    }
     @media screen and (min-width: 736px){
      
      .logo{
       margin-top: -25px;
      }
     
    }

      @media screen and (min-width: 1280px){
       .menuMobile{
           display: none;
       }
       .btn-close{
           display: none;
       }
        .menu{
            width: auto;
            height: 56px;
            line-height: 56px;
            float: right;
            background-color: #f5f5f5;
            display: block !important;
            position: static;
        }
        .menu li{
            padding: 0;
            float: left;
        }
        .menu li a{
           font-size: 1em;
           padding: 15px;
            color: #130400;
        }
        .menu li a:hover{
            border: none;
            color: #93D8E4;
        }
      }
</style>
