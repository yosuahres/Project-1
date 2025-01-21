<template>
  <div class="main-container">
    <div class="container-fluid">
      <!-- Header -->
      <div class="row first-row">
        <div class="col-5 mt-2">
          <button class="btn btn-success">Treatment HD</button>
        </div>
        <div class="col-2"></div>
        <div class="col-4 mt-2">
          <button class="btn btn-warning" @click="goToPatientCard">No Patient Card</button>
        </div>
        <div class="col-1 mt-1">
          <div class="circle">
            <img src="../assets/icons/home.png" alt="Home" class="home-icon" />
          </div>
        </div>
      </div>

      <!-- First Row -->
      <div class="row first-row">
        <div class="col-7">
          <div class="row">
            <div class="col-4">
              <p>ART</p>
              <button class="btn btn-success value-right btn-first small-btn">
                <h2 class="text-first">21</h2>
              </button>
              <div class="indicator-bar">
                <div class="unitx">mmHg</div>
                <div class="bar">
                  <div class="triangle"></div>
                </div>
                <div class="labelx">
                  <span class="labely left">-300</span>
                  <span class="labely right">300</span>
                </div>
              </div>              
            </div>
            <div class="col-4">
              <p>VEN</p>
              <button class="btn btn-success value-right btn-first small-btn">
                <h2 class="text-first">68</h2>
              </button>
              <div class="indicator-bar">
                <div class="unitx">mmHg</div>
                <div class="bar">
                  <div class="triangle"></div>
                </div>
                <div class="labelx">
                  <span class="labely left">-10</span>
                  <span class="labely right">300</span>
                </div>
              </div>              
            </div>
            <div class="col-4">
              <p>DIP</p>
              <button class="btn btn-success value-right btn-first small-btn">
                <h2 class="text-first">86</h2>
              </button>
              <div class="indicator-bar">
                <div class="unitx">mmHg</div>
                <div class="bar">
                  <div class="triangle"></div>
                </div>
                <div class="labelx">
                  <span class="labely left">-50</span>
                  <span class="labely right">600</span>
                </div>
              </div>              
            </div>
          </div>
        </div>
      
        <div class="col-3 panel-darkgreen mt-2">
          <div class="row mt-3">
            <div class="col-6 flex-center">
              <p class="text-left">UF Volume</p>
              <button class="btn btn-success btn-scd">
                <h2 class="text-scd">0<sup class="adjusted-sup">,01</sup></h2>
              </button>
              <div class="indicator-scd">
                <span class="unitg">L</span>
                <div class="barg">
                  <div class="fillg"></div>
                </div>
                <div class="infog">
                  <span class="valueg">3,00</span>
                </div>
              </div>
            </div>
            <div class="col-6 flex-center" style="margin-bottom: 40px;">
              <p class="text-left">UF Rate</p>
              <button class="btn btn-success btn-scd">
                <h2 class="text-scd">0<sup class="adjusted-sup">,38</sup></h2>
              </button>
              <div class="indicator-scd">
                <span class="unitg">L</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Second Row -->
      <div class="row">
        <div class="col-2 bg-red">
          <div class="row mt-2 transparent-bg left-container" style="position: relative; left: -20px;">
            <div class="col-12">
              <div class="bg-skyblue text-center" style="border-radius: 0 10px 0 0;">SYS</div>
              <div class="bg-blue text-center">
                <h1>---</h1>
                <p class="text-right">mmHg</p>
              </div>
            </div>
            <div class="col-12">
              <div class="bg-skyblue text-center">DIA</div>
              <div class="bg-blue text-center">
                <h1>---</h1>
                <p class="text-right">mmHg</p>
              </div>
            </div>
            <div class="col-12">
              <div class="bg-green text-center">Pulse</div>
              <div class="bg-blue text-center">
                <h1>---</h1>
                <p class="text-right">bpm</p>
              </div>
            </div>
            <div class="col-12">
              <div class="bg-blue text-center" style="border-radius: 0 0 10px 0; position: relative;">
                <div style="width: 85%; border-top: 1px solid #FFFFFF; height: 0; margin: 0 auto;"></div>
                <h3>@ --:--</h3>
              </div>
            </div>
          </div>
        </div>

        <!-- timer -->
        <div class="col-6 bg-red parent-container">
        <div class="circular-timer-wrapper">
          <div class="circular-timer">
            <div v-for="n in 7" :key="n" :style="getLineStyle(n)" class="line"></div>
            <div class="center-circle">
              <p class="text">Remain time</p>
              <p class="time">00:00</p>
            </div>
        </div>
            <div class="labels">
                <span class="label-1h">1h</span>
                <span class="label-2h">2h</span>
                <span class="label-3h">3h</span>
                <span class="label-4h">4h</span>
                <span class="label-5h">5h</span>
                <span class="label-6h">6h</span>
                <span class="label-7h">7h</span>
            </div>
            <div class="start-time">
                Start<br>00:00
            </div>
            <div class="end-time">
                Complete<br>00:00
            </div>
        </div>
        </div>

        <div class="col-2 bg-red">
          <div class="row" style="margin-top: 130px;">
            <div class="col-12 indicator-container-x">
              <span class="sub-volume-text text-black">SUB Volume</span>
              <button class="value-button">000</button>
              <div class="sub-label">L</div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 indicator-container-x">
              <span class="heparin-text text-black">Heparin</span>
              <button class="heparin-button">000</button>
              <div class="sub-label">[20mL] mL/h</div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 indicator-container-x">
            <span class="heparin-text text-black">BF rate</span>
            <button class="bf-rate-button">000</button>
            <div class="sub-label">mL/min</div>
            </div>
          </div>
        </div>

        <div class="col-2 bg-grey right-button-container">
          <div class="row mt-2">
            <div class="col-12 flex-center-two">
              <button class="btn btn-light btn-right-one">Alarm reset</button>
            </div>
          </div>
          <div class="row">
            <div class="col-12 flex-center-two">
              <button class="btn btn-light btn-right-two">Treatment / Bypass</button>
            </div>
          </div>
          <div class="row">
            <div class="col-12 flex-center-two">
              <button class="btn btn-light btn-right-one">
                <img src="../assets/icons/pharmacy.png" style="width: 60px; height: 60px;" alt="Pharmacy" />
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-12 flex-center-two">
              <button class="btn btn-light btn-right-one">
                <span class="break-word text-black">Dis-<br>connect</span>
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-12 flex-center-two">
              <button class="btn btn-light btn-right-two">Wash back</button>
            </div>
          </div> 
        </div>
      </div>

      <!-- Third Row -->
      <div class="row">
        <div class="col-10 bg-red">
          <div class="button-container">
            <button class="btn-bottom text-black centered-button">
              <img src="../assets/icons/information.png" alt="information" style="width: 55px; height: 55px;"/>
            </button>
            <button class="btn-bottom text-black centered-button">
              <img src="../assets/icons/information.png" alt="information" style="width: 55px; height: 55px;"/>
            </button>
            <button class="btn-bottom text-black centered-button">
              <img src="../assets/icons/information.png" alt="information" style="width: 55px; height: 55px;"/>
            </button>
            <button class="btn-bottom text-black centered-button">
              <img src="../assets/icons/information.png" alt="information" style="width: 55px; height: 55px;"/>
            </button>
            <button class="btn-bottom text-black centered-button">
              <img src="../assets/icons/timer.png" alt="information" style="width: 80px; height: 80px;"/>
            </button>
            <button class="btn-bottom text-black centered-button">
              <img src="../assets/icons/pipe.png" alt="information" style="width: 80px; height: 80px;"/>
            </button>
            <button class="btn-bottom text-black centered-button">
              <img src="../assets/icons/hd.png" alt="HD" style="width: 80px; height: 80px;"/>
            </button>
            <button class="btn-bottom text-black centered-button">
              <img src="../assets/icons/docs.png" alt="docs" style="width: 55px; height: 55px;"/>
            </button>
            <button class="btn-bottom text-black centered-button">
              <img src="../assets/icons/information.png" alt="information" style="width: 55px; height: 55px;"/>
            </button>
          </div>
        </div>

        <div class="col-2 bg-red flex-centerq">
          <div class="indicator-container">
            <div class="bf-rate-label">BF Rate</div>
            <button class="triangle-up"></button>
            <button class="indicator-value-button text-black">000</button>
            <button class="triangle-down"></button>
            <div class="unit-label">ml/min</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getLineStyle(n) {
      const startAngle = 20;
      const endAngle = -200;
      const totalLines = 7;
      const angleIncrement = (endAngle - startAngle) / (totalLines - 1);
      return {
        transform: `translate(-50%, -50%) rotate(${startAngle + (n - 1) * angleIncrement}deg)`
      };
    },
    goToPatientCard() {
      this.$router.push({ name: 'patientCard' });
    },
  }
};
</script>

