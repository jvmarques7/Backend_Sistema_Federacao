import { getCustomRepository } from "typeorm";
import { EventRepositories } from "../repositories/EventRepository";

interface ICreateEvent{
    titulo: string,
    estado: string,
    decricao: string,
    tipo: string,
    data: Date,
    atuacoes: string,
    modalidades: string,
    categorias: string
}

interface IControl{
    id: number,
    estado: string
}

class EventService{

    async execute({titulo, estado, decricao, tipo, data, atuacoes, modalidades, categorias} : ICreateEvent){
        
        const eventRepository = getCustomRepository(EventRepositories);

        const modal = eventRepository.create({
            titulo, estado, decricao, tipo, data, atuacoes, modalidades, categorias
        })

        await eventRepository.save(modal);

        return modal;

    }

    async show() {
        const eventsRepositories = getCustomRepository(EventRepositories);
    
        const events = await eventsRepositories.find();
    
        return events;
      }

      async controll(event: IControl) {
        const eventRepository = getCustomRepository(EventRepositories);
        const res: Response = null;
    
          const controlEvent = await eventRepository.findOne(event.id);
          if(event.estado === "a"){
            controlEvent.estado = "d"
          }else{
            controlEvent.estado = "a"
          }
    
          const newEvent = await eventRepository.save(controlEvent);
    
          return {
            id: newEvent.id,
            estado: newEvent.estado
          };
      }

      async showEventById(id: number) {
        const eventRepositories = getCustomRepository(EventRepositories);
    
        const event = await eventRepositories
          .createQueryBuilder("event")
          .where("event.id like :id", { id: `%${id}%` })
          .getOne();
    
        return event;
      }
    

}

export {EventService}