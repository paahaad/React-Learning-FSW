import React from "react";
const List = () => {
    const arr = ["Android", "IOS", "Backberry", "Backberry"];
    return (
        <div className="list">
            <h2>Mobile Operationg System</h2>
            <ul>
                <li>Android</li>
                <li>IOS</li>
                <li>Backberry</li>
                <li>Java</li>
            </ul>

            <br />

            <h2>Mobile Manufacture</h2>
            <ul>
                <li>Google</li>
                <li>Apple</li>
                <li>HTC</li>
                <li>Micromax</li>
            </ul>
        </div>
    );

}

export default List;