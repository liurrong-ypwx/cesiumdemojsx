import React, { useEffect } from "react";
import "./CesiumDemo.css";


import * as Cesium from 'cesium';
import "cesium/Build/Cesium/Widgets/widgets.css";

window.CESIUM_BASE_URL = '/';
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ZTIxYjQ0Yi1kODkwLTQwYTctYTdjNi1hOTkwYTRhYTI2NDEiLCJpZCI6MzY4OTQsImlhdCI6MTYwNDMwMzkzM30.btKZ2YlmB0wCTBvk3ewmGk5MAjS5rwl_Izra03VcrnY';


function CesiumDemo() {


    useEffect(() => {
        initViewer();
    }, [])

    const initViewer = () => {
        const viewer = new Cesium.Viewer("cesiumContainer", {
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

        if (viewer) {
            // 
        }
    }

    return (
        <div className="main-map-container">
            {/* 初始化一个框来放置场景 */}
            <div id='cesiumContainer' />

            {/* 按钮区 */}
            {/* <div className="test-btn-group">
            <div className="sig-btn" onClick={() => { setDedaultExtent() }} >重置</div>
            <div className="sig-btn" onClick={() => { handleAddGeometry("Point") }} >添加标注</div>
            <div className="sig-btn" onClick={() => { handleAddGeometry("Polyline") }} >添加Polyline</div>
            <div className="sig-btn" onClick={() => { handleAddGeometry("Polygon") }} >添加Polygon</div>
            <div className="sig-btn" onClick={() => { handleMeasure("distance") }} >测距</div>
            <div className="sig-btn" onClick={() => { handleMeasure("area") }} >测面积</div>
            <div className="sig-btn" onClick={() => { getPara() }} >获取相机参数</div>
            <div className="sig-btn" onClick={() => { testFly() }} title={titleList.testFly} >飞行</div>
        </div> */}
        </div>
    )
}

export default CesiumDemo;