<template >
    <div>
        <div>
            <div
                v-if="education && resumeContact && skills && workExperience && downloadButtonText && downloadHeading  && resumeContact.length && education.length && skills.length && hobbies.length && workExperience.length && downloadButtonText.length  &&downloadHeading.length> 0">
                <!-- this chunk of code is only used to call and display the 1 object which is found in the resume array -->
                <div class="textProjects"
                    v-if="education[0].heading && education[0].name && education[0].title && education[0].image">
                    <div>
                        <!-- here we are actually displaying it when calling the array resume we refer to the first object which is 0 and then we use dot
            notation to reference values that is inside the object like title and description
            -->
                        <!-- <h1 id="resumeHeading">{{ education[0].heading }}</h1> -->
                        <div id="bar">
                            <h2 id="resumeName">{{ education[0].name }}</h2>
                            <h2 id="resumeTitle">{{ education[0].title }}</h2>
                        </div>

                        <img id="resumeImage" :src="education[0].image">


                    </div>
                </div>
                <div v-if="education[1].educationHeading">
                    <div>
                        <h1 id="educationHeading">{{ education[1].educationHeading }}</h1>
                    </div>

                </div>
                <div id="time"></div>
                <div id="dot1"></div>
                <div id="dot2"></div>
                <div id="dot3"></div>
                <div id="dot4"></div>
                <div id="dot5"></div>
                <div v-for="info in education.slice(2)" :key="info.id">

                    <div id="uni">
                        <h5 id="description">{{ info.description }}</h5>
                        <h5 id="place">{{ info.place }}</h5>
                        <h5 id="year">{{ info.year }}</h5>
                        <h5 id="type">{{ info.type }}</h5>
                    </div>


                </div>

                <!-- <div v-for="info in resumeContact" :key="info.heading">
                    <div id="resumeContact">
                        <h5>{{ info.heading }}</h5>
                        <h5>{{ info.phone }}</h5>
                        <h5>{{ info.email }}</h5>
                        <h5>{{ info.address }}</h5>
                    </div>
                </div> -->
                <div v-for="info in downloadHeading" :key="info.downHead">
                        <div id="downHeading">
                        <h2>{{ info.downHead }}</h2>
                        </div>
                        </div>

                    <div class="textProjects"
                    v-if="downloadButtonText[0].downText && downloadButtonText[1].down">
                    <div>
                        <!-- here we are actually displaying it when calling the array resume we refer to the first object which is 0 and then we use dot
            notation to reference values that is inside the object like title and description
            -->
                        <a  :href="downloadButtonText[1].down" target="_blank">
                        <button id="btnDown" class="btn btn-warning">{{ downloadButtonText[0].downText }}</button>
                        </a>
                        


                    </div>
                    </div>

                <div v-if="skills[0].heading">
                    <div id="resumeSkills">
                        <h1 id="">{{ skills[0].heading }}</h1>
                    </div>

                </div>
                <!-- <div id="resumeEnvelope" class="fa fa-envelope"></div>
                <div id="resumePhone" class="fa fa-phone"></div>
                <div id="resumeLocation" class="fas fa-map-marker-alt"></div> -->
                <div class="grids">
                    <div class="row">
                        <div class="col-md-4" v-for="info in skills.slice(1)" :key="info.title">
                            <div class="card mb-4" style="width:18rem;">
                                <img id="testimonialImage" :src="info.image" alt="Cover Image">
                                <div class="card-body">
                                    <h2 class="card-title">{{ info.title }}</h2>
                                    <p class="card-text">{{ info.experience }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="workExperience[0].heading">
                    <div id="workHeading">
                        <h1 id="">{{ workExperience[0].heading }}</h1>
                    </div>

                </div>
                <div v-for="info in workExperience.slice(1)" :key="info.id">

                    <div id="work">
                        <h5 id="description">{{ info.description }}</h5>
                        <h5 id="year">{{ info.duration }}</h5>
                        <h5 id="position">{{ info.position }}</h5>
                        <h5 id="type">{{ info.reference }}</h5>
                    </div>


                </div>
                <div id="timeWork"></div>
                <div id="dot1Work"></div>
                <div id="dot2Work"></div>
                <div id="dot3Work"></div>

                   
                
                
<div v-if="hobbies[0].heading">
                    <div id="hobbies">
                        <h1 id="">{{ hobbies[0].heading }}</h1>
                    </div>

                </div>
                <div class="grids">
                    <div class="row">
                        <div class="col-md-4" v-for="info in hobbies.slice(1)" :key="info.title">
                            <div class="card mb-4" style="width:18rem;">
                                <img id="testimonialImage" :src="info.image" alt="Cover Image">
                                <div class="card-body">
                                    <h2 class="card-title">{{ info.title }}</h2>
                                    <p class="card-text">{{ info.experience }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div v-else>
                <p class="spinner-border"></p>

                </div>


<!-- this is going to be my hobbies -->
              
 
                

    </div>  
  </div> 
</template>
<script>
export default {
    
    computed: {
        education() {
            return this.$store.state.education;
        },
        resumeContact() {
            return this.$store.state.resumeContact;
        },
        skills() {
            return this.$store.state.skills;
        },
        hobbies(){
            return this.$store.state.hobbies;
        }
        ,
        workExperience() {
            return this.$store.state.workExperience;
        },
        downloadHeading() {
            return this.$store.state.downloadHeading;
        },
        downloadButtonText() {
            return this.$store.state.downloadButtonText;
        }




    },
    mounted() {
        this.$store.dispatch('fetchEducation');
        this.$store.dispatch('fetchSkills');
        this.$store.dispatch('fetchHobbies');
        this.$store.dispatch('fetchResumeContact');
        this.$store.dispatch('fetchWorkExperience');
        this.$store.dispatch('fetchDownloadHeading');
        this.$store.dispatch('fetchDownloadButtonText');
        
    }
}
</script>
<style scoped>
/* #resumeHeading {
    margin-left: 50px;
    margin-top: 30px;
    font-size: 60px
} */

#resumeTitle {
    position: absolute;
    margin-left: 854px;
    margin-top: 60px;
    font-size: 20px;
}

#resumeName {
    position: absolute;
    margin-left: 850px;
    margin-top: 19px;
    font-size: 30px;
}

