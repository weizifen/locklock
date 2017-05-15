cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
 // use this for initialization
    onLoad: function () {
        this.setListener();
    },


    // initWithCellModels: function(cellsModels){
    //     this.cellViews = [];
    //     for(var i = 1;i<=9;i++){
    //         this.cellViews[i] = [];
    //         for(var j = 1;j<=9;j++){
    //             var type = cellsModels[i][j].type;
    //             var aniView = cc.instantiate(this.aniPre[type]);
    //             aniView.parent = this.node;
    //             var cellViewScript = aniView.getComponent("CellView");
    //             cellViewScript.initWithModel(cellsModels[i][j]);
    //             this.cellViews[i][j] = aniView;
    //         }
    //     }
    // },
    setListener: function(){
        this.node.on(cc.Node.EventType.TOUCH_START, function(eventTouch){
            // if(this.isInPlayAni){
            //     return true;
            // }
            var touchPos = eventTouch.getLocation();
            var cellPos = this.convertTouchPosToCell(touchPos);
            console.log(cellPos);
           return true;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function(eventTouch){
       
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function(eventTouch){
          // console.log("1111");
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function(eventTouch){
          // console.log("1111");
        }, this);
    },
    convertTouchPosToCell: function(pos){
        pos = this.node.convertToNodeSpace(pos);
        console.log(pos)
        if(pos.x < 0 || pos.x >= GRID_PIXEL_WIDTH || pos.y < 0 || pos.y >= GRID_PIXEL_HEIGHT){
            return false;
        }
        var x = Math.floor(pos.x / CELL_WIDTH) + 1;
        var y = Math.floor(pos.y / CELL_HEIGHT) + 1;
        return cc.p(x, y);
    },







});
