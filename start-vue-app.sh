#!/bin/bash

# Debugging
LOGFILE=/tmp/vue-app-debug.log
exec >$LOGFILE 2>&1

# Export environment variables for graphical session
echo "Setting DISPLAY and XAUTHORITY..."
export DISPLAY=:0
export XAUTHORITY=/home/rivalits/.Xauthority

# Check environment
echo "Environment: DISPLAY=$DISPLAY, XAUTHORITY=$XAUTHORITY"

# Navigate to your Vue.js app directory
cd /home/rivalits/gui_mri  || { echo "Directory not found"; exit 1; }

# Start the Vue.js app
echo "Starting Vue.js dev server..."
npm run dev &

# Wait for the server to initialize
sleep 5

# Start Firefox
echo "Launching Firefox..."
#firefox --kiosk http://localhost:5173 &

# Wait to keep the script active
wait
