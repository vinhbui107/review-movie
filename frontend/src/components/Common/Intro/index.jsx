import React from "react";
import { Row, Col } from "reactstrap";
Intro.propTypes = {};

function Intro(props) {
    return (
        <div>
            <Row>
                <Col md="4" sm="12">
                    <img src="./img/static/banner-1.png" />
                    <p>Luyện nói tiếng Anh thông minh</p>
                    <p>
                        Thực hành luyện nói tiếng anh mỗi ngày thông qua phụ đề thông ngữ thông minh. Giúp trau dồi được
                        khả năng phát âm tiếng anh qua việc xem phim có engsub, ngữ điệu cùng phản xạ nói cực kỳ nhanh
                        chóng.
                    </p>
                </Col>
                <Col md="4" sm="12">
                    <img src="./img/static/banner-2.png" />
                    <p>Chế độ luyện nghe hiệu quả</p>
                    <p>
                        Cung cấp chế độ luyện nghe tiếng anh qua phim riêng biệt cho người học, nâng cao khả năng nghe
                        cực kỳ hiệu quả mà chưa có phương pháp luyện nghe tiếng anh nào làm được.
                    </p>
                </Col>
                <Col md="4" sm="12">
                    <img src="./img/static/banner-3.png" />
                    <p>Nâng cao vốn từ vựng tiếng Anh</p>
                    <p>
                        Gia tăng vốn từ tiếng anh của bạn với vô số từ mới dùng trong giao tiếp thông qua việc xem phim
                        phụ đề tiếng anh. Phụ đề tiếng anh song ngữ Anh-Việt giúp việc học và ghi chép từ vựng tiếng anh
                        chưa bao giờ dễ dàng hơn.
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default Intro;
