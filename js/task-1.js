function slugify(title) {
  const arrayStr = title.split(" ");
  const strForSlug = arrayStr.join("-");
  const strForSlugToLowerCase = strForSlug.toLowerCase();
  return strForSlugToLowerCase;
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
