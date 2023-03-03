const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
export const submitAPI = function(formData) {
    return true;
};


export const menu =[
    {
        id:1,
        name:"burgur",
        price: "15",
        image:"/assets/Cheeseburger-3d7c922.jpg"

    },
    {
        id:2,
        name:"Pizza",
        price: "20",
        image:"/assets/download.jpg"

    },
    {
        id:3,
        name:"Flafel",
        price: "10",
        image:"/assets/Falafel-7-500x500.jpg"

    },
    {
        id:4,
        name:"Chicken",
        price:"30",
        image:"/assets/Falafel-Crusted-Chicken-1x1-1.jpg"
        
    }
]