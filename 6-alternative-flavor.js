// exporting an array attached to an export property
module.exports.items = ['item 1', 'item2']

const person = {
    name: 'bob'
}

// exporting object attached to an export property. this object is person
module.exports.singlePerson = person