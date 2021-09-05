// EXAMPLE 1

// $(document).ready(function () {
//   setTimeout(getUserList, 1000);
// });

// const getUserList = async () => {
//   const response = await axios({
//     url: "https://reqres.in/api/users?page=1",
//     method: "GET",
//   });

//   for (i = 0; i < response.data.data.length; i++) {
//     $("#tablebody").append(`
//         <tr>
//             <td> <img src="${response.data.data[i].avatar}"/> </td>      
//             <td>${response.data.data[i].id}</td>
//             <td>${response.data.data[i].email}</td>
//             <td>${response.data.data[i].first_name}</td>
//             <td>${response.data.data[i].last_name}</td>
//         </tr>
//             `);
//   }
// };


// EXAMPLE 2

$(document).ready(function () {
    setTimeout(getApiUserList, 1000);
    // setInterval(getApiUserList, 5000);
    setInterval(()=>{alert("List Reloaded"), getApiUserList()}, 10000);

  });

  
  const getApiUserList = async () => {
    const response = await axios({
      url: "https://reqres.in/api/users?page=2",
      method: "GET",
    });
  
    for (i = 0; i < response.data.data.length; i++) {
      $("#tablebody").append(`
          <tr>
              <td> <img src="${response.data.data[i].avatar}"/> </td>      
              <td>${response.data.data[i].id}</td>
              <td>${response.data.data[i].email}</td>
              <td>${response.data.data[i].first_name}</td>
              <td>${response.data.data[i].last_name}</td>
              <td>${response.data.support.url}</td>
              <td>${response.data.support.text}</td>
          </tr>
              `);
    }
  };
