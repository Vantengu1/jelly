export type Bean = {
    backgroundColor : string,
    beanId  : number, //число
    colorGroup  : string, //строка
    description  : string, 
    flavorName  : string,
    glutenFree  : boolean, //булевое значение
    groupName  : string[], //массив строк
    imageUrl  : string,
    ingredients  : string[], 
    kosher  : boolean,
    seasonal  : boolean,
    sugarFree  : boolean
}