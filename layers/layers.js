var wms_layers = [];

var lyr_OSMStandard = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a> &nbsp&nbsp ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        
var lyr_excursion_slope_prob_above0_suhi = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/excursion_slope_prob_above0_suhi.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>excursion_slope_prob_above0_suhi</b><br />\
        <img src="styles/legend/excursion_slope_prob_above0_suhi_0.png" /> 0,0000<br />\
        <img src="styles/legend/excursion_slope_prob_above0_suhi_2.png" /> 1,0000<br /></a>'
        }),
    opacity: 1,
    permalink: "excursion_slope_prob_above0_suhi",
    
     
    title: '<div id="layertitle">SUHI - Worsening<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/excursion_slope_prob_above0_suhi_0.png" /> <95%<br />\
        <img src="styles/legend/excursion_slope_prob_above0_suhi_2.png" /> ≥95%<br /></a>'
        });
    
var lyr_excursion_slope_prob_below0_suhi = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/excursion_slope_prob_below0_suhi.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>excursion_slope_prob_below0_suhi</b><br />\
        <img src="styles/legend/excursion_slope_prob_below0_suhi_0.png" /> 0,0000<br />\
        <img src="styles/legend/excursion_slope_prob_below0_suhi_2.png" /> 1,0000<br /></a>'
        }),
    opacity: 1,
    permalink: "excursion_slope_prob_below0_suhi",
    
     
    title: '<div id="layertitle">SUHI - Improving<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/excursion_slope_prob_below0_suhi_0.png" /> <95% <br />\
        <img src="styles/legend/excursion_slope_prob_below0_suhi_2.png" /> ≥95% <br /></a>'
        });
    
var lyr_svc_sd_suhi = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/svc_sd_suhi.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>svc_sd_suhi</b><br />\
        <img src="styles/legend/svc_sd_suhi_0.png" /> 0,0100<br />\
        <img src="styles/legend/svc_sd_suhi_1.png" /> 0,0138<br />\
        <img src="styles/legend/svc_sd_suhi_2.png" /> 0,0175<br />\
        <img src="styles/legend/svc_sd_suhi_3.png" /> 0,0212<br />\
        <img src="styles/legend/svc_sd_suhi_4.png" /> 0,0250<br />\
        <img src="styles/legend/svc_sd_suhi_5.png" /> 0,0287<br />\
        <img src="styles/legend/svc_sd_suhi_6.png" /> 0,0325<br />\
        <img src="styles/legend/svc_sd_suhi_7.png" /> 0,0362<br />\
        <img src="styles/legend/svc_sd_suhi_8.png" /> 0,0400<br /></a>'
        }),
    opacity: 1,
    permalink: "svc_sd_suhi",
    
     
    title: '<div id="layertitle">Posterior SD<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/svc_sd_suhi_0.png" /> 0,010<br />\
        <img src="styles/legend/svc_sd_suhi_1.png" /> 0,014<br />\
        <img src="styles/legend/svc_sd_suhi_2.png" /> 0,018<br />\
        <img src="styles/legend/svc_sd_suhi_3.png" /> 0,021<br />\
        <img src="styles/legend/svc_sd_suhi_4.png" /> 0,025<br />\
        <img src="styles/legend/svc_sd_suhi_5.png" /> 0,029<br />\
        <img src="styles/legend/svc_sd_suhi_6.png" /> 0,033<br />\
        <img src="styles/legend/svc_sd_suhi_7.png" /> 0,036<br />\
        <img src="styles/legend/svc_sd_suhi_8.png" /> 0,040<br /></a>'
        });
    
