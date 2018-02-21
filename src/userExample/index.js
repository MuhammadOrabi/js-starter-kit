import { getUsers } from "./api/userApi";

let h1 = window.document.getElementsByTagName('h1')[0];
getUsers().then(res => {
    h1.innerHTML = res.data[1].email;
});
