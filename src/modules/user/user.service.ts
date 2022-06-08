import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as emailvalidator from 'email-validator';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { Consent } from '../consent/entities/consent.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(userDto: CreateUserDto) {
    const { email } = userDto;
    const isEmailValid = emailvalidator.validate(email);

    if (!email || !isEmailValid) {
      throw new UnprocessableEntityException('Invalid email');
    }
    const user = await this.userRepository.findOne({ email });

    if (user) {
      throw new UnprocessableEntityException('User with email already exist');
    }

    return await this.userRepository.save({ email });
  }

  async findAll() {
    //@TODO: Better approach will be to use an sql query for this something like:
    // const usersWithConsents = await this.userRepository.query(
    //   `SELECT u.email, u.id, c.consents FROM "didomi-users" u INNER JOIN (SELECT DISTINCT type, userid, enabled FROM consents) c on u.id = c.userid order by c.createdAt`,
    // );

    const usersWithConsents = await this.userRepository.find({
      relations: ['consents'],
    });

    return usersWithConsents.map((usersWithConsent) => {
      const { consents, id, email } = usersWithConsent;
      const formattedConsents = this.getFormattedConsents(consents);

      return {
        id,
        email,
        consents: formattedConsents,
      };
    });
  }

  getFormattedConsents(consents: Consent[]) {
    return [
      ...new Map(
        consents.map((consent) => [
          consent.type,
          {
            type: consent.type,
            enabled: consent.enabled,
          },
        ]),
      ).values(),
    ];
  }

  async findOne(id: string) {
    const users = await this.userRepository.findOne({
      where: { id },
      relations: ['consents'],
    });
    return users;
  }

  async remove(id: string) {
    const users = await this.userRepository.softRemove([{ id }]);
    return users;
  }
}
