import { Format } from './format';

export class BoldFormat extends Format {
  openTag() {
    return '<strong>';
  }
  closeTag() {
    return '</strong>';
  }
}
