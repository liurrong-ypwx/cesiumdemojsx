
import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

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

    // 导航插件
    // viewer.extend(Cesium.viewerCesiumNavigationMixin, {});

    // 额外设置之显示帧速
    viewer.scene.debugShowFramesPerSecond = true;
    return viewer;
}