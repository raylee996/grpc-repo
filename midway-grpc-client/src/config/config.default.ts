import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';
import { resolve } from 'path';

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1682330898900_4899',
    egg: {
      port: 7001,
    },
    grpc: {
      services: [
        // 一个模块一个对象
        {
          package: 'com.codenotfound.grpc.helloworld',
          url: 'localhost:6565',
          protoPath: resolve(__dirname, '../../proto/HelloWorld.proto'),
        },
        {
          package: 'com.codenotfound.grpc.user',
          url: 'localhost:6565',
          protoPath: resolve(__dirname, '../../proto/user.proto'),
        },
      ],
    },
    // security: {
    //   csrf: false,
    // },
  } as MidwayConfig;
};