var lyr_SVCmeanSUHI = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/SVCmeanSUHI.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249703.930623, 5530468.614383, 1272978.223479, 5552285.852987],
    attributions: '<a class="legend"><b>SVC mean SUHI</b><br />\
        <img src="styles/legend/SVCmeanSUHI_0.png" /> -1,0000<br />\
        <img src="styles/legend/SVCmeanSUHI_1.png" /> -0,8370<br />\
        <img src="styles/legend/SVCmeanSUHI_2.png" /> -0,6740<br />\
        <img src="styles/legend/SVCmeanSUHI_3.png" /> -0,5110<br />\
        <img src="styles/legend/SVCmeanSUHI_4.png" /> -0,3480<br />\
        <img src="styles/legend/SVCmeanSUHI_5.png" /> -0,1850<br />\
        <img src="styles/legend/SVCmeanSUHI_6.png" /> -0,0220<br />\
        <img src="styles/legend/SVCmeanSUHI_7.png" /> 0,1410<br />\
        <img src="styles/legend/SVCmeanSUHI_8.png" /> 0,3040<br />\
        <img src="styles/legend/SVCmeanSUHI_9.png" /> 0,4670<br />\
        <img src="styles/legend/SVCmeanSUHI_10.png" /> 0,6300<br /></a>'
        }),
    opacity: 1,
    permalink: "SVCmeanSUHI",
    
     
    title: '<div id="layertitle">Posterior Mean<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/SVCmeanSUHI_0.png" /> -1<br />\
        <img src="styles/legend/SVCmeanSUHI_1.png" /> -0,84<br />\
        <img src="styles/legend/SVCmeanSUHI_2.png" /> -0,67<br />\
        <img src="styles/legend/SVCmeanSUHI_3.png" /> -0,51<br />\
        <img src="styles/legend/SVCmeanSUHI_4.png" /> -0,35<br />\
        <img src="styles/legend/SVCmeanSUHI_5.png" /> -0,19<br />\
        <img src="styles/legend/SVCmeanSUHI_6.png" /> -0,02<br />\
        <img src="styles/legend/SVCmeanSUHI_7.png" /> 0,14<br />\
        <img src="styles/legend/SVCmeanSUHI_8.png" /> 0,30<br />\
        <img src="styles/legend/SVCmeanSUHI_9.png" /> 0,47<br />\
        <img src="styles/legend/SVCmeanSUHI_10.png" /> 0,63<br /></a>'
        });
    
var lyr_space_sd_suhi = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/space_sd_suhi.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>space_sd_suhi</b><br />\
        <img src="styles/legend/space_sd_suhi_0.png" /> 0,1500<br />\
        <img src="styles/legend/space_sd_suhi_1.png" /> 0,1888<br />\
        <img src="styles/legend/space_sd_suhi_2.png" /> 0,2275<br />\
        <img src="styles/legend/space_sd_suhi_3.png" /> 0,2662<br />\
        <img src="styles/legend/space_sd_suhi_4.png" /> 0,3050<br />\
        <img src="styles/legend/space_sd_suhi_5.png" /> 0,3438<br />\
        <img src="styles/legend/space_sd_suhi_6.png" /> 0,3825<br />\
        <img src="styles/legend/space_sd_suhi_7.png" /> 0,4213<br />\
        <img src="styles/legend/space_sd_suhi_8.png" /> 0,4600<br /></a>'
        }),
    opacity: 1,
    permalink: "space_sd_suhi",
    
     
    title: '<div id="layertitle">Posterior SD<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/space_sd_suhi_0.png" /> 0,15<br />\
        <img src="styles/legend/space_sd_suhi_1.png" /> 0,19<br />\
        <img src="styles/legend/space_sd_suhi_2.png" /> 0,22<br />\
        <img src="styles/legend/space_sd_suhi_3.png" /> 0,27<br />\
        <img src="styles/legend/space_sd_suhi_4.png" /> 0,31<br />\
        <img src="styles/legend/space_sd_suhi_5.png" /> 0,34<br />\
        <img src="styles/legend/space_sd_suhi_6.png" /> 0,38<br />\
        <img src="styles/legend/space_sd_suhi_7.png" /> 0,42<br />\
        <img src="styles/legend/space_sd_suhi_8.png" /> 0,46<br /></a>'
        });
    
var lyr_space_mean_suhi = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/space_mean_suhi.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>space_mean_suhi</b><br />\
        <img src="styles/legend/space_mean_suhi_0.png" /> -6,0000<br />\
        <img src="styles/legend/space_mean_suhi_1.png" /> -3,3750<br />\
        <img src="styles/legend/space_mean_suhi_2.png" /> -0,7500<br />\
        <img src="styles/legend/space_mean_suhi_3.png" /> 1,8750<br />\
        <img src="styles/legend/space_mean_suhi_4.png" /> 4,5000<br />\
        <img src="styles/legend/space_mean_suhi_5.png" /> 7,1250<br />\
        <img src="styles/legend/space_mean_suhi_6.png" /> 9,7500<br />\
        <img src="styles/legend/space_mean_suhi_7.png" /> 12,3750<br />\
        <img src="styles/legend/space_mean_suhi_8.png" /> 15,0000<br /></a>'
        }),
    opacity: 1,
    permalink: "space_mean_suhi",
    
     
    title: '<div id="layertitle">Posterior Mean<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/space_mean_suhi_0.png" /> -6<br />\
        <img src="styles/legend/space_mean_suhi_1.png" /> -3,4<br />\
        <img src="styles/legend/space_mean_suhi_2.png" /> -0,8<br />\
        <img src="styles/legend/space_mean_suhi_3.png" /> 1,9<br />\
        <img src="styles/legend/space_mean_suhi_4.png" /> 4,5<br />\
        <img src="styles/legend/space_mean_suhi_5.png" /> 7,1<br />\
        <img src="styles/legend/space_mean_suhi_6.png" /> 9,8<br />\
        <img src="styles/legend/space_mean_suhi_7.png" /> 12,4<br />\
        <img src="styles/legend/space_mean_suhi_8.png" /> 15<br /></a>'
        });
    
