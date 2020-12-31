import React, { useEffect, useState } from "react";
import "./CesiumDemo.css";
import * as CesiumApi from "./CesiumApi/CesiumApi";


function CesiumDemo() {

    const [orgView, setOrgView] = useState(null);

    useEffect(() => {
        if (orgView) {
            orgView.distroy();
        }
        const tmpView = CesiumApi.initMap("cesiumContainer");
        setOrgView(tmpView);
        // eslint-disable-next-line
    }, [])

    useEffect(()=>{

        if(!orgView) return
    

    }, [orgView])

    return (
        <div className="main-map-container">
            {/* 初始化一个框来放置场景 */}
            <div id='cesiumContainer' />
            <div className="div-heatmap" />

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