<template >
    <div>
        <div>
            <div
                v-if="education && resumeContact && skills && workExperience && downloadButtonText && downloadHeading  && resumeContact.length && education.length && skills.length && workExperience.length && downloadButtonText.length  &&downloadHeading.length> 0">
                <!-- this chunk of code is only used to call and display the 1 object which is found in the resume array -->
                <div class="textProjects"
                    v-if="education[0].heading && education[0].name && education[0].title && education[0].image">
                    <div>
                        <!-- here we are actually displaying it when calling the array resume we refer to the first object which is 0 and then we use dot
            notation to reference values that is inside the object like title and description
            -->
                        <h1 id="resumeHeading">{{ education[0].heading }}</h1>
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
                <div v-for="info in education.slice(2)" :key="info.id">

                    <div id="uni">
                        <h5 id="description">{{ info.description }}</h5>
                        <h5 id="place">{{ info.place }}</h5>
                        <h5 id="year">{{ info.year }}</h5>
                        <h5 id="type">{{ info.type }}</h5>
                    </div>


                </div>

                <div v-for="info in resumeContact" :key="info.heading">
                    <div id="resumeContact">
                        <h5>{{ info.heading }}</h5>
                        <h5>{{ info.phone }}</h5>
                        <h5>{{ info.email }}</h5>
                        <h5>{{ info.address }}</h5>
                    </div>
                </div>

                <div v-if="skills[0].heading">
                    <div id="resumeSkills">
                        <h1 id="">{{ skills[0].heading }}</h1>
                    </div>

                </div>
                <div id="resumeEnvelope" class="fa fa-envelope"></div>
                <div id="resumePhone" class="fa fa-phone"></div>
                <div id="resumeLocation" class="fas fa-map-marker-alt"></div>
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
                        <h5 id="type">{{ info.reference }}</h5>
                    </div>


                </div>
                <div id="timeWork"></div>
                <div id="dot1Work"></div>
                <div id="dot2Work"></div>


                     <div v-for="info in downloadHeading" :key="info.downHead">
                        <div id="resumeHeading">
                        <h2>{{ info.downHead }}</h2>
                        </div>
                        </div>

                    <div class="textProjects"
                    v-if="downloadButtonText[0].downText && downloadButtonText[1].down">
                    <div>
                        <!-- here we are actually displaying it when calling the array resume we refer to the first object which is 0 and then we use dot
            notation to reference values that is inside the object like title and description
            -->
                        <a  :href="downloadButtonText[1].down">
                        <button id="btnDown" class="btn btn-warning">{{ downloadButtonText[0].downText }}</button>
                        </a>
                        


                    </div>
                    </div>
                
                

            </div>

                <div v-else>
                <p class="spinner-border"></p>

                </div>
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
        this.$store.dispatch('fetchResumeContact');
        this.$store.dispatch('fetchWorkExperience');
        this.$store.dispatch('fetchDownloadHeading');
        this.$store.dispatch('fetchDownloadButtonText');
        
    }
}
</script>
<style>
#resumeHeading {
    margin-left: 50px;
    margin-top: 30px;
    font-size: 60px
}

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
    margin-top: -190px;
    margin-left: -400px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: 5px solid white;
}


#bar {
    background-color: orange;
    height: 100px;
    width: 100%;
    margin-top: 100px
}

#educationHeading {
    font-size: 20px;
    margin-top: -100px;
    margin-left: 270px
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
    height: 410px;
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

#resumeContact {
    position: absolute;
    margin-left: 400px;
    text-align: left;
    margin-top: -390px;
}

#resumeLocation {
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
}

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
    margin-top: -410px;
    margin-left: 150px;
    background-color: #fff;
    height: 410px;
    margin-right: 10px;

}



#dot1Work {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -617px;
    margin-top: -359px;
}

#dot2Work {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -617px;
    margin-top: -150px;
}

#downButton{
    width:100px;
    height:50px;
    z-index: 2;
    }

    #downHeading{
        position:absolute;
        margin-top:-60px;
        margin-left:720px;
        z-index: 1;
    }


    #resumeHeading{
        margin-top:170px;
        margin-left:5px;
        font-size: 60px;
    }

#btnDown {
  animation: pulsate 1.5s ease-in-out infinite; /* Adjust the duration as needed */
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
@media only screen and (max-width: 768px) {

        #resumeImage {
    position:absolute;
    margin-top: -140px;
    margin-left: -200px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 5px solid white;
}

#resumeTitle {
    position: absolute;
    margin-left: 270px;
    margin-top: 50px;
    font-size: 20px;
}

#resumeName {
    position: absolute;
    margin-left: 260px;
    margin-top: 16px;
    font-size: 30px;
}

#resumeContact {
    position: absolute;
    margin-left: 50px;
    text-align: left;
    margin-top: 30px;
}
#educationHeading {
    font-size: 20px;
    margin-top: 70px;
    margin-left: -240px
}

#time {
    position: absolute;
    width: 3px;
    margin-top: 23px;
    margin-left: 47px;
    background-color: #fff;
    height: 440px;
    margin-right: 10px;

}

#dot1 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -203px;
    margin-top: 49px;
}

#dot2 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -203px;
    margin-top: 213px;
}

#dot3 {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -203px;
    margin-top: 400px;
}

#uni {
    margin-top: 50px;
    margin-left: 78px;
    text-align: left;
    padding-bottom: 10px;
}


#resumeSkills {
    position: absolute;
    margin-left: 190px;
    margin-top: 210px;
}

#workHeading {
    position: absolute;
    margin-left: 130px;
    margin-top: 30px;
}
#timeWork {
    width: 3px;
    margin-top: -410px;
    margin-left: 30px;
    background-color: #fff;
    height: 370px;
    margin-right: 10px;

}

#work {
    margin-top: 140px;
    margin-bottom: 80px;
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
    margin-left: -220px;
    margin-top: -350px;
}

#dot2Work {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    margin-left: -220px;
    margin-top: -123px;
}

#resumeLocation {
    position: absolute;
    margin-left: -220px;
    margin-top: 131px;
}

#resumeEnvelope {
    position: absolute;
    margin-left: -220px;
    margin-top: 100px;
}

#resumePhone {
    position: absolute;
    margin-left: -220px;
    margin-top: 66px;
}
}
</style>