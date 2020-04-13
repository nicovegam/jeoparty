const categories = [
  {
    name: "Cine",
    questions: [
      {
        value: "500",
        question: "Quien gano el Oscar a mejor pelicula en el año 1941?",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d9/How_Green_Was_My_Valley_%281941_poster_-_Style_B%29.jpg",
        answer: "How Green Was My Valley",
      },
      { value: "400" },
      { value: "300" },
      { value: "200" },
      { value: "100" },
    ],
  },
  {
    name: "Deporte",
    questions: [
      { value: "500" },
      { value: "400" },
      { value: "300" },
      { value: "200" },
      { value: "100" },
    ],
  },
  {
    name: "Musica",
    questions: [
      { value: "500" },
      { value: "400" },
      { value: "300" },
      { value: "200" },
      { value: "100" },
    ],
  },
  {
    name: "Historia",
    questions: [
      { value: "500" },
      { value: "400" },
      { value: "300" },
      { value: "200" },
      { value: "100" },
    ],
  },
  {
    name: "Ciencia",
    questions: [
      { value: "500" },
      { value: "400" },
      { value: "300" },
      { value: "200" },
      { value: "100" },
    ],
  },
  {
    name: "Geografia",
    questions: [
      { value: "500" },
      { value: "400" },
      { value: "300" },
      { value: "200" },
      { value: "100" },
    ],
  },
];

export function getCategories() {
  return categories;
}

export function getCategory(name) {
  return categories.find((c) => c.name === name);
}

export function getQuestion(name, value) {
  const category = getCategory(name);
  return category ? category.questions.find((q) => q.value === value) : null;
}
