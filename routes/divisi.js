const express = require('express');
const router = express.Router();
const { Divisi } = require('../models');

// Ambil semua divisi
router.get('/', async (req, res) => {
  const data = await Divisi.findAll();
  res.json(data);
});

// Tambah divisi baru
router.post('/', async (req, res) => {
  const data = await Divisi.create(req.body);
  res.status(201).json(data);
});

// Hapus divisi
router.delete('/:id', async (req, res) => {
    const data = await Divisi.findByPk(req.params.id);
    if (data) {
      await data.destroy();
      res.json({ message: 'Divisi berhasil dihapus' });
    } else {
      res.status(404).json({ message: 'Divisi tidak ditemukan' });
    }
  });
  

module.exports = router;
