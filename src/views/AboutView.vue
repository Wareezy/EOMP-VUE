<template>
  <div>
    <!-- <div class="row" v-if="about && about.length > 0"> -->
      <!-- <div v-for="info in about" :key="info.title"> -->
        <div><div class="textHome">
          <div ><h2 id="titleHome" data-aos="zoom-in-up" data-aos-delay="400" >ABOUT</h2> </div>
        <div data-aos="zoom-in-up" data-aos-delay="600" id="textAbout">
        <p  id="p1">Hello, Im Warren Jaftha, a 22-year-old enthuisiast with an unwavering love for programming.</p>
        <p  id="p2">Ever since I was a kid, i've been captivated by the world of technology and the power of code.</p>
        <p   id="p3">Its remarkable how lines of code can transform abstract ideas into tangible, functional software.</p>
        <p  id="p4">My journey into programming began with simple scripts and gradually evolved into complex applications.</p>
        <p  id="p5">I believe that programming is a creative outlet where I can turn my imagination into reality.</p>
        <p  id="p6">Whether its developing web applications, crafting mobile apps, or even diving into data analysis.</p>
        <p  id="p7">I relish the opportunity to solve problems and build innovative solution using the language of code.
        </p>
        </div>
      </div>
    </div>
        <img   data-aos="zoom-in-up" data-aos-delay="800" id="aboutImage" src="https://i.imgur.com/4M5DTfO.png" alt="Cover Image">
      </div>
    <!-- </div> -->
    <!-- <div v-else> -->
      <!-- <p class="spinner-border"></p> -->
    <!-- </div> -->
  <!-- </div> -->
  <div  data-aos="fade-up" id="orangeBar"></div>
</template>
<script>
export default{
  computed:{
    about(){
      return this.$store.state.about;
    },
  },
  mounted(){
    this.$store.dispatch('fetchAbout')
  },
};
</script>
<style scoped>
#orangeBar {
  height: 300px;
  margin-top:-480px;
  background-color: orange;
  box-shadow: 0 0 10px orange;
  z-index: 0 !important;
}
#aboutImage{
height:600px;
width:500px;
z-index: 2;
position:relative;
margin-right:-1100px;
margin-top:-270px;
/* transition: transform 0.3s ease-in-out; */
}
/* #aboutImage:hover {
  transform: scale(1.1);
} */
#titleHome{
  position:absolute;
margin-top:-150px;
margin-left:320px;
font-size:60px ;
z-index: 1;
}
/* paragraph css */
#textAbout{
  margin-top:440px;
  font-size: 20px;
  z-index: 1 !important;
  position: relative;
}
#p1{
  position:absolute;
margin-top:-65px;
margin-left:80px;
}
#p2{position:absolute;
margin-top:-40px;
margin-left:80px;
}
#p3{position:absolute;
margin-top:-13px;
margin-left:80px;
}
#p4{position:absolute;
margin-top:14px;
margin-left:80px;
}
#p5{position:absolute;
margin-top:40px;
margin-left:80px;
}
#p6{position:absolute;
margin-top:70px;
margin-left:80px;
}
#p7{position:absolute;
margin-top:99px;
margin-left:80px;
}
@media screen and (max-width: 400px) {
  #orangeBar {
  height: 220px;
  margin-top:-420px;
  background-color: orange;
  box-shadow: 0 0 10px orange;
}
  #aboutImage {
    height: auto;
    width: 100%;
    margin: 0px;
    margin-top: 1000px;
  }
  #titleHome {
    margin: 20px 0 0;
    text-align: center;
    font-size: 40px;
    margin-top: 160px;
    margin-left: 140px;
  }
  #textAbout {
    position: absolute;
    margin-top: 250px;
    text-align: center;
    padding: 0 40px;
  }
  #textAbout p {
    position: relative;
    margin: 5px 0;
    text-align: left;
  }
}
</style>