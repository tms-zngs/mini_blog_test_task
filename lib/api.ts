import { Post } from "@/types/post";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>("/posts", {
      params: {
        _start: 0,
        _limit: 20,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getSinglePost = async (id: string): Promise<Post> => {
  try {
    const response = await axios.get<Post>(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw error;
  }
};
