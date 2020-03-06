import faker from "faker";

const nameInvalid = () => ({ name: faker.internet.password(1) });
const emailInvalid = () => ({ email: faker.lorem.word() });
const passwordInvalid = () => ({ password: faker.internet.password(7) });

export default {
  nameInvalid,
  emailInvalid,
  passwordInvalid
};
