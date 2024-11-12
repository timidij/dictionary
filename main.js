// console.log("hello")

const result = document.querySelector(".result")
const val = document.querySelector(".searchWord")
const form = document.querySelector(".searchForm")

const payload = []
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log("result gotten")
  
    
searchWord(val) 



})

async function searchWord(day){
    feedback = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${val.value}`)
    .then((response)=>response.json())
     .then((data)=>{
        payload.push(data);
        console.log('payload', payload);
         def = []
        drew = [ {
            word:"",
            definition:def,
            
        }]
        return data;
    
    })


    
    const {meanings: findings}= feedback[0]

    result.innerHTML= `<h3> result of ${val.value} </h3>`
    findings.forEach((vary)=>{

        console.log(vary.partOfSpeech)
        vary.definitions.forEach(check=>{
            
            console.log(vary.synonyms[0])
            const synonym = vary?.synonyms && vary?.synonyms?.length > 0 ? `
                <p>synonym: ${vary?.synonyms?.[0]}</p>
            `: '';

            const antonyms = vary.antonyms && vary.antonyms.length >0?`
            <p> Antonym: ${vary.antonyms[0]}  </p>`: "";

                result.innerHTML += `<div class="definition" >
                
                <p>Part of speech: ${vary.partOfSpeech}</p>
                 ${synonym}
                 ${antonyms}
                 <p>Definition:'\n ${check.definition}</p>
                 

                 </div>`

        })

        
    })

    // console.log(feedback)

}


// This JavaScript app fetches word meanings from an API,
//  allowing users to search for words and view their definitions, synonyms,
//   and antonyms. Upon form submission, the app makes an API request, 
// extracts the meanings, and dynamically renders the results on the webpage, 
// providing a clear and organized view of the word's definitions.