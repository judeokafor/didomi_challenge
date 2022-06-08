import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { ConsentController } from './consent.controller';
import { ConsentService } from './consent.service';
import { Consent } from './entities/consent.entity';

describe('ConsentController', () => {
  let controller: ConsentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsentController],
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

    controller = module.get<ConsentController>(ConsentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
