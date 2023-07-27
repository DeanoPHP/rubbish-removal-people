function myFunction() {
    const x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

inputStyle = (e) => {
    e.preventDefault();
    const i = document.querySelectorAll('input')

    i.style.border = '8px solid black';
}

document.querySelectorAll('input').addEventListener('click', inputStyle);