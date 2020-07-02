module.exports = function (context) {
  const {filePath, log} = context;
  let {content} = context;

  return changeFilePathExtension(context) + filePath.
}

/**
 * Change extension to `.css` so that Portal may serve the resulting
 * CSS content.
 * @param {object} context
 */
function changeFilePathExtension(context) {
  let {filePath} = context;
  let {content} = context;

  return content.replace(`.scss`, `.css`);
}