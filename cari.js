function cari(nama, kata) {
  return nama.toLowerCase().includes(kata.trim().toLowerCase());
}
module.exports = { cari };