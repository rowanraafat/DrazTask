var Cart = {
    id: int,
    name: String,
    prict: int,

    product : {id,name,price},
    items: [{product, count, priceofitem}],
    count:int,
    priceofitem:int,
    
    getItems: function(){
        return items;

    },

    hasProduct: function(product){
        i:int
        for(i=0; i<items.length(); i++){
            if(items[i].product.id==product.id)
            return true;
        }
        return false;

    },

    addItem: function(product){
        if(hasProduct(product)==true){
            i:int
            for(i=0; i<items.length; i++)
            if(items[i].product.id== product.id)
            items[i].count ++;
        }
        else {
            i:int
            for(i=0; i <items.length; i++){
                 if(i==items.length)
                 items[i]=product;
            }
           
        }
    },
    removeItem: function(product){
        if(hasProduct(product)==true){
        if(items.product.count!=0){
            count--;
        } else{i:int
        for (i=0;i<items.length;i++){
            if(items[i].product.id==product.id){
        items.splice(i,1);

        }

    }
        }
        }
   
    },
    removeProduct: function(product){
        if(hasProduct(product)==true){
            i:int
        for (i=0;i<items.length;i++){
            if(items[i].product.id==product.id){
        items.splice(i,1);
        }}}

    },
    getItem:function(product){
        i:int
        for(i=0;i<items.length;i++){
                  if(items[i].hasProduct==true){
                       return items[i];
                  }
                  else 
                  return null;
                
              }
    },
    getTotal:function(){
        return items.length;
    },
        clearCart: function(){
                items.splice(0,items.length);

        }
    }


module.exports = Cart;
