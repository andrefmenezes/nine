 <template>
 <div class="inf">

<footer class=" container bg-gradiente">
      <div class="social-icons">
       <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
       <a href="#"><i class="fa fa-google"></i></a>
       <a href="#"><i class="fa fa-instagram"></i></a>
       <a href="#"><i class="fa fa-envelope"></i></a>
      </div>
      <p class="copy">
      Nine sites &copy;-Mais que um site.
      </p>

   </footer>
 </div>
 </template>

 <script>
 export default {
   name: 'footer',
   props: {
    
   }
 }
</script>


 <style >
.inf{
    position: relative;
}

a{
     text-decoration: none;
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
   .social-icons a{
         font-size:1.5em ;
         color: rgba(255, 255, 255, 0.7);
         margin-right: 3%;
     }
     .social-icons a:hover{
        color: rgb(255, 255, 255);
     }
    .social-icons a:last-child{
         margin-right: 0;
     }
     .copy{
         margin-top: 2%;
        color: rgba(255, 255, 255, 0.7);
     }
     /*mobile*/

   
     @media screen and (min-width: 768px){
      
  

     }
     @media screen and (min-width: 960px){
        
       }
       @media screen and (min-width: 1280px){
    
       }
 </style>