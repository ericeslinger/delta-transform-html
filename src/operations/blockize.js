import { Registry } from '../index';


export function blockize(tokens) {
  const RootNode = Registry.get('RootNode');
  const retVal = new RootNode(); // eslint-disable-line new-cap
  let childList = [];
  tokens.forEach((token) => {
    if (token.type === 'linebreak') {
      const blockArray = Registry.listFormats().filter((f) => f.matches(token));
      const currentBlock = new blockArray[0](token);
      childList.forEach((child) => currentBlock.appendChild(Registry.get('TreeNode').build(child)));
      retVal.absorb(currentBlock);
      childList = [];
    } else {
      childList.push(token);
    }
  });
  return retVal;
}
