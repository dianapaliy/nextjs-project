"use client";

import { useActionState } from "react";
import { sendFeedback } from "./actions";
import { useParams } from "next/navigation";

type FeedbackResult = {
  success: boolean;
  message: string;
};

const initialState: FeedbackResult = {
  success: false,
  message: "",
};

export default function FeedbackPage() {
  const { id: movieId } = useParams();

  const [state, formAction] = useActionState<FeedbackResult, FormData>(
    async (_state, formData) => {
      return await sendFeedback(formData);
    },
    initialState
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    formAction(formData);

    if (state.success) {
      e.currentTarget.reset();
    }
  };

  return (
    <form
      action={`/movies/${movieId}/feedback`}
      method="post"
      onSubmit={handleSubmit}
      className="max-w-2xl pl-10 pr-10 mt-10"
    >
      <h1 className="text-2xl font-bold mb-4">Оставьте отзыв</h1>

      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        required
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <input
        type="email"
        name="email"
        placeholder="Ваш email"
        required
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <textarea
        name="review"
        placeholder="Ваш отзыв"
        minLength={10}
        maxLength={300}
        required
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      ></textarea>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded-md"
      >
        Отправить
      </button>

      {state?.message && (
        <p
          className={`mt-2 ${
            state.success ? "text-green-500" : "text-red-500"
          }`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
