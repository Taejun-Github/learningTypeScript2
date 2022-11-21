type Words = {
  [key: string]: string // key의 타입을 정의해 주는 방식
}

let dict: Words = {
  "potato": "food",
  "rice": "food"
}

class Dict {
  private words: Words
  constructor() {
    this.words = {}
  }
  add(word: Word) {
    if(this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string){
    return this.words[term];
  }
}

class Word {
  constructor(
    public readonly term: string,
    public readonly def: string,
  ) {}
}

const kimchi = new Word("kimchi", "korean food");

const dict2 = new Dict();

dict2.add(kimchi);
dict2.def("kimchi");