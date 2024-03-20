// Importa las dependencias
const express = require('express');
const mongoose = require('mongoose');

// Crea una instancia de Express
const app = express();

// Configura el puerto
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://drenvio:moM5f3AodwLE5d0A@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define el esquema del producto
const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  inStock: Boolean
});

// Define el modelo de Producto
const Product = mongoose.model('Product', ProductSchema);

// Ruta GET /products: Retorna productos en stock
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({ inStock: true });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta GET /price/:user_id/:nombre_producto: Retorna el precio especial si está disponible, de lo contrario, retorna el precio base
app.get('/price/:user_id/:nombre_producto', async (req, res) => {
  const { user_id, nombre_producto } = req.params;
  try {
    const product = await Product.findOne({ name: nombre_producto });
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    // Lógica para obtener el precio especial según el user_id
    let price;
    // Supongamos que tienes lógica para obtener el precio especial basado en el user_id aquí
    // Si no hay precio especial, se devuelve el precio base
    price = product.price;
    res.json({ price });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
