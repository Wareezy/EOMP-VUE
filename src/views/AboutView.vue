<template>
  <div>
    <div class="row" v-if="about && about.length > 0">
      <div v-for="info in about" :key="info.title">
        <div class="textHome">
          <div ><h2 id="titleHome">{{ info.title }}</h2> </div>
        <div id="textAbout">
        <p id="p1">{{ info.description1 }}</p>
        <p id="p2">{{ info.description2 }}</p>
        <p id="p3">{{ info.description3 }}</p>
        <p id="p4">{{ info.description4 }}</p>
        <p id="p5">{{ info.description5 }}</p>
        <p id="p6">{{ info.description6 }}</p>
        <p id="p7">{{ info.description7 }}</p>
      </div>
      </div>
        <img id="aboutImage" :src="info.homeImage" alt="Cover Image">
      </div>
    </div>
    <div v-else>
      <p class="spinner-border"></p>
    </div>
  </div>
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

<style>
#aboutImage{
height:600px;
width:500px;

margin-right:-1100px;
margin-top:-270px;
transition: transform 0.3s ease-in-out;
}
#aboutImage:hover {
  transform: scale(1.1); 
}

#titleHome{
  position:absolute;
margin-top:-150px;
margin-left:320px;
font-size:60px ;
}

/* paragraph css */
#textAbout{
  margin-top:300px;
}
#p1{position:absolute;
margin-top:-50px;
margin-left:80px
}
#p2{position:absolute;
margin-top:-24px;
margin-left:80px
}
#p3{position:absolute;
margin-top:4px;
margin-left:80px
}
#p4{position:absolute;
margin-top:32px;
margin-left:80px
}
#p5{position:absolute;
margin-top:63px;
margin-left:80px

}
#p6{position:absolute;
margin-top:93px;
margin-left:80px
}
#p7{position:absolute;
margin-top:120px;
margin-left:80px

}

@media screen and (max-width: 768px) {
  #aboutImage {
    height: auto;
    width: 100%;
    margin: 0;
    margin-top: 500px;
  }

  #titleHome {
    margin: 20px 0 0;
    text-align: center;
    font-size: 40px;
    margin-top: -10px;
    margin-left: 170px;
  }

  #textAbout {
    position: absolute;
    margin-top: 80px;
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
