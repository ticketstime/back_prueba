import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}
  async create(createEventoDto: CreateEventDto) {
    const nuevo = this.eventRepository.create(createEventoDto);
    const guardando = await this.eventRepository.save(nuevo);
    const id = guardando.id;

    return await this.eventRepository.findBy({ id: id });
  }

  async findAll() {
    return await this.eventRepository.find();
  }

  async findOne(id: number) {
    return await this.eventRepository.findBy({ id });
  }

  async update(id: number, updateEventDto: UpdateEventDto) {
    await this.eventRepository.update(id, updateEventDto);
    return await this.eventRepository.findBy({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