var lyr_inla_SPDE_svc_sdALL_alt_v2 = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/inla_SPDE_svc_sdALL_alt_v2.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>inla_SPDE_svc_sdALL_alt_v2</b><br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_0.png" /> 0,0200<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_1.png" /> 0,0250<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_2.png" /> 0,0300<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_3.png" /> 0,0350<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_4.png" /> 0,0400<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_5.png" /> 0,0450<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_6.png" /> 0,0500<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_7.png" /> 0,0550<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_8.png" /> 0,0600<br /></a>'
        }),
    opacity: 1,
    permalink: "inla_SPDE_svc_sdALL_alt_v2",
    
     
    title: '<div id="layertitle">Posterior SD<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_0.png" /> 0,020<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_1.png" /> 0,025<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_2.png" /> 0,030<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_3.png" /> 0,035<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_4.png" /> 0,040<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_5.png" /> 0,045<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_6.png" /> 0,050<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_7.png" /> 0,055<br />\
        <img src="styles/legend/inla_SPDE_svc_sdALL_alt_v2_8.png" /> 0,060<br /></a>'
        });
    
var lyr_inla_SPDE_svc_meanALL_alt_v2 = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/inla_SPDE_svc_meanALL_alt_v2.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>inla_SPDE_svc_meanALL_alt_v2</b><br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_0.png" /> -0,5500<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_1.png" /> -0,4090<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_2.png" /> -0,2680<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_3.png" /> -0,1270<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_4.png" /> 0,0140<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_5.png" /> 0,1550<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_6.png" /> 0,2960<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_7.png" /> 0,4370<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_8.png" /> 0,5780<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_9.png" /> 0,7190<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_10.png" /> 0,8600<br /></a>'
        }),
    opacity: 1,
    permalink: "inla_SPDE_svc_meanALL_alt_v2",
    
     
    title: '<div id="layertitle">Posterior Mean<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_0.png" /> -0,55<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_1.png" /> -0,41<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_2.png" /> -0,27<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_3.png" /> -0,13<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_4.png" /> 0,014<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_5.png" /> 0,16<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_6.png" /> 0,30<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_7.png" /> 0,44<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_8.png" /> 0,58<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_9.png" /> 0,72<br />\
        <img src="styles/legend/inla_SPDE_svc_meanALL_alt_v2_10.png" /> 0,86<br /></a>'
        });
    
var lyr_inla_SPDE_space_sdALL_alt_v2 = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/inla_SPDE_space_sdALL_alt_v2.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>inla_SPDE_space_sdALL_alt_v2</b><br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_0.png" /> 0,2800<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_1.png" /> 0,3075<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_2.png" /> 0,3350<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_3.png" /> 0,3625<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_4.png" /> 0,3900<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_5.png" /> 0,4175<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_6.png" /> 0,4450<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_7.png" /> 0,4725<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_8.png" /> 0,5000<br /></a>'
        }),
    opacity: 1,
    permalink: "inla_SPDE_space_sdALL_alt_v2",
    
     
    title: '<div id="layertitle">Posterior SD<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_0.png" /> 0,28<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_1.png" /> 0,31<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_2.png" /> 0,33<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_3.png" /> 0,36<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_4.png" /> 0,39<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_5.png" /> 0,42<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_6.png" /> 0,45<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_7.png" /> 0,47<br />\
        <img src="styles/legend/inla_SPDE_space_sdALL_alt_v2_8.png" /> 0,50<br /></a>'
        });
    
