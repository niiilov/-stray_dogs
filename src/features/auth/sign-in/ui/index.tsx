import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

import { Button } from "@shared/ui/button";
import { InputWithLabel } from "@shared/ui/inputLabel";
import { InputWithPassword } from "@shared/ui/inputPassword";
import { Alert, AlertTitle, AlertDescription } from "@shared/ui/alert";

import { useAuth } from "@features/auth/hooks/useAuth";
import clsx from "clsx";

export const SignInForm = () => {
  const { signIn, loading } = useAuth();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);
    setGeneralError(null);

    try {
      const success = await signIn({ login, password });

      if (success) {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      } else {
        setError("Неверный логин или пароль. Попробуйте снова.");
      }
    } catch (err) {
      setGeneralError(
        "Не удалось выполнить вход. Пожалуйста, попробуйте позже."
      );
      console.error("Ошибка входа:", err);
    }
  };

  useEffect(() => {
    if (error || generalError) {
      const timer = setTimeout(() => {
        setError(null);
        setGeneralError(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [error, generalError]);

  return (
    <>
      {/* ===== ВСПЛЫВАЮЩИЙ БЛОК С ОШИБКОЙ ===== */}
      {(error || generalError) && (
        <div
          className={clsx(
            "fixed top-4 left-1/2 z-50 transform -translate-x-1/2 transition-all duration-300",
            "w-[90%] max-w-md"
          )}
        >
          <Alert variant="destructive">
            <AlertTitle>
              {generalError ? "Что-то пошло не так" : "Ошибка входа"}
            </AlertTitle>
            <AlertDescription>{generalError || error}</AlertDescription>
          </Alert>
        </div>
      )}

      {/* ===== ФОРМА ВХОДА ===== */}
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 rounded-xl px-4 py-6 bg-neutral-100 dark:bg-[#151B28] w-full max-w-[350px]"
      >
        <h3 className="text-center text-2xl font-semibold">Вход</h3>

        <div className="w-full">
          <InputWithLabel
            label="Логин"
            id="login"
            type="text"
            placeholder="Введите ваш логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>

        <InputWithPassword
          label="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Входим..." : "Войти"}
        </Button>

        <span className="text-center text-sm text-gray-400 w-full">
          Нет аккаунта?{" "}
          <Link className="text-[#167EE6] underline" to="/sign-up">
            Регистрация
          </Link>
        </span>
      </form>
    </>
  );
};

