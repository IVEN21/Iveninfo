export const infos = [
  {
    id: 0,
    title: "Who am I?",
    info:
      "Hi, my name is Iven Zhang.  I’m currently enrolled at Lehigh University as a sophomore. A Hard-working engineering undergraduate, who's pursuing a bachelor degree in Computer Science Engineering. Looking forward into the profession of computer science realm.",
  },
  {
    id: 1,
    title: "Training",
    info:
      "Alone with the courses taught in the university, I often seek more knowledge and extra skills on the internet. Over the past 6 months, I had mastered substantial amount of knowledge in javascript, node.js, SQL, and web designs from scratch. I define myself as a strong independent learner and developer. ",
  },
  {
    id: 2,
    title: "Hobbies",
    info:
      "Besides coding on my daily basis, I like to engage in sports. I play tennis and I served as a tennis captain in high school. I also engage in music, guitar and piano are my favorite instruments. ",
  },

];

export function getInfos() {
  return infos.filter((g) => g);
}
