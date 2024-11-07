<template>
  <div class="container-fluid">
    <!-- Header Section -->
    <div class="header row bg-success text-white p-3">
      <div class="col">
        <h2>Treatment HD</h2>
      </div>
      <div class="col text-right">
        <div class="patient-card bg-warning p-2">No patient card</div>
      </div>
    </div>

    <!-- Top Data Section for ART, VEN, DIP, UF Volume, and UF Rate -->
    <div class="top-data row text-white bg-dark p-2 mt-3">
      <div class="col text-center" v-for="(value, key) in topDataValues" :key="key">
        <span>{{ key }}</span>
        <h3>{{ value.value }}</h3>
        <span>{{ value.unit }}</span>
      </div>
    </div>

    <!-- Main Content Section -->
    <div class="row mt-3">
      <!-- Left Side: SYS, DIA, and Pulse Data Section -->
      <div class="col-3">
        <div class="sub-data">
          <div class="text-center mb-3">
            <span>SYS</span>
            <h3>-</h3>
            <span>mmHg</span>
          </div>
          <div class="text-center mb-3">
            <span>DIA</span>
            <h3>-</h3>
            <span>mmHg</span>
          </div>
          <div class="text-center mb-3">
            <span>Pulse</span>
            <h3>-</h3>
            <span>bpm</span>
          </div>
        </div>
      </div>

      <!-- Center Section: Timer -->
      <div class="col-6 text-center">
        <div class="timer">
          <div class="dial mb-3">
            <span class="remain-time">Remain time</span>
            <h2>{{ remainingTime }}</h2>
          </div>
          <div class="row">
            <div class="col">
              Start: <span>{{ startTime }}</span>
            </div>
            <div class="col">
              Complete: <span>{{ completeTime }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side: Control Buttons and BF Rate -->
      <div class="col-3 text-right">
        <div class="right-controls">
          <div class="btn-group-vertical float-right mb-4">
            <button class="btn btn-primary mb-2" @click="handleControl('Alarm reset')">Alarm<br>reset</button>
            <button class="btn btn-success mb-2" @click="handleControl('Treatment')">Treatment</button>
            <button class="btn btn-primary mb-2" @click="handleControl('Bypass')">Bypass</button>
            <button class="btn btn-danger mb-2" @click="handleControl('Disconnect')">Dis-<br>connect</button>
            <button class="btn btn-primary" @click="handleControl('Wash back')">Wash<br>back</button>
          </div>
          <div class="bf-rate mt-3 text-right">
            <span>BF Rate</span>
            <h3>{{ bfRate }} mL/min</h3>
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
      topDataValues: {
        ART: { value: 21, unit: "mmHg" },
        VEN: { value: 68, unit: "mmHg" },
        DIP: { value: 86, unit: "mmHg" },
        "UF Volume": { value: 0.01, unit: "L" },
        "UF Rate": { value: 0.38, unit: "L/h" },
      },
      remainingTime: "7:58",
      startTime: "12:12",
      completeTime: "20:18",
      controls: ["Alarm reset", "Treatment", "Bypass", "Disconnect", "Wash back"],
      bfRate: 351,
    };
  },
  methods: {
    handleControl(control) {
      console.log(control + " clicked");
      // Handle control actions here
    },
  },
};
</script>

<style scoped>
.patient-card {
  background-color: #ffe200;
  padding: 5px;
}

.top-data .col {
  font-size: 1.2rem;
}

.sub-data .text-center,
.bf-rate {
  font-size: 1.5rem;
  font-weight: bold;
}

.timer .dial {
  background: #f1f1f1;
  border-radius: 50%;
  padding: 20px;
}

.right-controls .btn-group-vertical .btn {
  width: 100%;
}
</style>
