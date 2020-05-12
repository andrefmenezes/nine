<template>
 
  <div class="newsletter container bg-black">
  <h2>A Nine Sites:</h2>
  <p>Sediada em Recife, a Nine Sites  é pioneira no mercado de criação de sites e lojas virtuais, gerenciamento de redes sociais, transformando vidas de pequenas e médias empresas em todo Brasil. Tenha seu site responsivo para celular e otimizado para o Google, totalmente gerenciável e profissional. </p>
  
   </div>


 
  
</template>

<script>
export default {
  name: 'nine',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >



.container{
    position: relative;
    width: 100%;
    float: left;
    padding: 3% 4%;
    text-align: center;
}
.bg-black{
    background-color: #130400;
}
.newsletter h2{
    float: left;
    font-size:  1.5em;
    color: white;
    font-weight: 700;
}
.newsletter p{
    float: right;
    color: white;
    padding: 2%;
    font-size: 2em;
}
 @media screen and (min-width: 768px){
      
      .newsletter h2{
          font-size: 2em;
      }
     
    }

</style>
