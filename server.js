const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

// Middleware untuk meng-handle request body dalam bentuk JSON
app.use(bodyParser.json());

// Endpoint untuk mengambil data biodata mahasiswa
app.get('/mahasiswa', (req, res) => {
  const mahasiswa = {
    nama: 'Zainullah',
    npm: '2019520014',
    jurusan: 'Informatika',
    fakultas: 'Teknik',
    universitas: 'Universitas Madura'
  };
  res.json(mahasiswa);
});

// Endpoint untuk menambahkan data biodata mahasiswa
app.post('/mahasiswa', (req, res) => {
  const { nama, npm, jurusan, fakultas, universitas } = req.body;
  const mahasiswa = {
    nama,
    npm,
    jurusan,
    fakultas,
    universitas
  };
  res.json(mahasiswa);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
