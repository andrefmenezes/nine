<template>
<div>
<div>
<swiper class="swiper" :options="swiperOption">    
    <swiper-slide ><div ><img src="../assets/fotos/s2.jpg"></div> </swiper-slide>
    <swiper-slide><div><img src="../assets/fotos/banner.jpg" > </div></swiper-slide>   
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</div>

<div id="servico">
<serv/>
  </div>
  
  <div id="nine">
 <nine/>
  </div>
  
  <fofo/>
</div>
</template>
 


<script>
import serv from './Serv';
import nine from './Nine';
import fofo from './Footer';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
export default {
  name: "Home",
  components:{
    serv,
     Swiper,
      SwiperSlide,
      nine,
      fofo
    
  },
  data() {
       return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
      }
    }
</script>
<style >
    .swiper{
         position: relative;
        margin-top: 18%;
        height: 40%;
        width: 100%;
        min-height: 300px;
        
        
    }
    @media screen and (min-width: 320px){
      
      .swiper{
         margin-top: 25%;
          min-height:150px ;
      }
     
    }
     @media screen and (min-width: 736px){
      
      .swiper{
        margin-top: 16%;
          min-height:300px ;
      }
     
    }
   
</style>