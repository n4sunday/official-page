/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
  }) => {
    actions.setWebpackConfig({
      module: {
        rules:
          stage === "build-html"
            ? [
                {
                  test: /aos/,
                  use: loaders.null(),
                },
                {
                  test: /canvas/,
                  use: loaders.null(),
                },
                {
                  test: /jsdom/,
                  use: loaders.null(),
                },
                {
                  test: /xmldom/,
                  use: loaders.null(),
                },
              ]
            : [],
      },
    })
  }
  