const express = require('express');
const router = express.Router();
const pool = require('../db');

// CREATE
router.post('/Productos', async (req, res) => {
  const { Nombre_producto, Descripcion_producto, Precio, Precio_costo, minimo_stock } = req.body;
 res.send('llega a prodcutos');
  try {
    const result = await pool.query(
      'INSERT INTO productos (Nombre_producto, Descripcion_producto, Precio, Precio_costo, minimo_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [Nombre_producto, Descripcion_producto, Precio, Precio_costo, minimo_stock]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ
router.get('/AllProductos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Productos');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ ONE
router.get('/ProductId/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM Productos WHERE id_producto = $1', [id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
