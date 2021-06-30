console.log("hello")

document.querySelector('.btn').onclick = function(){
  if(document.querySelector(".input").value.length==0){
    alert("Please add some items")
  }
  else{
      document.querySelector('#tasks').innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector('.input').value}
              </span>
              <button class="delete">
              <i class="far fa-trash-alt"></i>
              </button>
          </div>
      `;

      var del = document.querySelectorAll(".delete");
      for(var i=0;i<del.length;i++){
          del[i].onclick = function(){
              this.parentNode.remove();
          }
      }

      let comp = document.querySelectorAll(".task");

      for(var i=0;i<comp.length;i++){
          comp[i].onclick = function(){
              this.classList.toggle("completed");
          }
      }

      document.querySelector(".input").value = "";
    }
  }
