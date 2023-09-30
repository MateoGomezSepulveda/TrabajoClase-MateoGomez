const Router = require('express');
const { getUsuario, postUsuario, deleteUsuario, putUsuario, patchUsuario } = require('../controllers/usuario.controllers');


const router = Router();

router.get("/", getUsuario);
router.post("/", postUsuario);
router.delete("/", deleteUsuario);
router.put("/", putUsuario);
router.patch("/", patchUsuario);

module.exports = router;