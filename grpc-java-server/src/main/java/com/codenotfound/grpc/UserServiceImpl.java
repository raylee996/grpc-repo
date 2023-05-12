package com.codenotfound.grpc;

import com.codenotfound.grpc.helloworld.HelloWorldServiceGrpc;
import org.lognet.springboot.grpc.GRpcService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.codenotfound.grpc.user.RequestParams;
import com.codenotfound.grpc.user.UserServiceGrpc;
import com.codenotfound.grpc.user.Response;
import io.grpc.stub.StreamObserver;

@GRpcService
public class UserServiceImpl extends UserServiceGrpc.UserServiceImplBase {
    private static final Logger LOGGER =
            LoggerFactory.getLogger(UserServiceImpl.class);

    @Override
    public void getUser(RequestParams request, StreamObserver<Response> responseObserver) {
        LOGGER.info("server received {}", request);

        String username = request.getUsername();
        Integer age = request.getAge();

        Response response = Response.newBuilder().setUsername(username).setAge(age).build();
        LOGGER.info("server responded {}", response);

        responseObserver.onNext(response);
        responseObserver.onCompleted();
    }
}
