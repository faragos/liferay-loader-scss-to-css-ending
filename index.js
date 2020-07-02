module.exports = function (context) {
  const {filePath} = context

  return changeFilePathExtension(context)
}

/**
 * Change extension to `.css` so that Portal may serve the resulting
 * CSS content.
 * @param {object} context
 */
function changeFilePathExtension (context) {
  let {content} = context

  return content.replace(`.scss`, `.css`)
}