var lyr_inla_SPDE_space_meanALL_alt_v2 = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/inla_SPDE_space_meanALL_alt_v2.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249622.477437, 5530481.577859, 1272969.872405, 5552313.551122],
    attributions: '<a class="legend"><b>inla_SPDE_space_meanALL_alt_v2</b><br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_0.png" /> -11,0000<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_1.png" /> -8,3000<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_2.png" /> -5,6000<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_3.png" /> -2,9000<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_4.png" /> -0,2000<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_5.png" /> 2,5000<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_6.png" /> 5,2000<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_7.png" /> 7,9000<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_8.png" /> 10,6000<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_9.png" /> 13,3000<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_10.png" /> 16,0000<br /></a>'
        }),
    opacity: 1,
    permalink: "inla_SPDE_space_meanALL_alt_v2",
    
     
    title: '<div id="layertitle">Posterior Mean<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_0.png" /> -11<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_1.png" /> -8,3<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_2.png" /> -5,6<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_3.png" /> -2,9<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_4.png" /> -0,2<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_5.png" /> 2,5<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_6.png" /> 5,2<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_7.png" /> 7,9<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_8.png" /> 10,6<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_9.png" /> 13,3<br />\
        <img src="styles/legend/inla_SPDE_space_meanALL_alt_v2_10.png" /> 16<br /></a>'
        });
    
var lyr_Altimetry = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/Altimetry.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249620.962307, 5530469.206229, 1272976.055198, 5552329.365155],
    attributions: '<a class="legend"><b>Altimetry</b><br />\
        <img src="styles/legend/Altimetry_0.png" /> 16,0000<br />\
        <img src="styles/legend/Altimetry_1.png" /> 61,1250<br />\
        <img src="styles/legend/Altimetry_2.png" /> 106,2500<br />\
        <img src="styles/legend/Altimetry_3.png" /> 151,3750<br />\
        <img src="styles/legend/Altimetry_4.png" /> 196,5000<br />\
        <img src="styles/legend/Altimetry_5.png" /> 241,6250<br />\
        <img src="styles/legend/Altimetry_6.png" /> 286,7500<br />\
        <img src="styles/legend/Altimetry_7.png" /> 331,8750<br />\
        <img src="styles/legend/Altimetry_8.png" /> 377,0000<br /></a>'
        }),
    opacity: 1,
    permalink: "Altimetry",
    
     
    title: '<div id="layertitle">Altimetry<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/Altimetry_0.png" /> 16<br />\
        <img src="styles/legend/Altimetry_1.png" /> 60<br />\
        <img src="styles/legend/Altimetry_2.png" /> 100<br />\
        <img src="styles/legend/Altimetry_3.png" /> 150<br />\
        <img src="styles/legend/Altimetry_4.png" /> 200<br />\
        <img src="styles/legend/Altimetry_5.png" /> 250<br />\
        <img src="styles/legend/Altimetry_6.png" /> 285<br />\
        <img src="styles/legend/Altimetry_7.png" /> 330<br />\
        <img src="styles/legend/Altimetry_8.png" /> 377<br /></a>'
        });

