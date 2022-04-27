
const glitchChars = ["̷͎̥̤̘̥̈́̿̈́̍́̓̀ ̵̸̨̧̟̥̬͈̠̠͈̱͓͓͎̲̱͔͖̳̃̈́̂̄͂͛͆̿̄̓͘", "̶̵̷̢̨̫̪̳̞͍̹̙͉̹͔̞͕͎̹̪̞͇̱̭̙͓̗̭̂̈́̎͐͛̍͂͛̌̓̒̑͐́͊̈́̌̾̐̓̀̚̕̕̚ ̶̶̧̡̡͚̜͈̮̜̤͎̤̻̲̥̳͚̜͎̼̪̱͍̰̍̀̐͂̓̈́̅̌̓̽̕", "̶̵̢̫̪̳̞͍̹̙͉̹͔̞͕͎̂̈́̎͐͛̍͂͛̌̓̒̚̕̕", "̷͎̥̤̘̈́̿̈́̍́̓̀"]


export function interferance(message: string, interferanceStrength: number, glitchy = false): string {

    const arrMessage = message.split(' ').map((word) => {
        let processedword = '';
        for (let i = 0; i < word.length; i++) {
            if (Math.random()> interferanceStrength) {
                processedword = processedword + word.charAt(i)
                continue;
            }
            if(glitchy){
                const glithyCharIndex = Math.floor(Math.random() * ((glitchChars.length - 1) - 0 + 1)) + 0
                processedword = processedword +glitchChars[glithyCharIndex]+ word.charAt(i);
            }
          }
        return processedword;
    }).join(' ').trim();
    
    return arrMessage.replace(/ +(?= )/g,'');
}