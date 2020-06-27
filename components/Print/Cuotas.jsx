import React from "react";

const Cuotas = ({prestamo,usuario}) => {
  return (
    <>
      <div className="card">
        <div className="card-header p-4">
          <a className="pt-2 d-inline-block" href="index.html">
            Concept
          </a>

          <div className="float-right">
            {" "}
            <h3 className="mb-0">Invoice #1</h3>
            Date: 3 Dec, 2020
          </div>
        </div>
        <div className="card-body">
          <div className="row mb-4">
            <div className="col-sm-6">
              <h5 className="mb-3">From:</h5>
              <h3 className="text-dark mb-1">Gerald A. Garcia</h3>

              <div>2546 Penn Street</div>
              <div>Sikeston, MO 63801</div>
              <div>Email: info@gerald.com.pl</div>
              <div>Phone: +573-282-9117</div>
            </div>
            <div className="col-sm-6">
              <h5 className="mb-3">To:</h5>
              <h3 className="text-dark mb-1">Anthony K. Friel</h3>
              <div>478 Collins Avenue</div>
              <div>Canal Winchester, OH 43110</div>
              <div>Email: info@anthonyk.com</div>
              <div>Phone: +614-837-8483</div>
            </div>
          </div>
          <div className="table-responsive-sm">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th className="center">#</th>
                  <th>Item</th>
                  <th>Description</th>
                  <th className="right">Unit Cost</th>
                  <th className="center">Qty</th>
                  <th className="right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="center">1</td>
                  <td className="left strong">Origin License</td>
                  <td className="left">Extended License</td>
                  <td className="right">$1500,00</td>
                  <td className="center">1</td>
                  <td className="right">$1500,00</td>
                </tr>
                <tr>
                  <td className="center">2</td>
                  <td className="left">Custom Services</td>
                  <td className="left">
                    Instalation and Customization (cost per hour)
                  </td>
                  <td className="right">$110,00</td>
                  <td className="center">20</td>
                  <td className="right">$22.000,00</td>
                </tr>
                <tr>
                  <td className="center">3</td>
                  <td className="left">Hosting</td>
                  <td className="left">1 year subcription</td>
                  <td className="right">$309,00</td>
                  <td className="center">1</td>
                  <td className="right">$309,00</td>
                </tr>
                <tr>
                  <td className="center">4</td>
                  <td className="left">Platinum Support</td>
                  <td className="left">1 year subcription 24/7</td>
                  <td className="right">$5.000,00</td>
                  <td className="center">1</td>
                  <td className="right">$5.000,00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-5"></div>
            <div className="col-lg-4 col-sm-5 ml-auto">
              <table className="table table-clear">
                <tbody>
                  <tr>
                    <td className="left">
                      <strong className="text-dark">Subtotal</strong>
                    </td>
                    <td className="right">$28,809,00</td>
                  </tr>
                  <tr>
                    <td className="left">
                      <strong className="text-dark">Discount (20%)</strong>
                    </td>
                    <td className="right">$5,761,00</td>
                  </tr>
                  <tr>
                    <td className="left">
                      <strong className="text-dark">VAT (10%)</strong>
                    </td>
                    <td className="right">$2,304,00</td>
                  </tr>
                  <tr>
                    <td className="left">
                      <strong className="text-dark">Total</strong>
                    </td>
                    <td className="right">
                      <strong className="text-dark">$20,744,00</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card-footer bg-white">
          <p className="mb-0">2983 Glenview Drive Corpus Christi, TX 78476</p>
        </div>
      </div>
    </>
  );
};

export default Cuotas;
