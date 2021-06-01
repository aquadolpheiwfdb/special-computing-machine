
function addUser(){
    player_1_name=document.getElementById("input_player_one").value;
    player_2_name=document.getElementById("input_player_two").value;

    localStorage.setItem("player_1_name", player_1_name);
    localStorage.setItem("player_2_name", player_2_name);

    window.location="quiz_game_page.html"

}
