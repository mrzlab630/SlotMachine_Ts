interface IgetShuffledArr{
    (arr: any[]): any[]
}

interface IrandomInteger {
    (min: number, max: number): number
}

/**     ****        **/

const getShuffledArr: IgetShuffledArr = function(arr){

    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
};

const randomInteger: IrandomInteger = function (min=0,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


export {
    getShuffledArr,
    randomInteger
}