export class Tag{
    static readonly ANGULAR = new Tag('Angular','red');
    static readonly TYPESCRIPT = new Tag('Typesccript','darkred');
    static readonly CSHARP = new Tag('C#','green');
    static readonly ASPNET = new Tag('ASP.NET','purple');
    static readonly MONGODB = new Tag('Mongo','darkgreen');
    static readonly FIREBASE = new Tag('Firebase','darkorange');
    static readonly WINDOWFORMS = new Tag('WindowsForms','pink');
    static readonly JAVASCRIPT = new Tag('Javascript','#D3BD1A');
    static readonly TRIGGERS = new Tag('Triggers','#118C91');
    static readonly XAMARIN = new Tag('Xamarin','purple');





    private constructor(private readonly key: string, public readonly color: string){
        
    }
    toString(){
        return this.key;
    }
}