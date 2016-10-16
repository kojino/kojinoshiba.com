jsPlumb.ready(function() {
    var common = {
        connector: ["Straight"],
        anchor: ["Left", "Right"],
        endpoint:"Blank"
    };
    for (var i = 1; i < 3; i++) {
       for (var j = 1; j < 4; j++) {
         jsPlumb.connect({
             source:"f-" + i,
             target:"t-" + j,
             paintStyle:{ strokeStyle:"lightgray", lineWidth:3 },
             endpointStyle:{ fillStyle:"lightgray", outlineColor:"gray" },
             overlays:[
                 ["Arrow" , { width:12, length:12, location:0.67 }]
             ]
         }, common);
         jsPlumb.connect({
             source:"t-" + j,
             target:"w-" + i,
             paintStyle:{ strokeStyle:"lightgray", lineWidth:3 },
             endpointStyle:{ fillStyle:"lightgray", outlineColor:"gray" },
             overlays:[
                 ["Arrow" , { width:12, length:12, location:0.67 }]
             ]
         }, common);
       }
    }
    $(window).resize(function(){
         jsPlumb.revalidate(this);
    });
});
