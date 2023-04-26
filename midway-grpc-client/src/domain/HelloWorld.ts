/**
 * This file is auto-generated by grpc-helper
 */

/* eslint-disable @typescript-eslint/no-namespace */

import * as grpcs from '@midwayjs/grpc';

/* package com start */
export namespace com {
  /* package codenotfound start */
  export namespace codenotfound {
    /* package grpc start */
    export namespace grpc {
      /* package helloworld start */
      export namespace helloworld {
        export interface Person {
          first_name?: string;
          last_name?: string;
        }
        export interface Greeting {
          message?: string;
        }
        export interface HelloWorldService {
          sayHello(data: Person): Promise<Greeting>;
        }
        /**
         * HelloWorldService client interface
         */
        export interface HelloWorldServiceClient {
          sayHello(
            options?: grpcs.IClientOptions
          ): grpcs.IClientUnaryService<Person, Greeting>;
        }
      }
      /* package helloworld end */
    }
    /* package grpc end */
  }
  /* package codenotfound end */
}
/* package com end */
