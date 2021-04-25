const controller = require("../controller/filmesController")
const express = require("express")
const router = express.Router()


router.get("/todos", controller.getAll)
router.get("/title", controller.getByTitle)
router.get("/:id",controller.getById)


module.exports = router // exportando o router



