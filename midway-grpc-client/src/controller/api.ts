import { Inject, Controller, Get, Query } from '@midwayjs/core';
import { com } from '../domain/User';
import { HelloWorldService } from '../service/helloworld';
import { UserService } from '../service/user';

@Controller('/api')
export class APIController {
  @Inject()
  HelloWorldService: HelloWorldService;

  @Inject()
  UserService: UserService;

  @Get('/get_grpc')
  async sayHello() {
    const res = await this.HelloWorldService.sayHello();

    return res;
  }

  @Get('/getUser')
  async getUser(@Query() options: com.codenotfound.grpc.user.RequestParams) {
    const res = await this.UserService.getUser(options);

    return res;
  }
}
