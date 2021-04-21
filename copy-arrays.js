// копирование массивов любой вложенности

const copyArr = (arr) => {
    const result = [];
    for (let item of arr) {
        if (typeof item === 'object')
            result.push(copyArr(item));
        else
            result.push(item);
    }
    return result;
};
