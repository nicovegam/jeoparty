import { retrieveCategories, storeCategories } from "./storage";

export function setCategories(categories) {
  storeCategories(categories);
}

export function getCategories() {
  return retrieveCategories();
}

export function getCategoryByName(name) {
  return getCategories().find((c) => c.name === name);
}

export function getQuestion(name, value) {
  const category = getCategoryByName(name);
  return category ? category.questions.find((q) => q.value === value) : null;
}

export function setQuestionUsed(name, value, isUsed) {
  const categories = retrieveCategories();
  const category = categories.find((c) => c.name === name);
  const question = category.questions.find((q) => q.value === value);
  question.isUsed = isUsed;
  storeCategories(categories);
}
