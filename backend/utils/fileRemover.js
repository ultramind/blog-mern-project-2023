import fs from "fs";
import path from "path";

const fileRemover = (filename) => {
  fs.unlink(path.join(__dirname, "../uploads", filename), function (err) {
    if (err && err.code === "ENOENT") {
      console.log(`File ${filename} doesnt exit, wont remove it`);
    } else if (err) {
      console.log(`Erro occured while trying to remove file ${filename}`);
    } else {
      console.log(`Removed ${filename}`);
    }
  });
};

export { fileRemover };
