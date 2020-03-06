import faker from "faker";

const nameInvalid = () => ({ name: faker.internet.password(1) });

export default {
  nameInvalid
};
