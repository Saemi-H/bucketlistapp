window.onload=function(){
    makeBucketList();
}

function makeBucketList(){
    const bucketInput = document.querySelector('.input-txt');
    const submitBtn =document.querySelector('.fa-plus-square');
    const bucketListUl=document.querySelector('.bucket-list-con');
    const dateInput = document.querySelector('.body-text');
    const detailInput = document.querySelector('textarea');

    getTodos();
    
    submitBtn.addEventListener('click', addList);

    function addList(){
        const bucketLi = document.createElement('li');
        const bucketLiTit = document.createElement('div');
        const bucketH2=document.createElement('h2');
        const checkBtn = document.createElement('button');
        const tgBtn = document.createElement('button');
        const trashBtn = document.createElement('button');
        const bucketListInner = document.createElement('div');
        const innerForm = document.createElement('form');
        const h3Inner=document.createElement('h3');
        const pInner=document.createElement('p');
       
        bucketH2.innerText = bucketInput.value;
        
        bucketLi.classList.add('list');
        bucketLiTit.classList.add('tit-box')
        checkBtn.innerHTML='<i class="fas fa-check"></i>';
        tgBtn.innerHTML='<i class="fas fa-plus"></i>';
        trashBtn.innerHTML='<i class="fas fa-trash"></i>';
        bucketListInner.classList.add('list-inner');
        h3Inner.innerHTML='<input type="text" placeholder="Date/날짜 입력">';
        pInner.innerHTML='<textarea placeholder="Write Details/상세내용 입력">';
        innerForm.classList.add('body-form');
        h3Inner.firstElementChild.classList.add('body-text');


        saveLocalTodos(bucketInput.value);
        
        bucketLi.appendChild(bucketLiTit);
        bucketLiTit.appendChild(bucketH2);
        bucketLiTit.appendChild(checkBtn);
        bucketLiTit.appendChild(tgBtn);
        bucketLiTit.appendChild(trashBtn);
        bucketLi.appendChild(bucketListInner);
        bucketListInner.appendChild(innerForm);
        innerForm.appendChild(h3Inner);
        innerForm.appendChild(pInner);
        bucketListUl.appendChild(bucketLi);

        bucketInput.value="";

        checkBtn.addEventListener('click', doneIt);
        tgBtn.addEventListener('click', toggleIt);
        trashBtn.addEventListener('click', deleteIt);
        
        function doneIt(event){
            event.preventDefault();
            bucketH2.classList.toggle('done');
        }
        function toggleIt(event){
            event.preventDefault();
            bucketLi.classList.toggle('drop-li');
            bucketListInner.classList.toggle('slide-down');
        }
        function deleteIt(e){
            let list;
            //event.preventDefault();
            const targetItem = e.target.parentElement.parentElement.parentElement;
            //console.log(targetItem);
            targetItem.remove();
            
        if(localStorage.getItem('list')===null){
            list = [];
        }else{
            list = JSON.parse(localStorage.getItem('list'));
        }
        //console.log(targetItem.innerText);
        //console.log(list.indexOf('b')); 
          const targetIndex =  targetItem.innerText;
          list.splice(list.indexOf(targetIndex), 1);
          localStorage.setItem('list', JSON.stringify(list)); 
        //setItem 마지막에 다시 해줘야함  

        }//deleteIt
         

    }//addList

    function saveLocalTodos(todo){
        let list;
        //console.log(todos.length);
        if(localStorage.getItem('list')===null){
            list = [];
        }else{
            list = JSON.parse(localStorage.getItem('list'));
        }
        //check if item is there?
        list.push(todo);
        localStorage.setItem('list', JSON.stringify(list));    
    }//saveLocalTodos

    function getTodos(){
        let list;
        //console.log(todos.length);
        if(localStorage.getItem('list')===null){
            list = [];
        }else{
            list = JSON.parse(localStorage.getItem('list'));
        }
        //check if item is there?
        list.forEach(function(todo){

        const bucketLi = document.createElement('li');
        const bucketLiTit = document.createElement('div');
        const bucketH2=document.createElement('h2');
        const checkBtn = document.createElement('button');
        const tgBtn = document.createElement('button');
        const trashBtn = document.createElement('button');
        const bucketListInner = document.createElement('div');
        const innerForm = document.createElement('form');
        const h3Inner=document.createElement('h3');
        const pInner=document.createElement('p');
       
        //console.log(bucketInput.value);
        bucketH2.innerText = todo;
       

        bucketLi.classList.add('list');
        bucketLiTit.classList.add('tit-box')
        checkBtn.innerHTML='<i class="fas fa-check"></i>';
        tgBtn.innerHTML='<i class="fas fa-plus"></i>';
        trashBtn.innerHTML='<i class="fas fa-trash"></i>';
        bucketListInner.classList.add('list-inner');
        h3Inner.innerHTML='<input type="text" placeholder="Date/날짜 입력">';
        pInner.innerHTML='<textarea placeholder="Write Details/상세내용 입력">';
        innerForm.classList.add('body-form');
        h3Inner.firstElementChild.classList.add('body-text');

        
        bucketLi.appendChild(bucketLiTit);
        bucketLiTit.appendChild(bucketH2);
        bucketLiTit.appendChild(checkBtn);
        bucketLiTit.appendChild(tgBtn);
        bucketLiTit.appendChild(trashBtn);
        bucketLi.appendChild(bucketListInner);
        bucketListInner.appendChild(innerForm);
        innerForm.appendChild(h3Inner);
        innerForm.appendChild(pInner);
        bucketListUl.appendChild(bucketLi);

        checkBtn.addEventListener('click', doneIt);
        tgBtn.addEventListener('click', toggleIt);
        trashBtn.addEventListener('click', deleteIt);
        
        
        function doneIt(event){
            event.preventDefault();
            bucketH2.classList.toggle('done');
        }
        function toggleIt(event){
            event.preventDefault();
            bucketLi.classList.toggle('drop-li');
            bucketListInner.classList.toggle('slide-down');
        }
        function deleteIt(e){
            let list; 
            const targetItem = e.target.parentElement.parentElement.parentElement;
            //console.log(targetItem);
            targetItem.remove();

            if(localStorage.getItem('list')===null){
                list = [];
            }else{
                list = JSON.parse(localStorage.getItem('list'));
            }
            //console.log(targetItem.innerText);
            //console.log(list.indexOf('b'));  
            const targetIndex =  targetItem.innerText;
            list.splice(list.indexOf(targetIndex), 1); 
            localStorage.setItem('list', JSON.stringify(list)); 
            //setItem 마지막에 다시 해줘야함  
        }

        })

    }//getTodos

}//makeBucketList