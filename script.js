
document.getElementById("btn1").addEventListener("click", getData);

output ='';
output2 ='';
output3 ='';
output4 ="";

function getData()


{
    fetch("https://randomuser.me/api/")
    .then((res)=> res.json())
    .then((data)=>{

        //  console.log (data);

        output = `<span> ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</span>`      

        output2 = `<span> ${data.results[0].email} </span>`

        output3 = `<span> ${data.results[0].dob.date} </span>`

        output4= ` ${data.results[0].picture.large} `



         document.getElementById("name").innerHTML = output;
         document.getElementById("email").innerHTML = output2;
         document.getElementById("dob").innerHTML = output3;
         document.getElementById("image").src = output4;




        
    })
    .catch((err)=> console.log(err, " unable to fetchdata "))

}