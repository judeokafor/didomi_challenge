import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findOneUser(id: string) {
    try {
      const [users, count] = await this.findAndCount({
        where: {
          id,
        },
      });
      return { users, count };
    } catch (error) {
      console.log('error', error.message);
      throw new InternalServerErrorException('Error getting users');
    }
  }
}
