import {Request, Response} from "express";
import { EventService } from "../services/EventService";

interface ICreateEvent{
    titulo: string,
    estado: boolean,
    decricao: string,
    tipo: string,
    data: Date,
    atuacoes: string,
    modalidades: string,
    categorias: string
}

class EventController{

    async create(req: Request, res: Response) {
        const { titulo, estado, decricao, tipo, data, atuacoes, modalidades, categorias } = req.body;
    
        const eventService = new EventService();
    
        const event = await eventService.execute({
          titulo,
          estado,
          decricao,
          tipo,
          data,
          atuacoes,
          modalidades,
          categorias
        });
    
        return res.json(event);
      }

      async listarEventos(req: Request, res: Response) {
        const eventsService = new EventService();
        
        const eventsList = await eventsService.show();
    
        return res.json(eventsList);
      }

      async findEvent(req: Request, res: Response){
        const eventsService = new EventService();
        const id = req.body;

        const eventsList = await eventsService.showEventById(id);
    
        return res.json(eventsList);
      }

      async control(req: Request, res: Response) {
        const eventService = new EventService();
        const {id} = req.params; 

        const numberId = parseInt(id)

        const event = await eventService.showEventById(numberId);
        const newEvent = event;


        const controlEvent = await eventService.controll(newEvent);

      return res.status(200).json(controlEvent);
      }

      async excluirEvento(req: Request, res: Response){
        const eventsService = new EventService();
        const {id} = req.params; 

        const numberId = parseInt(id)

        try{
          const eventDeleted = await eventsService.deleteEvent(numberId);
          if(eventDeleted.affected){
            return res.status(200).json('Event deleted suscessfuly!')
          }
          return res.status(404).json('Event not found!')
        }catch(err){
          const error = new Error(err);

          return res.status(500).json({ err: error.message });
        }
      }

}

export {EventController}