import {EntityRepository, Repository} from "typeorm";
import { Modalidade } from "../entities/Modalidade";

@EntityRepository(Modalidade)
class ModalidadesRepositories extends Repository<Modalidade> {}

export {ModalidadesRepositories};