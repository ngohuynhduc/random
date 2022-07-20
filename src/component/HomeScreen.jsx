import React from "react";
import home from "../asset/image/Home.png";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__header__text">
          BỘ GIÁO DỤC VÀ ĐÀO TẠO <br /> CUỘC THI XÂY DỰNG THIẾT BỊ DẠY HỌC SỐ
          LẦN THỨ I, NĂM 2022
        </h1>
      </div>
      <div className="home__name">
        <h1 className="home__name__text">
          <i>TÊN THIẾT BỊ: </i>
        </h1>
      </div>
      <div className="home__title">
        <Link to="/random" className="style-link">
          <h1 className="home__title__top">ỨNG PHÓ VỚI TÌNH HUỐNG NGUY HIỂM</h1>
          <h1 className="home__title__bottom">
            MÔN: GDCD 6 (Kết nối tri thức với cuộc sống)
          </h1>
        </Link>
      </div>
      <div className="home__content">
        <div className="content-left">
          <div className="content-left__name">
            <i>Họ và tên:</i> Trần Phương Trang
          </div>
          <div className="content-left__vice">
            <i>Chức vụ:</i> Giáo viên
          </div>
          <div className="content-left__division">
            <i>Đơn vị công tác:</i> Trường THCS Hóa Thượng, huyện Đồng Hỷ, tỉnh
            Thái Nguyên.
          </div>
        </div>
        <div className="content-right">
          <img src={home} alt="home" width="100%" />
        </div>
      </div>
      <div className="home__footer">Tháng 7 năm 2022</div>
    </div>
  );
};

export default HomeScreen;
