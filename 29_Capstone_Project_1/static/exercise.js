// const trashBtn = document.getElementById('trash-btn');

const trashBtns = document.getElementsByClassName('trash-btn');


for (trashBtn of trashBtns) {
  trashBtn.addEventListener('click', async function(e) {
    comment = e.target.parentElement.parentElement.parentElement;
    comment_id = comment.getAttribute('id');
    
    request = axios.post(`/comments/${comment_id}/delete`);
  });
}



