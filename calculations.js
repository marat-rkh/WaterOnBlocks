var calculations = {
    calculateWaterVolume : function (blocks) {
        if(blocks.some(function(elem) { return elem < 0; })) {
            throw "calculateWaterVolume: array elements must be >= 0";
        }
        var leftMaxHeights = new Array(blocks.length);
        var curMax = 0;
        for (var i = 0; i < blocks.length; ++i) {
            leftMaxHeights[i] = curMax;
            curMax = blocks[i] == 0 ? 0 : blocks[i] > curMax ? blocks[i] : curMax;
        }
        var rightMaxHeights = new Array(blocks.length);
        curMax = 0;
        for (var i = blocks.length - 1; i >= 0; --i) {
            rightMaxHeights[i] = curMax;
            curMax = blocks[i] == 0 ? 0 : blocks[i] > curMax ? blocks[i] : curMax;
        }
        var volumes = new Array(blocks.length);
        for (var i = 0; i < blocks.length; ++i) {
            if (blocks[i] == 0) {
                volumes[i] = 0;
            } else {
                var minNeighbourHeight = Math.min(leftMaxHeights[i], rightMaxHeights[i]);
                volumes[i] = Math.max(minNeighbourHeight - blocks[i], 0);
            }
        };
        return volumes;
    }
};
