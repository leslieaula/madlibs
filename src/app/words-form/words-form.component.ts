import { Component, Input } from '@angular/core';
import { Word } from './../word.model';
import { MadlibsService } from './../madlibs.service';

@Component({
  selector: 'app-words-form',
  templateUrl: './words-form.component.html',
  styleUrls: ['./words-form.component.scss']
})
export class WordsFormComponent {
  @Input() nouns: Word[];
  @Input() verbs: Word[];
  @Input() adjs: Word[];
  generating = false;
  placeholders = {
    noun: ['person', 'place', 'place', 'thing', 'thing'],
    verb: ['present', 'present', 'past', 'past', 'past']
  };

  constructor(private ml: MadlibsService) { }

  trackWords(index, word) {
    return word ? word.id : undefined;
  }

  getPlaceholder(type: string, index: number) {
    return this.placeholders[type][index];
  }

  done() {
    this.ml.submit({
      nouns: this.nouns,
      verbs: this.verbs,
      adjs: this.adjs
    });
    this.generating = true;
  }

}
