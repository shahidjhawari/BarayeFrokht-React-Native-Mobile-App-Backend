const Product = require('../models/Product');
const User = require('../models/User');

exports.uploadProduct = async (req, res) => {
  const { name, description, price, image, userId } = req.body;
  try {
    const product = new Product({ name, description, price, image, userId });
    await product.save();

    // Add product to user's products array
    await User.findByIdAndUpdate(userId, { $push: { products: product._id } });

    res.status(201).json({ message: 'Product uploaded successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('userId', 'username');
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserProducts = async (req, res) => {
  const { userId } = req.params;
  try {
    const products = await Product.find({ userId });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};