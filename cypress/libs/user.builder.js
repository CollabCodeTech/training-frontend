import faker from "faker";

const nameInvalid = () => ({ name: faker.internet.password(1) });
const emailInvalid = () => ({ email: faker.lorem.word() });

export default {
  nameInvalid,
  emailInvalid
};
