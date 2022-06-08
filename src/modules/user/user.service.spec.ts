import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { mockedUserRepository } from './__mocks__/user.mocks';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: mockedUserRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get single user data', async () => {
    const user = await service.findOne('id');

    expect(mockedUserRepository.findOne).toHaveBeenCalled();

    expect(user.id).toBe('uuid1');
  });

  it('should create user data', async () => {
    await expect(
      service.create({ email: 'jude.okafor1@didomi.com' }),
    ).rejects.toThrow('User with email already exist');

    expect(mockedUserRepository.findOne).toHaveBeenCalled();
  });

  it('should get all users with their appriopriate consents', async () => {
    const user = await service.findAll();

    expect(mockedUserRepository.find).toHaveBeenCalled();
    expect(user.length).toBeGreaterThan(0);
    expect(user[0]).toHaveProperty('email');
    expect(user[0]).toHaveProperty('id');
    expect(user[0]).toHaveProperty('consents');
  });
});
