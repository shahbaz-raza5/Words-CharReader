let textarea = document.getElementById("textArea");
textarea.addEventListener('input', function () {

    var text = this.value;
    console.log(char);
    document.getElementById("char").innerHTML = text.length;
    text = text.trim();
    console.log(text)
    let words = text.split(" ");
    console.log(words)
    let cleanwords = words.filter(function (el) {
        return el != "";
    })
    console.log(words);
    document.getElementById("words").innerHTML = cleanwords.length;
// })
})