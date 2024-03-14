import axios from "axios";

// export const fetchDelete = async (id: any) => {
//   const route = "/todos/";
//   const url = host + route + id;

//   const res = await fetch(url, {
//     method: "DELETE",
//   })
//     .then((r: any) => r.ok)
//     .catch((r: any) => r.ok);

//   return res;
// };

// export const fetchCreate = async (todoItem: any) => {
//   const route = "/todos";
//   const url = host + route;

//   const res = await fetch(url, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(todoItem),
//   })
//     .then((r: any) => r.ok)
//     .catch((r: any) => r.ok);

//   return res;
// };

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const fetchGet = (url: string, params: any) => {
  return instance.get(url, { params }).then((res) => res);
};

export const post = (url: string, payload: any) => {
  return instance.post(url, payload).then((res) => res.data);
};

export const deleteReq = (id: any) => {
  return instance.delete("/todos/" + id);
};

export const fetchPatch = (url: string, payload: any) => {
  console.log("in patch !!");
  return instance.patch(url, payload).then((res) => res.data);
};
