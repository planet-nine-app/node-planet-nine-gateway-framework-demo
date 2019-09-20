const PlanetNineGateway = require('planet-nine-gateway-framework')

let gateway = new PlanetNineGateway()

const keys = PlanetNineGateway.generateKeys('testSeed')

gateway.getKeys = function() {
  return keys
}

gateway.ongoingGateway({gatewayName: 'testGateway', publicKey: gateway.keys.publicKey})

const userId = 157

gateway.getUser(userId)
  .then(user => {
    console.log('user before Power use', user)
    const usePowerOpts = {
      totalPower: 200, //Amount of power user spends
      partnerName: "testuser12", //Account name for partner Nineum
      user: user,
    }  
    return gateway.usePowerAtOngoingGateway(usePowerOpts)  
  })
  .then(user => console.log('user after Power use', user))
  .catch(err => console.log(err))
