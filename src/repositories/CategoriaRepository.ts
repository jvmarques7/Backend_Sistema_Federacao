import {EntityRepository, Repository} from "typeorm";
import { Categoria } from "../entities/Categoria";

@EntityRepository(Categoria)
class CategoriasRepositories extends Repository<Categoria> {}

export {CategoriasRepositories};