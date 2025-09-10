export interface SignInDto {
  email: string;
  password: string;
}

export type SignUpDto = {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  password_confirm: string;
};

export type AuthResponse = {
  user: {
    id: string;
    email: string;
    username: string;
    first_name: string;
    last_name: string;
    avatar?: string;
  };
  token: string;
};