<style scoped>
.centered-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.first-row{
  background: linear-gradient(black 2px, transparent 1px), #257213;
  background-size: 100% 10px;
  min-height: 7vh;
}

.panel-green hr {
  border-top: 1px solid #FFFFFF !important;
}

/*timer*/
.parent-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circular-timer-wrapper {
  position: relative;
  width: 400px; /* Increased size */
  height: 400px; /* Increased size */
  border-radius: 50%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, grey, black, white);
  padding: 10px; 
  box-sizing: border-box;
  margin-top: 35px;
}

.circular-timer {
  position: relative;
  width: 380px; /* Increased size */
  height: 380px; /* Increased size */
  background: 
    linear-gradient(to top, #7d9291 100%, transparent 50%);
  border-radius: 50%;
}

.circular-timer::before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 50%;
  background-color: #e4dee1; 
  clip-path: polygon(50% 0%, 10% 100%, 90% 100%);
}

.line {
  position: absolute;
  top: 50%;
  left: 75%;
  width: 50%;
  height: 2px; 
  background-color: white; 
  transform-origin: 0 50%; 
  transform: translateX(-50%) translateY(-50%); 
}

.center-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 220px; /* Increased size */
  height: 220px; /* Increased size */
  background-color: #2f4c2f;
  color: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.center-circle .time {
  font-size: 50px; /* Increased size */
  font-weight: bold;
  margin: 0;
}

