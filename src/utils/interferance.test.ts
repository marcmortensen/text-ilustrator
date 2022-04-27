import {interferance} from './interferance'

describe('Interferences in messaging', () => {
   
    afterEach(() => {
        jest.spyOn(global.Math, 'random').mockRestore();
    })

    const message = 'if you gaze into the abyss, the abyss gazes also into you'
    
    it('result always replaces extra spaces into a single one', () => {
      expect(interferance('    abc  efg', 0)).toEqual('abc efg');
    });

    it('if no interferance exists the message is unaltered', () => {
      expect(interferance(message, 0)).toEqual(message);
    });

    it('if interferance exists the message is altered, low value introduces low interference', () => {
        jest.spyOn(global.Math, 'random')
        .mockReturnValueOnce(0) 
        .mockReturnValueOnce(0) 
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(1) 
        .mockReturnValueOnce(0) 
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(0)
        .mockReturnValue(1)
        expect(interferance(message, 0.75)).toEqual("ou aze nto he byss, the abyss gazes also into you");
      });

      it('If we activiate glitchiness, the characters arent removed we just add noise instead ', () => {
        jest.spyOn(global.Math, 'random')
        .mockReturnValueOnce(0) 
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(1) 
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(1) 
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(0) 
        .mockReturnValueOnce(1)
        .mockReturnValue(1)
        
        expect(interferance('if you gaze, the abyss gazes also into you', 0.25, true)).toEqual("̷͎̥̤̘̥̈́̿̈́̍́̓̀ ̵̸̨̧̟̥̬͈̠̠͈̱͓͓͎̲̱͔͖̳̃̈́̂̄͂͛͆̿̄̓͘if ̷͎̥̤̘̥̈́̿̈́̍́̓̀ ̵̸̨̧̟̥̬͈̠̠͈̱͓͓͎̲̱͔͖̳̃̈́̂̄͂͛͆̿̄̓͘you ̷͎̥̤̘̥̈́̿̈́̍́̓̀ ̵̸̨̧̟̥̬͈̠̠͈̱͓͓͎̲̱͔͖̳̃̈́̂̄͂͛͆̿̄̓͘gaze, the abyss gazes also into you");
      });
  
  });