const PlanetNineGateway = require('planet-nine-gateway-framework')

let gateway = new PlanetNineGateway()

const keys = PlanetNineGateway.generateKeys('testSeed')

gateway.getKeys = function() {
  return keys
}

gateway.ongoingGateway({gatewayName: 'testGateway', publicKey: gateway.keys.publicKey})

const username = 'testuser12'

gateway.getUserIdByUsername(username)
  .then(userId => {
    console.log(`asking for ongoing gateway authorization for user ${userId}`);
    return gateway.askForOngoingGatewayUsage(userId)
  })
  .then(user => {
    console.log('authorization received')
    console.log('user object:', user)
  })
  .catch(err => console.log(err))
