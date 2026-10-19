# the Meal — Web prototype

Bản mẫu website tiếng Việt được xây dựng dựa trên **Chương 2** của tài liệu “Phát triển hệ thống the Meal – Cá nhân hóa thực đơn và rèn luyện sức khỏe”.

## Các tính năng trong bản mẫu

- Dashboard tổng quan, chỉ số minh họa và cảnh báo thực phẩm gần hết hạn.
- **Tủ lạnh thông minh:** thêm, tìm kiếm, lọc, sửa hạn sử dụng, cập nhật số lượng đã dùng và xóa thực phẩm. Gói miễn phí mô phỏng giới hạn 7 sản phẩm.
- **Gợi ý thực đơn:** đề xuất món dựa trên nguyên liệu đang có, ưu tiên thực phẩm sắp hết hạn; có lựa chọn mục tiêu cân bằng, kiểm soát cân nặng, tăng cơ.
- **Danh sách mua sắm:** thêm/xóa món, đánh dấu đã mua, tiến độ mua sắm.
- **Cộng đồng món Việt:** xem công thức, thích bài viết và gửi công thức mới (hiển thị trạng thái chờ duyệt).
- **Khu vực chuyên gia và khóa học:** xem khóa học, đăng ký mô phỏng, xác nhận điều khoản, gửi hồ sơ đăng ký chuyên gia.
- **Gói dịch vụ:** minh họa miễn phí, the Meal+ và Gia đình.
- Responsive cho máy tính, máy tính bảng và điện thoại.

## Chạy trên máy tính

1. Tải hoặc giải nén thư mục dự án.
2. Mở `index.html` bằng trình duyệt (Chrome/Edge/Firefox). Không cần cài Node.js.
3. Dữ liệu được lưu trong `localStorage` của trình duyệt. Đây là prototype frontend; xóa dữ liệu trình duyệt có thể làm mất dữ liệu mẫu đã chỉnh sửa.

## Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub, ví dụ `themeal-web`.
2. Tải lên `index.html`, `styles.css`, `app.js`, `README.md` ở thư mục gốc của repository.
3. Vào **Settings → Pages**.
4. Trong **Build and deployment**, chọn **Deploy from a branch**.
5. Chọn nhánh `main` và thư mục `/(root)`, nhấn **Save**.
6. Chờ GitHub Pages triển khai và mở URL được hiển thị ở phần Pages.

## Lưu ý về phạm vi

- Các gợi ý món ăn, chỉ số dinh dưỡng, khóa học, học phí và gói dịch vụ là dữ liệu minh họa để trình diễn ý tưởng Chương 2, không phải dữ liệu chính thức của the Meal.
- Nhận diện ảnh bằng AI, tài khoản thật, xác thực chuyên gia, cơ sở dữ liệu dùng chung, thanh toán và chữ ký số **chưa được kết nối**. Muốn dùng thật cần backend/API, xác thực và quy trình bảo mật phù hợp.
- Không sử dụng website mẫu này để đưa ra quyết định y tế; thông tin dinh dưỡng chỉ mang tính tham khảo.
