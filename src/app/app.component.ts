import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  randomText = faker.lorem.word();
  enteredText = '';
  // letters: string[] = []

  // letterStyle(index:number) {
  //   if (this.letters[index])
  //     {return {'color': this.letters[index]}}
  //   return {}
  // }

  // onInput(value: string) {
  //   this.enteredText = value;
  //   this.letters = []
  //   for (let i = 0; i<this.enteredText.length; i++) {
  //     if (this.enteredText[i]===this.randomText[i]) {
  //       this.letters.push("green")
  //     } else (this.letters.push("red"))
  //   }
  // }
  onInput(value: string) {
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