#resumeImage {
    margin-top: -200px;
    margin-left: -400px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: 0 0 10px orange; /* Adjust the spread radius and color as needed */
}


#bar {
    background-color: orange;
    height: 100px;
    width: 100%;
    margin-top: 300px;
    box-shadow: 0 0 10px orange;
}

#educationHeading {
    font-size: 40px;
    margin-top: -60px;
    margin-left: 650px
}

#uni {
    margin-top: 50px;
    margin-left: 900px;
    text-align: left;
    padding-bottom: 10px;
}

#description {
    font-size: 15px;
}
#position {
    font-size: 15px;
}
#place {
    font-size: 15px;

}

#year {
    font-size: 15px;

}

#type {
    font-size: 15px;
}

/* timeline */
#time {
    position: absolute;
    width: 3px;
    margin-top: 23px;
    margin-left: 870px;
    background-color: #fff;
    height: 780px;
    margin-right: 10px;

}



#dot1 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: 102px;
    margin-top: 42px;
}

#dot2 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: 102px;
    margin-top: 207px;
}

#dot3 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: 102px;
    margin-top: 375px;
}

#dot4 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: 102px;
    margin-top: 540px;
}


#dot5 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: 102px;
    margin-top: 710px;
}
/* #resumeContact {
    position: absolute;
    margin-left: 400px;
    text-align: left;
    margin-top: -390px;
} */

/* #resumeLocation {
    position: absolute;
    margin-left: -380px;
    margin-top: -290px;
}

#resumeEnvelope {
    position: absolute;
    margin-left: -383px;
    margin-top: -321px;
}

#resumePhone {
    position: absolute;
    margin-left: -384px;
    margin-top: -355px;
} */

#grids {
    position: absolute;
}

#resumeSkills {
    position: absolute;
    margin-left: 700px;
    margin-top: 90px;
}

#workHeading {
    position: absolute;
    margin-left: 600px;
    margin-top: 30px;
}

