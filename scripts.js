const gridContainer = document.getElementById('grid-container');

console.log(this);

for (let i = 0; i < 100; i++) {

    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.addEventListener('click',
    
        function () {
            
            console.log(this);
            console.log(this.classList);

            if(this.classList.contains('clicked')){
                this.classList.remove('clicked');
            }
            else{
                this.classList.add('clicked');
            }

        }
    
    );

    gridContainer.append(newCell);

}

function myFunction() {
    let x = document.getElementById("grid-container");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }