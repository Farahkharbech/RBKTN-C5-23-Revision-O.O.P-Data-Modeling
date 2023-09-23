//////////////////////The Reading List ////////////////////////
function Booklist() {
    return {
        numberOfBooksRead:0,
        numberOfBooksNotReadedYet:0,
        currentBook:{},
        nextBook:{},
        lastBook:{},
        allBooks:[],
        add:add,
        finishBook:finishBook

    }


}
var add=function(title,genre,author){ 
    this.allBooks.push(Books(title,genre,author))
    this.numberOfBooksNotReadedYet++
    this.currentBook=getCurrentBooks(this.allBooks)
    this.nextBook=getTheNextBook(this.allBooks)

}
var finishBook=function(){
    this.currentBook.read=true
    this.numberOfBooksRead++
    this.currentBook.readDate=new Date()
    this.lastBook=this.currentBook
    this.currentBook=getCurrentBooks(this.allBooks)
    this.nextBook=getTheNextBook(this.allBooks)
    this.numberOfBooksNotReadedYet--
    


}
function Books(title,genre,author){
    return {
        title:title,
        genre:genre,
        author:author,
        read:false,
        readDate:null

    }

    }
    function getCurrentBooks(array) {
        for(var i=0;i<array.length;i++){
            if (array[i].read===false){
                return array[i]
            }
            
        } return {}
    }

function getTheNextBook(array) {
    var index=0
    for(var i=0;i<array.length;i++){
        if(array[i].read===false ) {
            index++
            if(index===2){
                return array[i]
            }
            
        }

    } return {}
}
////////////////////////////The Cat //////////////////////////

function Cat (){
    var obj = { }
    obj.hapiness=Math.floor(Math.random()*10+1)
    obj.tiredness=Math.floor(Math.random()*10+1)
    obj.hunger=Math.floor(Math.random()*10+1)
    obj.lonliness=Math.floor(Math.random()*10+1)
    obj.feed=feed
    obj.sleep=sleep
    obj.pet=pet
return obj 
}
var feed = function (){
    if(this.hunger===0){
        return "im full"
    }
    this.hunger--
    this.hapiness++
    return "thank you"
 
}
var sleep = function (){
    if(this.tiredness===0){
        return "im fine"
    }
    this.tiredness--
    this.hunger++
    this.hapiness++
    return "thank you" }
    var pet = function (){
        if(this.lonliness===0){
            return "im fine"
        }
        this.tiredness++
        this.lonliness--
        this.hapiness++
        return "thank you" 
    }