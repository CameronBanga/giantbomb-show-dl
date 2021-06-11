const VERSION_REGEX = /CURRENT_VERSION = "[0-9]+\.[0-9]+\.[0-9]+";/g;

module.exports.readVersion = function (contents) {
  const matches = contents.match(VERSION_REGEX);
  if (matches.length) {
    const match = matches[0];
    return match.replace('CURRENT_VERSION = "', "").replace('";', "");
  }
  return null;
};

module.exports.writeVersion = function (contents, version) {
  return contents.replaceAll(VERSION_REGEX, `CURRENT_VERSION = "${version}";`);
};
