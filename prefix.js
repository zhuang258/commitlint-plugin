module.exports = function(prefixes) {
    return (parsed, when) => {
        console.log('parsed', parsed);
      const commitPrefix = parsed.header.match(/^\[(\w+)\]/);
      console.log('commitPrefix', commitPrefix);
      if (!commitPrefix) {
        return [false, 'commit message must start with a prefix'];
      }
      return [prefixes.includes(commitPrefix[1]), `commit prefix must be one of ${prefixes.join(', ')}`];
    };
  };