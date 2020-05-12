<template>

 <main class="servicos">
      <article class="servico bg-white radius">
        
        <div class="inner">
        <h1 >Serviços: </h1>
        <h4>Criação de sites</h4>
        <p>A Nine Sites é especializada na criação de sites profissionais. Nós projetamos, desenvolvemos e gerenciamos sites de alto impacto que geram leads, vendem produtos e contam histórias.
            Nosso trabalho envolve a criação de sites profissionais, exclusivos e gerenciáveis. Porém, não queremos ser apenas mais uma empresa de criação de sites. Nossa proposta, é que você tenha além de um site bonito, um site que gere vendas.
            </p>
        </div>
        <a href="#"><img src="../assets/fotos/pc.png" alt="criaçao de site"> </a>
        <router-link to="/contato"><button class="bt">Peça seu orçamento</button></router-link>
          </article>
   </main>

  
  

</template>

<script>
export default {
  name: 'serv',
  props: {
    
  }
}
</script>

<style >


a{
    text-decoration: none;
}
img{
    max-width: 100%;
}
.bg-white{
    background-color: white;
}
.radius{
    border-radius: 7px;
}
.servicos{
    position: relative;
    width: 100%;
    float: left;
    padding: 3% 4%;
    text-align: center;
}
.servico{
    width: 100%;       
  
}
.servico img{    
    border-radius: 7px 7px 0 0;
    margin-bottom: 2%;
}
.inner{
    padding: 2%;
}
.inner h1 {
    float: left;
    margin-bottom: 2%;
    font-size: 1.5em;
    font-weight: 700;
    color: #130400;
}
.inner h4{
    float: left;
    font-size: 1.2em;
    margin-top: 4%;
    color: #63CAC6;
    
}

.inner p{
    float: left;
      margin-top: 1%;
    color: #130400;
    line-height: 2em;
    text-align: center;
    font-size: 1.3em;
    
}
.bt{
   width: 25%;  
background-color: #393B3C;
border-radius: 19px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 25px;

color: #FFFFFF;

}
</style>
