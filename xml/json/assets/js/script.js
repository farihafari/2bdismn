$(document).ready(function(){
    $.ajax({
        url:"assets/data.json",
        type:"get",
        success:function(brands){
// console.log(brands)
let apple ="";
// let realme = "";
$.each(brands,function(keys,arrays){
    // if(keys=="apple"){
// console.log(arrays)
        $.each(arrays,function(index,objects){
      apple+=`<div class="col-lg-3 mt-3">
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
    // }else if(keys=="realme"){
    //     $.each(arrays,function(index,objects){
    //         realme+=`    <div class="col-lg-3 mt-3">
    //                         <div class="card">
    //                             <img class="card-img-top" src="${objects.image}" alt="Title" />
    //                             <div class="card-body">
    //                                 <h4 class="card-title">${objects.name}</h4>
    //                                 <p class="card-text">Rs: ${objects.price}</p>
    //                                 <a href = "detail.html?product=${keys+index}=" class="btn btn-info">detail</a>
    //                             </div>
    //                         </div>
                            
    //                     </div>`
    //           })
    // }
})
// $("#datarealme").html(realme)
$("#data").html(apple)
        }
    })
})
// detail page
let url = window.location.href;
console.log(url);
let getUrl = new URL(url);
console.log(getUrl)
let getQueryString  = getUrl.searchParams.get("product");
console.log(getQueryString);
$.ajax({
    url:"assets/data.json",
    type:"get",
    success:function(detailProducts){
        $.each(detailProducts,function(detKey, detArray){
            // console.log(detKey)
            $.each(detArray,function(detIndex,detobjects){
                // console.log()
                let concatVal =detKey+detIndex
if(concatVal==getQueryString){
    // console.log(detobjects)

    $("#detailImage").html(`
                <img class="card-img-top" src="${detobjects.image}" alt="Title" />
        `);
        $("#detailDes").html(`    <div class="card-body">
        <h4 class="card-title">${detobjects.name}</h4>
        <p class="card-text">Rs: ${detobjects.price}</p>
        <p class="card-text">${detobjects.description}</p>
      <button
        type="button"
        class="btn btn-outline-danger"
        onclick="Decreament()"
      >
      -
      </button>
    
      
        <input
            type="number"
            class=""
            name=""
            id="number"
            value="1"
            aria-describedby="helpId"
            placeholder=""
        />
       
        <button
        type="button"
        class="btn btn-outline-success"
        onclick="Increament()"
      >
   +
      </button>
      
    </div>
    <button
        type="button"
        class=" mt-3 btn btn-outline-primary"
        onclick="AddToCart('${getQueryString}')"
    >
       Add To Cart
    </button>`)
}
            })
        })
    }

})
// add to cart
let count =1;
function Increament(){
count++;
document.querySelector("#number").value=count;
}
function Decreament(){
    if(count>1){

    
    count--;
    document.querySelector("#number").value=count;

    }else{
        document.querySelector("#number").value=1
    }

}

function AddToCart(id){
// console.log(id)
// console.log(detailProducts)
$.ajax({
    url:"assets/data.json",
    type:"get",
    success:function(cartProducts){
        $.each(cartProducts,function(cartKeys,cartArrays){
            $.each(cartArrays,function(cartIndex,cartObject){
                if(cartKeys+cartIndex==id){
                   let localdata = localStorage.getItem("cartData");
                //    console.log(localstorage);
                if(localdata==null){
                    localStorage.setItem("cartData",'[]')
                }
                }
            })
        })
    }
})
}
