import type { SignInDto, SignUpDto, AuthResponse } from "./types";

export const mockSignIn = async (dto: SignInDto): Promise<AuthResponse> => {
  console.log("SignIn request", dto);
  await new Promise((res) => setTimeout(res, 1000));
  return {
    token: "mock-token",
    user: {
      id: "1",
      email: dto.email,
      username: "ivan",
      first_name: "Иван",
      last_name: "Иванов",
    },
  };
};

export const mockSignUp = async (dto: SignUpDto): Promise<AuthResponse> => {
  console.log("SignUp request", dto);
  await new Promise((res) => setTimeout(res, 1000));
  return {
    token: "mock-token",
    user: {
      id: "2",
      email: dto.email,
      username: dto.username,
      first_name: dto.first_name,
      last_name: dto.last_name,
    },
  };
};
