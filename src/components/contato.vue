<template>
   <div>
  <div class="containe">
    <article class="cont">
      <p>CONTATO:</p>
      </article>  
  <form action="#" class="form" method="post" tabindex="1">  
     <input type="text" class="input" name="nome" placeholder="Nome" required />  
     <input type="email" class="input" name="email" placeholder="Email" required />  
     <input type="tel" class="input" name="tel" placeholder="Telefone" />  
     <textarea class="textarea" name="conteudo" placeholder="Deixe uma mensagem" required></textarea>  
     <button type="submit" class="button">Enviar</button>  
  </form>  
</div>  

  <fofo/>
  </div>
</template>

<script>
import fofo from './Footer';
export default {
  name: 'contato',
  components:{
       fofo
    
  }
}
</script>


<style >
p{
  color: white;
  font-size: 2em;
}
.cont{
  margin-bottom: 4%;
width: 70%;
height: 8%;


background: #63CAC6;
}
.containe {
  width: 50%;
 margin-top: 33%;
 margin-left: 25%;
 background-color: #93D8E4 !important;
}

.form {
  width: 100%;
  font-family: "Arial", Times, serif;
}

.input {
  width: 100%;
  color: #292929;
  font-size: 18px;
  background-color: #C4C4C4;
  border: 1px solid #C4C4C4;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  text-indent: 20px;
}

.textarea {
  width: 100%;
  color: #292929;
  font-size: 18px;
  background-color: #C4C4C4;
  border: 1px solid #C4C4C4;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  height: 200px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  text-indent: 20px;
  padding-top: 16px;
  padding-left: 0;
  padding-right: 0;
  font-family: "Arial", Times, serif;
}

.button {
  margin-left: 23%;
  width: 50%;
  font-size: 18px;
  border-radius: 4px;
  color: #fff;
  height: 40px;
  opacity: .8;
  margin-bottom: 20px;
  cursor: pointer;
  background: #63CAC6;
  display: block;
  border: none;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  transition: 1s;
}

.button:hover {
  opacity: 1;
}
 @media screen and (min-width: 736px){
      .containe {
  
 margin-top: 10%;

}
    
     
    }

/*
fieldset#usuario{
  position: absolute;
width: 358px;
height: 641px;
left: 526px;
top: 300px;

}
form#fContato label#nome{
  position: absolute;
width: 119.99px;
height: 60.81px;
top: 0px;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 37px;

color: #63CAC6;
}
form#fContato input#cNome{
  left: 0px;
  top: 30px;
 position: absolute;
width: 355px;
height: 51px;
background: #C4C4C4;
mix-blend-mode: multiply;
border-radius: 67px;
}
form#fContato label#email{
  top: 86px;
  position: absolute;
width: 161px;
height: 44px;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 37px;
color: #63CAC6;
}
form#fContato input#cMail{
  left: 0px;
  top: 120px;
  position: absolute;
width: 355px;
height: 54px;
background: #C4C4C4;
mix-blend-mode: multiply;
border-radius: 67px;
}
form#fContato label#tel{
  top: 175px;
  left: 0px;
position: absolute;
width: 218.25px;
height: 60.81px;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 37px;
color: #63CAC6;

}form#fContato input#cD{
  top: 205px;
  left: 0px;
position: absolute;
width: 355px;
height: 54px;
background: #C4C4C4;
mix-blend-mode: multiply;
border-radius: 67px;
}
form#fContato label#as{
  top: 255px;
  left: 0px;
position: absolute;
width: 218.25px;
height: 60.81px;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 37px;
color: #63CAC6;
}
form#fContato input#cAs{
top: 285px;
  left: 0px;
position: absolute;
width: 355px;
height: 54px;

background: #C4C4C4;
mix-blend-mode: multiply;
border-radius: 67px
}
form#fContato label#msg{
  top: 335px;
  left: 0px;
position: absolute;
width: 218.25px;
height: 60.81px;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 37px;
color: #63CAC6;

}
form#fContato textarea#cMsg{
position: absolute;
width: 355px;
height: 191px;
left: 0px;
top: 375px;
background: #C4C4C4;
mix-blend-mode: multiply;
border-radius: 37px;
}
form#fContato input#img{
  background: url(../assets/fotos/next.png) ;
position: absolute;
width: 72px;
height: 64px;
left: 250px;
top: 590px
  

}*/
</style>
