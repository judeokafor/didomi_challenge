export const mockUser = {
  id: 'uuid1',
  email: 'jude@didomi.com',
};

export const mockUsers = [
  {
    id: 'uuid1',
    email: 'jude1@didomi.com',
    consents: [
      {
        type: 'sms-notifications',
        enabled: true,
      },
      {
        type: 'email-notifications',
        enabled: true,
      },
      {
        type: 'sms-notifications',
        enabled: false,
      },
    ],
  },
];
export const mockedUserRepository = {
  findOne: jest.fn(() => mockUser),
  find: jest.fn(() => mockUsers),
  save: jest.fn(() => mockUser),
};
