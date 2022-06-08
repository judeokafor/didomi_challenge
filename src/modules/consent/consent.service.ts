import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';

import { CreateConsentDto } from './dto/create-consent.dto';
import { Consent } from './entities/consent.entity';

@Injectable()
export class ConsentService {
  constructor(
    @InjectRepository(Consent)
    private consentRepository: Repository<Consent>,
    private userService: UserService,
  ) {}
  async create(createConsentDto: CreateConsentDto) {
    const { user, consents } = createConsentDto;

    const { id } = user;

    const userDetails = await this.userService.findOne(id);

    if (!userDetails) {
      throw new NotFoundException('User does not exist ');
    }

    const consentsData = consents.map((consent) => ({
      ...consent,
      user: userDetails,
    }));

    const saved = await this.consentRepository.save(consentsData);
    return saved;
  }
}
