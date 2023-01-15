import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProfileNav = () => {
  return (
    <Col md={4} sm={12} className="p-3 center_row">
      <Row className="center_row h-100">
        <Col md={4} sm={12} className="center_row h-100">
          <h1
            style={{
              writingMode: "vertical-lr",
              display: "block",
              transform: "rotate(180deg)",
            }}
            className="bg_dark p-5 color_light text-uppercase rounded-pill center_col"
          >
            My Medassist
          </h1>
        </Col>
        <Col md={8} sm={12}>
          <ul className="center_col p-2">
            <li className="w-100">
              <a
                href=""
                className="inline_link_bg my_link rounded p-3 my-1 w-100 color_light text-uppercase fw-bold"
              >
                nav 1
              </a>
            </li>
            <li className="w-100">
              <a
                href=""
                className="inline_link_bg my_link rounded p-3 my-1 w-100 color_light text-uppercase fw-bold"
              >
                nav 2
              </a>
            </li>
            <li className="w-100">
              <a
                href=""
                className="inline_link_bg my_link rounded p-3 my-1 w-100 color_light text-uppercase fw-bold"
              >
                nav 3
              </a>
            </li>
            <li className="w-100">
              <a
                href=""
                className="inline_link_bg my_link rounded p-3 my-1 w-100 color_light text-uppercase fw-bold"
              >
                nav 4
              </a>
            </li>
            <li className="w-100">
              <a
                href=""
                className="inline_link_bg my_link rounded p-3 my-1 w-100 color_light text-uppercase fw-bold"
              >
                nav 5
              </a>
            </li>
            <li className="w-100">
              <a
                href=""
                className="inline_link_bg my_link rounded p-3 my-1 w-100 color_light text-uppercase fw-bold"
              >
                nav 6
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Col>
  );
};

export default ProfileNav;
