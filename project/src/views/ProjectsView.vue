<template>
    <div>
        <div v-if="projects && projects.length > 0">
        <!-- this chunk of code is only used to call and display the 1 object which is found in the testimonials array -->
        <div class="textProjects" v-if="projects[0].titleProjects">
          <div>
            <!-- here we are actually displaying it when calling the array testimonials we refer to the first object which is 0 and then we use dot
            notation to reference values that is inside the object like title and description
            -->
            <h1 id="titleProjects">{{ projects[0].titleProjects }}</h1>
          </div>
        </div>
  <!-- now when we start with the second v-for i call the "info in testimonials" but what i also used was a .slice(1) which tells the software

to only start looping from that point onwards
-->
<div class="grids">
    <div class="row">
        <div class="col-md-4" v-for="info in projects.slice(1)" :key="info.name">
          <div class="card mb-4" style="width:18rem;">
            <img id="testimonialImage" :src="info.image" alt="Cover Image">
            <div class="card-body">
            <h5 class="card-title">{{ info.name }}</h5>
            <a :href="info.gitHub" id="btnGIT" class="btn btn-warning">Github</a>
            <a :href= "info.netlify" id="btnNET" class="btn btn-warning">Netlify</a>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
      <div v-else>
        <p>No information available.</p>
      </div>
    </div>
</template>
<script>
export default {
    computed:{
        projects(){
            return this.$store.state.projects;
        },
    },
    mounted(){
        this.$store.dispatch('fetchProjects');
    }
    
}
</script>
<style >
    .card img {
    height: 200px; /* Set your desired height */
    object-fit: cover; /* This property ensures the image covers the entire space while maintaining aspect ratio */
  }

  #titleProjects{
    position:absolute;
    margin-top:-130px;
    margin-left:605px;
  }

.grids{
  margin-top:190px;
}
#btnGIT {
    margin-right: 10px; /* Adjust the margin-right value as needed for the desired spacing */
  }

</style>