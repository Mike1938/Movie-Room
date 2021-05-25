
const validate = () => {
    let search = document.getElementById("searchForm").value;
    if (search.length < 2) {
        document.getElementById("searchForm").placeholder = "Try Again"
        document.getElementById("searchForm").classList.add("valError")
        search = document.getElementById("searchForm").value = "";
        return false
    } else {
        return true
    }
}