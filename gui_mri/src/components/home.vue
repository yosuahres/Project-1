  <template>
    <!-- General Container -->
    <div class="container-fluid page-background">
      <!-- Top Bar -->
      <div class="row">
        <div class="col-4 col-md-3 col-lg-3 bg-green">
          <button class="btn btn-success w-100" @click="handleTreatmentHDClick">Treatment HD</button>
        </div>
        <div class="col-2 col-md-4  bg-green"></div>
        <div class="col-4 col-md-4 col-lg-3 bg-green">
          <button class="btn btn-warning w-100" @click="handleNoPatientCardClick">No Patient Card</button>
        </div>
        <div class="col-1 col-md-1 col-lg-2 bg-green justify-content-left">
          <button>
          <img src="../assets/icons/home.png" alt="Home" class="img-fluid" width="40" height="40" />
          </button>
        </div>
      </div>
      <!-- end of TopBar -->

      <!-- Main Content -->
      <div class="row mt-0 bg-black" >

        <!-- ART VEN DIP BUTTON -->
        <div class="col-12 col-lg-6 bg-green section">
          <!-- align horizontally -->
          <div class="row">

            <div class="col-3 bg-green">
              <p>ART</p>
              <button class="btn btn-success fade-effect big-button">
                <h1 class="text-right" style="font-size: 70px;">{{bfRate}}</h1>
              </button>
              <p style="text-align: right;float: right; margin: 0;">mmHg</p>
              <div class="cylinder">
                <div class="indicator" :style="{width: (bfRate / 100) * 100 + '%'}"></div>
              </div>
              <div class="labels">
                <span class="label-left">-300</span>
                <span class="label-right">300</span>
              </div>
            </div>

            <div class="col-3 bg-green">
              <p>VEN</p>
              <button class="btn btn-success fade-effect big-button">
                <h2 class="text-right" style="font-size: 70px;">68</h2>
              </button>
              <p style="text-align: right;float: right; margin: 0;">mmHg</p>
              <div class="cylinder">
                <div class="indicator" :style="{width: (bfRate / 100) * 100 + '%'}"></div>
              </div>
              <div class="labels">
                <span class="label-left">0</span>
                <span class="label-right">100</span>
              </div>
            </div>

            <div class="col-3 bg-green">
              <p>DIP</p>
              <button class="btn btn-success  fade-effect big-button">
                <h2 class="text-right" style="font-size: 70px;">86</h2>
              </button>
              <p style="text-align: right;float: right; margin: 0;">mmHg</p>
              <div class="cylinder">
                <div class="indicator" :style="{width: (bfRate / 100) * 100 + '%'}"></div>
              </div>
              <div class="labels">
                <span class="label-left">0</span>
                <span class="label-right">100</span>
              </div>
            </div>

          </div>

        </div>
        <!-- end of ART VEN DIP Button -->

        <!-- UF Volume and UF Rate -->
        <div class="col-12 col-md-4 col-lg-3 mt-3 mt-lg-0">
          <!--  -->
          <div class="row">

            <div class="col-6 bg-dark-green">
              <p>UF Volume</p>
              <button class="btn btn-success w-100 fade-effect small-button">
                <h2 style="font-size: 70px;">0.01</h2>
              </button>
              <div class="cylinder">
                <div class="indicator" :style="{width: (bfRate / 100) * 100 + '%'}"></div>
              </div>
              <div class="labels">
                <span class="label-left">0</span>
                <span class="label-right">100</span>
              </div>
            </div>

            <div class="col-6 bg-dark-green">
              <p>UF Rate</p>
              <button class="btn btn-success w-100 fade-effect small-button">
                <h2 style="font-size: 70px;">0.38</h2>
              </button>
            </div>
          </div>
          
        </div>
        <!-- UF Volume and UF Rate end -->

        <!-- button right -->
         
        <!-- end of button right -->

      </div>
      <!-- end of main content -->

      <div class="row bf-rate-row bg-light-gray col-lg-11">
        <div class="col-2  bg-black">
          <div class="text-center">
            <div class="bg-blue">SYS</div>
            <div class="bg-light-gray">
              <h1>---</h1>
              <p class="text-right">mmHg</p>
            </div>
            <div class="bg-blue">DIA</div>
            <div class="bg-light-gray">
              <h1>---</h1>
              <p class="text-right">mmHg</p>
            </div>
            <div class="bg-green">Pulse</div>
            <div class="bg-light-gray">
              <h1>---</h1>
              <p class="text-right">bpm</p>
            </div>
            <hr class="divider" />
            <p class="text-right">@ 30</p>
          </div>
        </div>
        <div class="col-8 text-center timer">
          <h1 style="color: black;">Remain Time</h1>
          <h2 style="color: black;">7:58</h2>
        </div>
        <div class="col-2 bf-rate-controls">
          <button @click="handleBFRateIncrement" class="triangle-up"></button>
          <p>BFRate</p>
          <button class="text-center btn btn-secondary mx-1 fade-effect special-bottom">
            <h1 style="font-size: 70px;">{{ bfRate }}</h1>
          </button>
          <p>mL/min</p>
          <button @click="handleBFRateDecrement" class="triangle-down"></button>
        </div>

      <!-- button bottom -->
      <div class="row mt-3">
        <div class="col-12 d-flex justify-content-center flex-wrap">
          <button class="btn btn-secondary custom-width mx-1 button-bottom fade-effect">Button 1</button>
          <button class="btn btn-secondary custom-width mx-1 button-bottom fade-effect">BPM</button>
          <button class="btn btn-secondary custom-width mx-1 button-bottom fade-effect">dBV</button>
          <button class="btn btn-secondary custom-width mx-1 button-bottom fade-effect">Kt/V</button>
          <button class="btn btn-secondary custom-width mx-1 button-bottom fade-effect">Timer</button>
          <button class="btn btn-secondary custom-width mx-1 button-bottom fade-effect">New Button 6</button>
          <button class="btn btn-secondary custom-width mx-1 button-bottom fade-effect">HD</button>
          <button class="btn btn-secondary custom-width mx-1 button-bottom fade-effect">Doc</button>
          <button class="btn btn-secondary custom-width mx-1 button-bottom fade-effect">Information</button>
        </div>
      </div>
      </div>

    </div>
  </template>

  <script>
  export default {
    name: "Dashboard",
    data() {
      return {
        bfRate: 90,
        artValue : 21,
      };
    },
    methods: {
      handleTreatmentHDClick() {},
      handleNoPatientCardClick() {},
      handleAlarmResetClick() {},
      handleTreatmentBypassClick() {},
      handleDisconnectClick() {},
      handleWashBackClick() {},
      handleBFRateIncrement() {
        this.bfRate += 1;
      },
      handleBFRateDecrement() {
        if (this.bfRate > 0) this.bfRate -= 1;
      },
    },
  };
  </script>

  <style scoped>
  * {
    color: white;
  }

  .section {
    padding: 0;
    margin: 20px;
  }

  .bg-green {
    background-color: green;
  }

  .bg-dark-green {
    background-color: darkgreen;
    padding: 10px;
  }

  .bg-light-gray {
    background-color: lightgray;
  } 

  .bg-blue {  
    background-color: blue;
  }

  .rounded-button {
    width: 100%;
    height: 90px;
    font-size: 18px;
    padding: 10px;
    border-radius: 70px;
  }

  .big-button {
    text-align: right;
    width: 100%;
    font-size: 90px;
    padding: 20px;
    border-radius: 30px;
  } 

  .small-button {
    width: 100%;
    height: 50%;
    font-size: 30px;
    padding: 10px;
    border-radius: 30px;
  }

  .text-center h1 {
    margin: 0;
  }

  .button-container {
    max-width: 150px;
    width: 100%;
  }

  .bf-rate-controls {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .timer {
    color: black;
  }

  .triangle-up,
  .triangle-down {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    cursor: pointer;
    margin: 5px 0;
  }

  .triangle-up {
    border-bottom: 65px solid gray;
  }
  
  .triangle-down {
    border-top: 65px solid gray;
  }

  .label-right {
    right: 5px;
    color: white;
    bottom: 40px;
  }

  .label-right, .label-left{
    transform: translateY(-10px);
    font-size: 13 px;
  }

  .fade-effect {
    position: relative;
    overflow: hidden;
    border: solid 1px black;
  }

  .fade-effect::before {
    content: '';
    position: absolute;
    left: 5%;
    right: 5%;
    top: 0;
    height: 30%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
    border-radius: 30px;
  }

  .fade-effect::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 25%;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.5), transparent);
  }

  .custom-width{
    width: 120px;
  }

  .button-bottom{
  height: 100px; 
  font-size: 14px; /* Adjust font size as needed */
  padding: 1px; /* Adjust padding as needed */
  border-radius: 20px; /* Adjust border radius as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  }

  .cylinder {
  width: 200px;
  height: 25px;
  background: linear-gradient(to right, #ccc, #999);
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  margin: 10px 0;
}

.indicator {
  height: 100%;
  background-color: rgb(235, 235, 235);
  position: absolute;
  left: 0;
  transition: width 0.3s ease;
}

.labels {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}

.special-bottom{
  height: 90px;
  width: 140px; 
  font-size: 14px; /* Adjust font size as needed */
  padding: 1px; /* Adjust padding as needed */
  border-radius: 20px; /* Adjust border radius as needed */
  display: flex;
  align-items: center;
  justify-content: center;
}

.cylinder2 {
  position: relative;
  height: 20px; /* Adjust as needed */
  background-color: #ccc; /* Adjust as needed */
  margin-top: 10px; /* Adjust as needed */
}

.indicator2 {
  height: 100%;
  background-color: #4caf50; /* Adjust as needed */
}

.labels2{
  display: flex;
  justify-content: space-between;
  margin-top: 5px; /* Adjust as needed */
}

.label-left2, .label-right2  {
  font-size: 14px;
  color: white;
}

.page-background {
  background-color: #f0f0f0;
}
  </style>
