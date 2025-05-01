const express = require('express');
const router = express.Router();
const { Proker } = require('../models');

// Ambil semua proker
router.get('/', async (req, res) => {
  const data = await Proker.findAll();
  res.json(data);
});

// Tambah proker baru
router.post('/', async (req, res) => {
  const data = await Proker.create(req.body);
  res.status(201).json(data);
});

// Hapus proker
router.delete('/:id', async (req, res) => {
    await Proker.destroy({ where: { id: req.params.id } });
    res.send('Proker dihapus');
  });

module.exports = router;
