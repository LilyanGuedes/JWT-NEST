import { Body, Param, Controller, Get, Post, Put, Delete, ParseUUIDPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async index() {
    return await this.usersService.findAll()
  }

  @Post()
  async store(@Body() body: CreateUserDto) {
    return await this.usersService.store(body)
  }

  @Get(':id')
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.usersService.findOneOrFail({where: { id } })
  }

  @Put(':id')
  async update(@Param('id', new ParseUUIDPipe) id: string, @Body() body: UpdateUserDto ) {
    return await this.usersService.update(id, body)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe) id: string) {
    await this.usersService.destroy(id)
  }
}
