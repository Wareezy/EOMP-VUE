<template>
  <div>
    <div class="row" v-if="home && home.length > 0">
      <div v-for="person in home" :key="person.name">
        <div class="textHome ">
        <h2 id="homeName">{{ person.name }}</h2>
        <h3 id="homeTitle">{{ person.title }}</h3>
        <p id="homeDescription">{{ person.description }}</p>
       </div>
        <img id="homeImage" :src="person.coverImage" alt="Cover Image">
      </div>
    </div>
    <div v-else>
      <p class="spinner-border"></p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    home() {
      return this.$store.state.home;
    },
  },
  mounted() {
    this.$store.dispatch('fetchHome');
  },
};
</script>

<style>


#homeImage {
  margin-top: -290px;
  margin-right: -1160px;
}

.textHome {
  margin-top: 300px;
  margin-right: 900px;
}

#homeName {
  position: absolute;
  margin-top: -70px;
  margin-left: 80px;
}

#homeTitle {
  position: absolute;
  margin-top: -30px;
  margin-left: 80px;
}

#homeDescription {
  position: absolute;
  margin-top: 15px;
  margin-left: 80px;
}

/* Media Query for Small Screens (e.g., Mobile Devices) */
@media screen and (max-width: 768px) {
  #homeImage {
    margin-top: 30px;
    margin-right: 0;
  }

  .textHome {
    margin-top: 20px;
    margin-right: 0;
    text-align: center;
    margin-top:50px
  }

  #homeName,
  #homeTitle,
  #homeDescription {
    position: relative;
    margin: 0;
    text-align: center;
  }
}

</style>
