import { fromJS } from "immutable";

export default function accessImmutableObject(object, array) {
    const nested = fromJS(object);
    return nested.getIn(array);
}

console.log(accessImmutableObject({
    name: {
         first: "Guillaume",
         last: "Salva"
    }
}, ['name', 'first']));
