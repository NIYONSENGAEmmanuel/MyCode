function getgrade(score){
    if(score>=90 && score<=100){
        return("A");}

else if(score>=80 && score<=89){
return("B");}

else if(score>=70 && score<=79){
    return("C");}
    else if(score>=60 && score<=69){
        return("D");
    }
    else if(score>=0 && score<=59){
        return("E")
    }
    else{
    return "invalid score"}
    }
console.log(getgrade(40))

 class book{
    let 
    title="geography";
    year="2004";
    author="";
 constructor(title,author,year){
    this.title= title;
    this.author= author;
    this.year= year;
    getsummary();
    return{title,author,year};
 }

}
console.log(book)