var lyr_LandCover2023withUrbanClassification = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/LandCover2023NewClassification.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249619.244261, 5530465.794858, 1272981.426030, 5552333.805161],
    attributions: '<a class="legend"><b>Land Cover 2023 - New Classification</b><br />\
        <img src="styles/legend/LandCover2023NewClassification_0.png" /> Conifere<br />\
        <img src="styles/legend/LandCover2023NewClassification_1.png" /> Arbusteti<br />\
        <img src="styles/legend/LandCover2023NewClassification_2.png" /> Corpi Idrici Permanenti <br />\
        <img src="styles/legend/LandCover2023NewClassification_3.png" /> Erbaceo Periodico<br />\
        <img src="styles/legend/LandCover2023NewClassification_4.png" /> Erbaceo Permanente<br />\
        <img src="styles/legend/LandCover2023NewClassification_5.png" /> Industriale<br />\
        <img src="styles/legend/LandCover2023NewClassification_6.png" /> Latifoglie<br />\
        <img src="styles/legend/LandCover2023NewClassification_7.png" /> Superfici Impermeabili<br />\
        <img src="styles/legend/LandCover2023NewClassification_8.png" /> Superfici non Consolidate<br />\
        <img src="styles/legend/LandCover2023NewClassification_9.png" /> Urbano - Arbusteti<br />\
        <img src="styles/legend/LandCover2023NewClassification_10.png" /> Urbano - Conifere<br />\
        <img src="styles/legend/LandCover2023NewClassification_11.png" /> Urbano - Erbaceo Permaente<br />\
        <img src="styles/legend/LandCover2023NewClassification_12.png" /> Urbano - Latifoglie<br /></a>'
        }),
    opacity: 1,
    permalink: "lyr_LandCover2023withUrbanClassification",
    
     
    title: '<div id="layertitle">Land Cover 2023 - New Classification<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/LandCover2023NewClassification_6.png" /> Broadleaf<br />\
        <img src="styles/legend/LandCover2023NewClassification_0.png" /> Coniferous<br />\
        <img src="styles/legend/LandCover2023NewClassification_1.png" /> Shrub<br />\
        <img src="styles/legend/LandCover2023NewClassification_4.png" /> Perennial Herbaceous<br />\
        <img src="styles/legend/LandCover2023NewClassification_3.png" /> Seasonal Herbaceous<br />\
        <img src="styles/legend/LandCover2023NewClassification_2.png" /> Permanent Water Bodies <br />\
        <img src="styles/legend/LandCover2023NewClassification_5.png" /> Industrial Buildings<br />\
        <img src="styles/legend/LandCover2023NewClassification_7.png" /> Impermeable Surfaces<br />\
        <img src="styles/legend/LandCover2023NewClassification_8.png" /> Unconsolidated Surfaces<br />\
        <img src="styles/legend/LandCover2023NewClassification_12.png" /> Urban Broadleaf<br />\
        <img src="styles/legend/LandCover2023NewClassification_10.png" /> Urban Coniferous<br />\
        <img src="styles/legend/LandCover2023NewClassification_11.png" /> Urban Perennial Herbaceous<br />\
        <img src="styles/legend/LandCover2023NewClassification_9.png" /> Urban Shrub<br /></a>'
        });
    
var lyr_LandUse2023 = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/LandUse2023.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249619.244261, 5530465.794858, 1272981.426030, 5552333.805161],
    attributions: '<a class="legend"><b>Land Use 2023</b><br />\
        <img src="styles/legend/LandUse2023_0.png" /> Uso forestale<br />\
        <img src="styles/legend/LandUse2023_1.png" /> Urbano e aree assimilate<br />\
        <img src="styles/legend/LandUse2023_2.png" /> Usi d\'acqua<br />\
        <img src="styles/legend/LandUse2023_3.png" /> Seminativi<br />\
        <img src="styles/legend/LandUse2023_4.png" /> Foraggere<br />\
        <img src="styles/legend/LandUse2023_5.png" /> Colture permanenti<br />\
        <img src="styles/legend/LandUse2023_6.png" /> Altri usi agricoli<br />\
        <img src="styles/legend/LandUse2023_7.png" /> Altri usi non economici<br /></a>'
        }),
    opacity: 1,
    permalink: "LandUse2023",
    
     
    title: '<div id="layertitle">Land Use 2023<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/LandUse2023_0.png" /> Forestal Use<br />\
        <img src="styles/legend/LandUse2023_1.png" /> Urban<br />\
        <img src="styles/legend/LandUse2023_2.png" /> Water<br />\
        <img src="styles/legend/LandUse2023_3.png" /> Arable Land<br />\
        <img src="styles/legend/LandUse2023_4.png" /> Forage<br />\
        <img src="styles/legend/LandUse2023_5.png" /> Permanent Crops<br />\
        <img src="styles/legend/LandUse2023_6.png" /> Other Agricoltural Uses<br />\
        <img src="styles/legend/LandUse2023_7.png" /> Other Non-economical Uses<br /></a>'
        });
    
