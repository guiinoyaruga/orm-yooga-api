const { Router } = require("express");
const { route } = require("..");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.showMePessoas);
router.get("/pessoas/:id", PessoaController.showMeOnePerson);
router.post("/pessoas/", PessoaController.createPerson);
router.put("/pessoas/:id", PessoaController.updatePerson);
router.delete("/pessoas/:id", PessoaController.destroyPerson);

module.exports = router;
