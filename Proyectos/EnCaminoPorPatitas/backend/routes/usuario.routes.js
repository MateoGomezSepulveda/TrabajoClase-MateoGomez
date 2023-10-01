const {Router} = require('express');
const {check} = require('express-validator');
const { getUsuario, postUsuario, deleteUsuario, putUsuario, patchUsuario } = require('../controllers/usuario.controllers.js');
const { validateDocuments } = require('../middlewares/validate.documents.js');


const router = Router();

router.get("/", getUsuario);
router.post("/", [
    check('nombre', 'Nombre no es valido').not().isEmpty(),
    check('password', 'El password debe ser minimo de 6 letras').isLength({min:6}),
    check('email', 'El correo no es valido').isEmail(),
    check('rol', 'No es un rol valido').isIn(['ADMIN','USER']),
    validateDocuments
],postUsuario);
router.delete("/", deleteUsuario);
router.put("/", putUsuario);
router.patch("/", patchUsuario);

module.exports = router;