var lyr_LandCover2023 = new ol.layer.Image({
    source: new ol.source.ImageStatic({
        url: "./layers/LandCover2023.png",
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [1249619.244261, 5530465.794858, 1272981.426030, 5552333.805161],
    attributions: '<a class="legend"><b>Land Cover 2023</b><br />\
        <img src="styles/legend/LandCover2023_0.png" /> Superfici impermeabili<br />\
        <img src="styles/legend/LandCover2023_1.png" /> Superfici non consolidate<br />\
        <img src="styles/legend/LandCover2023_2.png" /> Latifoglie<br />\
        <img src="styles/legend/LandCover2023_3.png" /> Conifere<br />\
        <img src="styles/legend/LandCover2023_4.png" /> Arbusteti<br />\
        <img src="styles/legend/LandCover2023_5.png" /> Erbaceo periodico<br />\
        <img src="styles/legend/LandCover2023_6.png" /> Erbaceo permanente<br />\
        <img src="styles/legend/LandCover2023_7.png" /> Corpi idrici permanenti<br /></a>'
        }),
    opacity: 1,
    permalink: "LandCover2023",
    
     
    title: '<div id="layertitle">Land Cover 2023<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/LandCover2023_2.png" /> Broadleaf<br />\
        <img src="styles/legend/LandCover2023_3.png" /> Coniferous<br />\
        <img src="styles/legend/LandCover2023_4.png" /> Shrub<br />\
        <img src="styles/legend/LandCover2023_6.png" /> Perennial Herbaceous<br />\
        <img src="styles/legend/LandCover2023_5.png" /> Seasonal Herbaceous<br />\
        <img src="styles/legend/LandCover2023_7.png" /> Permanent Water Bodies<br />\
        <img src="styles/legend/LandCover2023_0.png" /> Impermeable Surfaces<br />\
        <img src="styles/legend/LandCover2023_1.png" /> Unconsolidated Surfaces<br /></a>'
        });

var format_Buildings = new ol.format.GeoJSON();
var features_Buildings = format_Buildings.readFeatures(json_Buildings, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/Buildings.png" /> <b>Buildings</b>'
    });
var lyr_Buildings = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_Buildings, 
    style: style_Buildings,
    permalink: "Buildings",
    popuplayertitle: 'Buildings',
    creationdate: '2025-07-08 19:24:51',
    interactive: false,
    title: '<img src="styles/legend/Buildings.png" /> Buildings'
    });
var featureCounter_Buildings = 1;
jsonSource_Buildings.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_Buildings++);
    feature.set("layerObject", lyr_Buildings);
});        
jsonSource_Buildings.addFeatures(features_Buildings);

var format_IndustrialBuildings = new ol.format.GeoJSON();
var features_IndustrialBuildings = format_IndustrialBuildings.readFeatures(json_IndustrialBuildings, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IndustrialBuildings = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/IndustrialBuildings.png" /> <b>Industrial Buildings</b>'
    });
var lyr_IndustrialBuildings = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_IndustrialBuildings, 
    style: style_IndustrialBuildings,
    permalink: "IndustrialBuildings",
    popuplayertitle: 'Industrial Buildings',
    creationdate: '2025-07-08 19:24:51',
    interactive: false,
    title: '<img src="styles/legend/IndustrialBuildings.png" /> Industrial Buildings'
    });
var featureCounter_IndustrialBuildings = 1;
jsonSource_IndustrialBuildings.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_IndustrialBuildings++);
    feature.set("layerObject", lyr_IndustrialBuildings);
});        
jsonSource_IndustrialBuildings.addFeatures(features_IndustrialBuildings);

var format_GreenAreas = new ol.format.GeoJSON();
var features_GreenAreas = format_GreenAreas.readFeatures(json_GreenAreas, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreenAreas = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/GreenAreas.png" /> <b>Green Areas</b>'
    });
var lyr_GreenAreas = new ol.layer.VectorImage({
    declutter: false,
    source: jsonSource_GreenAreas, 
    style: style_GreenAreas,
    permalink: "GreenAreas",
    popuplayertitle: 'Green Areas',
    creationdate: '2025-07-08 19:24:51',
    interactive: false,
    title: '<img src="styles/legend/GreenAreas.png" /> Green Areas'
    });
var featureCounter_GreenAreas = 1;
jsonSource_GreenAreas.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_GreenAreas++);
    feature.set("layerObject", lyr_GreenAreas);
});        
jsonSource_GreenAreas.addFeatures(features_GreenAreas);

var format_MunicipalityofBologna = new ol.format.GeoJSON();
var features_MunicipalityofBologna = format_MunicipalityofBologna.readFeatures(json_MunicipalityofBologna, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipalityofBologna = new ol.source.Vector({
    attributions: '<a class="legend"><img src="styles/legend/MunicipalityofBologna.png" /> <b>Municipality of Bologna</b>'
    });
var lyr_MunicipalityofBologna = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_MunicipalityofBologna, 
    style: style_MunicipalityofBologna,
    permalink: "MunicipalityofBologna",
    popuplayertitle: 'Municipality of Bologna',
    creationdate: '2025-07-08 19:24:51',
    interactive: false,
    title: '<img src="styles/legend/MunicipalityofBologna.png" /> Municipality of Bologna'
    });
