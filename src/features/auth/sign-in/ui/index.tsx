// import { useEffect, useState } from "react";
// // import { observer } from "mobx-react-lite";
// import { useLocation, useNavigate, Link } from "react-router-dom";

// // import { Button } from "@shared/ui/button";
// // import { InputWithLabel } from "@shared/ui/inputWithLabel";
// // import { InputWithPassword } from "@shared/ui/InputWithPassword";
// // import { Alert, AlertTitle, AlertDescription } from "@shared/ui/alert";

// import { useAuth } from "@features/auth/hooks/useAuth";
// import clsx from "clsx";

// export const SignInForm = () => {
//   const { signIn, loading } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [error, setError] = useState<string | null>(null); // ошибка авторизации (неверный email/пароль)
//   const [generalError, setGeneralError] = useState<string | null>(null); // прочие ошибки

//   const location = useLocation();
//   const navigate = useNavigate();

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     setError(null);
//     setGeneralError(null);

//     try {
//       const success = await signIn({ email, password });

//       if (success) {
//         const from = location.state?.from?.pathname || "/";
//         navigate(from, { replace: true });
//       } else {
//         setError("Неверная почта или пароль. Попробуйте снова.");
//       }
//     } catch (err) {
//       setGeneralError(
//         "Не удалось выполнить вход. Пожалуйста, попробуйте позже."
//       );
//       console.error("Ошибка входа:", err);
//     }
//   };

//   useEffect(() => {
//     if (error || generalError) {
//       const timer = setTimeout(() => {
//         setError(null);
//         setGeneralError(null);
//       }, 4000);
//       return () => clearTimeout(timer);
//     }
//   }, [error, generalError]);

//   return (
//     <>
//       {/* ===== ВСПЛЫВАЮЩИЙ БЛОК С ОШИБКОЙ ===== */}
//       {(error || generalError) && (
//         <div
//           className={clsx(
//             "fixed top-4 left-1/2 z-50 transform -translate-x-1/2 transition-all duration-300",
//             "w-[90%] max-w-md"
//           )}
//         >
//           <Alert variant="destructive">
//             <AlertTitle>
//               {generalError ? "Что-то пошло не так" : "Ошибка входа"}
//             </AlertTitle>
//             <AlertDescription>{generalError || error}</AlertDescription>
//           </Alert>
//         </div>
//       )}

//       {/* ===== ФОРМА ВХОДА ===== */}
//       <form
//         onSubmit={onSubmit}
//         className="flex flex-col gap-4 rounded-xl px-4 py-6 bg-neutral-100 dark:bg-[#151B28] w-full max-w-[350px]"
//       >
//         <h3 className="text-center text-2xl font-semibold">Вход</h3>

//         <div className="w-full">
//           <InputWithLabel
//             label="Почта"
//             id="email"
//             type="email"
//             placeholder="Введите вашу почту"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <InputWithPassword
//           label="Пароль"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <Button type="submit" className="w-full" disabled={loading}>
//           {loading ? "Входим..." : "Войти"}
//         </Button>

//         <span className="text-center text-sm text-gray-400 w-full">
//           Нет аккаунта?{" "}
//           <Link className="text-[#167EE6] underline" to="/sign-up">
//             Регистрация
//           </Link>
//         </span>
//       </form>
//     </>
//   );
// });

import React from "react";

export const SignInForm = () => {
  return <div>SignInForm</div>;
};
