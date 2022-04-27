import { interferance } from "./utils/interferance";

const args = process.argv.slice(2);

if (!args.length){
    console.log("Invoke the program with a sentence");
    process.exit(1);
}

const noiseMessage = interferance(args[0], parseFloat(args[1]), args[2] === 'glitch')
console.log(noiseMessage)
 