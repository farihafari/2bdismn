$(document).ready(function(){
    $.ajax({
        url:"assets/data.json",
        type:"get",
        success:function(brands){
// console.log(brands)
let x ="";
$.each(brands,function(keys,arrays){
  $.each(arrays,function(index,objects){
x+=`    <div class="col-lg-3 mt-3">
                <div class="card">
                    <img class="card-img-top" src="${objects.image}" alt="Title" />
                    <div class="card-body">
                        <h4 class="card-title">${objects.name}</h4>
                        <p class="card-text">Rs: ${objects.price}</p>
                        <a href = "" class="btn btn-info">detail</a>
                    </div>
                </div>
                
            </div>`
  })
})
$("#data").html(x)
        }
    })
})