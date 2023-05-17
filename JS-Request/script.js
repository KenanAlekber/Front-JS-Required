async function getData() {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!data.ok) {
        alert("Something is wrong");
    }
    else {
        return data.json()
    }
}

function dataSet(arr, newarr, num) {
    arr.forEach(element => {
        if (element.userId === num) {
            newarr[num - 1].unshift(element)
        }
        else if (element.userId === num + 1) {
            newarr[num].unshift(element)
        }
        else if (element.userId === num + 2) {
            newarr[num + 1].unshift(element)
        }
        else if (element.userId === num + 3) {
            newarr[num + 2].unshift(element)
        }
        else if (element.userId === num + 4) {
            newarr[num + 3].unshift(element)
        }
        else if (element.userId === num + 5) {
            newarr[num + 4].unshift(element)
        }
        else if (element.userId === num + 6) {
            newarr[num + 5].unshift(element)
        }
        else if (element.userId === num + 7) {
            newarr[num + 6].unshift(element)
        }
        else if (element.userId === num + 8) {
            newarr[num + 7].unshift(element)
        }
        else if (element.userId === num + 9) {
            newarr[num + 8].unshift(element)
        }
    });
    return newarr
}

let userId1Array = [];
let userId2Array = [];
let userId3Array = [];
let userId4Array = [];
let userId5Array = [];
let userId6Array = [];
let userId7Array = [];
let userId8Array = [];
let userId9Array = [];
let userId10Array = [];
let usersTaskArr = [
    userId1Array,
    userId2Array,
    userId3Array,
    userId4Array,
    userId5Array,
    userId6Array,
    userId7Array,
    userId8Array,
    userId9Array,
    userId10Array
]

getData().then((responsive) => {
    return dataSet(responsive, usersTaskArr, 1)
}).then((newData) => {
    console.log(newData);
})