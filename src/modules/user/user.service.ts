import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email } = createUserDto;
    const user = await this.userRepository.save({ email });
    return user;
  }

  async findAll() {
    return await this.userRepository.find({ relations: ['consents'] });
  }

  async findOne(id: string) {
    const users = await this.userRepository.findOne({
      where: { id },
      relations: ['consents'],
    });
    return users;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    const users = await this.userRepository.softRemove([{ id }]);
    return users;
  }
}
