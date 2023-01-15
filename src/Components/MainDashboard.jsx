import { Col, Row } from "react-bootstrap";
import AddButtons from "./AddButtons"

const MainDashboard = () => {
  // date
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  // date

  // month
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  const nameOfMonth = monthNames[d.getMonth()];

  // today = dd + "-" + nameOfMonth + "-" + yyyy;
  // month

  return (
    <Col md={8} sm={12} className="p-3">
      <Row>
        <Col md={12} className="bg_dark color_light text-end py-1 px-5 rounded">
          <h1>{dd + " / " + nameOfMonth.slice(0, 3) + " / " + yyyy}</h1>
        </Col>
        <Col md={12} className="center_row">
          <div className="bg_dark color_light m-1 mt-4 rounded p-1 h-100 center_col">
            <strong className="text-center center_col">
              Asset: <br />{" "}
              <span className="bg_light color_dark py-1 px-3 rounded">
                {"20,000 ৳"}
              </span>
            </strong>
          </div>
          <div className="bg_dark color_light m-1 mt-4 rounded p-1 h-100 center_col">
            <strong className="text-center center_col">
              This Month Sales: <br />{" "}
              <span className="bg_light color_dark py-1 px-3 rounded">
                {"2,00,000 ৳"}
              </span>
            </strong>
          </div>
          <div className="bg_dark color_light m-1 mt-4 rounded p-1 h-100 center_col">
            <strong className="text-center center_col">
              Todays Sales: <br />{" "}
              <span className="bg_light color_dark py-1 px-3 rounded">
                {"2,000 ৳"}
              </span>
            </strong>
          </div>
        </Col>
        <Col md={12} className="center_row">
          <Row className="mt-4">
            <Col md={6} sm={12}>
              <div
                style={{ position: "relative" }}
                className="bg_white rounded shadow-sm p-3 mb-2 overflow-hidden"
              >
                <h4 className="text-center center_col">
                  {/* badge */}
                  <span
                    className="badge bg-success"
                    style={{
                      width: "150px",
                      position: "absolute",
                      top: "20px",
                      left: "-40px",
                      transform: "rotate(-45deg)",
                    }}
                  >
                    {"All Time"}
                  </span>
                  {/* badge */}
                  Total Profit <br />{" "}
                  <span className="bg_dark color_light py-1 px-3 rounded">
                    {100000}
                  </span>
                </h4>
              </div>
              <div
                style={{ position: "relative" }}
                className="bg_white rounded shadow-sm p-3 mb-2 overflow-hidden"
              >
                <h4 className="text-center center_col">
                  {/* badge */}
                  <span
                    className="badge bg-danger"
                    style={{
                      width: "150px",
                      position: "absolute",
                      top: "20px",
                      left: "-40px",
                      transform: "rotate(-45deg)",
                    }}
                  >
                    {"Total"}
                  </span>
                  {/* badge */}
                  Creditor Due <br />{" "}
                  <span className="bg_dark color_light py-1 px-3 rounded">
                    {5000}
                  </span>
                </h4>
              </div>
              <div
                style={{ position: "relative" }}
                className="bg_white rounded shadow-sm p-3 mb-2 overflow-hidden"
              >
                <h4 className="text-center center_col">
                  {/* badge */}
                  <span
                    className="badge bg-warning"
                    style={{
                      width: "150px",
                      position: "absolute",
                      top: "20px",
                      left: "-40px",
                      transform: "rotate(-45deg)",
                    }}
                  >
                    {"Total"}
                  </span>
                  {/* badge */}
                  Debtor Due <br />{" "}
                  <span className="bg_dark color_light py-1 px-3 rounded">
                    {20000}
                  </span>
                </h4>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div
                style={{ position: "relative" }}
                className="bg_white rounded shadow-sm p-3 mb-2 overflow-hidden"
              >
                <h4 className=" text-center center_col">
                  <span>
                    <i>{nameOfMonth}</i> Profit
                    {/* badge */}
                    <span
                      className="badge bg-primary"
                      style={{
                        width: "150px",
                        position: "absolute",
                        top: "20px",
                        left: "-40px",
                        transform: "rotate(-45deg)",
                      }}
                    >
                      {yyyy}
                    </span>
                    {/* badge */}
                    <br />
                  </span>
                  <span className="bg_dark color_light py-1 px-3 rounded">
                    {"1,00,000"}
                  </span>
                </h4>
              </div>
              <div
                style={{ position: "relative" }}
                className="bg_white rounded shadow-sm p-3 mb-2 overflow-hidden"
              >
                <h4 className="text-center center_col">
                  {/* badge */}
                  <span
                    className="badge bg-danger"
                    style={{
                      width: "150px",
                      position: "absolute",
                      top: "20px",
                      left: "-40px",
                      transform: "rotate(-45deg)",
                    }}
                  >
                    {nameOfMonth}
                  </span>
                  {/* badge */}
                  Creditor Due <br />{" "}
                  <span className="bg_dark color_light py-1 px-3 rounded">
                    {"5,000"}
                  </span>
                </h4>
              </div>
              <div
                style={{ position: "relative" }}
                className="bg_white rounded shadow-sm p-3 mb-2 overflow-hidden"
              >
                <h4 className="text-center center_col">
                  {/* badge */}
                  <span
                    className="badge bg-warning"
                    style={{
                      width: "150px",
                      position: "absolute",
                      top: "20px",
                      left: "-40px",
                      transform: "rotate(-45deg)",
                    }}
                  >
                    {nameOfMonth}
                  </span>
                  {/* badge */}
                  Debtor Due <br />{" "}
                  <span className="bg_dark color_light py-1 px-3 rounded">
                    {"20,000"}
                  </span>
                </h4>
              </div>
            </Col>
            <AddButtons />
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default MainDashboard;
