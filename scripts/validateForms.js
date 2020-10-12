
const validate = () => {
    let search = document.getElementById("searchForm").value;
    if (search.length < 2) {
        alert("Please write a complete title")
        search = document.getElementById("searchForm").value = "";
        return false
    } else {
        return true
    }
}