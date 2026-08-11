$(document).ready(function(){

    $('.addtocart').click(function(){
        let id = $(this).data('id');
        let name = $(this).data('name');
        let price = $(this).data('price');

        console.log(id , name, price)

        let item ={
            id:id,
            name:name,
            price:price,
            qty:1
        }

        let itString = localStorage.getItem('itshop');
        let itArray;
        
        if(itString == null){
            itArray=[]
        }
        else{
            itArray = JSON.parse(itString)
        }

        let status = false;
        $.each(itArray,function(i,v){
            if(v.id == id){
                v.qty ++;
                status=true
            }

        })

        if(status==false){
            itArray.push(item)
        }

        let itdata = JSON.stringify(itArray);
        localStorage.setItem('itshop',itdata)
        count();
    })
    count();

    function count(){
        let itString = localStorage.getItem('itshop')

        if(itString){
            let itArray=JSON.parse(itString)

            let count=0;
            $.each(itArray,function(i,v){

                if(itArray != 0){
                    count += Number(v.qty)
                    $('#item_count').text(count)
                }
                else{
                    $('#item_count').text(0)
                }

            })

            
        }
    }
})