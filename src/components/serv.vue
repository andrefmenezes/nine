<template>
  <div class="serv">
  <div id="rt">
 <p>
Serviços:
 </p>
  </div>
  <div id="txt">
<p>
     A Nine Sites é especializada na criação de sites profissionais. Nós projetamos, desenvolvemos e gerenciamos sites de alto impacto que geram leads, vendem produtos e contam histórias.

</p>
<p>
    Nosso trabalho envolve a criação de sites profissionais, exclusivos e gerenciáveis. Porém, não queremos ser apenas mais uma empresa de criação de sites. Nossa proposta, é que você tenha além de um site bonito, um site que gere vendas.

</p>
<button id="bt" v-on:click="s">Peça seu orçamento</button>
<router-link to="/contato"><button id="bt">Peça seu orçamento</button></router-link>
  </div>
  
<div id="ftpc">
<img id="pc" src="../assets/fotos/pc.png" >
</div>

 
  </div>
</template>

<script>
export default {
  name: 'serv',
  props: {
    
  }
}
</script>

<style >
div#ftpc{
position: absolute;
width: 417px;
height: 313px;
left: 39px;
top: 720px;

}
div#ftpc img#pc{
    border-radius: 44px;
}
div#rt{
position: absolute;
width: 556px;
height: 77px;
left: 57px;
top: 255px;

background: #63CAC6;
}
div#rt p{
position: absolute;
width: 183px;
height: 53px;


font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 45px;
line-height:0px;
/* identical to box height */


color: #FFFFFF;

}
div#txt{
    position: absolute;
width: 1112px;
height: 330px;
left: 44px;
top: 347px;
}
div#txt p{
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 41px;

color: #000000;
}
button#bt{
    position: absolute;
width: 320px;
height: 55px;
left: 960px;
top: 520px;
background-color: #393B3C;
border-radius: 19px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 41px;
/* identical to box height */


color: #FFFFFF;

}
</style>
