// get date
let dateArr = [];


for (let i = 1; i <= 7; i++) {
    const d = new Date();
    let currentDay = d.getDate();
     d.setDate(currentDay + i) ,
        dateArr.push({
            date:d.toLocaleDateString(''),
            item: [],
        });
    
}


//individual detail
let detailArr = [
    {
        id: 1,
        name: "John",
        email: "testt@gmail.com",
        phone: "07044664",
        password: "hello",
    },
];
let toDeliver = [];

function register(event) {
    event.preventDefault();
    const getName = document.querySelector(".fullname").value;
    const getEmail = document.querySelector(".email").value;
    const getPhonenumber = document.querySelector(".phone_number").value;
    const getPassword = document.querySelector(".password").value;
    detailArr.map((each) => {
        console.log(each);
        if (each.email !== getEmail) {
            detailArr.push({
                id: detailArr.length + 1,
                name: getName,
                email: getEmail,
                phone: getPhonenumber,
                password: getPassword,
            });
            location.href = "index.html";
        } else {
            let msg = document.getElementById("message");
            msg.style.display = "block";
            msg.style.color = "red";
            msg.innerHTML = "Email does exist!";
            return;
        }
    });

    localStorage.setItem("all", JSON.stringify(detailArr));
}

function login(event) {
    event.preventDefault();
    const getEmailLog = document.querySelector(".log-email").value;
    const getPasswordLog = document.querySelector(".log-password").value;
    const detail = JSON.parse(localStorage.getItem("all"));
    detail.map((each) => {
        if (each.email === getEmailLog && each.password === getPasswordLog) {
            localStorage.setItem("currentCustomer", JSON.stringify(each));
            location.href = "dashboard.html";
        } else {
            let msg = document.querySelector("#message");
            msg.style.color = "red";
            msg.innerHTML = "Incorrect Email or Password!";
            msg.style.display = "block";
        }
    });
}
function delivery(event) {
    event.preventDefault();
    const getItemName = document.querySelector(".item-name").value;
    const getItemLocation = document.querySelector(".item-location").value;
    const getItemDestination = document.querySelector(".item-destination").value;
    const detail = JSON.parse(localStorage.getItem("currentCustomer"));

    toDeliver.push({
        id: detail.id,
        item_id: toDeliver.length + 1,
        name: detail.name,
        item: getItemName,
        pickup: getItemLocation,
        destination: getItemDestination,
    });

    localStorage.setItem("deliver", JSON.stringify(toDeliver));
}
const getAll = JSON.parse(localStorage.getItem("deliver"));

