import { Inject, Controller, Get } from '@midwayjs/core';
import { HelloWorldService } from '../service/helloworld';

@Controller('/api')
export class APIController {
  @Inject()
  HelloWorldService: HelloWorldService;

  @Get('/get_grpc')
  async sayHello() {
    const res = await this.HelloWorldService.sayHello();

    return res;
  }
}
