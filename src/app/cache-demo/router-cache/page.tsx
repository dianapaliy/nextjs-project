import Link from "next/link";

export default function RouterCachePage() {
  const time = new Date().toLocaleTimeString();

  // Переходим по ссылке, нажимаем Назад и видим, что "время" не изменилось.
  // Страница взята из памяти браузера

  return (
    <>
      <p>Время: {time}</p>

      <Link href="/cache-demo/router-cache/another-page" prefetch={true}>
        Перейти на другую страницу
      </Link>
    </>
  );
}
