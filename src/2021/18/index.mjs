export default function fixFiles(files) {
  const map = {}

  return files.map((filename) => {
    if (!Object.hasOwn(map, filename)) {
      map[filename] = 1

      return filename
    }

    return `${filename}(${map[filename]++})`
  })
}
