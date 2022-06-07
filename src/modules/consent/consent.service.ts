import { Injectable } from '@nestjs/common';
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

    const consentsData = consents.map((c) => ({
      ...c,
      userid: id,
      user: userDetails,
    }));

    const saved = await this.consentRepository.save(consentsData);
    return saved;
  }
}
