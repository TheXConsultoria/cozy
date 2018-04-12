"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");
const appDir = path.dirname(require.main.filename);
class AwsS3Controller {
    getObject(configuration, ok, reject) {
        let pathToLocalFbxFile = appDir + '/assets/' + configuration.targetFileName;
        let s3 = new AWS.S3({ region: configuration.region });
        var downloadSucceded = true;
        var file = fs.createWriteStream(pathToLocalFbxFile, { encoding: 'utf16le' });
        s3.getObject(configuration.getAwsOptions())
            .on('error', (err) => {
            downloadSucceded = false;
            reject(err);
        })
            .on('httpData', (chunk) => {
            file.write(chunk);
        })
            .on('httpDone', () => {
            file.end();
        })
            .on('complete', (fullResponse) => {
            if (!downloadSucceded) {
                reject("Nok");
                return;
            }
            const endpointInfo = fullResponse["request"].httpRequest.endpoint.href;
            ok(endpointInfo, pathToLocalFbxFile);
        })
            .send();
    }
}
exports.AwsS3Controller = AwsS3Controller;
//# sourceMappingURL=AwsS3Controller.js.map