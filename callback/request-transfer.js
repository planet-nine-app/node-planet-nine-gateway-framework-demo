const PlanetNineGateway = require('planet-nine-gateway-framework')

let gateway = new PlanetNineGateway()

const keys = PlanetNineGateway.generateKeys('testSeed')

gateway.getKeys = function() {
  return keys
}

gateway.ongoingGateway({gatewayName: 'testGateway', publicKey: gateway.keys.publicKey})

const sourceUserId = 157

gateway.getUser(sourceUserId, (err, sourceUser) => {
  if (err) return console.log(err)
  const requestTransferObj = {
    sourceUser: sourceUser,
    destinationUserId: 203, //replace with userId for destination user
    nineumUniqueIds: [sourceUser.nineum[0]], //replace with Nineum to be transferred
  }
  gateway.requestTransfer(requestTransferObj, (err, trasnferRequest) => {
    if (err) console.log(err)
    console.log('trasnferRequest', trasnferRequest)
  })
})