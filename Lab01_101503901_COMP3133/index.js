const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const inputFilePath = path.join(__dirname, "input_countries.csv");
const canadaFilePath = path.join(__dirname, "canada.txt");
const usaFilePath = path.join(__dirname, "usa.txt");

// 기존 파일 삭제
if (fs.existsSync(canadaFilePath)) {
  fs.unlinkSync(canadaFilePath);
}

if (fs.existsSync(usaFilePath)) {
  fs.unlinkSync(usaFilePath);
}

// 헤더 작성
fs.writeFileSync(canadaFilePath, "country,year,population\n");
fs.writeFileSync(usaFilePath, "country,year,population\n");

console.log("---START---");

fs.createReadStream(inputFilePath)
  .pipe(csv())
  .on("data", (row) => {
    const country = row.country.toLowerCase();

    if (country === "canada") {
      fs.appendFileSync(
        canadaFilePath,
        `${row.country},${row.year},${row.population}\n`,
      );
    }

    if (country === "united states") {
      fs.appendFileSync(
        usaFilePath,
        `${row.country},${row.year},${row.population}\n`,
      );
    }
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
    console.log("---END---");
  });
