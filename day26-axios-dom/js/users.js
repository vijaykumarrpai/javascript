window.addEventListener('load',function(){
    var appHandle = document.getElementById('app');
    var url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url)
    .then(response => {
        var data = response.data;
        console.log(data);
        var tableHandle = document.createElement('table');
        var theadHandle = document.createElement('thead');
        var tbodyHandle = document.createElement('tbody');
        var tableHead1 = document.createElement('th');
        var tableHead2 = document.createElement('th');
        var tableHead3 = document.createElement('th');
        var tableHead4 = document.createElement('th');
        var tableHead5 = document.createElement('th');
        var tableHead6 = document.createElement('th');
        var tableHead7 = document.createElement('th');
        var tableHead8 = document.createElement('th');
        var tableHead9 = document.createElement('th');
        var text1 = document.createTextNode('SLNo');
        var text2 = document.createTextNode('Name');
        var text3 = document.createTextNode('Username');
        var text4 = document.createTextNode('Email');
        var text5 = document.createTextNode('Address');
        var text6 = document.createTextNode('Zipcode');
        var text7 = document.createTextNode('Phone');
        var text8 = document.createTextNode('Website');
        var text9 = document.createTextNode('Company Name');
        
        tableHead1.appendChild(text1);
        tableHead2.appendChild(text2);
        tableHead3.appendChild(text3);
        tableHead4.appendChild(text4);
        tableHead5.appendChild(text5);
        tableHead6.appendChild(text6);
        tableHead7.appendChild(text7);
        tableHead8.appendChild(text8);
        tableHead9.appendChild(text9);
        
        theadHandle.appendChild(tableHead1);
        theadHandle.appendChild(tableHead2);
        theadHandle.appendChild(tableHead3);
        theadHandle.appendChild(tableHead4);
        theadHandle.appendChild(tableHead5);
        theadHandle.appendChild(tableHead6);
        theadHandle.appendChild(tableHead7);
        theadHandle.appendChild(tableHead8);
        theadHandle.appendChild(tableHead9);

        tableHandle.setAttribute('border',1);
        
        tableHandle.appendChild(theadHandle);
        tableHandle.appendChild(tbodyHandle);

        data.forEach(ele => {
         var tableRow = document.createElement('tr');
         var tableData1 = document.createElement('td');
         var tableData2 = document.createElement('td');
         var tableData3 = document.createElement('td');
         var tableData4 = document.createElement('td');
         var tableData5 = document.createElement('td');
         var tableData6 = document.createElement('td');
         var tableData7 = document.createElement('td');
         var tableData8 = document.createElement('td');
         var tableData9 = document.createElement('td');
        
         var data1 = document.createTextNode(ele.id);
         var data2 = document.createTextNode(ele.name);
         var data3 = document.createTextNode(ele.username);
         var data4 = document.createTextNode(ele.email);
         var data5 = document.createTextNode(`${ele.address.street}, ${ele.address.suite}, ${ele.address.city}`);
         var data6 = document.createTextNode(ele.address.zipcode);
         var data7 = document.createTextNode(ele.phone);
         var data8 = document.createTextNode(ele.website);
         var data9 = document.createTextNode(ele.company.name);
        
         tableRow.appendChild(tableData1);
         tableRow.appendChild(tableData2);
         tableRow.appendChild(tableData3);
         tableRow.appendChild(tableData4);
         tableRow.appendChild(tableData5);
         tableRow.appendChild(tableData6);
         tableRow.appendChild(tableData7);
         tableRow.appendChild(tableData8);
         tableRow.appendChild(tableData9);
        
         tableData1.appendChild(data1);
         tableData2.appendChild(data2);
         tableData3.appendChild(data3);
         tableData4.appendChild(data4);
         tableData5.appendChild(data5);
         tableData6.appendChild(data6);
         tableData7.appendChild(data7);
         tableData8.appendChild(data8);
         tableData9.appendChild(data9);
     
         tableHandle.appendChild(tableRow);     
        });
        console.log(tableHandle); 
        appHandle.appendChild(tableHandle);
    })
    .catch(err => {
        console.log(err);
    });
},false);
