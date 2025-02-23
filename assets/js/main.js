var button = document.getElementById('index_button');

button.addEventListener("click", function() {
    var content = document.getElementById("index_list");

    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});

