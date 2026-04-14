var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_loc4301000002_1 = new ol.format.GeoJSON();
var features_loc4301000002_1 = format_loc4301000002_1.readFeatures(json_loc4301000002_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_loc4301000002_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_loc4301000002_1.addFeatures(features_loc4301000002_1);
var lyr_loc4301000002_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_loc4301000002_1, 
                style: style_loc4301000002_1,
                popuplayertitle: 'loc4301000002',
                interactive: true,
                title: '<img src="styles/legend/loc4301000002_1.png" /> loc4301000002'
            });
var format_TO4301000002_2 = new ol.format.GeoJSON();
var features_TO4301000002_2 = format_TO4301000002_2.readFeatures(json_TO4301000002_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TO4301000002_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TO4301000002_2.addFeatures(features_TO4301000002_2);
var lyr_TO4301000002_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TO4301000002_2, 
                style: style_TO4301000002_2,
                popuplayertitle: 'TO4301000002',
                interactive: true,
                title: '<img src="styles/legend/TO4301000002_2.png" /> TO4301000002'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_loc4301000002_1.setVisible(true);lyr_TO4301000002_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_loc4301000002_1,lyr_TO4301000002_2];
lyr_loc4301000002_1.set('fieldAliases', {'id': 'id', });
lyr_TO4301000002_2.set('fieldAliases', {'id': 'id', });
lyr_loc4301000002_1.set('fieldImages', {'id': 'TextEdit', });
lyr_TO4301000002_2.set('fieldImages', {'id': 'TextEdit', });
lyr_loc4301000002_1.set('fieldLabels', {'id': 'no label', });
lyr_TO4301000002_2.set('fieldLabels', {'id': 'no label', });
lyr_TO4301000002_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});