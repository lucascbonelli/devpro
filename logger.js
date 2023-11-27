const fs = require('fs');

function logMessage(fileName, message, level) {
  const timestamp = new Date().toISOString();
  const log = `[${timestamp}] [${level}] ${message}\n`;

  fs.appendFile(fileName, log, (err) => {
    if (err) throw err;
    console.log(`Logged: ${log}`);
  });
}

// Example usage:
logMessage("application.log", "User logged in", "INFO");
logMessage("application.log", "Failed login attempt", "WARNING");