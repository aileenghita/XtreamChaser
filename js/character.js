$(function() {
    $('.navbar-li').css('cursor', 'pointer')

    .click(function() {
        var id = $(this).attr("id");
        showCharacter(id,0);
    });
});

function showCharacter(id, index){
    datas = JSON.parse(JSON.stringify(characters));
    if(datas[index].id != id){
        index++
        showCharacter(id, index)
    }
    else{
        document.getElementById("charImage").src = "../assets/"+datas[index].id+".jpg"
        document.getElementById("charName").innerHTML = datas[index].name
        document.getElementById("charDesc").innerHTML = datas[index].desc
        document.getElementById("charHeight").innerHTML = datas[index].height
        document.getElementById("charWeight").innerHTML = datas[index].weight
    }
    return false
}