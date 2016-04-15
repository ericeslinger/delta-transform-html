const registry = {};
let formatList = [];

function sortRegistry() {
  formatList = Object.keys(registry)
  .sort((a, b) => registry[b].priority - registry[a].priority)
  .map((n) => registry[n]);
}

export function add(name, format) {
  registry[name] = format;
  sortRegistry();
}

export function listFormats() {
  return formatList;
}

export function get(name) {
  return registry[name];
}

export function checkPriorities() {
  const seen = {};
  Object.keys(registry)
  .forEach((key) => {
    if (seen[registry[key].priority]) {
      console.log(`ERROR: conflict between ${key} and ${seen[registry[key].priority]}`);
    }
    seen[registry[key].priority] = key;
  });
}
