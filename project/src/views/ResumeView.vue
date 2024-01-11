<template >
    <div>
        <div>
            <div v-if="education && resumeContact && resumeContact.length && education.length > 0 ">
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
                    <h5>{{ info.heading }}</h5>
                    <h5>{{ info.phone }}</h5>
                    <h5>{{ info.email }}</h5>
                    <h5>{{ info.address }}</h5>
                </div>
            </div>
            <!-- <div v-if="resumeContact && resumeContact.length > 0"> -->
                
            <!-- </div> -->
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
        

    },
    mounted() {
        this.$store.dispatch('fetchEducation');
        this.$store.dispatch('fetchSkills');
        this.$store.dispatch('fetchResumeContact');
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
    margin-top:23px;
    margin-left: 870px;
    background-color: #fff;
    /* Set to white */
    height: 410px;
    /* Adjust the height as needed */
    margin-right: 10px;
    /* Adjust the margin as needed */
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
}</style>