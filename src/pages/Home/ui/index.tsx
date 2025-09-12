import { Link } from "react-router-dom";
import { Button } from "@shared/ui/button";

export const Home = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="max-w-[1440px]">
        {/* Заголовок */}
        <h1 className="text-[35px] font-bold leading-tight text-gray-400 md:text-[65px]">
          Центр приема заявок <br/>
          на отлов{" "}
          <span className="text-blue-600 underline">
            безнадзорных животных.
          </span>
        </h1>

        {/* Подзаголовок */}
        <p className="mt-6 text-[14px] text-gray-400 md:text-[35px]">
          Подача заявлений на отлов бездомных собак <br/>
          Официальный портал города Липецк
        </p>

        {/* Кнопка */}
        <div className="mt-8">
          <Link to="/application">
            <Button variant="outline" size="default"
            >
              Подать заявку →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
