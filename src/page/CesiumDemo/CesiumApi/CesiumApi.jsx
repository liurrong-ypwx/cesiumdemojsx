
import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";
import h337 from 'heatmap.js';

window.CESIUM_BASE_URL = './cesium/';
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ZTIxYjQ0Yi1kODkwLTQwYTctYTdjNi1hOTkwYTRhYTI2NDEiLCJpZCI6MzY4OTQsImlhdCI6MTYwNDMwMzkzM30.btKZ2YlmB0wCTBvk3ewmGk5MAjS5rwl_Izra03VcrnY';


// 初始化地图
export const initMap = (domID) => {

    if (!document.getElementById(domID)) return;

    const viewer = new Cesium.Viewer(domID, {
        geocoder: false,
        homeButton: true,
        sceneModePicker: false,
        baseLayerPicker: false,
        navigationHelpButton: false,
        animation: false,
        // creditContainer:"credit",
        // timeline: false,
        fullscreenButton: false,
        vrButton: false,
        selectionIndicator: false,
        infoBox: false,
        // terrainProvider: Cesium.createWorldTerrain({
        //     // requestVertexNormals:true,
        //     // requestWaterMask:true
        // }),
        // skyBox: new Cesium.SkyBox({
        //     sources: {
        //         positiveX: './Models/image/box.png',
        //         negativeX: './Models/image/box.png',
        //         positiveY: './Models/image/box.png',
        //         negativeY: './Models/image/box.png',
        //         positiveZ: './Models/image/box.png',
        //         negativeZ: './Models/image/box.png'
        //     }
        // })
    })


    // 添加热力图
    addHeatmap(viewer);

    // 导航插件
    // viewer.extend(Cesium.viewerCesiumNavigationMixin, {});

    // 额外设置之显示帧速
    viewer.scene.debugShowFramesPerSecond = true;
    return viewer;
}

// 添加热力图
export const addHeatmap = (viewer) => {

    let points = [];
    let width = 600;
    let height = 400;
    let max = 100;

    // 热力图经纬度范围
    let latMin = 28.364807;
    let latMax = 40.251095;
    let lonMin = 94.389228;
    let lonMax = 108.666357;
    // 根据热力图图片范围，生成随机热力点和强度值
    for (let i = 0; i < 300; i++) {
        let lon = lonMin + Math.random() * (lonMax - lonMin);
        let lat = latMin + Math.random() * (latMax - latMin);
        let value = Math.floor(Math.random() * max);
        let point = {
            x: Math.floor((lat - latMin) / (latMax - latMin) * width),
            y: Math.floor((lon - lonMin) / (lonMax - lonMin) * height),
            value: value
        };
        points.push(point);
    }

    // 创建热力图
    let heatmapInstance = h337.create({
        container: document.querySelector('.div-heatmap')
    });

    let data = {
        max: max,
        data: points
    };
    heatmapInstance.setData(data);

    // 将热力图添加到球体上(生成的热力图canvas元素类名为heatmap-canvas)
    let canvas = document.getElementsByClassName('heatmap-canvas');

    viewer.entities.add({
        name: 'heatmap',
        rectangle: {
            coordinates: Cesium.Rectangle.fromDegrees(lonMin, latMin, lonMax, latMax),
            material: new Cesium.ImageMaterialProperty({
                image: canvas[0],
                transparent: true
            })
        }
    });

}

