function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier =ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/0SefaasvE/model.json",modelready);
    
}
function modelready()
{
    classifier.classify(getResults);
}

function getResults(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("h4-resultado").innerHTML="escucho: "+results[0].label;
        document.getElementById("h4-porcentaje").innerHTML="porcentaje: "+results[0].confidence;
    }
}