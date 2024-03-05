import { faker } from '@faker-js/faker';

export interface User {
  userId: string,
  username: string,
  email: string,
  avatar: string,
  password: string,
  birthdate: Date,
  registeredAt: Date,
  star?:number
}

export function createRandomUser(): User {
  return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
      star:0
  };
}

export const USERS: User[] = faker.helpers.multiple(createRandomUser, {
  count: 5,
});


export const generateUser():User[]={

}