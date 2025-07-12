import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import {
  AuthServiceClient,
  IAuthServiceClient,
} from "../../../pb/auth/auth.client";
import { AuthInterceptor } from "./auth-interceptor";

let authClient: IAuthServiceClient | null = null;

export const getAuthClient = () => {
  if (authClient === null) {
    const transport = new GrpcWebFetchTransport({
      baseUrl: import.meta.env.VITE_API_BASE_URL as string,
      interceptors: [AuthInterceptor],
    });

    authClient = new AuthServiceClient(transport);
  }

  return authClient;
};
