import { Router } from "express";
import { CategoriaController } from "./controller/CategoriaController";
import { ModalidadeController } from "./controller/ModalidadeController";
import { UserController } from "./controller/UserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticate";

const router = Router();

const modalidadeController = new ModalidadeController();
const categoriaController = new CategoriaController();
const userController = new UserController();

router.post("/modalidade", modalidadeController.create);
router.post("/categoria", categoriaController.create);
router.post("/user", userController.create);

router.post("/login", userController.authenticate);

router.get("/users", userController.list);

export { router };