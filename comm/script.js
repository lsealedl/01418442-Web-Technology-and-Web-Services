function getComments() {
	let comments = localStorage.getItem("comments");

	return comments ? JSON.parse(comments) : [];
}

function saveComments(comments) {
	localStorage.setItem("comments", JSON.stringify(comments));
}

function displayComments() {
	const comments = getComments();
	const commentsDiv = document.getElementById("comments");
	commentsDiv.innerHTML = "";
	comments.forEach((comment) => {
		const p = document.createElement("p");

		p.textContent = comment.text;
		commentsDiv.appendChild(p);
	});
}

const form = document.getElementById("new-comment");

form.addEventListener("submit", function (e) {
	e.preventDefault();

	const commentText = document.getElementById("comment-text").value;
	let comments = getComments();

	comments.push({ text: commentText });
	saveComments(comments);
	document.getElementById("comment-text").value = "";

	displayComments();
});

form.addEventListener("reset", function (e) {
	e.preventDefault();

	localStorage.clear();
	displayComments();
});
// const clearBtn = document.getElementById("clear");

// clearBtn.addEventListener("click", function (e) {
// 	localStorage.clear();
// 	displayComments();
// });
displayComments();
