let clickCount = 0
const handleBtnClick = () => {
    clickCount ++;
    let heading = document.getElementById("heading").value
    let blog = document.getElementById("blog_post").value
    const div = document.createElement("div");
    div.setAttribute("id", `div-${clickCount}`)
    const head = document.createElement("p");
    const Blog = document.createElement("p");
    head.setAttribute("id", `heading-${clickCount}`);
    Blog.setAttribute("id", `blog-${clickCount}`);
    const headText = document.createTextNode(heading);
    const BlogText = document.createTextNode(blog);
    head.appendChild(headText);
    Blog.appendChild(BlogText);
    head.setAttribute("id", `heading-${clickCount}`);
    Blog.setAttribute("id", `blog-${clickCount}`);
    const br = document.createElement("br");
    const nbr = document.createElement("br");
    const lastBR = document.createElement("br");
    const editButton = document.createElement("button");
    editButton.innerHTML = "Edit Post"
    editButton.setAttribute("id", `edit_button-${clickCount}`);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete Post";
    deleteButton.setAttribute("id", `delete_btn-${clickCount}`);
    editButton.setAttribute("onclick", "handleEditClick(this.id)")
    deleteButton.setAttribute("onclick", "handleDeleteBtn(this.id)")
    div.style.width = "80%";
    div.style.border = "1px solid white";
    div.style.marginBottom = "10px";
    document.getElementById("data_list").appendChild(div);
    document.getElementById(`div-${clickCount}`).appendChild(head);
    document.getElementById(`div-${clickCount}`).appendChild(Blog);
    document.getElementById(`div-${clickCount}`).appendChild(editButton);
    document.getElementById(`div-${clickCount}`).appendChild(deleteButton);
    document.getElementById(`div-${clickCount}`).appendChild(lastBR);
    document.getElementById("heading").value = ""
    document.getElementById("blog_post").value = ""

}

function handleDeleteBtn (buttonID) {
    words = buttonID.split("-");
    console.log(words)
    let div = document.getElementById(`div-${words[1]}`)
    div.remove()
}


