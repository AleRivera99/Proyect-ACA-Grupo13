const express = require("express")

const recetaController = require("../controllers/receta")
const multipart = require("connect-multiparty");

const md_auth = require('../middlewares/authenticated')
const md_upload_dieta = multipart({uploadDir: "./uploads/receta"})
const api = express.Router();

api.post("/crear-receta",[md_auth.ensureAuth], recetaController.createReceta);
api.get("/recetas", recetaController.getRecetas);
api.delete("/delete-receta/:id", [md_auth.ensureAuth], recetaController.deleteReceta)
api.put("/upload-avatar-receta/:id",[md_auth.ensureAuth, md_upload_dieta], recetaController.uploadReceta);
api.get("/get-avatar-receta/:avatarName", recetaController.getAvatarReceta);
api.put("/update-receta/:id", [md_auth.ensureAuth], recetaController.updateReceta);

module.exports = api;