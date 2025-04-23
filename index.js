
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let proker = [
  { id: 1, nama: 'PTI', penanggungJawab: 'Divisi PSI', tanggal: '2025-05-10' },
  { id: 2, nama: 'Kunjungan', penanggungJawab: 'Divisi eksternal', tanggal: '2025-06-15' }
];

// Ambil semua program kerja
app.get('/proker', (req, res) => {
  res.json(proker);
});

// Ambil proker berdasarkan ID
app.get('/proker/:id', (req, res) => {
  const item = proker.find(p => p.id == req.params.id);
  if (item) res.json(item);
  else res.status(404).send('Program kerja tidak ditemukan');
});


// Tambah proker baru
app.post('/proker', (req, res) => {
    const { nama, penanggungJawab, tanggal } = req.body;
  
    // Validasi input
    if (!nama || !penanggungJawab || !tanggal) {
      return res.status(400).send('Data tidak lengkap');
    }
  
    const newItem = {
      id: proker.length + 1,
      nama,
      penanggungJawab,
      tanggal
    };
  
    proker.push(newItem);
    res.status(201).json(newItem);
  });
  

// Update data proker
app.put('/proker/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = proker.findIndex(p => p.id === id);
  if (index !== -1) {
    proker[index] = { id, ...req.body };
    res.json(proker[index]);
  } else {
    res.status(404).send('Program kerja tidak ditemukan');
  }
});

// Hapus proker
app.delete('/proker/:id', (req, res) => {
  const id = parseInt(req.params.id);
  proker = proker.filter(p => p.id !== id);
  res.send('Program kerja berhasil dihapus');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
