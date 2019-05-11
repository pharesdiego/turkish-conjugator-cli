#!/usr/bin/env node
console.log((({ table }, turkish, args) => args.length && (({ verb, tenses }) => verb && (
  table([[verb.toUpperCase().rainbow, '']].concat(
    turkish.it(verb)
      .filter(({ title }) => tenses.includes(title.toLowerCase()) || !tenses.length)
      .reduce((acc, tense) => (acc.concat([
        [tense.title.bold, ''],
        ['Positive'.green, 'Negative'.magenta],
        [tense.conjugation.positive.join('\n'), tense.conjugation.negative.join('\n')],
      ])), [])),
    { columns: {0: {width: 25}, 1: {width: 25}}})
))(args.reduce(
    (acc, arg) => (
      arg.startsWith('--') && acc.tenses.push(arg.replace('--', '').replace('-', ' ')),
      turkish.isTurkishVerb(arg) && (acc.verb = arg),
      acc), { verb: '', tenses: [] })))(
    require('table'),
    require('turkish-conjugator').default,
    process.argv.slice(2),
    require('colors'),
) || "Please write a turkish verb");