#work {
    margin-top: 140px;
    margin-bottom: 80px;
    margin-left: 200px;
    text-align: left;
    padding-bottom: 0px;
}

#timeWork {
    width: 3px;
    margin-top: -660px;
    margin-left: 150px;
    background-color: #fff;
    height: 630px;
    margin-right: 10px;

}

#hobbies {
    position: absolute;
    margin-left: 700px;
    margin-top: 90px;
}

#dot1Work {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -617px;
    margin-top: -600px;
}

#dot2Work {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -617px;
    margin-top: -360px;
}

#dot3Work {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -617px;
    margin-top: -120px;
}

#downButton{
    width:100px;
    margin-left:100px;
    height:50px;
    z-index: 2;
    }

  


    #resumeHeading{
        margin-top:170px;
        margin-left:-100px;
        font-size: 60px;
    }
#downHeading
{
position:absolute;
margin-top:-600px;
margin-left:150px;
z-index: 1;
}
#btnDown {
  animation: pulsate 1.5s ease-in-out infinite; /* Adjust the duration as needed */
  margin-top:-1000px;
  margin-left:-900px;
}

@keyframes pulsate {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@media only screen and (max-width: 400px) {
    /* #resumeHeading{
        margin-top:170px;
        margin-left:5px;
        font-size: 60px;
    } */

    #hobbies {
        position: absolute;
    margin-left: 150px !important;
}

    #downHeading
{
position:absolute;
margin-top:80px;
margin-left:80px;
z-index: 1;
}
#btnDown {
    position:absolute;
  animation: pulsate 1.5s ease-in-out infinite; /* Adjust the duration as needed */
  margin-top:130px;
  margin-left:-33px;
}

#resumeImage {
    position:absolute;
    margin-top: -140px;
    margin-left: -180px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 5px solid white;
}

#resumeTitle {
    position: absolute;
    margin-left: 225px;
    margin-top: 60px;
    font-size: 13px;
}

#resumeName {
    position: absolute;
    margin-left: 220px;
    margin-top: 25px;
    font-size: 23px;
}

#resumeContact {
    position: absolute;
    margin-left: 90px;
    text-align: left;
    margin-top: 30px;
}
#educationHeading {
    font-size: 29px;
    margin-top: 70px;
    margin-left: 10px
}

#description{
    margin-left:2px;
    margin-bottom:10px;
}
#time {
    position: absolute;
    width: 3px;
    margin-top: 23px;
    margin-left: 47px;
    background-color: #fff;
    height: 850px;
    margin-right: 10px;

}

#dot1 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -156px;
    margin-top: 49px;
}

#dot2 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -156px;
    margin-top: 220px;
}

#dot3 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -156px;
    margin-top: 395px;
}

#dot4 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -156px;
    margin-top: 578px;
}

#dot5 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -156px;
    margin-top: 760px;
}

#uni {
    margin-top: 50px;
    margin-left: 78px;
    text-align: left;
    padding-bottom: 10px;
}



#resumeSkills {
    position: absolute;
    font-size: 15px !important;
    margin-top: 305px !important;
    margin-left: 170px !important
}
.card{
    margin-left:-40px;
    margin-top:100px;
}

#workHeading {
    position: absolute;
    margin-left: 90px;
    margin-top: 30px !important;
}
#timeWork {
    width: 3px;
    margin-top: -680px;
    margin-left: 30px;
    background-color: #fff;
    height: 700px;
    margin-right: 10px;

}

#work {
    margin-top: 160px !important;
    margin-bottom: 50px;
    margin-left: 70px;
    text-align: left;
    padding-bottom: 0px;
}

#dot1Work {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -174px;
    margin-top: -680px;
}

#dot2Work {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -174px;
    margin-top: -430px;
}
#dot3Work {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -174px;
    margin-top: -180px;  
}



/* #resumeLocation {
    position: absolute;
    margin-left: -150px;
    margin-top: 131px;
}

#resumeEnvelope {
    position: absolute;
    margin-left: -150px;
    margin-top: 100px;
}

#resumePhone {
    position: absolute;
    margin-left: -150px;
    margin-top: 66px;
} */
}
</style>