import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import mongoose from 'mongoose'

const router = express.Router()

// @descr   Fetch all products
// @route   GET /api/products
// @access  Public

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

// @descr   Fetch single  products
// @route   GET /api/products/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
      const product = await Product.findById(req.params.id)
      if (product) {
        res.json(product)
      } else {
        res.status(404)
        throw new Error('Produt fkn gone')
      }
    } else {
      res.status(404).json({
        message: 'Invalid ID. Product not found buddy 404',
      })
    }
  })
)

export default router
