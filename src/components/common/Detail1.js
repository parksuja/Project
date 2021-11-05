import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../../App.css";
import FooterContainer from "./FooterContainer";
import "./MainAbout.css";
import { useState } from "react";

function Detail1() {
  return (
    <>
      <main class="mt-3">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div
                id="carouselExampleControls"
                class="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <Carousel infiniteLoop useKeyboardArrows autoPlay>
                  <div>
                    <img src="data:image/jpeg;base64,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" />
                  </div>
                  <div>
                    <img src="data:image/jpeg;base64,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" />
                  </div>
                  <div>
                    <img src="data:image/jpeg;base64,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" />
                  </div>
                  <div>
                    <img src="https://jhealthfile.joins.com/photo//2020/02/20/1343b1c172e80.jpg" />
                  </div>
                </Carousel>
                ,
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="col-md-7">
              <div class="card shadow-sm">
                <div class="card-body">
                  <h5 class="card-title">운동관련 패키지~</h5>
                  <h5 class="card-title pt-3 pb-3 border-top">700,000원</h5>
                  <p class="card-text border-top  pt-3 pb-3">
                    <span class="badge bg-dark">강사</span>
                    <span class="badge bg-dark">패키지</span>
                    <span class="badge bg-dark">유사한 패키지</span>
                  </p>

                  <p class="card-text border-top pb-3">
                    <div class="row">
                      <div class="col-auto">
                        <label class="col-form-label"></label>
                      </div>

                      <div class="col-auto">
                        <div class="input-group">
                          <button class="input-group-text">-</button>
                          <input
                            type="text"
                            class="form-control"
                            style={{ width: "40px" }}
                            value="1"
                          />
                          <button class="input-group-text">+</button>
                          <h3>개월</h3>
                        </div>
                      </div>
                    </div>
                  </p>
                  <div class="row pt-3 pb-3 border-top">
                    <div class="col-6">
                      <h3>총 상품 금액</h3>
                    </div>
                    <div class="col-6" style={{ textAlign: "center" }}>
                      <h3>700,000원</h3>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="col-6 d-grid p-1">
                      <button type="button" class="btn btn-lg btn-dark">
                        장바구니 담기
                      </button>
                    </div>

                    <div class="col-6 d-grid p-1">
                      <button type="button" class="btn btn-lg btn-danger">
                        구매하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row pt-3">
            <div class="col-12">
              <form class="review-frm" name="frm">
                <div>
                  <Rating
                    name="half-rating"
                    defaultValue={4}
                    style={{ fontSize: "45px" }}
                    // onChange={getValue1}
                  />
                </div>
                <textarea
                  placeholder="수강 후기"
                  name="memo"
                  // onChange={getValue}
                ></textarea>
                <button type="button" class="btn-review">
                  후기 등록
                </button>
              </form>
            </div>
          </div>
          <h2>ABOUT</h2>
          <div class="row pt-3">
            <div class="col-12">
              <img
                style={{ width: "100%" }}
                src="https://src.hidoc.co.kr/image/lib/2020/9/15/1600136992460_0.jpg"
                class="img-fluid"
              />
            </div>
          </div>
          <div class="row pt-3">
            <div class="col-12">
              <img
                style={{ width: "100%" }}
                src="https://www.dementianews.co.kr/news/photo/201902/1501_1270_5524.jpg"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </main>
      <FooterContainer />
    </>
  );
}

export default Detail1;
