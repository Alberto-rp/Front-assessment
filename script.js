window.addEventListener("load", init)

function init() {
    let output = document.querySelector("#output")
    let textOutput = ''
    
    output.innerHTML = `Loading...`

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => {
        for (item of data) {
            textOutput += generateCard(item)
        }
        output.innerHTML = textOutput
    })
    .catch((error) => {
        console.log(error)
        output.innerHTML = "An error has occurred"
    });
}

function generateCard(item){
    return `
    <div class="card flex-item">
        <div class="icons">
            <div style="overflow-x:auto;">
                <table>
                  <tr>
                    <td>
                        <i class="fa-solid fa-address-card"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                        <i class="fa-solid fa-user"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                        <i class="fa-solid fa-at"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                        <i class="fa-solid fa-phone"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                        <a href="https://maps.google.com/?q=${item['address']['geo']['lat']},${item['address']['geo']['lng']}"><i class="fa-solid fa-location-dot"></i></a>
                    </td>
                  </tr>
                </table>
            </div>
        </div>
        <div class="container">
            
            <div style="overflow-x:auto;">
                <table>
                  <tr>
                    <td class="label">Name:</td>
                    <td id="Name" class="data"><strong>${item['name']}</strong></td>
                  </tr>
                  <tr>
                    <td class="label">Username:</td>
                    <td id="Username" class="data">${item['username']}</td>
                  </tr>
                  <tr>
                    <td class="label">Email:</td>
                    <td id="Email" class="data"><a href="mailto:${item['email']}">${item['email']}</a></td>
                  </tr>
                  <tr>
                    <td class="label">Phone:</td>
                    <td id="Phone" class="data">${item['phone']}</td>
                  </tr>
                  <tr>
                    <td class="label">Address:</td>
                    <td id="Address" class="data">
                        ${item['address']['street']},
                        ${item['address']['suite']} <br>
                        ${item['address']['city']}
                        ${item['address']['zipcode']}
                    </td>
                  </tr>
                </table>
            </div>

        </div>
    </div>
    `
}