import React from "react";

const Accounting = () => {
    return (
        <div className="accounting">
            <span className="vav-path"> 
                
            </span>

            <div className="col-md-8">
                <h3 className="heading">General Information</h3>
                <div className="text">
                    <label className="heading">Purchase Order Number</label>
                    <input type="text" name="purchasenumber" label="" value="" />
                </div>
                <div className="text">
                    <label className="heading">Purchase Order Date</label>
                    <input type="date" name="orderdate" label="" value="" />
                </div>
                <div className="text">
                    <label className="heading">Delivery Date</label>
                    <input type="date" name="deliverydate" label="" value="" />
                </div>
                <div className="text">
                    <label className="heading">Status</label>
                    <input type="text" name="status" label="" value="" />
                </div>
            </div>

            <div className="section">
                <div className="align-left">
                    <h3>PO Details</h3>
                </div>
                <div className="align-right">
                    <button className="tab-align-right">Generate PO</button>
                    <button className="tab-align-right">Upload PO</button>
                </div>
                <hr></hr>
                <div className="sub-section">
                    <div className="col-md-6">
                        <h3 className="heading">Vendor</h3>
                        <div className="text">
                            <label className="heading">Company Name</label>
                            <input type="text" name="companyname" label="" value="" />
                        </div>
                        <div className="text">
                            <label className="heading">Address</label>
                            <input type="text" name="address" label="" value="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3 className="heading">Ship to</h3>
                        <div className="text">
                            <label className="heading">Company Name</label>
                            <input type="text" name="companyname" label="" value="" />
                        </div>
                        <div className="text">
                            <label className="heading">Address</label>
                            <input type="text" name="address" label="" value="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <h3 className="heading">Other Details</h3>
                <div className="tabs">
                    <h4 id="" className="tab-name">Vendor</h4>
                    <h4 id="" className="tab-name">PR</h4>
                    <h4 id="" className="tab-name">Quotation</h4>
                    <h4 id="" className="tab-name">History</h4>
                </div>
            </div>
        </div>
    )

}
export default Accounting;