.center-circle .text {
  font-size: 20px; /* Increased size */
  margin: 0;
}

.labels {
  position: absolute;
  width: 100%;
  height: 100%;
}

.labels span {
  position: absolute;
  font-size: 14px; /* Increased size */
  font-weight: bold;
  color: #333;
}

.labels .label-1h { top: 69%; left: 0%; transform: translate(-50%, -50%); }
.labels .label-2h { top: 35%; left: -2%; transform: translate(-50%, -50%); }
.labels .label-3h { top: 7%; left: 17%; transform: translate(-50%, -50%); }
.labels .label-4h { top: -2%; left: 50%; transform: translate(-50%, -50%); }
.labels .label-5h { top: 7%; left: 84%; transform: translate(-50%, -50%); }
.labels .label-6h { top: 35%; left: 102%; transform: translate(-50%, -50%); }
.labels .label-7h { top: 69%; left: 100%; transform: translate(-50%, -50%); }

.start-time, .end-time {
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  color: black;
}

.start-time {
  bottom: 35px;
  left: 115px;
  text-align: center;
}

.end-time {
  bottom: 35px;
  right: 115px;
  text-align: center;
}

/*end of timer*/
* {
  color: white;
}

.transparent-background {
  background-color: transparent;
}

.main-container {
  background: #e4dee1;
  background-size: 100% 10px; 
  min-height: 100vh;
}

button {
  width: 95%;
}

.right-button-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid black;
  position: absolute; /* Add this line */
  top: 60px; /* Adjust as needed */
  right: 0; /* Adjust as needed */
  z-index: 2; 
}

.right-button-container .btn {
  color: black !important;
  margin: 10px 0; /* Increase the margin value */
}
.text-black {
  color: black;
}

.header-green {
  background-color: #257213;
}

