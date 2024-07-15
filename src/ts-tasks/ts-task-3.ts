// Напишите и типизируйте функцию, выполняющую запрос за данными по переданному URL.
// Выведите их в консоль в формате: "ID: id, Email: email".

interface Comment {
  id: number;
  email: string;
}

export const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

export const getData = async (url: string): Promise<Comment[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data: Comment[] = await response.json();
    return data;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    return [];
  }
};
