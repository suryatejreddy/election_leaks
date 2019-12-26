var typingBoxClassName = "notranslate public-DraftEditor-content";

document.addEventListener('keyup', function(event) {
    if (event.target.className = typingBoxClassName){

        /* DOM for Tweet Typing Box */
        
        var tweetTextBox = document.getElementsByClassName(typingBoxClassName)[0];

        /* DOM for Tweet Outer Box (Used for Chaning Borders) */
        var outerBoxClassName = "css-1dbjc4n r-156q2ks";
        var outerBoxElement = document.getElementsByClassName(outerBoxClassName)[0];

        /* DOM for Tweet Lower Box (Used for Displaying Message) */
        var messageBoxClassName = "css-1dbjc4n r-e84r5y r-1or9b2r";
        var messageBoxElement = document.getElementsByClassName(messageBoxClassName)[0];
        
        
        var currentTweetText = tweetTextBox.textContent;

        if (currentTweetText.length > 10){
            chrome.runtime.sendMessage({text: currentTweetText}, function(response) {
                var responseJson = JSON.parse(response.result);
                if (responseJson.leak){
                    console.log("LEAK");
                    outerBoxElement.style.border = "solid red";
                    
                    /* Adding Message */
                    messageBoxElement.innerHTML = '<span class="r-1qd0xha" style="color:red">The tweet in the current form might leak your age, gender, and address. Click here to know more : </span>';
                    messageBoxElement.style.height="fit-content";
                    messageBoxElement.style.width="fit-content";
                    messageBoxElement.style.paddingLeft="50px";
                }
                else{
                    console.log("NO LEAK");
                    outerBoxElement.style.border = "solid green";
                    
                    messageBoxElement.innerHTML = '';
                    messageBoxElement.style.height="";
                    messageBoxElement.style.width="";
                    messageBoxElement.style.paddingLeft="";
                }
              });
        }
        else{
            outerBoxElement.style.border = "";
        }
    }
});