.bg-grey {
  background-color: #c6cbcc;
} 

.bg-red {
  background-color: #e4dee1;
}

.bg-lightgray {
  background-color: lightgray;
}

.panel-green {
  background-color: #257213;
}

.panel-darkgreen {
  background-color: rgba(31, 65, 17, 0.8);
  border-radius: 10px;
  position: relative; /* Add this line */
  z-index: 1; /* Lower z-index */
}

.bg-skyblue {
  background-color: #0972ac;
}

.bg-green {
  background-color: #36834b;
}

.bg-blue {
  background-color: #8593aa;
  color: white;
  padding: 10px 0;
}

.bg-black {
  background-color: black;
}

.transparent-bg {
  background-color: transparent !important;
}

.home-icon {
  width: 50px;
  height: 50px;
}

/*button bawah*/
.button-container {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 5px;
}

.btn-bottom {
  flex: 1;
  margin: 0 4px;
  border-radius: 15px;
  background-color: white;
  color: white;
  border: none;
  cursor: pointer;
  text-align: center;
  width: 150px;
  height: 70px;
}
/*end of button bawah*/

/*indicator up down click*/
.flex-centerq {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.bf-rate-label {
  position: absolute;
  top: 67
  px; /* Adjust as needed */
  left: 10px;
  font-size: 12px;
  color: black;
}

.unit-label {
  position: absolute;
  bottom: 67px; /* Adjust as needed */
  right: 10px;
  font-size: 12px;
  color: black;
}

.indicator-container {
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: absolute;
  top: 630px; /* Adjust as needed */
  right: 35px; /* Adjust as needed */
  z-index: 3; /* Higher z-index to overlap right-button-container */
}

.indicator-value-button {
  width: 120px;
  font-size: 50px; /* Increase font size */
  border: 2px solid black; /* Increase border size */
  border-radius: 15px;
  background-color: transparent;
  cursor: pointer;
  text-align: center;
  height: 70px; /* Increase height */
  line-height: 50px;
}

.triangle-up, .triangle-down {
  width: 0;
  height: 0;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent; 
  cursor: pointer;
  background-color: transparent; 
  margin: 16px 0;
}

.triangle-up {
  border-bottom: 50px solid #8593aa; 
  border-top: none; 
  clip-path: polygon(50% 5%, 0% 100%, 100% 100%); 
  box-shadow: 0 -1px 0 0 black, -1px 0 0 0 black, 1px 0 0 0 black; /* Add black border */
}

.triangle-down {
  border-top: 50px solid #8593aa;
  border-bottom: none; 
  clip-path: polygon(0% 0%, 100% 0%, 50% 95%); 
  box-shadow: 0 1px 0 0 black, -1px 0 0 0 black, 1px 0 0 0 black; /* Add black border */
}

/*end of indicator up down click*/

/*left indicator*/

/*end of left indicator*/

/*home button*/
.circle {
  width: 50px; 
  height: 50px; 
  border-radius: 50%;
  border: 2px solid black; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-icon {
  width: 70%; /* Adjust as needed */
  height: 70%; /* Adjust as needed */
}
/*end of home button*/

/*indicator sebelah timer*/
.indicator-container-x{
  position: relative;
  display: inline-block;
}

.sub-label{
  font-size: 0.7em;
  color: black;
  text-align: right;
  margin-right: 45px;
}

.value-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: 1px solid black;
  border-radius: 15px;
  font-size: 16px;
  cursor: pointer;
  width: 75%; 
  text-align: right;
  color: black;
  font-size: 1.6em;

}

.heparin-button {
  display: inline-block;
  position: relative;
  width: 120px;
  height: 50px;
  background: linear-gradient(to bottom, #f9e07f, #f7c500);
  border-radius: 25px;
  border: 2px solid black;
  color: black;
  font-family: Arial, sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-align: right;
  line-height: 50px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  padding: 0px 20px;
}

.heparin-button:before, .heparin-button:after {
  content: '';
  position: absolute;
  width: 15px;
  height: 30px;
  background: black;
  top: 10px;
}

.heparin-button:before {
  left: -10px;
  border-radius: 5px 0 0 5px;
}

.heparin-button:after {
  right: -10px;
  border-radius: 0 5px 5px 0;
}

.bf-rate-button {
  padding: 10px 20px;
  background-color: transparent; 
  border: none; 
  cursor: pointer;
  width: 75%; 
  text-align: center;
  color: black;
  font-size: 1.6em;
}
/*end indicator sebelah timer*/

.value-right {
  text-align: right;
  width: 100%;
}

.value-right h2 {
  margin: 0;
}

/*indicator bar*/
.indicator-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  color: white;
}

.bar {
  position: relative;
  width: 190px;
  height: 20px;
  background: linear-gradient(to bottom, white 0%, #76c47d 95%) !important;
  border-radius: 10px;
  margin-bottom: 5px;
}

.triangle {
  position: absolute;
  top: -10px; /* Adjust to position below the bar */
  left: 50%; /* Center the triangle */
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 15px solid white; /* Change to border-top */
}

.labelx {
  display: flex;
  justify-content: space-between;
  width: 190px;
}

.labely {
  font-size: 14px;
}

.unitx {
  font-size: 10px;
  text-align: right; 
  width: 100%; 
  display: block;
}
/*end indikator bar*/

/*indikator kanan*/
.indicator-scd {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 120px; /* Adjust the width as needed */
  font-family: Arial, sans-serif;
}

.barg {
  position: relative;
  height: 10px;
  width: 100%;
  background: #ccc; /* Gray background */
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 5px; /* Space between the bar and the labels */
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.5);
}

.fillg {
  height: 100%;
  width: 30%; /* Adjust to represent the current value (30% in this example) */
  background: linear-gradient(to right, #88cc88, #55aa55); /* Gradient fill */
  border-radius: 5px 0 0 5px;
}

.infog {
  display: flex;
  align-items: right;
  justify-content: flex-end;
}

.unitg {
  font-size: 10px;
  color: white;
  margin-right: 5px;
}

.valueg {
  font-size: 16px;
  color: white;
  font-weight: bold;
  text-align: right;
}
/*end of indikator kanan*/

.btn-first {
  border-radius: 35px;
  padding: 10px 10px;
  width: 100%;
}

.btn-scd {
  border-radius: 35px;
  padding: 10px 10px;
  width: 110%;
}

.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.flex-center-two{
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-left {
  align-self: flex-start;
  margin-left: 0; 
  font-size: 0.95em;
  text-align: left;
  width: 100%; /* Ensure it takes full width */
}

.text-first {
  font-size: 5em;
}

.text-scd {
  font-size: 3em;
}

.adjusted-sup {
  position: relative;
  top: -0.2em; /* Adjust this value as needed */
  font-size: 0.8em; /* Adjust the size if needed */
}

.btn-right-one {
  padding: 10px 30px; /* Adjust the padding as needed */
  font-size: 1.2em;
  width: 80%; 
  height: 90px; 
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.break-word {
  text-align: center;
}

.btn-right-two{
  padding: 10px 10px; /* Adjust the padding as needed */
  font-size: 1em;
  width: 80%; 
  height: 90px;   
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}


@media (max-width: 1000px) {
  .col-5, .col-7, .col-10, .col-2, .col-4, .col-6, .col-12, .col-1 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .button-container {
    justify-content: center;
  }

  .right-button-container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .right-button-container .btn {
    width: 45%;
    margin: 5px;
  }

  .btn-first {
    max-width: 400px; /* Adjust the max-width for even larger screens */
  }
}

@media (max-width: 768px) {
  .col-5, .col-7, .col-10, .col-2, .col-4, .col-6, .col-12, .col-1 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .button-container {
    justify-content: center;
  }

  .right-button-container {
    flex-direction: column;
    justify-content: space-between;
  }

  .right-button-container .btn {
    width: 100%;
    margin: 5px 0;
  }

  .btn-first {
    max-width: 150px; /* Adjust the max-width for larger screens */
  }
}
</style>