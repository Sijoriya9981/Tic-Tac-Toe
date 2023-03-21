const cellelements = document.querySelectorAll(".gameboard .cell");
const player1 = document.querySelector(".players .player1")
const player2 = document.querySelector(".players .player2")
const result = document.querySelector(".result ")
const result_text = document.querySelector(".result h1")

const restart = document.querySelector(".result button")

const winningcondtion =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [1,4,7]
]
const playerO = "O";
const playerX ="X";
let toggleturn =true;
cellelements.forEach(cell=>
    {
        cell.onclick=()=>
        {
          let currentplayer = toggleturn? playerX:playerO
            cell.classList.add("disabled");
            

           cell.innerHTML =currentplayer;
           addIncell(cell,currentplayer);

            if(winnercheck(currentplayer))
            {
                result.classList.remove("inactive")
                result_text.innerHTML = currentplayer +" WIN GAME"

           
            }
            else if(isDraw())
            {
                result.classList.remove("inactive")
                result_text.innerHTML = "GAME DRAW"
            }
            else{

                swapplayer();
            }

         
        }
});
function winnercheck(currentplayer)
{
    return winningcondtion.some(condition=>
        {
          return   condition.every(index=>
                {
                  return cellelements[index].classList.contains(currentplayer);
                })
        })
}

function isDraw()
{
   return [...cellelements].every(cellb=>
        {
            return cellb.classList.contains(playerX)||cellb.classList.contains(playerO)
        })
}
function  swapplayer()
{
    toggleturn = !toggleturn
    if(toggleturn)
    {
        player2.classList.add("active");
        player1.classList.remove("active");


    }
    else{
        player1.classList.add("active");
        player2.classList.remove("active");

    }

}
function addIncell(cell, currentplayer)
{
    cell.innerHTML =currentplayer;
    cell.classList.add(currentplayer);
}


restart.onclick=()=>
{
    location.reload();
}