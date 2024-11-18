<template>
    <div class="popup-overlay" @click.self="closePopup">
      <div class="popup-content">
        <h3 class="popup-title">Countdown Timer</h3>
  
        <!-- Input Buffer Display -->
        <div v-if="!countdownActive" class="input-buffer-display">
          <span>{{ formattedInputBuffer }}</span>
        </div>
  
        <!-- Virtual Keyboard -->
        <div v-if="!countdownActive" class="keyboard">
          <div class="keyboard-row">
            <button v-for="key in keys" :key="key" @click="handleKeyPress(key)">{{ key }}</button>
          </div>
          <div class="keyboard-row">
            <button @click="deleteLastInput">Del</button>
            <button @click="startCountdown" class="btn-confirm">Start</button>
          </div>
        </div>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputBuffer: '', // Temporary input buffer for time
        countdownTime: 0, // Countdown time in seconds
        countdownActive: false, // Flag to indicate if the countdown is active
        timer: null, // Timer reference
        keys: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], // Virtual keyboard keys
      };
    },
    computed: {
      formattedInputBuffer() {
        if (this.inputBuffer.length === 0) return '00:00';
        const parts = this.inputBuffer.split(':');
        let minutes = parts[0] || '00';
        let seconds = parts[1] || '00';
        if (minutes.length < 2) minutes = '0' + minutes;
        if (seconds.length < 2) seconds = '0' + seconds;
        return `${minutes}:${seconds}`;
      },
    },
    methods: {
      handleKeyPress(key) {
        // Limit input to valid MM:SS format
        if (this.inputBuffer.length < 5 && (key !== ':' || !this.inputBuffer.includes(':'))) {
          this.inputBuffer += key;
          this.formatInputBuffer();
        }
      },
      formatInputBuffer() {
        if (this.inputBuffer.length === 2 && !this.inputBuffer.includes(':')) {
          this.inputBuffer += ':';
        }
      },
      deleteLastInput() {
        this.inputBuffer = this.inputBuffer.slice(0, -1);
      },
      startCountdown() {
        const regex = /^[0-9]{2}:[0-5][0-9]$/; // Validates MM:SS format
        if (!regex.test(this.formattedInputBuffer)) {
          alert('Invalid time format! Use MM:SS.');
          return;
        }
  
        // Parse input into seconds
        const [minutes, seconds] = this.formattedInputBuffer.split(':').map(Number);
        this.countdownTime = minutes * 60 + seconds;
  
        if (this.countdownTime > 0) {
          this.countdownActive = true;
          this.inputBuffer = '';
          this.$emit('start-countdown', this.countdownTime); // Emit the countdown time
        } else {
          alert('Please enter a time greater than 0.');
        }
      },
      stopCountdown() {
        this.countdownActive = false;
        this.countdownTime = 0;
        this.$emit('stop-countdown'); // Emit stop countdown event
      },
      closePopup() {
        this.stopCountdown();
        this.$emit('close-popup');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Popup Overlay */
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  /* Popup Content */
  .popup-content {
    background: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
    width: 450px; /* Increased width for a larger display */
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  /* Title */
  .popup-title {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
  }
  
  /* Countdown Display */
  .countdown-display {
    font-size: 3rem;
    font-weight: bold;
    color: #007bff;
    margin: 20px 0;
    background: #f9f9f9;
    padding: 15px;
    border-radius: 10px;
    display: inline-block;
  }
  
  /* Input Buffer Display */
  .input-buffer-display {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin: 10px 0;
    background: #f9f9f9;
    padding: 10px;
    border-radius: 10px;
    display: inline-block;
  }
  
  /* Virtual Keyboard */
  .keyboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  
  .keyboard-row button {
    width: 70px; /* Larger buttons */
    height: 70px; /* Larger buttons */
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    background: #007bff;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .keyboard-row button:hover {
    background: #0056b3;
  }
  
  .btn-confirm {
    background-color: #28a745;
  }
  
  .btn-confirm:hover {
    background-color: #218838;
  }
  
  /* Action Buttons */
  .popup-buttons {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  
  .btn-danger {
    padding: 10px 20px;
    font-size: 1.2rem;
    border-radius: 8px;
    font-weight: bold;
    background: #dc3545;
    color: white;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .btn-danger:hover {
    background: #c82333;
  }
  </style>