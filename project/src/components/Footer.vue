<template >
   <footer id ="footer" class="bg-dark text-white py-3">
  <div class="container">
    <div class="row">
      <p class="lead">
        Warren's Portfolio &copy;
        <span>{{currYear}}</span>
      </p>
    </div>
  </div>
</footer>


</template>
<script>
export default {
    name:'Footer',
    data(){
        return{
            currYear:new Date().getFullYear()
        }
    }
}
</script>
<style >
    #footer{
        margin-top: 460px;
    }
</style>