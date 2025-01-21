<template>
  <div class="main-container">
    <div class="container-fluid">
      <!-- first row -->
      <div class="row">
        <div class="col-4">
          <button class="btn btn-success date-button">19.01 (Fri) 8:03</button>
        </div>
        <div class="col-4">
          <button class="triangle-button">
            <div class="triangle"></div>
            
          </button>
        </div>
        <div class="col-4 home-button-container">
          <div class="circle">
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

        <div class="col-2 bg-red">
          something content
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

<style scoped>
.bg-green {
  background-color: green;
}

.bg-blue {
  background-color: blue;
}

.bg-red {
  background-color: red;
}

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
  width: 70%; /* Adjust as needed */
  height: 70%; /* Adjust as needed */
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
  gap: 80px; 
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
  background: #9f7c1e;
  background-size: 100% 10px;
  min-height: 100vh;
}

.date-button {
  background-color: brown;
  color: white;
  border-radius: 20px;
}

</style>