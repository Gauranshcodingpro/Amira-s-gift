var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS30IkmT4b4i_5QXFYyLDJIvGCj5TIp1VJjGw&usqp=CAU" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK2-XUMtmGMkBnhVLluHjkeJe1dtF25mbYkw&usqp=CAU"];
var names = ["Fmaily Book", "Daddy-Simaran", "Mommy-Geetika", "You-Amaira"];

var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images [i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names [i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
