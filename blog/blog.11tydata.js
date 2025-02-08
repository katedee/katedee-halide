module.exports = function() {
	return {
		eleventyComputed: {
      permalink(data) {
        // If the page is in `draft:true` mode, don't write it to disk...
        if (data.draft) {
          return {};
        }
        // Return the original value (which could be `false`, or a custom value,
        // or default empty string).
        return `/blog/${this.slugify(data.title)}/`;
      },
      eleventyExcludeFromCollections(data) {
        // If the page is in `draft:true` mode, or has `permalink:false` exclude
        // it from any collections since it shouldn't be visible anywhere.
        if (data.draft || data.permalink === false) {
          return true;
        }
        return data.eleventyExcludeFromCollections;
      },
    },
    layout: "layouts/blog_post.njk",
    tags: [
      "blog"
    ],
	}
}