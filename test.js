const fs = require('fs');
try {
  const content = fs.readFileSync('./app.js', 'utf8');
  // Just to see if it parses
  new Function(content);
  console.log("Parses OK");
} catch(e) {
  console.log("Error:", e);
}
