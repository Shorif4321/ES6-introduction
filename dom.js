
function addBackgroudColo() {
    document.ge('id').addEventListener('click', function () {
        const containers = document.getElementsByClassName('container');
        for (const container of containers) {
            container.innerHTML = ` <h>tesxter</h>
           <h>tesxter</h>
           <p>tesxter</p>
           <h6>tesxter</h6>
           `
        }
    })
}

