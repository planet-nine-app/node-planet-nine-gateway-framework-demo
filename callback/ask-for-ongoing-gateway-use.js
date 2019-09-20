const PlanetNineGateway = require('planet-nine-gateway-framework')

let gateway = new PlanetNineGateway()

const keys = PlanetNineGateway.generateKeys('testSeed')

gateway.getKeys = function() {
  return keys
}

gateway.ongoingGateway({gatewayName: 'testGateway', publicKey: gateway.keys.publicKey})

const username = 'testuser12'

gateway.getUserIdByUsername(username, (err, userId) => {
  console.log(`asking for ongoing gateway authorization for user ${userId}`);
  if (err) return console.log(err)
  gateway.askForOngoingGatewayUsage(userId, (erro, user) => {
    if (erro) return console.log(erro)
    console.log('user', user)
  })
})  
