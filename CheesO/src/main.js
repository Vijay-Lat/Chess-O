let playerStats=[];
let userName=document.getElementById('user-name');
let year=document.getElementById('year');
let month=document.getElementById('month');

  async  function getPlayersData(){
     
   await fetch(`https://api.chess.com/pub/player/${userName.value}/games/${year.value}/${month.value}`)
    .then(response=>response.json())
    .then(data=>{
        debugger
        playerStats.push(data)
        console.log(playerStats);
        document.getElementById('user').textContent+=" ";
    })
    bindData(); 
}

function bindData(){
    let arrayLength=0;
    let tableData='';
    let count=0;
    count=count+1;
    debugger
    arrayLength=playerStats[0].games.length
    for(let index=0; index<arrayLength;index++)
    {
        tableData+=`<tr class='tableStyle'>`
        tableData+=`<td>${count++}</td>`
        tableData+=`<td>${playerStats[0].games[index].rated}</td>`
        tableData+=`<td>${playerStats[0].games[index].time_control}</td>`
        tableData+=`<td>${playerStats[0].games[index].time_class}</td>`
        tableData+=`<td>${playerStats[0].games[index].black.username}</td>`
        tableData+=`<td>${playerStats[0].games[index].black.rating}</td>`
        tableData+=`<td>${playerStats[0].games[index].black.result}</td>`
        tableData+=`<td>${playerStats[0].games[index].white.username}</td>`
        tableData+=`<td>${playerStats[0].games[index].white.rating}</td>`
        tableData+=`<td>${playerStats[0].games[index].white.result}</td>`
        tableData+=`<td> <a href='${playerStats[0].games[index].url}' targrt='_blank'>${playerStats[0].games[index].url}</a></td>`
       
        
        tableData+=`</tr>`
    }
    document.getElementById('root').innerHTML=tableData;
    document.getElementById('user').textContent+=userName.value;
userName.value='';
year.value='';
month.value='';



}
