class OwnLoader extends Laya.Script {
    constructor () {
        super();
        console.log("test ownerloader");
    }

    loadAll ():void {

        let count = 0;

        // [
        //     // 'res/atlas/ui/app/widget.atlas',
        //     // 'res/atlas/ui/app_a/load.atlas',
        //     "cfg/test.cfg"
        // ],
        Laya.loader.load(
            [
                'res/atlas/ui/app/widget.atlas',
                'res/atlas/ui/app_a/load.atlas',
                "cfg/test.json"
            ],
            Laya.Handler.create(
                this,
                (data) => {
                    console.log('complete data::', data);
                },
                null,
                false
            ),
            Laya.Handler.create(
                this, 
                (data) => {
                    // let sprite: Laya.Sprite = new Laya.Sprite();
                    
                    // const a = Laya.loader.getRes('ui/app/widget/1.jpg')
                    const a = Laya.loader.getRes('cfg/test.json');
                    console.log(this);
                    // console.log(a);
                    count++;
                    // console.log('count::', count);
                    console.log('load res::', data);
                },
                null,
                false
            ),
        );

        // Laya.loader.load("cfg/test.json", Laya.Handler.create(this, () => {
        //     console.log("load other");

        //     let sprite: Laya.Sprite = new Laya.Sprite();

        //     const texture = Laya.loader.getRes('ui/app/widget/1.jpg');
        // }));
        Laya.loader.load("fileconfig.json", Laya.Handler.create(this, () => {
            console.log("load other");
            const texture = Laya.loader.getRes('ui/app/widget/1.jpg');
        }))
    }
}


export const ownLoader: OwnLoader = new OwnLoader();