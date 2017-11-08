'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tokenize = tokenize;
function tokenize(ops) {
    var retVal = [];
    ops.forEach(function (op) {
        if (typeof op.insert !== 'string') {
            if (op.insert && op.insert.image) {
                retVal.push({
                    type: 'image',
                    contents: op.insert,
                    attributes: {}
                });
            } else {
                retVal.push({
                    type: 'text',
                    contents: op.insert,
                    attributes: op.attributes || {}
                });
            }
        } else if (op.insert === '\n') {
            retVal.push({
                type: 'linebreak',
                attributes: op.attributes || {}
            });
        } else if (op.insert.indexOf('\n') < 0) {
            retVal.push({
                type: 'text',
                contents: op.insert,
                attributes: op.attributes || {}
            });
        } else {
            var contents = op.insert;
            while (contents.length) {
                var nextNewline = contents.indexOf('\n');
                if (nextNewline === -1) {
                    retVal.push({
                        type: 'text',
                        contents: contents,
                        attributes: op.attributes || {}
                    });
                    contents = '';
                } else if (nextNewline === 0) {
                    retVal.push({
                        type: 'linebreak',
                        attributes: {}
                    });
                    contents = contents.slice(nextNewline + 1);
                } else {
                    retVal.push({
                        type: 'text',
                        contents: contents.slice(0, nextNewline),
                        attributes: op.attributes || {}
                    });
                    retVal.push({
                        type: 'linebreak',
                        attributes: {}
                    });
                    contents = contents.slice(nextNewline + 1);
                }
            }
        }
    });
    if (retVal.length > 0 && retVal.slice(-1)[0].type !== 'linebreak') {
        retVal.push({
            type: 'linebreak',
            attributes: {}
        });
    }
    return retVal;
}