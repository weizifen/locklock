// 类
function GameModel(){
    this.cells = null;
    this.cellBgs = null;
    this.lastPos = cc.p(-1, -1);
    this.cellTypeNum = 5;
    this.cellCreateType = []; // 升成种类只在这个数组里面查找
}
// 初始化
GameModel.prototype.init=function(cellTypeNum){
        this.cells = [];
        
         for(var i = 1;i<=GRID_WIDTH;i++){
        // console.log(GRID_WIDTH)
        this.cells[i] = [];
        for(var j = 1;j <= GRID_HEIGHT;j++){
            this.cells[i][j] = new CellModel();
        }
    }



}