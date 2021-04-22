import React from "react";
import '../css/home.css';
import '../css/reviewFilm.css';
import banner from "../img/banner.jpg";
import banner2 from "../img/banner2.jpg";
import phim1 from "../img/phim1.jpg";
import phim2 from "../img/phim2.jpg";
import phim3 from "../img/phim3.jpg";
import phim4 from "../img/phim4.jpg";
import phim5 from "../img/phim5.jpg";
import phim6 from "../img/phim6.jpg";
import km1 from "../img/km1.jpg";
import km2 from "../img/km2.jpg";
import km3 from "../img/km3.jpg";
import km4 from "../img/km4.jpg";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const UserDetail = () => {
    setInterval(() => {
        document.getElementsByClassName("awssld__next")[0].click();
    }, 3000);

    return (
        <div className="Home">
            <div className="black">
                <div className="menu" >
                    <ul className="flex">
                        <li>MUA VÉ</li>|
                        <li>PHIM</li>|
                        <li>GÓC ĐIỆN ẢNH</li>|
                        <li>SỰ KIỆN</li>|
                        <li>RẠP/GIÁ VÉ</li>|
                        <li>HỖ TRỢ</li>|
                        <li>THÀNH VIÊN</li>
                    </ul>
                </div>
            </div>
            <div className="slider_container">
                <AwesomeSlider className="slider">
                    <div tabIndex={1} key={1}><img src={banner}></img></div>
                    <div tabIndex={2} key={2}><img src={banner2}></img></div>
                    <div tabIndex={3} key={3}><img src={banner}></img></div>
                    <div tabIndex={4} key={4}><img src={banner2}></img></div>
                    <div tabIndex={5} key={5}><img src={banner}></img></div>
                </AwesomeSlider>
            </div>

            <div className="container">
                <div className="chose_time">
                    <a href="">PHIM ĐANG CHIẾU</a>
                    <a href="">PHIM SẮP CHIẾU</a>
                </div>

                <div className="list_films flex upper">
                    <div className="film">
                        <div className="img_film">
                            <img src={phim6} alt="phim"></img>
                        </div>
                        <div className="button"></div>
                        <div className="hover_film"></div>
                        <p>GODZILLA vs KONG </p>
                        <p className="vn" >GODZILLA ĐẠI CHIẾN KONG</p>
                    </div>

                    <div className="film">
                        <div className="img_film">
                            <img src={phim2} alt="phim"></img>
                        </div>
                        <div className="button"></div>
                        <div className="hover_film"></div>
                        <p>THE UNHOLY</p>
                        <p className="vn">Ấn quỷ</p>
                    </div>

                    <div className="film">
                        <div className="img_film">
                            <img src={phim3} alt="phim"></img>
                        </div>
                        <div className="button"></div>
                        <div className="hover_film"></div>
                        <p>Bố già</p>
                        <p className="vn">Bố già</p>
                    </div>

                    <div className="film">
                        <div className="img_film">
                            <img src={phim3} alt="phim"></img>
                        </div>
                        <div className="button"></div>
                        <div className="hover_film"></div>
                        <p>THE UNHOLY</p>
                        <p className="vn">Ấn quỷ</p>
                    </div>

                    <div className="film">
                        <div className="img_film">
                            <img src={phim2} alt="phim"></img>
                        </div>
                        <div className="button"></div>
                        <div className="hover_film"></div>
                        <p>THE UNHOLY</p>
                        <p className="vn">Ấn quỷ</p>
                    </div>

                    <div className="film">
                        <div className="img_film">

                            <img src={phim1} alt="phim"></img>
                        </div>
                        <div className="button"></div>
                        <div className="hover_film"></div>
                        <p>Song song</p>
                        <p className="vn">Song song</p>
                    </div>

                </div>
                {/* end list film */}

                <a href="/" className="btn secondary fl-right">Xem thêm</a>

                <div className="review-film flex">
                    <div className="col">
                        <div className="title-block">
                            <a href="">BÌNH LUẬN PHIM</a>
                        </div>
                        <article className="block flex">
                            <a href="">
                                <div><img src={phim2} alt="phim"></img></div>
                            </a>

                            <div className="movie-thum">
                                <h5><a href="">[Review] Mortal Kombat: Kỹ Xảo Mãn Nhãn Nhưng Liệu Có Xứng Tầm Bom Tấn?</a></h5>
                                <div className="blog-content hidden-xs">
                                    <p><b><i>Mortal Kombat</i></b> tuy vẫn còn nhiều khuyết điểm, nhưng vẫn là một tác phẩm giải trí tốt, đủ đem tới trải nghiệm điện ảnh thú vị và đáng để thưởng thức.</p>
                                </div>
                            </div>
                        </article>
                        <article className="block flex">
                            <a href="">
                                <div><img src={phim2} alt="phim"></img></div>
                            </a>
                            <div className="movie-thum">
                                <h5><a href="">[Review] Mortal Kombat: Kỹ Xảo Mãn Nhãn Nhưng Liệu Có Xứng Tầm Bom Tấn?</a></h5>
                                <div className="blog-content hidden-xs">
                                    <p><b><i>Mortal Kombat</i></b> tuy vẫn còn nhiều khuyết điểm, nhưng vẫn là một tác phẩm giải trí tốt, đủ đem tới trải nghiệm điện ảnh thú vị và đáng để thưởng thức.</p>
                                </div>
                            </div>
                        </article>
                        <article className="block flex">
                            <a href="">
                                <div><img src={phim2} alt="phim"></img></div>
                            </a>
                            <div className="movie-thum">
                                <h5><a href="">[Review] Mortal Kombat: Kỹ Xảo Mãn Nhãn Nhưng Liệu Có Xứng Tầm Bom Tấn?</a></h5>
                                <div className="blog-content hidden-xs">
                                    <p><b><i>Mortal Kombat</i></b> tuy vẫn còn nhiều khuyết điểm, nhưng vẫn là một tác phẩm giải trí tốt, đủ đem tới trải nghiệm điện ảnh thú vị và đáng để thưởng thức.</p>
                                </div>
                            </div>
                        </article>
                        <article className="block flex">
                            <a href="">
                                <div><img src={phim2} alt="phim"></img></div>
                            </a>
                            <div className="movie-thum">
                                <h5><a href="">[Review] Mortal Kombat: Kỹ Xảo Mãn Nhãn Nhưng Liệu Có Xứng Tầm Bom Tấn?</a></h5>
                                <div className="blog-content hidden-xs">
                                    <p><b><i>Mortal Kombat</i></b> tuy vẫn còn nhiều khuyết điểm, nhưng vẫn là một tác phẩm giải trí tốt, đủ đem tới trải nghiệm điện ảnh thú vị và đáng để thưởng thức.</p>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="col">
                        <div className="title-block">
                            <a href="">BLOG ĐIỆN ẢNH</a>
                        </div>
                        <article className="block flex">
                            <a href="">
                                <div><img src={phim2} alt="phim"></img></div>
                            </a>
                            <div className="movie-thum">
                                <h5><a href="">[Review] Mortal Kombat: Kỹ Xảo Mãn Nhãn Nhưng Liệu Có Xứng Tầm Bom Tấn?</a></h5>
                                <div className="blog-content hidden-xs">
                                    <p><b><i>Mortal Kombat</i></b> tuy vẫn còn nhiều khuyết điểm, nhưng vẫn là một tác phẩm giải trí tốt, đủ đem tới trải nghiệm điện ảnh thú vị và đáng để thưởng thức.</p>
                                </div>
                            </div>
                        </article>
                        <article className="block flex">
                            <a href="">
                                <div><img src={phim2} alt="phim"></img></div>
                            </a>
                            <div className="movie-thum">
                                <h5><a href="">[Review] Mortal Kombat: Kỹ Xảo Mãn Nhãn Nhưng Liệu Có Xứng Tầm Bom Tấn?</a></h5>
                                <div className="blog-content hidden-xs">
                                    <p><b><i>Mortal Kombat</i></b> tuy vẫn còn nhiều khuyết điểm, nhưng vẫn là một tác phẩm giải trí tốt, đủ đem tới trải nghiệm điện ảnh thú vị và đáng để thưởng thức.</p>
                                </div>
                            </div>
                        </article>
                        <article className="block flex">
                            <a href="">
                                <div><img src={phim2} alt="phim"></img></div>
                            </a>
                            <div className="movie-thum">
                                <h5><a href="">[Review] Mortal Kombat: Kỹ Xảo Mãn Nhãn Nhưng Liệu Có Xứng Tầm Bom Tấn?</a></h5>
                                <div className="blog-content hidden-xs">
                                    <p><b><i>Mortal Kombat</i></b> tuy vẫn còn nhiều khuyết điểm, nhưng vẫn là một tác phẩm giải trí tốt, đủ đem tới trải nghiệm điện ảnh thú vị và đáng để thưởng thức.</p>
                                </div>
                            </div>
                        </article>
                        <article className="block flex">
                            <a href="">
                                <div><img src={phim2} alt="phim"></img></div>
                            </a>
                            <div className="movie-thum">
                                <h5><a href="">[Review] Mortal Kombat: Kỹ Xảo Mãn Nhãn Nhưng Liệu Có Xứng Tầm Bom Tấn?</a></h5>
                                <div className="blog-content hidden-xs">
                                    <p><b><i>Mortal Kombat</i></b> tuy vẫn còn nhiều khuyết điểm, nhưng vẫn là một tác phẩm giải trí tốt, đủ đem tới trải nghiệm điện ảnh thú vị và đáng để thưởng thức.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <div>
                    <div className="title-block">
                        <a href="">TIN KHUYẾN MÃI</a>
                    </div>

                    <div className="flex no-space-between">
                        <div class="promotion-item-home">
                            <a href="/khuyen-mai/happy-day-happy-popcorn">
                                <img src={km1} alt="km"></img>
                                <div class="overlay">
                                    <h2>Happy Day Happy Popcorn</h2>
                                    <p><span><span><span><span>Vào <strong>thứ 3 hàng tuần</strong> – Happy Day, ngoài ưu đãi giá vé <strong>CHỈ TỪ 45K</strong>, khi các Stars mua 01 bắp sẽ được <strong>TẶNG NGAY 01 NƯỚC</strong>.</span></span></span></span></p>
                                    <a href="/khuyen-mai/happy-day-happy-popcorn" class="btn secondary-white">chi tiết</a>
                                </div>
                            </a>
                        </div>

                        <div class="promotion-item-home">
                            <a href="/khuyen-mai/happy-day-happy-popcorn">
                                <img src={km2} alt="km"></img>
                                <div class="overlay">
                                    <h2>Happy Day Happy Popcorn</h2>
                                    <p><span><span><span><span>Vào <strong>thứ 3 hàng tuần</strong> – Happy Day, ngoài ưu đãi giá vé <strong>CHỈ TỪ 45K</strong>, khi các Stars mua 01 bắp sẽ được <strong>TẶNG NGAY 01 NƯỚC</strong>.</span></span></span></span></p>
                                    <a href="/khuyen-mai/happy-day-happy-popcorn" class="btn secondary-white">chi tiết</a>
                                </div>
                            </a>
                        </div>

                        <div class="promotion-item-home">
                            <a href="/khuyen-mai/happy-day-happy-popcorn">
                                <img src={km3} alt="km"></img>
                                <div class="overlay">
                                    <h2>Happy Day Happy Popcorn</h2>
                                    <p><span><span><span><span>Vào <strong>thứ 3 hàng tuần</strong> – Happy Day, ngoài ưu đãi giá vé <strong>CHỈ TỪ 45K</strong>, khi các Stars mua 01 bắp sẽ được <strong>TẶNG NGAY 01 NƯỚC</strong>.</span></span></span></span></p>
                                    <a href="/khuyen-mai/happy-day-happy-popcorn" class="btn secondary-white">chi tiết</a>
                                </div>
                            </a>
                        </div>

                        <div class="promotion-item-home">
                            <a href="/khuyen-mai/happy-day-happy-popcorn">
                                <img src={km1} alt="km"></img>
                                <div class="overlay">
                                    <h2>Happy Day Happy Popcorn</h2>
                                    <p><span><span><span><span>Vào <strong>thứ 3 hàng tuần</strong> – Happy Day, ngoài ưu đãi giá vé <strong>CHỈ TỪ 45K</strong>, khi các Stars mua 01 bắp sẽ được <strong>TẶNG NGAY 01 NƯỚC</strong>.</span></span></span></span></p>
                                    <a href="/khuyen-mai/happy-day-happy-popcorn" class="btn secondary-white">chi tiết</a>
                                </div>
                            </a>
                        </div>

                        <div class="promotion-item-home">
                            <a href="/khuyen-mai/happy-day-happy-popcorn">
                                <img src={km3} alt="km"></img>
                                <div class="overlay">
                                    <h2>Happy Day Happy Popcorn</h2>
                                    <p><span><span><span><span>Vào <strong>thứ 3 hàng tuần</strong> – Happy Day, ngoài ưu đãi giá vé <strong>CHỈ TỪ 45K</strong>, khi các Stars mua 01 bắp sẽ được <strong>TẶNG NGAY 01 NƯỚC</strong>.</span></span></span></span></p>
                                    <a href="/khuyen-mai/happy-day-happy-popcorn" class="btn secondary-white">chi tiết</a>
                                </div>
                            </a>
                        </div>

                        <div class="promotion-item-home">
                            <a href="/khuyen-mai/happy-day-happy-popcorn">
                                <img src={km1} alt="km"></img>
                                <div class="overlay">
                                    <h2>Happy Day Happy Popcorn</h2>
                                    <p><span><span><span><span>Vào <strong>thứ 3 hàng tuần</strong> – Happy Day, ngoài ưu đãi giá vé <strong>CHỈ TỪ 45K</strong>, khi các Stars mua 01 bắp sẽ được <strong>TẶNG NGAY 01 NƯỚC</strong>.</span></span></span></span></p>
                                    <a href="/khuyen-mai/happy-day-happy-popcorn" class="btn secondary-white">chi tiết</a>
                                </div>
                            </a>
                        </div>

                        <div class="promotion-item-home">
                            <a href="/khuyen-mai/happy-day-happy-popcorn">
                                <img src={km3} alt="km"></img>
                                <div class="overlay">
                                    <h2>Happy Day Happy Popcorn</h2>
                                    <p><span><span><span><span>Vào <strong>thứ 3 hàng tuần</strong> – Happy Day, ngoài ưu đãi giá vé <strong>CHỈ TỪ 45K</strong>, khi các Stars mua 01 bắp sẽ được <strong>TẶNG NGAY 01 NƯỚC</strong>.</span></span></span></span></p>
                                    <a href="/khuyen-mai/happy-day-happy-popcorn" class="btn secondary-white">chi tiết</a>
                                </div>
                            </a>
                        </div>

                        <div class="promotion-item-home">
                            <a href="/khuyen-mai/happy-day-happy-popcorn">
                                <img src={km1} alt="km"></img>
                                <div class="overlay">
                                    <h2>Happy Day Happy Popcorn</h2>
                                    <p><span><span><span><span>Vào <strong>thứ 3 hàng tuần</strong> – Happy Day, ngoài ưu đãi giá vé <strong>CHỈ TỪ 45K</strong>, khi các Stars mua 01 bắp sẽ được <strong>TẶNG NGAY 01 NƯỚC</strong>.</span></span></span></span></p>
                                    <a href="/khuyen-mai/happy-day-happy-popcorn" class="btn secondary-white">chi tiết</a>
                                </div>
                            </a>
                        </div>

                        <div class="promotion-item-home">
                            <a href="/khuyen-mai/happy-day-happy-popcorn">
                                <img src={km3} alt="km"></img>
                                <div class="overlay">
                                    <h2>Happy Day Happy Popcorn</h2>
                                    <p><span><span><span><span>Vào <strong>thứ 3 hàng tuần</strong> – Happy Day, ngoài ưu đãi giá vé <strong>CHỈ TỪ 45K</strong>, khi các Stars mua 01 bắp sẽ được <strong>TẶNG NGAY 01 NƯỚC</strong>.</span></span></span></span></p>
                                    <a href="/khuyen-mai/happy-day-happy-popcorn" class="btn secondary-white">chi tiết</a>
                                </div>
                            </a>
                        </div>

                        <div class="promotion-item-home">
                            <a href="/khuyen-mai/happy-day-happy-popcorn">
                                <img src={km4} alt="km"></img>
                                <div class="overlay">
                                    <h2>Happy Day Happy Popcorn</h2>
                                    <p><span><span><span><span>Vào <strong>thứ 3 hàng tuần</strong> – Happy Day, ngoài ưu đãi giá vé <strong>CHỈ TỪ 45K</strong>, khi các Stars mua 01 bắp sẽ được <strong>TẶNG NGAY 01 NƯỚC</strong>.</span></span></span></span></p>
                                    <a href="/khuyen-mai/happy-day-happy-popcorn" class="btn secondary-white">chi tiết</a>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="title-block">
                        <a href="">ALLFILMS CINEMA</a>
                    </div>
                    <div class="content-text">
                        <p>Galaxy Cinema là một trong những công ty tư nhân đầu tiên về điện ảnh được thành lập từ năm 2003, đã khẳng định thương hiệu là 1 trong 10 địa điểm vui chơi giải trí được yêu thích nhất. Ngoài hệ thống rạp chiếu phim hiện đại, thu hút hàng triệu lượt người đến xem, Galaxy Cinema còn hấp dẫn khán giả bởi không khí thân thiện cũng như chất lượng dịch vụ hàng đầu.</p>
                        <p>Đến website galaxycine.vn, quý khách sẽ được cập nhật nhanh chóng các phim hay nhất phim mới nhất đang chiếu hoặc sắp chiếu. Lịch chiếu tại mọi hệ thống rạp chiếu phim của Galaxy Cinema cũng được cập nhật đầy đủ hàng ngày hàng giờ trên trang chủ.</p>
                        <p>Đặt vé tại Galaxy Cinema dễ dàng chỉ sau vài thao tác vô cùng đơn giản. Để mua vé, hãy vào tab Mua vé. Quý khách có thể chọn Mua vé theo phim, theo rạp, theo ngày tùy cách nào tiện lợi nhất cho bản thân.Sau đó, tiến hành mua vé theo các bước hướng dẫn. Chỉ trong vài phút, quý khách sẽ nhận được tin nhắn và email phản hồi Đặt vé thành công của Galaxy Cinema. Quý khách có thể dùng tin nhắn lấy vé tại quầy vé của Galaxy Cinema hoặc quét mã QR để một bước vào rạp mà không cần tốn thêm bất kỳ công đoạn nào nữa.</p>
                        <p>Nếu bạn đã chọn được phim hay để xem, hãy đặt vé cực nhanh bằng box Mua Vé Nhanh ngay từ Trang Chủ. Chỉ cần một phút, tin nhắn và email phản hồi của Galaxy Cinema sẽ gửi ngay vào điện thoại và hộp mail của bạn.</p>
                        <p>Nếu chưa quyết định sẽ xem phim mới nào, hãy tham khảo các bộ phim hay trong mục Phim Đang Chiếu cũng như Phim Sắp Chiếu tại rạp chiếu phim bằng cách vào mục Bình Luận Phim ở Góc Điện Ảnh để đọc những bài bình luận chân thật nhất, tham khảo và cân nhắc. Sau đó, quý khách hãy đặt vé bằng box Mua Vé Nhanh ngay ở đầu trang để chọn được suất chiếu và chỗ ngồi vừa ý nhất.</p>
                        <p>Galaxy Cinema luôn có những chương trình khuyến mãi, ưu đãi, quà tặng vô cùng hấp dẫn như giảm giá vé, tặng vé xem phim miễn phí, tặng Combo, tặng quà phim…  dành cho quý khách. </p>
                        <p>Trang web galaxycine.vn còn có mục Góc Điện Ảnh - sở hữu lượng dữ liệu về phim, diễn viên và đạo diễn, giúp quý khách dễ dàng chọn được phim mình yêu thích và nâng cao kiến thức về điện ảnh của bản thân. </p>
                        <p>Ngoài ra, vào mỗi tháng, Galaxy Cinema cũng giới thiệu các phim sắp chiếu hot nhất trong mục Phim Hay Tháng để quý khách sớm có sự tính toán. </p>
                        <p>Hiện nay, Galaxy Cinema đang ngày càng phát triển hơn nữa với các chương trình đặc sắc, các khuyến mãi hấp dẫn, đem đến cho khán giả những bộ phim bom tấn của thế giới và Việt Nam nhanh chóng và sớm nhất.</p>
                    </div>
                </div>
            </div>
            {/* end container film */}
        </div>
    );


};

export default UserDetail;
