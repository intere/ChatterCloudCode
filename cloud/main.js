var fs = require('fs');

var layerProviderID = 'layer:///providers/e0096bde-2d6c-11e5-903b-b6da1c001f34';
var layerKeyID = 'layer:///keys/d6799b90-2e82-11e5-b6c0-4290000000fb';
var privateKey = fs.readFileSync('cloud/layer-parse-module/keys/layer-key.js');

var layer = require('cloud/layer-parse-module/layer-module.js');
layer.initialize(layerProviderID, layerKeyID, privateKey);

Parse.Cloud.define("generateToken", function(request, response) {
    var userID = request.params.userID;
    var nonce = request.params.nonce;
    if (!userID) throw new Error('Missing userID parameter');
    if (!nonce) throw new Error('Missing nonce parameter');
        response.success(layer.layerIdentityToken(userID, nonce));
});
