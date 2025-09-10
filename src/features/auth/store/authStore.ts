import { makeAutoObservable, runInAction } from "mobx";
import { saveToken, removeToken, getToken } from "../api/authHelpers";
import type { SignInDto, SignUpDto, AuthResponse } from "../api/types";

class AuthStore {
  user: AuthResponse["user"] | null = null;
  token: string | null = null;
  loading = false;
  error: string | null = null;
  isAuthChecked = false;

  constructor() {
    makeAutoObservable(this);
    this.initializeAuth();
  }

  async initializeAuth() {
    const token = getToken();
    console.log("=== ИНИЦИАЛИЗАЦИЯ АУТЕНТИФИКАЦИИ ===");
    console.log(
      "Токен из localStorage:",
      token ? `${token.substring(0, 10)}...` : "не найден"
    );

    if (token) {
      runInAction(() => {
        this.token = token;
      });
      console.log("Токен установлен в store");
      await this.loadUserProfile(); // теперь безопасно
    } else {
      console.log("Токен не найден, пользователь не авторизован");
    }

    this.isAuthChecked = true;
    console.log(
      "Проверка авторизации завершена, isAuthenticated:",
      this.isAuthenticated
    );
  }

  async loadUserProfile() {
    if (!this.token) {
      console.log("loadUserProfile: токен не найден");
      return;
    }

    console.log(
      "loadUserProfile: загружаем профиль с токеном:",
      this.token.substring(0, 10) + "..."
    );

    try {
      // ⬇️ lazy import API здесь
      const { api } = await import("@shared/api/axios");
      const response = await api.get("/auth/profile/");
      console.log("loadUserProfile: профиль загружен успешно:", response.data);
      runInAction(() => {
        this.user = response.data;
      });
    } catch (error: any) {
      console.error("loadUserProfile: ошибка загрузки профиля:", error);
      console.error("Статус:", error.response?.status);
      console.error("Данные:", error.response?.data);
      this.logout(); // вызываем logout, если API недоступен или токен невалиден
    }
  }

  async signIn(dto: SignInDto) {
    console.log("=== ВХОД В СИСТЕМУ ===");
    console.log("Данные для входа:", { email: dto.email, password: "***" });

    this.loading = true;
    this.error = null;
    try {
      const { api } = await import("@shared/api/axios");
      const { data } = await api.post<AuthResponse>("/auth/login/", dto);
      console.log("signIn: ответ от API получен:", {
        user: data.user?.email,
        token: data.token ? `${data.token.substring(0, 10)}...` : "не найден",
      });

      runInAction(() => {
        this.user = data.user;
        this.token = data.token;
        saveToken(data.token);
        this.isAuthChecked = true;
      });

      console.log("signIn: данные сохранены в store");
      console.log("signIn: токен сохранен в localStorage");

      await this.loadUserProfile();
      return true;
    } catch (e: any) {
      console.error("signIn: ошибка входа:", e);
      console.error("Статус:", e.response?.status);
      console.error("Данные:", e.response?.data);
      runInAction(() => {
        this.error = "Ошибка входа";
      });
      return false;
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  async signUp(
    dto: SignUpDto
  ): Promise<{ success: true } | { success: false; error: string }> {
    this.loading = true;
    this.error = null;

    try {
      const { api } = await import("@shared/api/axios");
      const { data } = await api.post<AuthResponse>("/auth/register/", dto);

      runInAction(() => {
        this.user = data.user;
        this.token = data.token;
        saveToken(data.token);
        this.isAuthChecked = true;
      });

      await this.loadUserProfile();

      return { success: true };
    } catch (e: any) {
      console.error("=== signUp: ошибка регистрации ===");
      console.error("Axios error object:", e);
      console.error("Статус:", e.response?.status);
      console.error("Данные:", e.response?.data);

      let errorMessage = "Ошибка регистрации. Попробуйте позже.";

      const responseData = e?.response?.data;

      if (
        e.response?.status === 400 &&
        responseData &&
        typeof responseData === "object"
      ) {
        try {
          const messages: string[] = [];

          Object.entries(responseData).forEach(([_, value]) => {
            if (Array.isArray(value)) {
              messages.push(...value);
            } else if (typeof value === "string") {
              messages.push(value);
            } else {
              messages.push(JSON.stringify(value));
            }
          });

          if (messages.length > 0) {
            errorMessage = messages.join(" ");
          }
        } catch (parseError) {
          console.warn("Не удалось разобрать ошибки:", parseError);
        }
      }

      runInAction(() => {
        this.error = errorMessage;
      });

      return { success: false, error: errorMessage };
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  logout() {
    console.log("=== ВЫХОД ИЗ СИСТЕМЫ ===");
    console.log("Текущий пользователь:", this.user?.email);
    console.log(
      "Текущий токен:",
      this.token ? `${this.token.substring(0, 10)}...` : "не найден"
    );

    this.user = null;
    this.token = null;
    this.isAuthChecked = true;
    removeToken();

    console.log("Выход завершен, токен удален из localStorage");
  }

  get isAuthenticated() {
    const authenticated = !!this.token;
    console.log(
      "isAuthenticated getter вызван, результат:",
      authenticated,
      "токен:",
      this.token ? `${this.token.substring(0, 10)}...` : "не найден"
    );
    return authenticated;
  }

  get userDisplayName() {
    if (!this.user) return "";
    if (this.user.first_name && this.user.last_name) {
      return `${this.user.first_name} ${this.user.last_name}`;
    }
    return this.user.first_name || this.user.username || this.user.email;
  }

  get userInitials() {
    if (!this.user) return "";
    const firstName = this.user.first_name?.[0] || "";
    const lastName = this.user.last_name?.[0] || "";
    return (firstName + lastName).toUpperCase();
  }
}

export const authStore = new AuthStore();
