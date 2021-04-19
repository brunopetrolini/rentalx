import { ICreateUserTokenDTO } from "@modules/accounts/dtos/ICreateUserTokenDTO";
import { UserTokens } from "@modules/accounts/infra/typeorm/entities/UserTokens";

import { IUsersTokensRepository } from "../IUsersTokensRepository";

class UsersTokensRepositoryInMemory implements IUsersTokensRepository {
  usersTokens: UserTokens[] = [];

  async create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = new UserTokens();

    Object.assign(userToken, {
      expires_date,
      refresh_token,
      user_id,
    });

    this.usersTokens.push(userToken);

    return userToken;
  }

  async findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string
  ): Promise<UserTokens> {
    return this.usersTokens.find(
      (userTokens) =>
        userTokens.user_id === user_id &&
        userTokens.refresh_token === refresh_token
    );
  }

  async deleteById(id: string): Promise<void> {
    const userTokensIndex = this.usersTokens.findIndex(
      (userTokens) => userTokens.id === id
    );

    this.usersTokens.splice(userTokensIndex, 1);
  }

  async findByRefreshToken(token: string): Promise<UserTokens> {
    return this.usersTokens.find(
      (userTokens) => userTokens.refresh_token === token
    );
  }
}

export { UsersTokensRepositoryInMemory };
