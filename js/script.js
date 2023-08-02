// შეამოწმე თუ ლოკალური storage-ს ასაფორთებს ბრაუზერი
if (typeof(Storage) !== "undefined") {
    // დაამატე შენახული ჩანაწერი თუ არის
    var savedInput = localStorage.getItem("userInput");
    if (savedInput) {
        document.getElementById("input-box").value = savedInput;
    }

    // წაიკითხე ცვლილებები და input-box ისთვის და შეინახე
    document.getElementById("input-box").addEventListener("input", function() {
        localStorage.setItem("userInput", this.value);
    });
} else {
    console.log("Local storage is not supported by your browser.");
}