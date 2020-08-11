import { Pipe, PipeTransform, TestabilityRegistry } from '@angular/core';

@Pipe({
  name: 'morse'
})
export class MorsePipe implements PipeTransform {

  transform(value: string, args: string): string {
    value = value.toLowerCase();
    let morseString = "";
    for (let i = 0; i < value.length; i++) {
      morseString = morseString + this.convertToMorse(value[i]) + " ";
      console.log(value[i]);
    }
    return morseString;
  }

  private convertToMorse(char: string): string {
    switch (char) {
      case 'a':
        return ".-";
      case "b":
        return "-...";
      case "c":
        return "-.-.";
      case "d":
        return "-..";
      case "e":
        return ".";
      case "f":
        return "..-.";
      case 'g':
        return "--.";
      case "h":
        return "....";
      case "i":
        return "..";
      case "j":
        return ".---";
      case "k":
        return "-.-";
      case "l":
        return ".-..";
        //Kept this brief as all characters are a little too much work.
      default:
        return char;
    }
  }
}
