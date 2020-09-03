export function findObjectInArray<ArrayT, ObjectIdT>(objArray: ArrayT[], searchValue: ObjectIdT, searchField: string):number|undefined {
    let index: number|undefined;
    const object = objArray.find((obj:any) => obj[`${searchField}`] === searchValue);
    if (object){
        index = objArray.indexOf(object)
    }
    return index
}