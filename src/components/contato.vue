<template>
   <div>
  <div class="containe">
    <article class="cont">
      <p>Contato:</p>
      </article>  
  <form action="mailto:afmdtb@ecomp.poli.br" class="form" method="post" tabindex="1">  
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
  text-align: center;
  margin-bottom: 4%;
width: 100%;
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
  background: #54825d;
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
  
 margin-top: 18%;

}

    
     
    }


</style>
