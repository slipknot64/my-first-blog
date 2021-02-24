var updateBtns = document.getElementsByClassName('update-cart')


for(var i = 0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var object = this.dataset.product
        var action = this.dataset.action
        console.log('object', object, 'action:', action)

        console.log('USER:', user)
        if(user === 'AnonymousUser'){
            console.log('Not Logged in')
        }else{
            console.log('User is logged in, sending data..')
        } 
    })
}


function updateUserOrder(object, action){
    console.log('User is logged in, sending data..')
    
    var url = '/update_item/'

    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'object': object, 'action':action})
    })

    .then((response) =>{
        return response.json()
    })

    .then((data) =>{
        console.log('data', data)
    })

}