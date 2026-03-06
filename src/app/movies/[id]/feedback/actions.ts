"use server";

export async function sendFeedback(formData: FormData) {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const review = formData.get("review")?.toString();

  if (!name || !email || !review) {
    return {
      success: false,
      message: "Все поля обязательны для заполнения",
    };
  }

  if (review.length < 10 || review.length > 300) {
    return {
      success: false,
      message: "Отзыв должен быть от 10 до 300 символов",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      success: false,
      message: "Неверный email",
    };
  }

  console.log({ name, email, review });

  return {
    success: true,
    message: "Отзыв успешно отправлен",
  };
}
