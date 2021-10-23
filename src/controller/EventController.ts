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

}

export {EventController}