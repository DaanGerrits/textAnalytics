document.getElementById("analyseButton").addEventListener('click', analyze);

function analyze(){
  var reqBody = {
    "documents": [
      {
        "language": "en",
        "id": 1,
        "text": document.getElementById("input").value
      }
    ]
  }

  var request = new Request('https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases', initObject);

  fetch(request).then(function(response){
    if(response.ok){
      return response.json();
    }
    else{
      return Promise.reject(new Error(response.statusText));
    }
  }).then(function(reponse){
    document.getElementById('output').innerHTML = "Total key phrases: " + response.documents[0].keyPhrases.length + "</br>" + response.documents[0].keyPhrases;
  }).catch(function(err){
    alert(err);
    document.getElementById('output').innerHTML = "";
  })
};

var apiKey = "7e3029df2246402ebd81c3b480eb813b";

var myHeader = new Headers({
  'Content-Type': 'application/json',
  'Ocp-Apim-Subscription-key': apiKey
});

var initObject = {
  method: 'POST',
  body: JSON.stringify(reqBody),
  header: myHeader
}
