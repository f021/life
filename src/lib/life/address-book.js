import Maps from './maps'

// getAddressBook :: { Playground } -> { Pattern } -> [ [ Int ] ]
const getAddressBook = ({
  width, height, tor,
  w, h, startPoint, arr
}) =>
  Maps({ w: width, h: height, tor }).getIndexMaps(
    Maps({ w, h }).getVectorMap(arr, startPoint))

export default getAddressBook
