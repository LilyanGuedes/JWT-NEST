import { Injectable, NotFoundException } from '@nestjs/common';
import {FindOneOptions, Repository} from 'typeorm';
import { UserEntity } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>
  ){}

  async findAll() {
    return await this.usersRepository.find({select: ['id', 'firstName', 'lastName']})
  }

  async findOneOrFail( options?: FindOneOptions<UserEntity>) {
    try{
      return await this.usersRepository.findOneOrFail(options)
    } catch(error) {
      throw new NotFoundException(error.message)
    }
  }

  async store(data: CreateUserDto) {
    const user = this.usersRepository.create(data)
    return await this.usersRepository.save(data)
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.findOneOrFail({where: { id } });
    this.usersRepository.merge(user, data);
    return await this.usersRepository.save(user)

  }
  async destroy(id: string) {
    await this.usersRepository.findOneOrFail({where: { id }})
    this.usersRepository.softDelete({ id })
  }
}
