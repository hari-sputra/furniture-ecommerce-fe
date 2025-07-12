import { create } from "zustand";
import { Timestamp } from "../../pb/google/protobuf/timestamp";
import { jwtDecode } from "jwt-decode";

interface AuthStoreState {
  isLogged: boolean;
  payload: JwtPayload | null;
  role: "admin" | "customer";
  login: (token: string) => void;
  logout: () => void;
}

interface JwtPayload {
  sub: string;
  full_name: string;
  email: string;
  role: string;
  member_since: Timestamp;
}

export const useAuthStore = create<AuthStoreState>((set) => ({
  isLogged: false,
  payload: null,
  role: "customer",
  login: (token: string) =>
    set((state) => {
      try {
        const claims = jwtDecode<JwtPayload>(token);

        return {
          ...state,
          payload: claims,
          isLogged: true,
          role: claims.role === "admin" ? "admin" : "customer",
        };
      } catch (e) {
        return {
          ...state,
        };
      }
    }),
  logout: () =>
    set((state) => {
      return { ...state, isLogged: false, payload: null, role: "customer" };
    }),
}));
