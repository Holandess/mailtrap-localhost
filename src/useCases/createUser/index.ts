import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgressUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const postgressUsersRepository = new PostgressUsersRepository();
const mailTrapMailProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgressUsersRepository,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController, createUserUseCase };
