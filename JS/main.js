function luasSegitiga() {
  // Dapatkan nilai
  var alas = parseFloat(document.getElementById("alas").value);
  var tinggi = parseFloat(document.getElementById("tinggi").value);
  var luas;

  // Operasi
  if (alas > 0 && tinggi > 0) {
    luas = 0.5 * alas * tinggi;
  } else {
    // Tampilkan pesan kesalahan jika input tidak valid
    document.getElementById("hasilLuas").textContent = "Masukkan nilai alas dan tinggi yang valid!";
    return; // Hentikan eksekusi fungsi jika input tidak valid
  }

  // Tampilkan rumus dan hasil perhitungan
  document.getElementById("rumusLuas").textContent = `Luas = 1/2 * alas * tinggi`;
  document.getElementById("step1Luas").textContent = `Luas = 1/2 * ${alas} * ${tinggi}`;
  document.getElementById("hasilLuas").textContent = `Luas Segitiga: ${luas}`;
}

function kelilingSegitiga() {
  // Dapatkan nilai
  var sisiA = parseFloat(document.getElementById("sisiA").value);
  var sisiB = parseFloat(document.getElementById("sisiB").value);
  var sisiC = parseFloat(document.getElementById("sisiC").value);
  var keliling;

  // Operasi
  if (sisiA > 0 && sisiB > 0 && sisiC > 0) {
    keliling = sisiA + sisiB + sisiC;
  } else {
    // Tampilkan pesan kesalahan jika input tidak valid
    document.getElementById("hasilKeliling").textContent = "Masukkan nilai sisi yang valid!";
    return; // Hentikan eksekusi fungsi jika input tidak valid
  }

  // Tampilkan rumus dan hasil perhitungan
  document.getElementById("rumusKeliling").textContent = `Keliling = Sisi A + Sisi B + Sisi C`;
  document.getElementById("step1Keliling").textContent = `Keliling = ${sisiA} + ${sisiB} + ${sisiC}`;
  document.getElementById("hasilKeliling").textContent = `Keliling Segitiga: ${keliling}`;
}
