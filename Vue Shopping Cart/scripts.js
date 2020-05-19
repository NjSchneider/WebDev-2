var app = new Vue({
    el: "#app",
    data: {
        inCart: true, // boolean to check whether an item is in the cart
        startingStock: 10, // the max that can be instock
        stockMessage: "Add to Cart",
        total: 0, // cart total
        // array of item objects
        items: [
            {name: "Overwatch 2", imgSrc: "Images/overwatch.jpg", description: "Overwatch is a colorful team-based shooter game starring a diverse cast of powerful heroes. Travel the world, build a team, and contest objectives in exhilarating 6v6 combat.", currentStock: 10, price: 59.99, qty: 0, subtotal: 0},
            {name: "Destiny 2", imgSrc: "Images/destiny2.jpg", description: " Destiny 2 is a first-person shooter game that incorporates role-playing and massively multiplayer online game (MMO) elements. The original Destiny includes on-the-fly matchmaking that allowed players to communicate only with other players with whom they were  by the game.", currentStock: 10, price: 24.99, qty: 0, subtotal: 0},
            {name: "Diablo 3", imgSrc: "Images/diablo.jpg", description: "Diablo III is a dungeon crawler hack-and-slash action role-playing game developed and published by Blizzard Entertainment as the third installment in the Diablo franchise.", currentStock: 10, price: 29.99, qty: 0, subtotal: 0}
        ],
        // cart Array        
        itemsOrdered: []
    },
    methods: { 
        // adds the item to the cart      
        orderThis(theObj){           
           if(theObj.currentStock > 0){
            theObj.currentStock--;               
            this.inCart = this.checkCart(theObj); // checks to see if the item is already in the cart Array
            if(this.inCart == false){
                this.itemsOrdered.push(theObj); // adds the item object to the cart array
                theObj.qty++;
            }
            else{
                theObj.qty++;
            }   
            theObj.subtotal = (theObj.price * theObj.qty).toFixed(2);        
            this.total += theObj.price;
            this.checkCurrentStock(theObj); // checks the current number in stock is greater than 0
           }
        },
        // removes 1 of the selected items from the cart
        removeThis(theObj){
            theObj.subtotal -= theObj.price;
            theObj.currentStock++;  
            theObj.qty--;          
            this.total -= theObj.price;
            this.checkBounds(theObj); // checks that values are inbounds
            
        },
        // removes all items of the same name from the cart
        removeAll(theObj){
            if(this.itemsOrdered.length > 0){
                for(var i = this.itemsOrdered.length - 1; i >= 0 ; i--){
                    if(theObj.name == this.itemsOrdered[i].name){
                        this.itemsOrdered.splice(i,1);
                        this.total -= theObj.subtotal;  
                        theObj.qty = 0;
                        theObj.subtotal = 0; 
                        theObj.currentStock = this.startingStock; 
                        this.checkBounds(theObj);  // checks that values are inbounds                      
                    }
                }
            }
        },
        // sets stock to  Out of Stock when it drops below 0
        checkCurrentStock(theObj){
            if(theObj.currentStock < 1){
                theObj.currentStock = "Out of Stock";
            }
        },
        // checks values to see if they are inbounds, if not they are adjusted
        checkBounds(theObj){
            if(theObj.subtotal < 0){
                theObj.subtotal = 0;
            }
            if(this.total < 0 || this.itemsOrdered.length == 0){
                this.total = 0;
            }
            if(theObj.currentStock > this.startingStock){
                theObj.currentStock = this.startingStock;
            }
            if(theObj.qty == 0){
                this.removeAll(theObj);
            }
        },
        // checks to see if the selected item is already in the cart Array
        checkCart(theObj){
            for(var i = 0; i < this.itemsOrdered.length; i++){
                if(theObj.name == this.itemsOrdered[i].name){
                    return true;
                }                
            }
            return false;
        }
    }
});