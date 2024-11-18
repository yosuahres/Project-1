<template>
    <!-- General Container -->
    <div class="container-fluid line-background">
      <!-- 1p Bar -->
      <div class="row col-12 ">
  
          <div class="col-6 col-md-6 col-lg-4 d-flex justify-content-center" style="background-color: transparent;">
          <button class="btn btn-success w-100 fade-effect" @click="handleTreatmentHDClick" style="background-color: #7e1806; height: 40px; align-items: center; justify-content: center; padding: 0;">
            <span class="button-text">Treatment HD</span>
          </button>
        </div>
  
        <div class="col-1 col-md-1"></div>
  
        <div class="col-4 col-md-4 col-lg-5 d-flex justify-content-center" style="background-color: transparent;">
          <button class="btn btn-warning w-100 fade-effect" @click="handleNoPatientCardClick"  style="height: 35px; align-items: center; justify-content: center; padding: 0;">
            <span class="button-text">No Patient Card</span>
          </button>
        </div>
  
        <div class="col-1 col-md-1 col-lg-2 d-flex justify-content-center">
          <button class="circle-button fade-effect">
            <img src="../assets/icons/home.png" alt="Home" class="img-fluid" width="40" height="40" />
          </button>
        </div>
  
      </div>
      <!-- end of TopBar -->
  
      <!-- Main Content -->
      <div class="row">
        <!-- ART VEN DIP BUTTON -->
        <div class="col-12 col-md-8">
          <!-- align horizontally -->
          <div class="row" style="background-color: transparent;">
  
            <div class="col-4 col-md-3 d-flex flex-column p-1 kelas" style="background-color: transparent;">
              <p style="margin: 0; padding: 0;">ART</p>
              <div class="button-cylinder-container">
              <button class="btn fade-effect big-button" style="background-color: #7e1806;">
                <h1 class="text-right labelh1">{{bfRate}}</h1>
              </button>
              <div class="cylinder">
                <div class="indicator" :style="{width: (bfRate / 100) * 100 + '%'}"></div>
              </div>
            </div>
              <div class="labels">
                <span class="label-right">300</span>
                <span class="label-left">-300</span>
              </div>
            </div>
  
            <div class="col-4 col-md-3 d-flex flex-column p-1 kelas" style="background-color: transparent;">
              <p style="margin: 0; padding: 0;">VEN</p>
              <div class="button-cylinder-container">           
              <button class="btn fade-effect big-button" style="background-color: #7e1806;">
                <h2 class="text-right labelh1">68</h2>
              </button>
              <!-- <p style="text-align: center;float: left; margin: 0;">mmHg</p> -->
              <div class="cylinder">
                <div class="indicator" :style="{width: (bfRate / 100) * 100 + '%'}"></div>
              </div>
            </div>
              <div class="labels">
                <span class="label-left">0</span>
                <span class="label-right">100</span>
              </div>
            </div>
  
            <div class="col-4 col-md-3 d-flex flex-column p-1 kelas" style="background-color: transparent;">
              <p style="margin: 0; padding: 0;">DIP</p>
              <div class="button-cylinder-container"> 
              <button class="btn fade-effect big-button" style="background-color: #7e1806;">
                <h2 class="text-right labelh1">86</h2>
              </button>
              <!-- <p style="text-align: right;float: right; margin: 0;">mmHg</p> -->
              <div class="cylinder">
                <div class="indicator" :style="{width: (bfRate / 100) * 100 + '%'}"></div>
              </div>
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
        <div class="col-12 col-md-4 col-lg-3 mt-lg-0 d-flex">
          <div class="row w-100">
            <div class="col-12 col-md-6 uf-button d-flex flex-column align-items-center align-self-stretch" style="border-top-left-radius: 10px; border-bottom-left-radius: 10px;">
              <p>UF Volume</p>
              <button class="btn w-100 fade-effect small-button" style="background-color: #3f0e06;">
                <h2 class="uf-value" style="font-size: 70px;">0.01</h2>
              </button>
              <div class="cylinder-2" :data-fill="filllevel">
                <div class="indicator" :style="{width: (bfRate / 100) * 100 + '%'}"></div>
              </div>
              <!-- <div class="labels">
                <span class="label-left">0</span>
                <span class="label-right">100</span>
              </div> -->
            </div>
  
            <div class="col-12 col-md-6 uf-button d-flex flex-column align-items-center align-self-stretch" style="border-top-right-radius: 10px; border-bottom-right-radius: 10px;">
              <p>UF Rate</p>
              <button class="btn w-100 fade-effect small-button" style="background-color: #f2e711;">
                <h2 class="uf-value" style="font-size: 70px; color:black;">0.38</h2>
              </button>
            </div>
          </div>
        </div>
        <!-- UF Volume and UF Rate end -->
      </div>
      <!-- end of main content -->
  
      <!-- mid content -->
      <div class="row bf-rate-row line-mid p-0 mt-1 d-flex align-items-center justify-content-between">
        <!-- First Column: Unified Data (SYS, DIA, Pulse, Footer) -->
        <div class="col-12 col-md-3 p-0 mt-4" style="padding-bottom: 30px;">
          <div class="text-center unified-data">
            <!-- SYS -->
            <div class="data-section sys" style="background-color: #187EB9;">SYS</div>
            <div class="data-value" style="background-color: #718595;">
              <h1>{{ currentSys }}</h1>
              <p class="text-right">mmHg</p>
            </div>
  
            <!-- DIA -->
            <div class="data-section" style="background-color: #187EB9;">DIA</div>
            <div class="data-value" style="background-color: #718595;">
              <h1>{{ currentDia }}</h1>
              <p class="text-right">mmHg</p>
            </div>
  
            <!-- Pulse -->
            <div class="data-section" style="background-color: #1D7B42;">Pulse</div>
            <div class="data-value  bpm" style="background-color: #718595;">
              <h1>{{ currentPulse }}</h1>
              <p class="text-right">bpm</p>
            </div>
  
            <!-- Combined Footer Section
            <p class="text-right footer" style="background-color: #718595;">@ 30</p> -->
          </div>
        </div>
  
        <!-- Center Column: Remain Time (Centered horizontally and vertically) -->
        <div class="col-6 col-lg-1 text-center timer d-flex align-items-center justify-content-center mx-auto img-fluid" >
          <h2 style="color: white; margin-top: 30px;">00:00</h2>
        </div>
  
          <!-- Third Column: Sub Volume (Moved to the Right) -->
          <div class="col-1 text-center d-flex align-items-center justify-content-center flex-column" style="margin-top: -100px">
            <div class="uf-volume-container">
              <p class="uf-volume-label">SUB volume</p>
              <button class="btn w-100 fade-effect small-button2" style="background-color: lightgray;">
                <h2 class="uf-volume-value">0.01</h2>
              </button>
            </div>
  
            <!-- Heparin Section -->
            <div class="uf-volume-container">
              <p class="uf-volume-label">Heparin</p>
              <button class="btn w-100 fade-effect small-button2" style="background-color: yellowgreen;">
                <h2 class="uf-volume-value">0.01</h2>
              </button>
            </div>
  
          <!-- BF Rate Section -->
          <div class="uf-volume-container">
              <p class="uf-volume-label">BF rate</p>
              <button class="btn w-100 small-button2" style="background-color: transparent;">
                <h2 class="uf-volume-value">{{bfRate + 1}}</h2>
              </button>
            </div>
  
        </div>
  
        <!-- BF Rate Controls (Align these horizontally with the remain time) -->
        <div class="col-3 col-md-2 bf-rate-controls text-center d-flex align-items-center justify-content-center" style="margin-top: 80px;">
          <button @click="handleBFRateIncrement" class="triangle-up" style="background-color: transparent;"></button>
          <p style="margin: 0; padding: 2px 0; color: black; font-size: 10px; margin-right: auto">BF rate</p>
          <button style="background-color: lightgray;" class="text-center btn btn-secondary mx-1 fade-effect special-bottom">
            {{ bfRate }}
          </button>
          <p style="margin: 0; padding: 0; color: black; font-size: 10px; margin-left: auto;">mL/min</p>
          <button @click="handleBFRateDecrement" class="triangle-down fade-effect" style="background-color: transparent;"></button>
        </div>
      </div>
      <!-- end of mid content -->
  
      <!-- button bottom -->
      <div class="row p-0" style="display: flex; justify-content: flex-start; padding-left: 20px;">
        <div class="d-flex align-items-start line-mid" style="justify-content: flex-start; gap: 0px;">
  
          <!-- button 1 -->
          <button
            :class="['btn btn-secondary custom-width button-bottom fade-effect', { 'btn-bottom': isButtonActive('button1') }]"
            :style="{ backgroundColor: isButtonActive('button1') ? 'green' : 'lightgray' }"
            @click="toggleButton('button1')"
          >
            <img src="../assets/icons/information.png" alt="Button 1">
          </button>
  
        <!-- button 2 -->
        <button
          :class="['btn custom-width button-bottom fade-effect']"
          :style="{ 
            backgroundColor: 'lightgray', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '0', /* Remove padding to avoid space around inner buttons */
          }"
        >

          <!-- Top Half for Treatment -->
          <div 
            class="half-button top-half" 
            @click.stop="handleTreatmentClick"
            :style="{ 
              width: '100%', 
              backgroundColor: isTreatmentActive ? 'green' : 'lightgray', 
              color: 'white', 
              textAlign: 'center', 
              height: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }"
          >
            Treatment
          </div>

          <!-- Bottom Half for Danger -->
          <div 
            class="half-button bottom-half" 
            @click.stop="handleDangerClick"
            :style="{ 
              width: '100%', 
              backgroundColor: isDangerActive ? 'red' : 'lightgray', 
              color: 'black', 
              textAlign: 'center', 
              height: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }"
          >
            Bypass
          </div>
            
          </button>
  
          <!-- button 3 -->
          <button
            :class="['btn btn-secondary custom-width button-bottom fade-effect', { 'btn-bottom': isButtonActive('dbv')}]"
            :style="{ 
              backgroundColor:'lightgray', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
            }"
            @click="toggleButton('dbv')"
          >
            <img src="../assets/icons/table.png" alt="Button 1">
          </button>
  
          <!-- button 4 -->
          <button
            :class="['btn btn-secondary custom-width button-bottom fade-effect', { 'btn-bottom': isButtonActive('ktv') }]"
            :style="{ 
              backgroundColor:'lightgray', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
            }"
            @click="toggleButton('ktv')"
          >
            <img src="../assets/icons/default.png" alt="Button 1">
          </button>
  
          <!-- button 5 -->
          <button
            :class="['btn btn-secondary custom-width button-bottom fade-effect', { 'btn-bottom': isButtonActive('timer') }]"
            :style="{ 
              backgroundColor:'lightgray', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
            }"
            @click="toggleButton('timer')"
          >
            <img src="../assets/icons/timer.png" alt="Button 1">
          </button>
  
          <!-- button 7 -->
          <button
            :class="['btn btn-secondary custom-width button-bottom fade-effect', { 'btn-bottom': isButtonActive('hd')}]"
            :style="{ 
              backgroundColor:'lightgray', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
            }"
            @click="toggleButton('hd')"
          >
            <img src="../assets/icons/reverse.png" alt="Button 1">
          </button>
  
          <!-- button 8 -->
          <button
            :class="['btn btn-secondary custom-width button-bottom fade-effect', { 'btn-bottom': isButtonActive('docs') }]"
            :style="{ 
              backgroundColor:'lightgray', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
            }"
            @click="toggleButton('docs')"
          >
            <img src="../assets/icons/docs.png" alt="Button 1">
          </button>
  
          <!-- button 9 -->
          <button
            :class="['btn btn-secondary custom-width button-bottom fade-effect', { 'btn-bottom': isButtonActive('info') }]"
            :style="{ 
              backgroundColor:'lightgray', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
            }"
            @click="toggleButton('info')"
          >
            <img src="../assets/icons/information.png" alt="Button 1">
          </button>
  
        </div>
      </div>
      <!-- end of button bottom -->
    </div>
  </template>
  
  <script>
  export default {
    name: "Bypass",
    data() {
      return {
        bfRate: 90,
        artValue: 21,
        activeButton: 'button1',
        isTreatmentActive: false,
        isDangerActive: true,
        // Range for fluctuations
        minRange: 70,
        maxRange: 80,

        // Current values displayed
        currentSys: 70,
        currentDia: 70,
        currentPulse: 70,
        animationSpeed: 160, 
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
      toggleButton(button) {
        // Set the clicked button as the active one
        this.activeButton = button;
      },
      isButtonActive(button) {
        // Check if the given button is the active one
        return this.activeButton === button;
      },
      handleTreatmentClick() {
      this.activateTreatment();
      this.$router.push({ name: 'home' });
      },
      handleDangerClick() {
        this.activateDanger();
      },
      activateTreatment() {
      this.isTreatmentActive = true;
      this.isDangerActive = false; // Deactivate danger when treatment is active
      },
      activateDanger() {
        this.isDangerActive = true;
        this.isTreatmentActive = false; // Deactivate treatment when danger is active
      },
      // Generate a random value within the range
      getRandomValue() {
            return Math.floor(Math.random() * (this.maxRange - this.minRange + 1) + this.minRange);
          },

          // Increment/Decrement counter smoothly to target value
          animateTo(current, target, setCurrent) {
            const step = target > current ? 1 : -1;
            const interval = setInterval(() => {
              if (current === target) {
                clearInterval(interval);
              } else {
                current += step;
                setCurrent(current);
              }
            }, this.animationSpeed);
          },

      // Trigger random fluctuations
      fluctuateValues() {
            setInterval(() => {
              const newSys = this.getRandomValue();
              const newDia = this.getRandomValue();
              const newPulse = this.getRandomValue();

              this.animateTo(this.currentSys, newSys, (value) => (this.currentSys = value));
              this.animateTo(this.currentDia, newDia, (value) => (this.currentDia = value));
              this.animateTo(this.currentPulse, newPulse, (value) => (this.currentPulse = value));
            }, 2000); // Change values every 2 seconds
          },
        },
      mounted() {
          // Start fluctuation on mount
          this.fluctuateValues();
      },
  };
  </script>
  
  <style scoped>
  * {
    color: white;
  }
  
  .btn-bottom {
    background-color: #26B53A !important;
  }
  
  .button-cylinder-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .section {
    padding: 0;
    margin: 40px; /* Adjusted margin */
  }
  
  .bg-green {
    background-color: green;
  }
  
  .bg-dark-green {
    background-color: darkgreen;
    padding: 5px; /* Adjusted padding */
  }
  
  .bg-light-gray {
    background-color: lightgray;
  }
  
  .bg-blue {
    background-color: blue;
  }
  
  .rounded-button {
    width: 100%;
    height: 70px; /* Adjusted height */
    font-size: 16px; /* Adjusted font size */
    padding: 5px; /* Adjusted padding */
    border-radius: 50px; /* Adjusted border radius */
  }
  
  .big-button {
    text-align: right;
    width: 100%;
    font-size: 60px; /* Adjusted font size */
    padding: 10px; /* Adjusted padding */
    border-radius: 20px; /* Adjusted border radius */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80px; /* Adjusted minimum height */
  }
  
  .labelh1{
    font-size: 70px;
  }
  
  .unit-label{
    font-size: 12px; /* Adjusted font size */
    text-align: center;
  }
  
  .small-button {
    width: 100%;
    height: 40%; /* Adjusted height */
    font-size: 20px; /* Adjusted font size */
    padding: 5px; /* Adjusted padding */
    border-radius: 20px; /* Adjusted border radius */
  }
  
  .uf-value {
    font-size: 1.5rem; /* Adjusted font size */
  }
  
  .text-center h1 {
    margin: 0;
  }
  
  .button-container {
    max-width: 100px; /* Adjusted max-width */
    width: 100%;
    display: flex;
    flex-wrap: nowrap; /* Prevents wrapping */
    gap: 10px; /* Optional: adds space between buttons */
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
    border-left: 30px solid transparent; /* Adjusted border size */
    border-right: 30px solid transparent; /* Adjusted border size */
    cursor: pointer;
    margin: 3px 0; /* Adjusted margin */
  }
  
  .triangle-up {
    border-bottom: 25px solid gray; /* Adjusted border size */
    clip-path: polygon(50% 40%, 10% 100%, 90% 100%); /* Create a triangle shape */
    border-radius: 5px 5px 0 0; /* Rounds the top corners */
  }
  
  .triangle-down {
    border-top: 25px solid gray; /* Adjusted border size */
    clip-path: polygon(50% 60%, 10% 0%, 90% 0%); /* Create a triangle shape */
    border-radius: 0 0 5px 5px ; /* Rounds the bottom corners */
  }
  
  .label-right {
    right: 5px;
    color: white;
    bottom: 30px; /* Adjusted bottom */
  }
  
  .label-right, .label-left {
    transform: translateY(-5px); /* Adjusted transform */
    font-size: 10px; /* Adjusted font size */
  }
  
  .fade-effect {
    position: relative;
    overflow: hidden;
    border: solid 1px black;
  }
  
  .fade-effect::before {
    content: '';
    position: absolute;
    left: 6%;
    right: 6%;
    top: 0;
    height: 21%; /* Adjusted height */
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), transparent);
    border-radius: 25px; /* Adjusted border radius */
  }
  
  .fade-effect::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 30%; /* Adjusted height */
    background: linear-gradient(to top, rgba(255, 255, 255, 0.5), transparent);
  }
  
  .custom-width {
    width: 100px; /* Adjusted width */
  }
  
  .button-bottom {
    height: 80px; /* Adjusted height */
    font-size: 12px; /* Adjusted font size */
    padding: 1px;
    border-radius: 15px; /* Adjusted border radius */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .cylinder {
    width: 140px !important;
    height: 20px; /* Adjusted height */
    background: linear-gradient(to right, #ccc, #999);
    border-radius: 20px; /* Adjusted border radius */
    position: relative;
    overflow: hidden;
    margin: 5px 0; /* Adjusted margin */
  }
  
  .cylinder-2{
    width: 100px !important;
    height: 20px; /* Adjusted height */
    background: linear-gradient(to right, #ccc, #999);
    border-radius: 20px; /* Adjusted border radius */
    position: relative;
    overflow: hidden;
    margin: 5px 0; /* Adjusted margin */
  }
  
  .indicator {
    height: 100%;
    background-color: rgb(235, 235, 235);
    position: absolute;
    left: 0;
    transition: width 0.3s ease, background-color 0.3s ease;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2); /* Adjusted shadow */
  }
  
  .cylinder[data-fill="high"] .indicator {
    background-color: #247314;
  }
  
  .cylinder[data-fill="medium"] .indicator {
    background-color: #f0ad4e;
  }
  
  .cylinder[data-fill="low"] .indicator {
    background-color: #d9534f;
  }
  
  .labels {
    display: flex;
    justify-content: space-between;
    font-size: 10px; /* Adjusted font size */
  }
  
  .special-bottom {
    height: 70px; /* Adjusted height */
    width: 100px !important; /* Adjusted width */
    font-size: 70px; /* Adjusted font size */
    padding: 1px;
    border-radius: 15px; /* Adjusted border radius */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .circle-button {
    background-color: darkgreen;
    border: 1px solid #000;
    border-radius: 50%;
    padding: 5px; /* Adjusted padding */
    width: 40px; /* Adjusted width */
    height: 40px; /* Adjusted height */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .line-background {
  background-image: 
    repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 10px,
      rgb(0, 0, 0) 13px
    ),
    linear-gradient(to right, #7e1806, #7e1806);
  }
  
  .uf-button {
    background-color: rgba(0,0,0,0.5);
  }
  
  .line-mid {
    background-image: 
    repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 10px,
      rgba(128,128,128, 0.3) 13px
    ),
    linear-gradient(to right,#FFFFFF, #FFFFFF);
  }
  
  .unified-data {
    padding: 0;
    width: 80%;
    margin: 0;
  }
  
  .unified-data .data-section,
  .unified-data .data-value,
  .unified-data .footer {
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    height: auto;
  }
  
  .unified-data .sys {
    border-top-right-radius: 10px;
  }
  
  .unified-data .bpm {
    border-bottom-right-radius: 10px;
  }
  
  .unified-data .footer {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  
  .row:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
  }
  
  .container-fluid {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #000 ;
  }
  
  .divider {
    margin: 5px 0;
    border-top: 1px solid #fff;
  }
  
  .timer {
    background-image: url('../assets/icons/harestimer.png');
    background-size: 50%; /* Adjusted background size */
    background-position: center 10%; /* Adjusted background position */
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px; /* Adjusted height */
    margin: 0 auto;
  }
  
  .button-text {
    font-size: 23px !important; /* Adjusted font size */
    position: relative;
  }
  
  .button-first{
    height: auto; 
    border-radius: 10px; 
    padding: 10px;
  }
  
  .fade-effect2 {
    position: relative;
    overflow: hidden;
    border: solid 1px black;
  }
  
  .fade-effect2::before {
    content: '';
    position: absolute;
    left: 100px;
    right: 0;
    top: 0;
    height: 20%; /* Adjusted height */
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
  }
  
  .fade-effect2::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 80%; /* Adjusted height */
    background: linear-gradient(to top, rgba(255, 255, 255, 0.5), transparent);
  }
  
  .uf-volume-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .uf-volume-label {
    color: black;
    font-size: 16px; /* Adjusted font size */
    margin-bottom: 2px; /* Adjusted margin */
    text-align: left !important;
  }
  
  .uf-volume-value {
    font-size: 30px;
    color: black;
    text-align: right;
  }
  
  .small-button2{
    width: 90px !important; /* Adjusted width */
    height: 45px; /* Adjusted height */
    font-size: 14px; /* Adjusted font size */
    padding: 5px; /* Adjusted padding */
    border-radius: 10px; /* Adjusted border radius */
  }
  /* Media query for 800x600 screen */
  @media (max-width: 800px) {
    .container-fluid {
      min-height: 600px;
    }
  
    .big-button{
      font-size: 20px; /* Adjusted font size */
      min-height: 60px; /* Adjusted minimum height */
      width: 150px;
      justify-content: right;
      padding: 5px;
    }
  
    .labelh1{
      font-size: 50px !important;
    }
  
    .small-button {
      font-size: 18px; /* Adjusted font size */
      padding: 5px; /* Adjusted padding */
    }
  
    .uf-value {
      font-size: 1.2rem; /* Adjusted font size */
    }
  
    .triangle-up,
    .triangle-down {
      border-left: 60px solid transparent; /* Adjusted border size */
      border-right: 60px solid transparent; /* Adjusted border size */
    }
  
    .triangle-up {
      border-bottom: 50px solid gray; /* Adjusted border size */
    }
  
    .triangle-down {
      border-top: 50px solid gray; /* Adjusted border size */
    }
  
    .button-bottom {
      height: 60px; /* Adjusted height */
      border-radius: 10px; /* Adjusted border radius */
      width: 80px;
      margin:0 10px !important;
    }
  
    .special-bottom {
      height: 60px; /* Adjusted height */
      width: 80px; /* Adjusted width */
      font-size: 50px; /* Adjusted font size */
      border-radius: 10px; /* Adjusted border radius */
      color: black;
    }
  
    .circle-button {
      width: 30px; /* Adjusted width */
      height: 30px; /* Adjusted height */
    }
  
    .timer {
      height: 290px; /* Adjusted height */
      background-position: center 30%; /* Adjusted background position */
      background-size: 87%; /* Adjusted background size */
      margin: 0 auto;
    }
  
    .button-text {
      font-size: 18px; /* Adjusted font size */
    }
  
    .button-bottom img {
      width: 40px; /* Adjusted width */
      height: 40px; /* Adjusted height */
    }
    .cylinder{
      width: 79%;
    }
    .uf-value{
      font-size: 40px !important;
    }
    .kelas{
      margin-left: 20px;
    }
    .button-text {
      width: 30px !important;
    }
  }
  </style>