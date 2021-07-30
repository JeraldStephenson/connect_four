// DOM Selectors
const allGridSquares = document.querySelectorAll('.grid-square');
const allHiddenSquares = document.querySelectorAll('.hidden-square');
const resetButton = document.querySelector('.reset');
const quitButton = document.querySelector('.quit');
const statusHeading = document.querySelector('.gamepage-heading');

    /* for the game board we will be basically making rows and columns arrays, so that
    we can have index's for our logic and parse through them. This saves us from 
    creating variables of DOM selectors for each individual square if we were to use ID's 
    as selectors.

    for example:
        const r0c0 = document.querySelector('#r0c0');
        const r0c1 = document.querySelector('#r0c1');
        const r0c2 = document.querySelector('#r0c2');

    and then 
        const row0 = [r0c0, r0c1, r0c2, etc.]
        const row1 = [r1c0, r1c1, r1c2, etc.]
    */


        /*
        this depicts the location of each indexes of the hiddenSquares as
        well as the location of the indexes of allGridSquares of the gameboard


          __|h0_|h1_|h2_|h3_|h4_|h5_|h6_|__
            |_0_|_1_|_2_|_3_|_4_|_5_|_6_|                    
            |_7_|_8_|_9_|10_|11_|12_|13_|                    
            |14_|15_|16_|17_|18_|19_|20_|                    
            |21_|22_|23_|24_|25_|26_|27_|                    
            |28_|29_|30_|31_|32_|33_|34_|                    
            |35_|36_|37_|38_|39_|40_|41_|                    
          -----------------------------------

        */

    //rows
const hiddenRow = [allHiddenSquares[0], allHiddenSquares[1], allHiddenSquares[2], allHiddenSquares[3], allHiddenSquares[4], allHiddenSquares[5], allHiddenSquares[6]];
const row0 = [allGridSquares[0], allGridSquares[1], allGridSquares[2], allGridSquares[3], allGridSquares[4], allGridSquares[5], allGridSquares[6]];
const row1 = [allGridSquares[7], allGridSquares[8], allGridSquares[9], allGridSquares[10], allGridSquares[11], allGridSquares[12], allGridSquares[13]];
const row2 = [allGridSquares[14], allGridSquares[15], allGridSquares[16], allGridSquares[17], allGridSquares[18], allGridSquares[19], allGridSquares[20]];
const row3 = [allGridSquares[21], allGridSquares[22], allGridSquares[23], allGridSquares[24], allGridSquares[25], allGridSquares[26], allGridSquares[27]];
const row4 = [allGridSquares[28], allGridSquares[29], allGridSquares[30], allGridSquares[31], allGridSquares[32], allGridSquares[33], allGridSquares[34]];
const row5 = [allGridSquares[35], allGridSquares[36], allGridSquares[37], allGridSquares[38], allGridSquares[39], allGridSquares[40], allGridSquares[41]];
    // an array of all the rows
const rows = [row0, row1, row2, row3, row4, row5, hiddenRow];

    //columns - note that we are starting from bottom of the column and going up
const column0 = [allGridSquares[35], allGridSquares[28], allGridSquares[21], allGridSquares[14], allGridSquares[7], allGridSquares[0], allHiddenSquares[0]];
const column1 = [allGridSquares[36], allGridSquares[29], allGridSquares[22], allGridSquares[15], allGridSquares[8], allGridSquares[1], allHiddenSquares[1]];
const column2 = [allGridSquares[37], allGridSquares[30], allGridSquares[23], allGridSquares[16], allGridSquares[9], allGridSquares[2], allHiddenSquares[2]];
const column3 = [allGridSquares[38], allGridSquares[31], allGridSquares[24], allGridSquares[17], allGridSquares[10], allGridSquares[3], allHiddenSquares[3]];
const column4 = [allGridSquares[39], allGridSquares[32], allGridSquares[25], allGridSquares[18], allGridSquares[11], allGridSquares[4], allHiddenSquares[4]];
const column5 = [allGridSquares[40], allGridSquares[33], allGridSquares[26], allGridSquares[19], allGridSquares[12], allGridSquares[5], allHiddenSquares[5]];
const column6 = [allGridSquares[41], allGridSquares[34], allGridSquares[27], allGridSquares[20], allGridSquares[13], allGridSquares[6], allHiddenSquares[6]];
    // an array of all the columns
const columns = [column0, column1, column2, column3, column4, column5, column6];

//--------------------------------------------

// Variables


