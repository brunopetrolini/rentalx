interface ICreateUserDTO {
  name: string;
  username: string;
  email: string;
  password: string;
  driver_license: string;
}

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository, ICreateUserDTO };
