console.log("hello webpack");

fetch("/api/hello")
    .then((res) => res.text())
    .then((result) => {
        console.log(result);
    });
