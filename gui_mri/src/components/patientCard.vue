<template>
  <div class="main-container">
    <div class="container-fluid">
      <!-- first row -->
      <div class="row pad-atas">
        <div class="col-4">
          <button class="btn btn-success date-button mt-2">{{ formattedTime }}</button>
        </div>
        <div class="col-4">
          <button class="triangle-button mt-5">
            <div class="triangle"></div>
          </button>
        </div>
        <div class="col-4 home-button-container">
          <div class="circle mt-2">
            <img src="../assets/icons/home.png" alt="Home" class="home-icon" />
          </div>
        </div>
      </div>

      <!-- second row -->
      <div class="row bg-green">
        <div class="col-10 mid-buttons-container">
          <h1>Patient Data</h1>
          <div class="col-12 mid-buttons">
            <button>Input New Patient</button>
          </div>
          <div class="col-12 mid-buttons">
            <button>Previous Patient</button>
          </div>
          <div class="col-12 mid-buttons">
            <button>Load patient card</button>
          </div>
        </div>

        <div class="col-2 bg-grey right-button-container mt-2">
          <div class="row mt-2">
            <div class="col-12 flex-center-two">
              <button class="btn btn-right-one fade-effect-scd bg-grey">Test Button</button>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-12 flex-center-two">
              <button class="btn btn-right-one fade-effect-scd bg-grey">Test Button</button>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-12 flex-center-two">
              <button class="btn btn-right-one fade-effect-scd bg-grey">Test Button</button>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-12 flex-center-two">
              <button class="btn btn-right-one fade-effect-scd bg-grey">Test Button</button>
            </div>
          </div>

          <div class="row mt-4 mb-2">
            <div class="col-12 flex-center-two">
              <button class="btn btn-right-one fade-effect-scd bg-grey">Test Button</button>
            </div>
          </div>
        </div>

      </div>

      <!-- third row -->
      <div class="row">
        <div class="col-6 bg-blue">
          <div class="button-container">
            <button class="btn-bottom text-black centered-button">
              button 1
            </button>
            <button class="btn-bottom text-black centered-button">
              button 2
            </button>
            <button class="btn-bottom text-black centered-button">
              button 3
            </button>
            <button class="btn-bottom text-black centered-button">
              button 4
            </button>
            <button class="btn-bottom text-black centered-button">
              button 5
            </button>
            <button class="btn-bottom text-black centered-button">
              button 6
            </button>
          </div>
        </div>

        <div class="col-2"></div>

        <div class="col-4 bg-green">
          <div class="button-container">
            <button class="btn-bottom text-black centered-button">
              button 1
            </button>
            <button class="btn-bottom text-black centered-button">
              button 2
            </button>
            <button class="btn-bottom text-black centered-button">
              button 3
            </button>
          </div>
        </div>
      </div> 

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: new Date(),
    };
  },
  computed: {
    formattedTime() {
      const options = { day: '2-digit', month: '2-digit', weekday: 'short' };
      const datePart = this.time.toLocaleDateString('en-GB', options).replace(',', '');
      const timePart = this.time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
      const [day, month] = datePart.split(' ');
      return `${month}(${day}) ${timePart}`;
    },
  },
}
</script>

<style scoped>
.bg-green {
  background-color: green;
}

.bg-grey{
  background-color: #d2ccd6;
}

.bg-blue {
  background-color: blue;
}

.bg-red {
  background-color: red;
}

.pad-atas {
  padding-bottom: 60px;
}

/*button kanan*/
.right-button-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid black;
  position: absolute;
  top: 60px; 
  right: 0; 
  z-index: 2; 
}

.flex-center-two {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-right-one {
  padding: 10px 30px; 
  font-size: 1.2em;
  width: 80%; 
  height: 90px; 
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.fade-effect-scd{
  position: relative;
  overflow: hidden;
  border: solid 1px black;
}

.fade-effect-scd::before {
  content: '';
  position: absolute;
  left: 10%;
  right: 10%;
  top: 2%;
  height: 25%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 1), transparent);
  border-radius: 25px;
}
/*end of button kanan*/

/*button bawah*/
.centered-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

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
  width: 70%; 
  height: 70%; 
}

.home-button-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
/*end of home button*/

/*mid buttons*/
.mid-buttons-container{
  display: flex;
  flex-direction: column;
  gap: 170px; 
}

.mid-buttons{
  display: flex;
  align-items: center;
}
/*end of mid buttons*/

.triangle-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid black;
}

.main-container {
  background: linear-gradient(rgba(0, 0, 0, 0.2) 2px, transparent 1px), rgba(159, 124, 30, 1);
  background-size: 100% 10px;
  min-height: 100vh;
}

.date-button {
  background-color: brown;
  color: white;
  border-radius: 20px;
}

</style>