import data from '../data/Apprentice_TandemFor400_Data.json';

export function generateQuestions(sequnce) {
  let qs;
  function genOrder(sequence) {
    if (sequence.length === 10) {
      qs = sequence.map((e) => data[e]);
      return;
    }

    let r = Math.floor(Math.random() * 21);
    sequence.indexOf(r) === -1 && sequence.push(r);
    genOrder(sequence);
  }
  genOrder([]);

  return qs;
}
