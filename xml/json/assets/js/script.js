$(document).ready(function(){
    $.ajax({
        url:"assets/data.json",
        type:"get",
        success:function(brands){
// console.log(brands)
let apple ="";
let realme = "";
$.each(brands,function(keys,arrays){
    if(keys=="apple"){

        $.each(arrays,function(index,objects){
      apple+=`    <div class="col-lg-3 mt-3">
                      <div class="card">
                          <img class="card-img-top" src="${objects.image}" alt="Title" />
                          <div class="card-body">
                              <h4 class="card-title">${objects.name}</h4>
                              <p class="card-text">Rs: ${objects.price}</p>
                              <a href = "detail.html?product=${keys+index}" class="btn btn-info">detail</a>
                          </div>
                      </div>
                      
                  </div>`
        })
    }else if(keys=="realme"){
        $.each(arrays,function(index,objects){
            realme+=`    <div class="col-lg-3 mt-3">
                            <div class="card">
                                <img class="card-img-top" src="${objects.image}" alt="Title" />
                                <div class="card-body">
                                    <h4 class="card-title">${objects.name}</h4>
                                    <p class="card-text">Rs: ${objects.price}</p>
                                    <a href = "detail.html?product=${keys+index}=" class="btn btn-info">detail</a>
                                </div>
                            </div>
                            
                        </div>`
              })
    }
})
$("#datarealme").html(realme)
$("#data").html(apple)
        }
    })
})