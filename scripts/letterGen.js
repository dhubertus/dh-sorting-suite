
function randomLetGenerator(length) {
  let template = 'abcdefghigklmnopqrstuvwxyz'
  let array = []

  for (let i = 0; i < length; i++) {
    array.push(template.charAt(Math.floor(Math.random() * template.length)));
  }
  return array
}

export default randomLetGenerator
