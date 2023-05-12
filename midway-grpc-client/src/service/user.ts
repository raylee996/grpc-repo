import {
  Provider,
  MSProviderType,
  Inject,
  Init,
  GrpcMethod,
} from '@midwayjs/core';
import { Clients } from '@midwayjs/grpc';
import { com } from '../domain/User';

@Provider(MSProviderType.GRPC, { package: 'com.codenotfound.grpc.user' })
export class UserService implements com.codenotfound.grpc.user.UserService {
  // 注入客户端
  @Inject()
  grpcClients: Clients;

  userService: com.codenotfound.grpc.user.UserServiceClient;

  @Init()
  async init() {
    this.userService =
      this.grpcClients.getService<com.codenotfound.grpc.user.UserServiceClient>(
        'com.codenotfound.grpc.user.UserService'
      );
  }

  @GrpcMethod()
  async getUser(options: com.codenotfound.grpc.user.RequestParams) {
    const result = await this.userService.getUser().sendMessage(options);

    return result;
  }
}
