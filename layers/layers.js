var wms_layers = [];

var format_Region_0 = new ol.format.GeoJSON();
var features_Region_0 = format_Region_0.readFeatures(json_Region_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Region_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Region_0.addFeatures(features_Region_0);
var lyr_Region_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Region_0, 
                style: style_Region_0,
                popuplayertitle: 'Region',
                interactive: true,
    title: 'Region<br />\
    <img src="styles/legend/Region_0_0.png" /> Colonies<br />\
    <img src="styles/legend/Region_0_1.png" /> Core<br />\
    <img src="styles/legend/Region_0_2.png" /> Deep Core<br />\
    <img src="styles/legend/Region_0_3.png" /> Expansion Region<br />\
    <img src="styles/legend/Region_0_4.png" /> Hutt Space<br />\
    <img src="styles/legend/Region_0_5.png" /> Inner Rim<br />\
    <img src="styles/legend/Region_0_6.png" /> Mid RIm<br />\
    <img src="styles/legend/Region_0_7.png" /> Outer Rim<br />\
    <img src="styles/legend/Region_0_8.png" /> Unknown Regions<br />\
    <img src="styles/legend/Region_0_9.png" /> Wild Space<br />\
    <img src="styles/legend/Region_0_10.png" /> <br />' });
var format_Sector_1 = new ol.format.GeoJSON();
var features_Sector_1 = format_Sector_1.readFeatures(json_Sector_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector_1.addFeatures(features_Sector_1);
var lyr_Sector_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector_1, 
                style: style_Sector_1,
                popuplayertitle: 'Sector',
                interactive: true,
                title: '<img src="styles/legend/Sector_1.png" /> Sector'
            });
var format_Grid_2 = new ol.format.GeoJSON();
var features_Grid_2 = format_Grid_2.readFeatures(json_Grid_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grid_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grid_2.addFeatures(features_Grid_2);
var lyr_Grid_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grid_2, 
                style: style_Grid_2,
                popuplayertitle: 'Grid',
                interactive: true,
                title: '<img src="styles/legend/Grid_2.png" /> Grid'
            });
var format_HyperLane_3 = new ol.format.GeoJSON();
var features_HyperLane_3 = format_HyperLane_3.readFeatures(json_HyperLane_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HyperLane_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HyperLane_3.addFeatures(features_HyperLane_3);
var lyr_HyperLane_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HyperLane_3, 
                style: style_HyperLane_3,
                popuplayertitle: 'Hyper Lane',
                interactive: true,
                title: '<img src="styles/legend/HyperLane_3.png" /> Hyper Lane'
            });
var format_PointOfInterest_4 = new ol.format.GeoJSON();
var features_PointOfInterest_4 = format_PointOfInterest_4.readFeatures(json_PointOfInterest_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PointOfInterest_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PointOfInterest_4.addFeatures(features_PointOfInterest_4);
var lyr_PointOfInterest_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PointOfInterest_4, 
                style: style_PointOfInterest_4,
                popuplayertitle: 'Point Of Interest',
                interactive: true,
                title: '<img src="styles/legend/PointOfInterest_4.png" /> Point Of Interest'
            });

lyr_Region_0.setVisible(true);lyr_Sector_1.setVisible(true);lyr_Grid_2.setVisible(true);lyr_HyperLane_3.setVisible(true);lyr_PointOfInterest_4.setVisible(true);
var layersList = [lyr_Region_0,lyr_Sector_1,lyr_Grid_2,lyr_HyperLane_3,lyr_PointOfInterest_4];
lyr_Region_0.set('fieldAliases', {'id': 'id', 'name': 'name', 'link': 'link', });
lyr_Sector_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'link': 'link', });
lyr_Grid_2.set('fieldAliases', {'id': 'id', 'grid': 'grid', });
lyr_HyperLane_3.set('fieldAliases', {'id': 'id', 'hyperlane': 'hyperlane', 'link': 'link', });
lyr_PointOfInterest_4.set('fieldAliases', {'id': 'id', 'name': 'name', 'link': 'link', 'status': 'status', 'sector': 'sector', 'region': 'region', 'grid': 'grid', 'x': 'x', 'y': 'y', });
lyr_Region_0.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'link': 'TextEdit', });
lyr_Sector_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'link': 'TextEdit', });
lyr_Grid_2.set('fieldImages', {'id': 'TextEdit', 'grid': 'TextEdit', });
lyr_HyperLane_3.set('fieldImages', {'id': 'TextEdit', 'hyperlane': 'TextEdit', 'link': 'TextEdit', });
lyr_PointOfInterest_4.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'link': 'TextEdit', 'status': 'TextEdit', 'sector': 'TextEdit', 'region': 'TextEdit', 'grid': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Region_0.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', 'link': 'inline label - visible with data', });
lyr_Sector_1.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', 'link': 'header label - visible with data', });
lyr_Grid_2.set('fieldLabels', {'id': 'hidden field', 'grid': 'no label', });
lyr_HyperLane_3.set('fieldLabels', {'id': 'hidden field', 'hyperlane': 'header label - always visible', 'link': 'inline label - visible with data', });
lyr_PointOfInterest_4.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - always visible', 'link': 'inline label - visible with data', 'status': 'hidden field', 'sector': 'hidden field', 'region': 'hidden field', 'grid': 'hidden field', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', });
lyr_PointOfInterest_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});