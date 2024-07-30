// Expects url as "/[url]" (or just "/") to replace href value on links for static pages

// interface prodUrl(
//   url: string
// )

const prodUrl = (url) =>
  process.env.NODE_ENV === "production" ? (url === "/" ? "/index.html" : `${url}.html`) : url;

export default prodUrl;
