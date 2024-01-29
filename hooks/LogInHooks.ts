import { create } from "zustand";

type LogInHook = {
  token: any;
  auth: (username: string, password: string) => Promise<void>;
};

export const useLogIn = create<LogInHook>((set) => ({
  token: "",

  auth: async (username: string, password: string) => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(`Errore nella richiesta: ${response.status} - ${response.statusText}`);
      }

      const json = await response.json();

      if (json.token) {
        set(() => ({ token: json.token }));
      } else {
        throw new Error("Token non presente nella risposta");
      }
    } catch (error) {
      console.error("Errore durante l'autenticazione:", error);
      throw error;
    }
  },
}));
