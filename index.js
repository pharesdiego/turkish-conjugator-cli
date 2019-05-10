#!/usr/bin/env node
console.log(((colors, { table }, turkish, args) => args.length && (({ verb, tenses }) => console.log(tenses) || (
  table([[colors.rainbow(verb.toUpperCase()), '']].concat(
    turkish.it(verb)
      .filter(conjugation => tenses.includes(conjugation.title.toLowerCase()) || !tenses.length)
      .reduce((acc, tense) => (acc.concat([
        [colors.bold(tense.title), ''],
        [colors.green('Positive'), colors.magenta('Negative')],
        [tense.conjugation.positive.join('\n'), tense.conjugation.negative.join('\n')],
      ])), [])),
    { columns: {0: {width: 25}, 1: {width: 25}}})
))(args.reduce(
    (acc, arg) => (
      arg.startsWith('--') && (acc.tenses = acc.tenses.concat(arg.replace('--', '').replace('-', ' '))),
      turkish.isTurkishVerb(arg) && (acc.verb = arg),
      acc), { verb: '', tenses: [] })))(
  require('colors/safe'),
  require('table'),
  require('turkish-conjugator').default,
  process.argv.slice(2)
));
