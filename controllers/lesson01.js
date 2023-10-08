const nickJara = (req, res) => res.send('Nick Jara')

const isaiasZuniga = (req, res) => res.send('Isaias Zuñiga')

const rosangelicaVasquez = (req, res) => res.send('Rosangelica Vasquez')

const notFound = (req, res) => res.send('404 not found...')

module.exports = {
  nickJara,
  isaiasZuniga,
  rosangelicaVasquez,
  notFound
}
