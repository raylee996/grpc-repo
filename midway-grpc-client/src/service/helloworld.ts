import {
  GrpcMethod,
  MSProviderType,
  Provider,
  Inject,
  Init,
} from '@midwayjs/core';
import { com } from '../domain/HelloWorld';
import { Clients } from '@midwayjs/grpc';

@Provider(MSProviderType.GRPC, { package: 'com.codenotfound.grpc.helloworld' })
export class HelloWorldService
  implements com.codenotfound.grpc.helloworld.HelloWorldService
{
  // 注入客户端
  @Inject()
  grpcClients: Clients;

  helloWorldService: com.codenotfound.grpc.helloworld.HelloWorldServiceClient;

  @Init()
  async init() {
    // 赋值一个服务实例
    this.helloWorldService =
      this.grpcClients.getService<com.codenotfound.grpc.helloworld.HelloWorldServiceClient>(
        'com.codenotfound.grpc.helloworld.HelloWorldService'
      );
  }

  @GrpcMethod()
  async sayHello() {
    // 调用服务
    const result = await this.helloWorldService.sayHello().sendMessage({
      first_name: 'harry',
      last_name: 'porter',
    });

    // 返回结果
    return result;
  }
}
