
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b600b333edmsh95738b0822961cfp1ccb67jsnb7258f166b5e',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
    }
};

const getDefn = (term) => {
    result.innerHTML="Results: "
    // fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright', options)
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + term, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            showEx.innerHTML = "<b> Your word: </b>"+response.word;
            showDef.innerHTML = `<b> Meaning:</b> <br>+`+ response.definition;
        })
        .catch(err => console.error(err));
}

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    getDefn(term.value);
})
