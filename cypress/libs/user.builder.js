import faker from "faker";

const generateName = () => {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return { name: `${firstName} ${lastName}` };
};

const nameInvalid = () => ({ name: faker.internet.password(1) });
const emailInvalid = () => ({ email: faker.lorem.word() });
const passwordInvalid = () => ({ password: faker.internet.password(7) });
const emailValid = () => ({ email: faker.internet.email() });
const passwordValid = () => ({ password: faker.internet.password() });

const randomUserInfo = (options = {}) => {
  const blank = {};

  return Object.assign(
    blank,
    {
      name: generateName().name,
      email: emailValid().email,
      password: passwordValid().password
    },
    { ...options }
  );
};

export default {
  generateName,
  randomUserInfo,
  nameInvalid,
  emailInvalid,
  passwordInvalid,
  emailValid,
  passwordValid
};
