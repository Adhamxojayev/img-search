search.onkeyup = async (event) => {
    try{
    box.innerHTML = null
    if(event.keyCode == 13){
    let response = await fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${search.value}&pageNumber=1&pageSize=10&autoCorrect=true`, {
    "method": "GET",
    "headers": {
    "x-rapidapi-key": "232446db2fmshd01b31aaab3abc7p19e0dcjsnc658d33df05c",
    "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
}
    })
    let res =  await response.json()  
    console.log(res);
    for(let i = 0; i < res.value.length; i++){
    let img = document.createElement('img')
    img.src = res.value[i].url
    let li = document.createElement('li')
    img.style.width = '400px'
    li.append(img)
    box.append(li)
    }
        
    }
}catch(err){
    console.log(err);
} 
}