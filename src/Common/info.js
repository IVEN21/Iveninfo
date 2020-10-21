export const infos = [
  {
    id: 0,
    title: "Who Am I",
    info:
      "Hi, my name is Iven Zhang.  I’m currently enrolled in Lehigh University as a sophsomore. A Hard-working engineering undergraduate and pursuing a bachelor of science degree in Computer Science Engineering. My dream is to become a software engineer, whether it’s a game developer, a fullstack web developer, or an application developer. ",
  },
  {
    id: 1,
    title: "Training",
    info:
      "Alone with the courses taught in the university, I often seek more knowledge and extra skills on the internet. Over the past 10 months, I had master decent amount of knowledge in javascript, node.js, SQL, and web designs from scratch. I define myself as a strong independent learner and developer. ",
  },
  {
    id: 2,
    title: "Hobbies",
    info:
      "Besides coding on daily basis, I like to engage in sport, tennis and basketball . I was once the tennis captain in high school. I also engage in music, where guitar and piano are my relax buddies ",
  },
  {
    id: 3,
    title: "Game",
    info:
      "One of most my enthusiastic game I ever played is League of Legend. Not only I enjoy playing the game, but I also wanted to be part of the game development in Riot Company. With my knowledge in computer science and the game itself, I think I can make an impact on League.",
  },
];

export function getInfos() {
  return infos.filter((g) => g);
}
