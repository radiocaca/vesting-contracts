const RacaVesting = artifacts.require('RacaVesting.sol');

module.exports = function (deployer) {
  deployer.deploy(RacaVesting);
};
