#!/bin/zsh
set -e

PLIST="$HOME/Library/LaunchAgents/com.codex.type-chinese.plist"

launchctl unload "$PLIST" 2>/dev/null || true
rm -f "$PLIST"

echo "Auto-start removed."
