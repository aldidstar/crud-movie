const secretKey = process.env.SECRET_KEY
var jwt = require('jsonwebtoken')
const { Movies } = require('../models')
require('dotenv').config()

module.exports = {
  getAll: async (req, res, next) => {
    try {
      await Movies.findAll().then(function (movie) {
        res.json(movie)
      })
    } catch (error) {
      console.log(error)
      next(error)
    }
  },
  getDetail: async (req, res, next) => {
    try {
      await Movies.findOne({
        where: {
          id: req.params.id
        }
      }).then(function (users) {
        res.json(users)
      })
    } catch (error) {
      console.log(error)
      next(error)
    }
  },
  create: async (req, res, next) => {
    try {
      const payload = req.body
      await Movies.create(payload).then(function (movie) {
        res.json(movie)
      })
    } catch (error) {
      next(error)
    }
  },
  delete: async (req, res, next) => {
    try {
      await Movies.destroy({
        where: {
          id: req.params.id
        }
      }).then(function (movie) {
        res.json(movie)
      })
    } catch (error) {
      next(error)
    }
  },
  update: async (req, res, next) => {
    try {
      // Define the data you want to update
      const updatedData = req.body

      // Use the 'update' method to update the data
      const [rowsUpdated, updatedRows] = await Movies.update(updatedData, {
        where: {
          id: req.params.id
        },
        returning: true
      })

      if (rowsUpdated === 0) {
        return res.status(404).json({ message: 'Movie not found' })
      }

      res.json(updatedRows[0])
    } catch (error) {
      next(error)
    }
  }
}
