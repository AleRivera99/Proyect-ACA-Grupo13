const express = require("express")

const dietaController = require("../controllers/dieta")
const multipart = require("connect-multiparty");

const md_auth = require('../middlewares/authenticated')
const md_upload_dieta = multipart({uploadDir: "./uploads/dieta"})
const api = express.Router();

api.post("/crear-dieta",[md_auth.ensureAuth], dietaController.createDieta);
api.get("/dietas", dietaController.getDietas);
api.delete("/delete-dieta/:id", [md_auth.ensureAuth], dietaController.deleteDieta)
api.put("/upload-avatar-dieta/:id",[md_auth.ensureAuth, md_upload_dieta], dietaController.uploadDieta);
api.get("/get-avatar-dieta/:avatarName", dietaController.getAvatarDieta);
api.put("/update-dieta/:id", [md_auth.ensureAuth], dietaController.updateDieta);

module.exports = api;