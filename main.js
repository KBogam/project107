function startClassification()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    });

    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1c6OgLT5f/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResult);
}


function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("result_label").innerHTML = 'Detected voice is off '+ results[0].label;
        img=document.getElementById('image');
        if(results[0].label=="Barking")
        {
            console.log("dog image");
            img.src="https://www.europuppy.com/wp-content/uploads/2020/01/xIMG_9625-1.jpg.pagespeed.ic.aB3wA1tr1a.jpg";
        }

        if(results[0].label=="Mooing")
        {
            console.log("cow image");
            img.src="http://2.bp.blogspot.com/-8SUT6fRNih8/U06gmlAVodI/AAAAAAAAAuo/NU-iwiSfXDk/s1600/cow-red.jpg";
        }

        if(results[0].label=="Meowing")
        {
            console.log("cat image");
            img.src="https://img.thrfun.com/img/220/040/what_breed_is_my_cat_tx7.jpg";
        }


        if(results[0].label=="Roaring")
        {
            console.log("lion image");
            img.src="https://15pictures.com/wp-content/gallery/15-pictures-lions/lions-4.jpg";
        }

        else{
            console.log("background image");
            img.src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/ear.png";
        }
    
     
        
    }
}


//
