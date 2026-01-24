const fs = require("fs");
const path = require("path");

// Define the file path
const filePath = path.join(__dirname, "input_stream.txt");
const readStream = fs.createReadStream(filePath);
readStream.on("data", (chunk) => {
  console.log("Received chunk:");
  console.log(chunk.toString());
});

readStream.on("end", () => {
  console.log("No more data to read.");
});
readStream.on("error", (err) => {
  console.error("Error reading the stream:", err);
});
