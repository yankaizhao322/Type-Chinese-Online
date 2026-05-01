#!/bin/zsh
cd "$(dirname "$0")"

PORT=8787
LOCAL_URL="http://localhost:${PORT}"
IP="$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null)"

echo "Starting Type Chinese"
echo "This Mac: ${LOCAL_URL}"
if [ -n "$IP" ]; then
  echo "Network:  http://${IP}:${PORT}"
  echo "Open the Network URL on another computer connected to the same Wi-Fi."
else
  echo "Network URL not found automatically. Check your Wi-Fi IP address in System Settings."
fi
echo "Press Ctrl+C in this window to stop."

python3 -m http.server "$PORT" --bind 0.0.0.0
