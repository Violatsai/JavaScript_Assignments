function createNewDoc(){
    // debug level: 0-2 (0:disable, 1:break on error, 2:break at beginning)
    // $.level = 1;
    // debugger; // launch debugger on next line

    app.preferences.rulerUnits = Units.INCHES;
    var newDocumentRef = app.documents.add(8.5, 11, 72, "Filling a Layer");
    return newDocumentRef;
}

function createNewLayer(myDoc,myLayerName,myColor){
    app.preferences.rulerUnits = Units.INCHES;
    app.preferences.typeUnits = TypeUnits.POINTS;

    var docRef = myDoc;

    var layerRef = docRef.artLayers.add();
    layerRef.name = myLayerName;
    app.activeDocument.selection.fill( myColor );
}

function trimLayer(myDoc,myLayerName,myAmount){
    app.preferences.rulerUnits = Units.POINTS;
    var docRef = myDoc;
    var layerRef = docRef.artLayers.getByName(myLayerName);
    
    app.activeDocument.activeLayer = layerRef;  
    
    app.activeDocument.selection.selectAll();
    var myEdges = app.activeDocument.selection.bounds;

    var one = myEdges[0]+myAmount;
    var two = myEdges[1]+myAmount;
    var three = myEdges[2]-myAmount;
    var four = myEdges[3]-myAmount;
    var shapeRef = [ [one,two], [one,four], [three,four], [three,two] ];
    docRef.selection.select(shapeRef);
    app.activeDocument.selection.contract(new UnitValue (myAmount, "px"));

    app.activeDocument.selection.clear();
}


// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

// in case we double clicked the file
app.bringToFront();

var docOne = createNewDoc();
var fillColor = new SolidColor();
fillColor.rgb.red  = 0;
fillColor.rgb.green = 255;
fillColor.rgb.blue = 0;
createNewLayer(docOne,"fill_layer",fillColor);

fillColor = new SolidColor();
fillColor.rgb.red  = 255;
fillColor.rgb.green = 0;
fillColor.rgb.blue = 255;
createNewLayer(docOne,"fill_partLayer",fillColor);

trimLayer(docOne,"fill_partLayer",100);

