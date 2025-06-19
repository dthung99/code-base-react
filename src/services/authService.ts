import type { User } from "../models";

interface CurrentUserResponse {
  id: string;
  email: string;
}

export const authService = {
  url: {
    currentUser: (): string => "/current-user",
  },

  async getCurrentUser(): Promise<User> {
    // TODO: Replace with actual API call
    // const response = await apiClient.get<CurrentUserResponse>('/current-user');
    // return response.data;

    alert(`calling ${this.url.currentUser()}`);

    // Simulate API call with fake data
    const user: CurrentUserResponse = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: "dev_slug_123456789",
          email: "dev@example.com",
        });
      }, 1000);
    });

    // Transform response to User model
    return {
      id: user.id,
      email: user.email,
    } as User;
  },
};
