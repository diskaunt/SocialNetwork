import profileReducer, { addPost, deletePost } from "./profile-reduser";

let state = {
  posts: [
    {
      id: 0,
      name: "DiggerNigger",
      date: new Date(Math.round(new Date() * Math.random())).toLocaleString(
        "ru-RU"
      ),
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likesCount: Math.round(Math.random() * 100),
    },
    {
      id: 1,
      name: "DiggerNigger",
      date: new Date(Math.round(new Date() * Math.random())).toLocaleString(
        "ru-RU"
      ),
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likesCount: Math.round(Math.random() * 100),
    },
    {
      id: 2,
      name: "DiggerNigger",
      date: new Date(Math.round(new Date() * Math.random())).toLocaleString(
        "ru-RU"
      ),
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      likesCount: Math.round(Math.random() * 100),
    },
  ],
};

it("after add post length of posts should be increment", () => {
  let action = addPost("it-kamasutra.com", "Bober-Kurva");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
});

it("message of posts should be correct", () => {
  let action = addPost("it-kamasutra.com", "Bober-Kurva");

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);
  expect(newState.posts[3].message).toBe("it-kamasutra.com");
});

it("after delete the post length of posts should be decrement", () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});

it("after delete the post legth shodent be decrement if id is incorrect", () => {
	let action = deletePost(1000);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(3);
});
