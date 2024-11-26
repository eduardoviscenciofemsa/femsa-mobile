type User = {
  username: string;
  password: string;
};

export class UserService {
  async login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "admin") {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  }
}
