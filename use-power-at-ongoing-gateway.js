const PlanetNineGateway = require('../planet-nine-gateway')
const crypto = require('planet-nine-crypto')

let gateway = new PlanetNineGateway()

const keys = crypto.generateKeys('testSeed')

crypto.getKeys = function() {
  return keys
}

gateway.ongoingGateway({gatewayName: 'testGateway', publicKey: keys.publicKey})

gateway.getUser(157, (err, user) => {
  if (err) return console.log(err)
  console.log('user before Power use', user)
  const usePowerOpts = {
    totalPower: 200,
    partnerName: "testuser12",
    user: user,
  }  
  gateway.usePowerAtOngoingGateway(usePowerOpts, (err, user) => {
    if (err) {
      console.log(err)
    }
    console.log('user after Power use', user)
  })
})
