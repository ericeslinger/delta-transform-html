export function tokenize(ops) {
  const retVal = [];
  ops.forEach((op) => {
    if (typeof op.insert !== 'string') {
      retVal.push({
        type: 'text',
        contents: op.insert,
        attributes: op.attributes || {},
      });
    } else if (op.insert === '\n') {
      retVal.push({
        type: 'linebreak',
        attributes: op.attributes || {},
      });
    } else if (op.insert.indexOf('\n') < 0) {
      retVal.push({
        type: 'text',
        contents: op.insert,
        attributes: op.attributes || {},
      });
    } else {
      let contents = op.insert;
      while (contents.length) {
        const nextNewline = contents.indexOf('\n');
        if (nextNewline === -1) {
          retVal.push({
            type: 'text',
            contents: contents,
            attributes: op.attributes || {},
          });
          contents = '';
        } else if (nextNewline === 0) {
          retVal.push({
            type: 'linebreak',
            attributes: {}, // mid-insert linebreaks have no line-level styling
          });
          contents = contents.slice(nextNewline + 1);
        } else {
          retVal.push({
            type: 'text',
            contents: contents.slice(0, nextNewline),
            attributes: op.attributes || {},
          });
          retVal.push({
            type: 'linebreak',
            attributes: {}, // mid-insert linebreaks have no line-level styling
          });
          contents = contents.slice(nextNewline + 1);
        }
      }
    }
  });
  if ((retVal.length > 0) && (retVal.slice(-1)[0].type !== 'linebreak')) {
    retVal.push({
      type: 'linebreak',
      attributes: {}, // mid-insert linebreaks have no line-level styling
    });
  }
  return retVal;
}
