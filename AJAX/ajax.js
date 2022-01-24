console.log("AJAX")

let dBtn = document.getElementById('dBtn')
dBtn.addEventListener('click',dataHandler);
function dataHandler(){
    //console.log('clicked')

    let xhr = new XMLHttpRequest();
    //console.log(xhr)

    //xhr.open('GET','text1.txt',true);
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true)
    //xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true)
    //xhr.getResponseHeader('Content-type','application/JSON')

    xhr.onprogress=function(){
        console.log("on progressing")
    }

    xhr.onload=function(){
        if(this.status === 200){
            //console.log(this.responseText)
            let tablebody= document.getElementById("tablebody");
            let obj = JSON.parse(this.responseText)
            //let obj = this.responseText
            //console.log(typeof(obj))
            //let obj1= JSON.getObject('data');

            let str = "";
            /*
            for(key in obj){
                    //console.log("DATA",typeof(obj[key]),obj[key])
                    //console.log(obj[data][key])                              
                    console.log(obj[key].id)
                       
                    }*/
                    for(key in obj["data"]){
                        //console.log(obj.data[key].id)
                        str += ` <tr>
                        <th scope="row">${obj.data[key].id}</th>
                        <td>${obj.data[key].employee_name}</td>
                        <td>${obj.data[key].employee_salary}</td>
                        <td>${obj.data[key].employee_age}</td>
                      </tr>`
                        //console.log(obj[key].data)
                        //console.log(str)
                    }
            tablebody.innerHTML=str;
        }else{
            console.log("some error occured")
        }
    }
    //param= {"name":"test123","salary":"123","age":"23"}
    //xhr.send(param);
    xhr.send()
    console.log("DONE")
}