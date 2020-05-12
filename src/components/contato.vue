<template>
  <div class="contato">
      
  <div id="cel">
<img id="ftc" src="../assets/fotos/cont.png" >
  </div>
<div id="form">
  <form method="post" id="fContato" action="mailto:decomenezes00@gmail.com" >
<fieldset id="usuario">
<p><label id="nome" for="cNome">Nome:</label> <input type="text" name="tNome" id="cNome" size="40" maxlength="30" placeholder="Nome completo"></p>    
<p><label id ="email" for="cMail">E-mail:</label> <input type="email" name="tmail" id="cMail" size="40" maxlength="40" placeholder="Email"></p>
<p><label id="tel" for="cAs">Telefone:</label> <input type="text" name="tD" id="cD" size="12" maxlength="15" placeholder="Telefone"></p>
<p><label id="as" for="cAs">Assunto:</label> <input type="text" name="tAs" id="cAs" size="40" maxlength="30" placeholder="Assunto"></p>
<p><label id="msg" for ="Msg">Mensagem: </label>
    <textarea name="tMsg" id="cMsg" cols="35" rows="5" placeholder="   Deixe aqui sua mensagem"></textarea></p>
    <input id="img" type="image" name="tEnviar" src="../assets/fotos/botao-enviar.png">
</fieldset>
</form>

</div>
  </div>
</template>

<script>
export default {
  name: 'contato',
  props: {
    
  }
}
</script>


<style >


div#cel img#ftc{
  position: absolute;
width: 1250px;
height: 798px;
left: 10px;
top: 226px;
}
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
position: absolute;
width: 72px;
height: 64px;
left: 250px;
top: 590px
  

}
</style>
