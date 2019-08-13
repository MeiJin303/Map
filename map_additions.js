class MapAdditions {
    constructor(args) {
        this.map = args.map;
        this.btns = args.btns

        if (this.map !== undefined && this.map !== null && this.btns !== undefined && this.btns !== null) {
            this.mainDiv = document.createElement('div');
            this.addBtns()
            map.controls[google.maps.ControlPosition.RIGHT_TOP].push(this.mainDiv);
        }
    }

    addBtns() {
        var self = this
        this.btns.forEach(function(btn){
            var controlDiv = document.createElement("div");
            controlDiv.style.padding = "0px 10px 0px 0px";

            var controlUI = document.createElement('button');
            controlUI.className = "btn col";
            if (btn.class !== undefined && btn.class !== "") {
                controlUI.className += " "+btn.class
            }
            controlUI.style.boxShadow = "rgba(0, 0, 0, 0.3) 0px 1px 4px -1px";
            controlUI.style.backgroundColor = "rgb(255, 255, 255)";
            controlUI.style.margin = "5px 10px 0px 0px";
            controlUI.innerHTML = btn.innerHTML;

            controlDiv.appendChild(controlUI);
            self.mainDiv.appendChild(controlDiv);

            // Invoke callback function if it is defined
            if (btn.callback !== undefined) {
                var callback = btn.callback;
                controlUI.addEventListener('click', function () {
                    callback();
                });   
            }
        });
    }
}