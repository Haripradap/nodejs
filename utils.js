//common js

function GRN() {
    return Math.floor(Math.random() * 100) + 1;
}


function ctf(c) {
  return (c * 9) / 5 +32;
}

module.exports = {
    GRN,
    ctf
};