function addPlan(itemid) {
    const add = JSON.parse(localStorage.getItem("deliver"));
    const slt1 = document.querySelectorAll(".slot1");
    const slt2 = document.querySelectorAll(".slot2");
    const slt3 = document.querySelectorAll(".slot3");
    const slt4 = document.querySelectorAll(".slot4");
    add.map((each) => {
        if (each.item_id === itemid) {

            dateArr.map((eachDate, ind, arr) => {
                if (ind === 0 && eachDate.item.length < 4) {
                    eachDate.item.push({ name: each.name, item: each.item });
                    if (eachDate.item[0]){

                        slt1[0].innerHTML = `name:${eachDate.item[0].name}
                        item:${eachDate.item[0].item}`;
                    }

                    if (eachDate.item[1]) {
                        slt2[0].innerHTML = `name:${eachDate.item[1].name}
                   item:${eachDate.item[1].item}`;
                    }

                    if (eachDate.item[2]) {
                        slt3[0].innerHTML = `name:${eachDate.item[2].name}
                    item:${eachDate.item[2].item}`;
                    }
                    if (eachDate.item[3]) {
                        slt4[0].innerHTML = `name:${eachDate.item[3].name}
                    item:${eachDate.item[3].item}`;
                }
                
            } else if (
                ind === 1 &&
                dateArr[0].item.length === 4 &&
                eachDate.item.length < 5
                ) {
                    
                    eachDate.item.push({ name: each.name, item: each.item });
                    if (eachDate.item[1]){

                    slt1[1].innerHTML = `name:${eachDate.item[1].name}
                    item:${eachDate.item[1].item}`;
                    }
                    if (eachDate.item[1]) {
                        slt2[1].innerHTML = `name:${eachDate.item[2].name}
                   item:${eachDate.item[2].item}`;
                    }

                    if (eachDate.item[2]) {
                        slt3[1].innerHTML = `name:${eachDate.item[3].name}
                    item:${eachDate.item[3].item}`;
                    }
                    if (eachDate.item[3]) {
                        slt4[1].innerHTML = `name:${eachDate.item[4].name}
                    item:${eachDate.item[4].item}`;
                    }
                } else if (
                    ind === 2 &&
                    dateArr[1].item.length === 5 &&
                    eachDate.item.length < 5
                ) {
                    eachDate.item.push({ name: each.name, item: each.item });
                    slt1[2].innerHTML = `name:${eachDate.item[1].name}
                        item:${eachDate.item[1].item}`;

                    if (eachDate.item[1]) {
                        slt2[2].innerHTML = `name:${eachDate.item[2].name}
                   item:${eachDate.item[2].item}`;
                    }

                    if (eachDate.item[2]) {
                        slt3[2].innerHTML = `name:${eachDate.item[3].name}
                    item:${eachDate.item[3].item}`;
                    }
                    if (eachDate.item[3]) {
                        slt4[2].innerHTML = `name:${eachDate.item[4].name}
                    item:${eachDate.item[4].item}`;
                    }
                } else if (
                    ind === 3 &&
                    dateArr[2].item.length === 5 &&
                    eachDate.item.length < 5
                ) {
                    eachDate.item.push({ name: each.name, item: each.item });
                    slt1[3].innerHTML = `name:${eachDate.item[1].name}
                        item:${eachDate.item[1].item}`;

                    if (eachDate.item[1]) {
                        slt2[3].innerHTML = `name:${eachDate.item[2].name}
                   item:${eachDate.item[2].item}`;
                    }

                    if (eachDate.item[2]) {
                        slt3[3].innerHTML = `name:${eachDate.item[3].name}
                    item:${eachDate.item[3].item}`;
                    }
                    if (eachDate.item[3]) {
                        slt4[3].innerHTML = `name:${eachDate.item[4].name}
                    item:${eachDate.item[4].item}`;
                    }
                } else if (
                    ind === 4 &&
                    dateArr[3].item.length === 5 &&
                    eachDate.item.length < 5
                ) {
                    eachDate.item.push({ name: each.name, item: each.item });
                    slt1[4].innerHTML = `name:${eachDate.item[1].name}
                        item:${eachDate.item[1].item}`;

                    if (eachDate.item[1]) {
                        slt2[4].innerHTML = `name:${eachDate.item[2].name}
                   item:${eachDate.item[2].item}`;
                    }

                    if (eachDate.item[2]) {
                        slt3[4].innerHTML = `name:${eachDate.item[3].name}
                    item:${eachDate.item[3].item}`;
                    }
                    if (eachDate.item[3]) {
                        slt4[4].innerHTML = `name:${eachDate.item[4].name}
                    item:${eachDate.item[4].item}`;
                    }
                } else if (
                    ind === 5 &&
                    dateArr[4].item.length === 5 &&
                    eachDate.item.length < 5
                ) {
                    eachDate.item.push({ name: each.name, item: each.item });
                    slt1[5].innerHTML = `name:${eachDate.item[1].name}
                        item:${eachDate.item[1].item}`;

                    if (eachDate.item[1]) {
                        slt2[5].innerHTML = `name:${eachDate.item[2].name}
                            item:${eachDate.item[2].item}`;
                    }

                    if (eachDate.item[2]) {
                        slt3[5].innerHTML = `name:${eachDate.item[3].name}
                            item:${eachDate.item[3].item}`;
                    }
                    if (eachDate.item[3]) {
                        slt4[5].innerHTML = `name:${eachDate.item[4].name}
                            item:${eachDate.item[4].item}`;
                    }
                } else if (
                    ind === 6 &&
                    dateArr[5].item.length === 5 &&
                    eachDate.item.length < 5
                ) {
                    eachDate.item.push({ name: each.name, item: each.item });
                    slt1[6].innerHTML = `name:${eachDate.item[1].name}
                        item:${eachDate.item[1].item}`;

                    if (eachDate.item[1]) {
                        slt2[6].innerHTML = `name:${eachDate.item[2].name}
                   item:${eachDate.item[2].item}`;
                    }

                    if (eachDate.item[2]) {
                        slt3[6].innerHTML = `name:${eachDate.item[3].name}
                    item:${eachDate.item[3].item}`;
                    }
                    if (eachDate.item[3]) {
                        slt4[6].innerHTML = `name:${eachDate.item[4].name}
                    item:${eachDate.item[4].item}`;
                    }
                }
            });
        }
    });
}


const customerTable = document.querySelector(".customer-table");
getAll.map((eachlist) => {
    customerTable.innerHTML += `<tr>
     <td>${eachlist.id}</td>
     <td>${eachlist.item_id}</td>
     <td>${eachlist.name}</td>
     <td>${eachlist.pickup}</td>
     <td>${eachlist.destination}</td>
     <td><button id="btnAdd" onclick='addPlan(${eachlist.item_id})'>Add to planner</button></td>
    </tr>`;
});
const plannerTable = document.querySelector(".trainer-table");
dateArr.map((eachlist) => {
    plannerTable.innerHTML += `<tr>
     <td>${eachlist.date}</td>
     <td class='slot1'></td>
     <td class='slot2'></td>
     <td class='slot3'></td>
     <td class='slot4'></td>
    
    </tr>`;
});