var featureCounter_MunicipalityofBologna = 1;
jsonSource_MunicipalityofBologna.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_MunicipalityofBologna++);
    feature.set("layerObject", lyr_MunicipalityofBologna);
});        
jsonSource_MunicipalityofBologna.addFeatures(features_MunicipalityofBologna);

var group_StudyArea = new ol.layer.Group({
                                layers: [lyr_Altimetry,lyr_MunicipalityofBologna,],
                                openInLayerSwitcher: true,
                                title: 'Study Area'});
var group_OSMData = new ol.layer.Group({
                                layers: [lyr_Buildings,lyr_IndustrialBuildings,lyr_GreenAreas,],
                                openInLayerSwitcher: true,
                                title: 'OSM Data'});
var subgroup_LSTmodel1 = new ol.layer.Group({
                                layers: [lyr_inla_SPDE_space_sdALL_alt_v2,lyr_inla_SPDE_space_meanALL_alt_v2,],
                                openInLayerSwitcher: true,
                                title: 'Spatially Varying Intercept'});
var subgroup_LSTmodel2 = new ol.layer.Group({
                                layers: [lyr_inla_SPDE_svc_sdALL_alt_v2,lyr_inla_SPDE_svc_meanALL_alt_v2,],
                                openInLayerSwitcher: true,
                                title: 'Spatially Varying Linear Trend'});
var group_LSTmodel = new ol.layer.Group({
                                layers: [subgroup_LSTmodel2,subgroup_LSTmodel1,],
                                openInLayerSwitcher: true,
                                title: 'LST model'});
var subgroup_SUHImodel1 = new ol.layer.Group({
                                layers: [lyr_space_sd_suhi,lyr_space_mean_suhi,],
                                openInLayerSwitcher: true,
                                title: 'Spatially Varying Intercept'});
var subgroup_SUHImodel2 = new ol.layer.Group({
                                layers: [lyr_svc_sd_suhi,lyr_SVCmeanSUHI,],
                                openInLayerSwitcher: true,
                                title: 'Spatially Varying Linear Trend'});                                
var group_SUHImodel = new ol.layer.Group({
                                layers: [subgroup_SUHImodel2,subgroup_SUHImodel1,],
                                openInLayerSwitcher: true,
                                title: 'SUHI model'});
var group_PosteriorExcursions = new ol.layer.Group({
                                layers: [lyr_excursion_slope_prob_above0_suhi,lyr_excursion_slope_prob_below0_suhi,],
                                openInLayerSwitcher: true,
                                title: 'Posterior 95% Excursion Probabilities'});
var group_LanUseandLandCover = new ol.layer.Group({
                                layers: [lyr_LandCover2023withUrbanClassification,lyr_LandUse2023,lyr_LandCover2023,],
                                openInLayerSwitcher: true,
                                title: 'Lan Use and Land Cover'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_OSMStandard,],
                                openInLayerSwitcher: true,
                                title: 'Basemap'});

