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
        {
          package: 'com.codenotfound.grpc.helloworld',
          url: 'localhost:6565',
          protoPath: resolve(__dirname, '../../proto/HelloWorld.proto'),
        },
      ],
    },
    // security: {
    //   csrf: false,
    // },
  } as MidwayConfig;
};
