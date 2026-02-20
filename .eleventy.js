module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");
eleventyConfig.addCollection("products", function(collectionApi) {
  return collectionApi.getFilteredByGlob("products/*.md");
});
eleventyConfig.addCollection("featured", function(collectionApi) {
  return collectionApi
    .getFilteredByGlob("products/*.md")
    .filter(item => item.data.featured === true);
});

eleventyConfig.addCollection("categories", function(collectionApi) {
  return collectionApi.getFilteredByTag("category");
});

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};