lyr_OSMStandard.setVisible(true);
lyr_LandCover2023withUrbanClassification.setVisible(false);lyr_LandUse2023.setVisible(false);lyr_LandCover2023.setVisible(false);
lyr_excursion_slope_prob_above0_suhi.setVisible(false);lyr_excursion_slope_prob_below0_suhi.setVisible(false);
lyr_svc_sd_suhi.setVisible(false);lyr_SVCmeanSUHI.setVisible(false);lyr_space_sd_suhi.setVisible(false);lyr_space_mean_suhi.setVisible(false);
lyr_inla_SPDE_svc_sdALL_alt_v2.setVisible(false);lyr_inla_SPDE_svc_meanALL_alt_v2.setVisible(false);lyr_inla_SPDE_space_sdALL_alt_v2.setVisible(false);lyr_inla_SPDE_space_meanALL_alt_v2.setVisible(false);
lyr_Buildings.setVisible(false);lyr_IndustrialBuildings.setVisible(false);lyr_GreenAreas.setVisible(false);lyr_Altimetry.setVisible(false);
lyr_MunicipalityofBologna.setVisible(false);
var layersList = [group_Basemap,group_LanUseandLandCover,group_PosteriorExcursions,group_SUHImodel,group_LSTmodel,group_OSMData,group_StudyArea,];
lyr_Buildings.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_IndustrialBuildings.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_GreenAreas.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'leisure': 'leisure', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'addr:city': 'addr:city', 'description': 'description', 'garden:type': 'garden:type', 'wikipedia': 'wikipedia', 'boundary': 'boundary', 'allocation:it': 'allocation:it', 'wikidata': 'wikidata', 'type': 'type', 'name': 'name', 'area': 'area', });
lyr_MunicipalityofBologna.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ISTAT': 'ISTAT', 'NOME_C': 'NOME_C', 'CD_BLF': 'CD_BLF', 'PRV_ID_E': 'PRV_ID_E', 'TY_E': 'TY_E', 'ID_E': 'ID_E', 'DT_INI_VAL': 'DT_INI_VAL', 'DATA_AGG': 'DATA_AGG', 'D_TIPO_AGG': 'D_TIPO_AGG', 'DT_PRES': 'DT_PRES', 'ST_VALID': 'ST_VALID', 'ST_CERTIF': 'ST_CERTIF', 'QUALITA': 'QUALITA', 'METODO': 'METODO', 'D_METODO': 'D_METODO', 'COMP_FONTI': 'COMP_FONTI', 'SEZ_ID_E': 'SEZ_ID_E', 'INT_FONTI': 'INT_FONTI', 'VISIBILITA': 'VISIBILITA', 'TIPO_FONTE': 'TIPO_FONTE', 'DATA_DA': 'DATA_DA', 'DATA_A': 'DATA_A', 'SHAPE_Leng': 'SHAPE_Leng', 'DT_FIN_VAL': 'DT_FIN_VAL', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_Buildings.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_IndustrialBuildings.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_GreenAreas.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'leisure': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:street': 'TextEdit', 'addr:city': 'TextEdit', 'description': 'TextEdit', 'garden:type': 'TextEdit', 'wikipedia': 'TextEdit', 'boundary': 'TextEdit', 'allocation:it': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'area': 'Range', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_MunicipalityofBologna.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'ISTAT': 'TextEdit', 'NOME_C': 'TextEdit', 'CD_BLF': 'TextEdit', 'PRV_ID_E': 'TextEdit', 'TY_E': 'TextEdit', 'ID_E': 'TextEdit', 'DT_INI_VAL': 'DateTime', 'DATA_AGG': 'DateTime', 'D_TIPO_AGG': 'TextEdit', 'DT_PRES': 'DateTime', 'ST_VALID': 'TextEdit', 'ST_CERTIF': 'TextEdit', 'QUALITA': 'TextEdit', 'METODO': 'TextEdit', 'D_METODO': 'TextEdit', 'COMP_FONTI': 'TextEdit', 'SEZ_ID_E': 'TextEdit', 'INT_FONTI': 'TextEdit', 'VISIBILITA': 'TextEdit', 'TIPO_FONTE': 'TextEdit', 'DATA_DA': 'DateTime', 'DATA_A': 'DateTime', 'SHAPE_Leng': 'TextEdit', 'DT_FIN_VAL': 'DateTime', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_Buildings.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', });
lyr_IndustrialBuildings.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', });
lyr_GreenAreas.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'leisure': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'addr:city': 'no label', 'description': 'no label', 'garden:type': 'no label', 'wikipedia': 'no label', 'boundary': 'no label', 'allocation:it': 'no label', 'wikidata': 'no label', 'type': 'no label', 'name': 'inline label - always visible', 'area': 'no label', });
lyr_MunicipalityofBologna.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'ISTAT': 'no label', 'NOME_C': 'no label', 'CD_BLF': 'no label', 'PRV_ID_E': 'no label', 'TY_E': 'no label', 'ID_E': 'no label', 'DT_INI_VAL': 'no label', 'DATA_AGG': 'no label', 'D_TIPO_AGG': 'no label', 'DT_PRES': 'no label', 'ST_VALID': 'no label', 'ST_CERTIF': 'no label', 'QUALITA': 'no label', 'METODO': 'no label', 'D_METODO': 'no label', 'COMP_FONTI': 'no label', 'SEZ_ID_E': 'no label', 'INT_FONTI': 'no label', 'VISIBILITA': 'no label', 'TIPO_FONTE': 'no label', 'DATA_DA': 'no label', 'DATA_A': 'no label', 'SHAPE_Leng': 'no label', 'DT_FIN_VAL': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_MunicipalityofBologna.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

window.layersLoadedFlag = true;
const layersLoaded = new Event('layersLoaded');
document.dispatchEvent(layersLoaded);
