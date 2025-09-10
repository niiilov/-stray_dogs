// import { useState, useEffect } from "react";
// import { observer } from "mobx-react-lite";
// import { Link } from "react-router-dom";

// import { Button } from "@shared/ui/button";
// import { InputWithLabel } from "@shared/ui/inputWithLabel";
// import { InputWithPassword } from "@shared/ui/InputWithPassword";
// import { Alert, AlertTitle, AlertDescription } from "@shared/ui/alert";

// import { useAuth } from "@features/auth/hooks/useAuth";
// import clsx from "clsx";

// export const SignUpForm = observer(() => {
//   const { signUp, loading } = useAuth();

//   const [email, setEmail] = useState("");
//   const [username, setUsername] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const [error, setError] = useState<string | null>(null);
//   const [serverError, setServerError] = useState<string | null>(null);

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // КЛИЕНТСКАЯ ВАЛИДАЦИЯ
//     if (password.length < 8) {
//       setError("Пароль должен содержать минимум 8 символов.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setError("Пароли не совпадают.");
//       return;
//     }

//     setError(null);
//     setServerError(null);

//     try {
//       const result = await signUp({
//         email,
//         username,
//         first_name: firstName,
//         last_name: lastName,
//         password,
//         password_confirm: confirmPassword,
//       });

//       if (!result.success) {
//         setServerError(result.error); // просто выводим сообщение из signUp
//       }
//     } catch (err) {
//       console.error("Ошибка регистрации:", err);
//       setServerError("Не удалось выполнить регистрацию. Попробуйте позже.");
//     }
//   };

//   // Автоматическое скрытие уведомления
//   useEffect(() => {
//     if (error || serverError) {
//       const timer = setTimeout(() => {
//         setError(null);
//         setServerError(null);
//       }, 4000);
//       return () => clearTimeout(timer);
//     }
//   }, [error, serverError]);

//   return (
//     <>
//       {/* ВСПЛЫВАЮЩЕЕ УВЕДОМЛЕНИЕ ОБ ОШИБКЕ */}
//       {(error || serverError) && (
//         <div
//           className={clsx(
//             "fixed top-4 left-1/2 z-50 transform -translate-x-1/2 transition-all duration-300",
//             "w-[90%] max-w-md"
//           )}
//         >
//           <Alert variant="destructive">
//             <AlertTitle>
//               {error ? "Ошибка валидации" : "Ошибка регистрации"}
//             </AlertTitle>
//             <AlertDescription>{error || serverError}</AlertDescription>
//           </Alert>
//         </div>
//       )}

//       {/* ФОРМА */}
//       <form
//         onSubmit={onSubmit}
//         className="flex flex-col py-6 px-6 bg-neutral-100 dark:bg-[#151B28] rounded-xl gap-4 w-full max-w-[350px]"
//       >
//         <h3 className="text-center text-2xl font-semibold">Регистрация</h3>
//         <InputWithLabel
//           label="Имя пользователя"
//           id="username"
//           type="text"
//           placeholder="Введите псевдоним"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />

//         <InputWithLabel
//           label="Имя"
//           id="firstName"
//           type="text"
//           placeholder="Введите ваше имя"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           required
//         />

//         <InputWithLabel
//           label="Фамилия"
//           id="lastName"
//           type="text"
//           placeholder="Введите вашу фамилию"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           required
//         />

//         <InputWithLabel
//           label="Почта"
//           id="email"
//           type="email"
//           placeholder="Введите вашу почту"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <InputWithPassword
//           label="Пароль"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <InputWithPassword
//           label="Подтвердите пароль"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           required
//         />

//         <Button className="w-full" disabled={loading}>
//           {loading ? "Регистрация..." : "Зарегистрироваться"}
//         </Button>

//         <span className="text-center text-sm text-gray-400 w-full">
//           Уже есть аккаунт?{" "}
//           <Link className="text-[#167EE6] underline" to="/sign-in">
//             Вход
//           </Link>
//         </span>
//       </form>
//     </>
//   );
// });

import React from "react";

export const SignUpForm = () => {
  return <div>SignUpForm</div>;
};
