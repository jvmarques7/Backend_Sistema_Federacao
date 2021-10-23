import { Router } from "express";
import { AtuacaoController } from "./controller/AtuacaoController";
import { CategoriaController } from "./controller/CategoriaController";
import { EnderecoController } from "./controller/EnderecoController";
import { EventController } from "./controller/EventController";
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
const eventController = new EventController();

router.post("/modalidade", modalidadeController.create);
router.post("/categoria", categoriaController.create);
router.post("/atuacao", atuacaoController.create);
router.post("/user", userController.create);
router.post("/endereco", enderecoController.create);
router.put("/completar_cadastro", userController.update, ensureAuthenticated);
router.put("/endereco_update", enderecoController.update, ensureAuthenticated);
router.put("/control_event/:id", eventController.control)
router.get("/event", eventController.findEvent)

router.delete("/delete_event/:id", eventController.excluirEvento)

router.get("/buscar_cpf/:cpf", userController.listByCpf);
router.post("/user_admin", userAdminController.create);

// router.put("/user/:email", userController.complete);

router.post("/login", userController.authenticate);
router.post("/intranet", userAdminController.authenticate);
router.post("/event", eventController.create)
router.get("/listar_eventos", eventController.listarEventos)

router.get("/users", userController.list, ensureAuthenticated);
router.get("/endereco/:user_id", enderecoController.showEndereco, ensureAuthenticated)
router.get("/find_user/:email", userController.verifyIfRegistered);


router.get("/atuacao/:atuacao_id", atuacaoController.listAtuacao);
router.get("/modalidade/:modalidade_id", modalidadeController.listModalidade);
router.get("/categoria/:categoria_id", categoriaController.listarCategoria);

export { router };
