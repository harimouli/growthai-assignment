export const generateHeadline = (name, location) => {
  const  headLine = seoHeadlines[Math.floor(Math.random() * seoHeadlines.length)];
  return headLine.replaceAll('{name}', name).replaceAll('{location}', location);
};