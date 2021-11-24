var myArray = [
    {'name':'Smith','role':'Software developer','salary':'30000'},
    {'name':'Johnson','role':'Cloud engineer','salary':'40000'},
    {'name':'david','role':'System engineer','salary':'20000'},
    {'name':'Christian','role':'Software engineer','salary':'35000'},
    {'name':'Daniel','role':'UI/UX Designer','salary':'40000'},
    {'name':'Mike','role':'Business Analyst','salary':'32000'},
    {'name':'Lyon','role':'Database engineer','salary':'27000'},
    
]  



    for(i in myArray){
        var row=`<tr>
                <td>${myArray[i].name}</td>
                <td>${myArray[i].role}</td>
                <td>${myArray[i].salary}</td>
            </tr>`;
        var table = $('#myTable')
        table.append(row)
          }        
       

  


