const boxes = document.getElementById('boxes')



fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {

        data.products.map(e => {

            var productBox = document.createElement('div')

            let productImage = document.createElement('img')
            productImage.setAttribute('src',e.thumbnail)

            productBox.appendChild(productImage)

            

            let productTitle = document.createElement('p')
            productTitle.textContent = e.title

            let deleteBtn = document.createElement('button')
            deleteBtn.classList.add('btn')
            deleteBtn.textContent = "Delete"
            deleteBtn.dataset.id = e.id

            productBox.appendChild(deleteBtn)

            productBox.appendChild(productTitle)

            boxes.appendChild(productBox)


            deleteBtn.addEventListener('click',(e) => {

                const id = e.target.dataset.id

                fetch(`https://dummyjson.com/products/${id}`, {
                    method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.isDeleted) {
                            alert("Ochirildi oka")
                        }
                    });
            })
        })
    })
    .catch(error => {
        console.log(error)
    })
    
