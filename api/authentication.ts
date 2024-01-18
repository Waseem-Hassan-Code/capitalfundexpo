import client from "./client";

const loginEndPoint = "/login";
export const userSignin = client.post(loginEndPoint);

const addSomething = (req: any) => {
  const data = new FormData();
  data.append("title", req.title);
};
