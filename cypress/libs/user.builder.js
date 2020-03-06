import faker from "faker";

const generateName = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return { name: `${firstName} ${lastName}` };
};

const nameInvalid = () => ({ name: faker.internet.password(1) });
const emailInvalid = () => ({ email: faker.lorem.word() });
const passwordInvalid = () => ({ password: faker.internet.password(7) });

export default {
  generateName,
  nameInvalid,
  emailInvalid,
  passwordInvalid
};
