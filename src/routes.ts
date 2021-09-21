import { Router } from "express";
import { AtuacaoController } from "./controller/AtuacaoController";
import { CategoriaController } from "./controller/CategoriaController";
import { ModalidadeController } from "./controller/ModalidadeController";
import { UserController } from "./controller/UserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticate";

const router = Router();

const modalidadeController = new ModalidadeController();
const categoriaController = new CategoriaController();
const userController = new UserController();
const atuacaoController = new AtuacaoController();

router.post("/modalidade", modalidadeController.create);
router.post("/categoria", categoriaController.create);
router.post("/atuacao", atuacaoController.create);
router.post("/user", userController.create);
router.put("/completar_cadastro", userController.update);

// router.put("/user/:email", userController.complete);

router.post("/login", userController.authenticate);

router.get("/users", userController.list);

export { router };