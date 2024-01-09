
      <template >
        <img id="location" src="https://drive.google.com/uc?id=1fzVI2w-rWYu7swGpmdoAJaLEkrqVErGC">
        <img id="phone" src="https://drive.google.com/uc?id=1dHSS7V8w6iEMTo0RXn9d-7_pzyQFKGgk">
        <img id="email" src="https://drive.google.com/uc?id=1GlWmEnpgGeOW8zdsEybxTou8yFNVxxD_">

    <div>
        <section  id="cont">
        <div class="content">
          <h2 id="headingContact">Contact Us</h2>
          <p id="contactPara">We're delighted that you're here. Whether you have questions,
            suggestions, or just want to say hello, we're ready to listen. Your
            thoughts matter to us, and we're eager to assist. Thanks for
            reaching out - we can't wait to connect with you!</p>
        </div>
        <div class="containerContact">
          <div class="contactInfo">
            <div class="box">
              <div class="icon">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <div class="text">
                <h3>Address</h3>
                <p>5 Grysbok Avenue,</p>
                <p>Lotus River,</p>
                <p>7941</p>
              </div>
            </div>

            <div class="box">
              <div class="icon">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div class="text">
                <h3>Phone</h3>
                <p>061-862-0283</p>
              </div>
            </div>
            <div class="box">
              <div class="icon">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
              <div class="text">
                <h3>Email</h3>
                <p>warrenjaftha16@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="contactForm">
            <form  id="formOfContact" action="https://formspree.io/f/mayrnwqo" method="POST">
              <h2>Send Message</h2>
              <div class="inputBox">
                <!-- validation is included by each field with a error message that gets displayed -->
                <input type="name" name="name" required="required" data-sendingFirstName/>
                <span>First Name</span>
              </div>
              <div class="inputBox">
                <!-- validation is included by each field with a error message that gets displayed -->
                <input type="name" name="name" required="required" data-sendingLastName />
                <span>Surname</span>
              </div>
              <div class="inputBox">
                <!-- validation is included by each field with a error message that gets displayed -->
                <input type="number" name="number" required="required"  data-sendingNumber/>
                <span>Number</span>
              </div>
              <div class="inputBox">
                <!-- validation is included by each field with a error message that gets displayed -->
                <input type="email" name="email" required="required" data-sendingEmail/>
                <span>Email</span>
              </div>

              <div class="inputBox">
                <!-- validation is included by each field with a error message that gets displayed -->
                <textarea required="required" name="message" data-sendingMessage></textarea>
                <span>Type your message...</span>
              </div>

              <div class="inputBox">
                <input type="submit" sendingButton name="" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
</template>
<script>
export default {
    
  mounted() {
    // Call the initializeForm method when the component is mounted
    this.initializeForm();
  },
  methods: {
    initializeForm() {
      // declaring the button that will be used to send the data to form spree
      let sendingButton = document.querySelector("[sendingButton]");

      // calling the sending button and adding an event listener to the button that, when clicked, has a setTimeout attached to it
      sendingButton.addEventListener("click", () => {
        // the set timeout is set to 1 second and within the setTimeout, we are calling the clearTheForm method
        setTimeout(this.clearTheForm, 1000);
      });
    },
    clearTheForm() {
      // setting all the values to blank, this will reset the values
      document.querySelector("[data-sendingMessage]").value = "";
      document.querySelector("[data-sendingFirstName]").value = "";
      document.querySelector("[data-sendingEmail]").value = "";
      document.querySelector("[data-sendingLastName]").value = "";
      document.querySelector("[data-sendingNumber]").value = "";
    },
  },
};
</script>
<style >
#contactPara{
  position: relative;
  padding: 50px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
}
#headingContact{
  margin-top:100px
}
.containerContact {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
}

.containerContact .containerInfo {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.containerContact .contactInfo .box {
  position: relative;
  padding: 20px 0;
  display: flex;
}

.containerContact .contactInfo .box .text {
  display: flex;
  margin-left: 20px;
  font-size: 16px;
  color: #fff;
  flex-direction: column;
  font-weight: 300;
}

.containerContact .contactInfo .box .text h3 {
  font-weight: 500;
  color: orange;
}

.contactForm {
  width: 40%;
  padding: 40px;
  margin-left: 60px;
  background: #fff;
}

.contactForm h2 {
  font-size: 30px;
  color: #333;
  font-weight: 500;
}

.contactForm .inputBox {
  position: relative;
  width: 100%;
  margin-top: 10px;
}

.contactForm .inputBox input,
.contactForm .inputBox textarea {
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  resize: none;
}
.contactForm .inputBox span {
  position: absolute;
  left: 0;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  pointer-events: none;
  transition: 0.5s;
  color: #666;
}

.contactForm .inputBox input:focus ~ span,
.contactForm .inputBox input:valid ~ span,
.contactForm .inputBox textarea:focus ~ span,
.contactForm .inputBox textarea:valid ~ span {
  color: #e91e63;
  font-size: 12px;
  transform: translateY(-20px);
}

.contactForm .inputBox input[type="submit"] {
  width: 100px;
  background: orange;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
}
#location{
    position:absolute;
    margin-left:-470px;
    margin-top:430px;
    width:50px;
    height:40px;
}
#phone{
    position:absolute;
    margin-left:-470px;
    margin-top:630px;
    width:50px;
    height:40px;
}
#email{
    position:absolute;
    margin-left:-470px;
    margin-top:752px;
    width:50px;
    height:40px;
}

@media screen and (max-width: 768px) {
 
}
</style>
