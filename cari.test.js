const test = require('node:test');
const assert = require('node:assert');
const { cari } = require('./cari');

test('kata huruf kecil menemukan Roti Tawar', () => {
  assert.strictEqual(cari('Roti Tawar', 'roti'), true);
});
test('kata huruf besar menemukan Croissant', () => {
  assert.strictEqual(cari('Croissant', 'CROISSANT'), true);
});
test('spasi di awal dan akhir diabaikan', () => {
  assert.strictEqual(cari('Donat Cokelat', ' donat '), true);
});
test('kata yang tidak ada tidak ditemukan', () => {
  assert.strictEqual(cari('Roti Tawar', 'pizza'), false);
});