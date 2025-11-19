import { StaticImageData } from "next/image";
import poster1 from "@/public/posters/1.webp";
import poster2 from "@/public/posters/2.webp";
import poster3 from "@/public/posters/3.webp";
import poster4 from "@/public/posters/4.webp";
import poster5 from "@/public/posters/5.webp";
import poster6 from "@/public/posters/6.webp";

export type MoviesPoster = {
  id: string;
  title: string;
  src: StaticImageData;
  rating: number;
  year: number;
  description: string;
  reviews?: Review[];
};

type Review = {
  id: string;
  name: string;
  review: string;
};

const moviesPosters: MoviesPoster[] = [
  {
    id: "1",
    title: "(Не)искусственный интеллект",
    src: poster1,
    rating: 7,
    year: 2025,
    description:
      "Первокурсник случайно застревает в робокостюме, оснащённом ИИ. Сай-фай-комедия со звездой «Слова пацана»",
    reviews: [
      {
        id: "1",
        name: "Пользователь 1",
        review: "Отзыв 1",
      },
      {
        id: "2",
        name: "Пользователь 2",
        review: "Отзыв 2",
      },
    ],
  },
  {
    id: "2",
    title: "Кракен",
    src: poster2,
    rating: 7,
    year: 2025,
    description:
      "Подводники сталкиваются с морским монстром во время важной миссии. Фантастический экшен с Александром Петровым",
    reviews: [
      {
        id: "1",
        name: "Пользователь 1",
        review: "Отзыв 1",
      },
    ],
  },
  {
    id: "3",
    title: "Хроники русской революции",
    src: poster3,
    rating: 8,
    year: 2025,
    description:
      "Эти 20 лет перевернули Россию — и весь мир. Кинороман Андрея Кончаловского с мощным актёрским составом",
    reviews: [
      {
        id: "1",
        name: "Пользователь 1",
        review: "Отзыв 1",
      },
      {
        id: "2",
        name: "Пользователь 2",
        review: "Отзыв 2",
      },
      {
        id: "3",
        name: "Пользователь 3",
        review: "Отзыв 3",
      },
    ],
  },
  {
    id: "4",
    title: "Нюрнбергская история",
    src: poster4,
    rating: 6,
    year: 2025,
    description:
      "1945 год. В Нюрнберге начинает работу Международный военный трибунал. На суд, который впоследствии назовут Процессом Века, съезжается огромное количество людей со всего мира: город переполнен журналистами, адвокатами, переводчиками, свидетелями и множеством участников и сотрудников процесса.",
  },
  {
    id: "5",
    title: "Камбэк",
    src: poster5,
    rating: 6,
    year: 2025,
    description:
      "Школьники помогают бродяге вспомнить прошлое. Драма о поиске себя — с Александром Петровым и треками 2000-х",
    reviews: [
      {
        id: "1",
        name: "Пользователь 1",
        review: "Отзыв 1",
      },
    ],
  },
  {
    id: "6",
    title: "Сердцебиение",
    src: poster6,
    rating: 6,
    year: 2025,
    description:
      "Аслы Гюнеш с младенчества преследует заболевание сердца. Однажды после неприятного разговора с матерью её возлюбленного Эмре у девушки случается сердечный приступ, и её доставляют в больницу. В это же время в больнице оказывается Мелике Алкан из богатой семьи, которая попала в автомобильную аварию. Врачам не удаётся спасти Мелике, и они пересаживают Аслы её сердце.",
    reviews: [
      {
        id: "1",
        name: "Пользователь 1",
        review: "Отзыв 1",
      },
      {
        id: "2",
        name: "Пользователь 2",
        review: "Отзыв 2",
      },
      {
        id: "3",
        name: "Пользователь 3",
        review: "Отзыв 3",
      },
      {
        id: "4",
        name: "Пользователь 4",
        review: "Отзыв 4",
      },
    ],
  },
];

export default moviesPosters;
