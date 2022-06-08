import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { ConsentService } from './consent.service';
import { Consent } from './entities/consent.entity';

describe('ConsentService', () => {
  let service: ConsentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConsentService,
        {
          provide: UserService,
          useValue: {},
        },
        {
          provide: getRepositoryToken(Consent),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ConsentService>(ConsentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
