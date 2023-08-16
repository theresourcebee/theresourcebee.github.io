import React, { useState } from "react";
import { appData as initialAppData } from "../data/appData";

function Product() {
    // eslint-disable-next-line
    const [appData, setAppData] = useState(initialAppData);
    return (
        <div>Hello Product</div>
    );
}

export default Product;