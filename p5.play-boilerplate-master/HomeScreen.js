class HomeScreen{
    constructor(){
        this.read=createButton("Read Book");
        this.write=createButton("Write Book");
        this.donate=createButton("Donate Book");
    }
    display(){
        this.read.position(displayWidth/2-50,100);
        this.write.position(displayWidth/2-50,300);
        this.donate.position(displayWidth/2-50,500);
        this.read.mousePressed(()=>{
            flag=flag+1;
            console.log(flag)
        })
    }
}
