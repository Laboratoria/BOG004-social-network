const collection = jest.fn((db, collection) => {
    return {};
});
 
const getDocs = (collection) => {
    return Promise.resolve({
        docs: []
    })
}
 
export {
    collection, getDocs
}

