import { Router } from "express";
import { AtuacaoController } from "./controller/AtuacaoController";
import { CategoriaController } from "./controller/CategoriaController";
import { EnderecoController } from "./controller/EnderecoController";
import { ModalidadeController } from "./controller/ModalidadeController";
import { UserAdminController } from "./controller/UserAdminController";
import { UserController } from "./controller/UserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticate";

const router = Router();

const modalidadeController = new ModalidadeController();
const categoriaController = new CategoriaController();
const userController = new UserController();
const atuacaoController = new AtuacaoController();
const userAdminController = new UserAdminController();
const enderecoController = new EnderecoController();

router.post("/modalidade", modalidadeController.create);
router.post("/categoria", categoriaController.create);
router.post("/atuacao", atuacaoController.create);
router.post("/user", userController.create);
router.post("/endereco", enderecoController.create);
router.put("/completar_cadastro", userController.update);

router.get("/buscar_cpf/:cpf", userController.listByCpf);
router.post("/user_admin", userAdminController.create);

// router.put("/user/:email", userController.complete);

router.post("/login", userController.authenticate);
router.post("/intranet", userAdminController.authenticate);

router.get("/users", userController.list);
router.get("/atuacao", atuacaoController.list);

export { router };
