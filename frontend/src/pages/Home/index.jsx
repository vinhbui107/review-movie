import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";
import Intro from "../../components/Common/Intro";

function Home() {
  return (
    <div>
      <Container className="mt-5">
        <Intro />
        <p style={{ fontSize: "40px" }}>Trending</p>
        <OwlCarousel className="owl-theme" loop margin={10} items="1" lazyLoad="true">
          <div class="item">
            <Row>
              <Col>
                <div className="item__info">
                  <img src="https://image.tmdb.org/t/p/w500//8veOfB9RbSzFki0Rq3IQIGsFfhC.jpg" alt="" />
                  <div class="item__info__detail">
                    <i class="fa fa-play"></i>
                    <a href="#" class="text-white">
                      READ MORE
                    </a>
                    <span>Release: 7 Mar 2017</span>
                  </div>
                </div>
              </Col>
              <Col>
                <Row>
                  <Col md="6">
                    <div className="item__info">
                      <img src="https://image.tmdb.org/t/p/w500//8veOfB9RbSzFki0Rq3IQIGsFfhC.jpg" alt="" />
                      <div class="item__info__detail">
                        <i class="fa fa-play"></i>
                        <a href="#" class="text-white">
                          READ MORE
                        </a>
                        <span>Release: 7 Mar 2017</span>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="item__info">
                      <img src="https://image.tmdb.org/t/p/w500//8veOfB9RbSzFki0Rq3IQIGsFfhC.jpg" alt="" />
                      <div class="item__info__detail">
                        <i class="fa fa-play"></i>
                        <a href="#" class="text-white">
                          READ MORE
                        </a>
                        <span>Release: 7 Mar 2017</span>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="item__info">
                      <img src="https://image.tmdb.org/t/p/w300/8rIoyM6zYXJNjzGseT3MRusMPWl.jpg" alt="" />
                      <div class="item__info__detail">
                        <i class="fa fa-play"></i>
                        <a href="#" class="text-white">
                          READ MORE
                        </a>
                        <span>Release: 7 Mar 2017</span>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="item__info">
                      <img src="https://image.tmdb.org/t/p/w500//8veOfB9RbSzFki0Rq3IQIGsFfhC.jpg" alt="" />
                      <div class="item__info__detail">
                        <i class="fa fa-play"></i>
                        <a href="#" class="text-white">
                          READ MORE
                        </a>
                        <span>Release: 7 Mar 2017</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div class="item">
            <p>2</p>
          </div>
          <div class="item">
            <p>3</p>
          </div>
          <div class="item">
            <p>4</p>
          </div>
          <div class="item">
            <p>5</p>
          </div>
        </OwlCarousel>

        <p style={{ fontSize: "40px" }}>Phim le moi cap nhat</p>
        <OwlCarousel className="owl-theme" loop margin={10} items="4" lazyLoad="true">
          <div class="item">
            <div className="item__info">
              <img src="https://image.tmdb.org/t/p/w500//8veOfB9RbSzFki0Rq3IQIGsFfhC.jpg" alt="" />
              <div class="item__info__detail">
                <i class="fa fa-play"></i>
                <a href="#" class="text-white">
                  READ MORE
                </a>
                <span>Release: 7 Mar 2017</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="item__info">
              <img src="https://image.tmdb.org/t/p/w500//8veOfB9RbSzFki0Rq3IQIGsFfhC.jpg" alt="" />
              <div class="item__info__detail">
                <i class="fa fa-play"></i>
                <a href="#" class="text-white">
                  READ MORE
                </a>
                <span>Release: 7 Mar 2017</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="item__info">
              <img src="https://image.tmdb.org/t/p/w500//8veOfB9RbSzFki0Rq3IQIGsFfhC.jpg" alt="" />
              <div class="item__info__detail">
                <i class="fa fa-play"></i>
                <a href="#" class="text-white">
                  READ MORE
                </a>
                <span>Release: 7 Mar 2017</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="item__info">
              <img src="https://image.tmdb.org/t/p/w500//8veOfB9RbSzFki0Rq3IQIGsFfhC.jpg" alt="" />
              <div class="item__info__detail">
                <i class="fa fa-play"></i>
                <a href="#" class="text-white">
                  READ MORE
                </a>
                <span>Release: 7 Mar 2017</span>
              </div>
            </div>
          </div>
          <div class="item">
            <div className="item__info">
              <img src="https://image.tmdb.org/t/p/w500//8veOfB9RbSzFki0Rq3IQIGsFfhC.jpg" alt="" />
              <div class="item__info__detail">
                <i class="fa fa-play"></i>
                <a href="#" class="text-white">
                  READ MORE
                </a>
                <span>Release: 7 Mar 2017</span>
              </div>
            </div>
          </div>
        </OwlCarousel>

        <div className="review">
          <p>Cộng đồng nói gì về phương pháp học tiếng anh qua Phim Learning?</p>
          <OwlCarousel className="owl-theme" loop margin={10} items="1" lazyLoad="true">
            <div class="item">
              <Row>
                <Col md="3" sm="12">
                  <div className="review__item__photo">
                    <img src="https://phimlearning.com/public/images/home/user1.jpg" />
                  </div>
                </Col>
                <Col md="9" sm="12">
                  <div className="review__item__info">
                    <p>
                      Ứng dụng thật tuyệt vời , việc học tiếng anh qua phim đối với mình chưa bao giờ dễ dàng đến thế.
                      Mình có thể vừa xem phim tiếng anh , vừa học từ vựng ở bất cứ đâu , bất cứ thời điểm nào trong
                      ngày . Từ khi biết đến Phim Learning , vốn từ vựng tiếng anh của mình cải thiện đáng kể . Không
                      những thế , việc thư giãn qua phim khiến mình không cảm thấy áp lực một chút nào cả.Trước đây ,
                      học tiếng anh qua phim có phụ đề luôn khiến mình gặp rối lớn đó là tra từ và lưu từ .Các bạn đã
                      giải quyết điều đó thực sự tốt , mong đội ngũ Phim Learning tiếp tục đi đúng hướng để có thể giúp
                      những người học tiếng anh như mình ngày càng cảm thấy yêu tiếng anh hơn.
                    </p>
                    <p style={{ textAlign: "right" }}>abc</p>
                  </div>
                </Col>
              </Row>
            </div>
            <div class="item">
              <p>2</p>
            </div>
            <div class="item">
              <p>3</p>
            </div>
          </OwlCarousel>
        </div>
      </Container>
    </div>
  );
}

export default Home;
