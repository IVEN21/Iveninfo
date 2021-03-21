export const infos = [
  {
    title: "Who am I?",
    info:
    "Hi, my name is Iven Zhang.  I’m currently enrolling at Lehigh University as a sophomore. A Hard-working undergraduate engineer, who's pursuing a bachelor degree in Computer Science Engineering. I’m Looking forward into the profession of the computer science realm.",
  },
  {
    title: "Learning Objects",
    info:
    "Alone with the courses taught in the university, I often seek more knowledge and coding skills on the internet. Over the past year, I have mastered a substantial amount of knowledge in frontend and backend web development. I define myself as a strong independent learner and developer.",},
  {
    title: "Hobbies",
    info:
    "When programming on a daily basis is burning all my brain cells, I  often spend time in photographing objects as it can not only relax but also conceive creative ideas in my mind. I’m also a passionate music learner; guitar and piano are my favorite instruments :)" },

];

export function getInfos() {
  return infos.filter((g) => g);
}
