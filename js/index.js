document.addEventListener("DOMContentLoaded", function () {
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("comment-list");

  // 댓글 추가 기능
  document
    .getElementById("submit-button")
    .addEventListener("click", function () {
      const commentText = commentInput.value.trim(); // 공백 제거

      if (commentText === "") {
        alert("댓글을 입력해주세요!");
        return;
      }

      // 새로운 댓글 요소 생성
      const newComment = document.createElement("li");
      newComment.innerHTML = `
          <div class="comment-item">
              <div class="comment-author">
                  <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
                  <span>방문자</span>
              </div>
              <div class="comment-content">${commentText}</div>
          </div>
      `;

      // 댓글 리스트에 추가
      commentList.appendChild(newComment);

      // 입력창 비우기
      commentInput.value = "";
    });

  // Enter 키로 댓글 등록
  commentInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // 기본 엔터 동작 방지
      document.getElementById("submit-comment").click();
    }
  });
});
