module.exports = (config) => {
    config.addPassthroughCopy('./static');
    config.addPassthroughCopy('./src/styles/**/*');
    config.addPassthroughCopy('./src/*');
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist',
        },
        passthroughFileCopy: true,
    };
};
