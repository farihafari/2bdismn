$(document).ready(function(){
    $("#name").on("keyup",function(){
        let uname = $(this).val();
        let regexName = /^[a-z\s]{3,20}$/;
        if(!regexName.test(uname)){
            $(this).css("border","2px solid red");
            $(this).next("small").html("data should be valid").css({
                "color":"red",
                "font-size":"bold",
                "margin":"2px"
            })
        }else{
            $(this).css("border","2px solid green");
            $(this).next("small").html("valid data").css({
                "color":"green",
                "font-size":"bold",
                "margin":"2px"
            })
        }
    })
    // email
    $("#email").on("keyup",function(){
        let uemail = $(this).val();
        let regexEmail = /^[\w]{1,}[@][a-z]{5,9}[.][a-z]{3,3}$/;
        if(!regexEmail.test(uemail)){
            $(this).css("border","2px solid red");
            $(this).next("small").html("data should be valid").css({
                "color":"red",
                "font-size":"bold",
                "margin":"2px"
            })
        }else{
            $(this).css("border","2px solid green");
            $(this).next("small").html("valid data").css({
                "color":"green",
                "font-size":"bold",
                "margin":"2px"
            })
        }
    })
    $("#email").on("keyup",function(){
        let uemail = $(this).val();
        let regexEmail = /^[\w]{1,}[@][a-z]{5,9}[.][a-z]{3,3}$/;
        if(!regexEmail.test(uemail)){
            $(this).css("border","2px solid red");
            $(this).next("small").html("data should be valid").css({
                "color":"red",
                "font-size":"bold",
                "margin":"2px"
            })
        }else{
            $(this).css("border","2px solid green");
            $(this).next("small").html("valid data").css({
                "color":"green",
                "font-size":"bold",
                "margin":"2px"
            })
        }
    })
    $("#password").on("keyup",function(){
        let upassword = $(this).val();
        let regexpassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,12}$/;
        if(!regexpassword.test(upassword)){
            $(this).css("border","2px solid red");
            $(this).next("small").html("data should be valid").css({
                "color":"red",
                "font-size":"bold",
                "margin":"2px"
            })
        }else{
            $(this).css("border","2px solid green");
            $(this).next("small").html("valid data").css({
                "color":"green",
                "font-size":"bold",
                "margin":"2px"
            })
        }
    })
    $("#confirmpassword").on("keyup",function(){
       let cpassword = $(this).val();
       let upass= $("#password").val();
       if(cpassword!=upass){
        $(this).css("border","2px solid red");
        $(this).next("small").html("password not match").css({
            "color":"red",
            "font-size":"bold",
            "margin":"2px"
        })
       } else{
        $(this).css("border","2px solid green");
        $(this).next("small").html("password match").css({
            "color":"green",
            "font-size":"bold",
            "margin":"2px"
        })
       }
    })
    function EmptyInput(id){
        if($(id).val()==""){
            $(id).css("border","2px solid red");
            $(id).next("small").html("this value is required to fill").css({
                "color":"red",
                "font-size":"bold",
                "margin":"2px"})
            // console.log($(id).val());
        }
        
    }
    $("#registeration").click(function(){
        let uname = $("#name").val();
        let uemail = $("#email").val();
        let upassword = $("#upassword").val();
        let uconfirmpassword = $("#confirmpassword").val();
        let regexName = /^[a-z\s]{3,20}$/;
        let regexEmail = /^[\w]{1,}[@][a-z]{5,9}[.][a-z]{3,3}$/;
        let regexpassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,12}$/;

if(!(uname || uemail || upassword || uconfirmpassword)){
        EmptyInput("#name");
        EmptyInput("#email");
        EmptyInput("#password");
        EmptyInput("#confirmpassword");
}

 else if(uname && uemail && upassword && uconfirmpassword == upassword){
            alert("account resgister successfully")
            
        }else if((!regexName.test(uname))&&(!regexEmail.test(uemail))&&(!regexpassword.test(upassword)) && uconfirmpassword != upassword){
            alert("data invalid please fill the valid data");
        }
       
    })
})