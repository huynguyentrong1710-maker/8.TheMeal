# the Meal Next — Website prototype Nhóm 8

Bản website học tập dựa trên **Chương 2 trở đi** của `BT4-Nhóm 8 (1).docx`, đề tài "Phát triển hệ thống the Meal – Cá nhân hóa thực đơn và rèn luyện sức khỏe". Đây là **nguyên mẫu độc lập**, không phải sản phẩm chính thức của the Meal.

## Chạy website

Không cần cài phần mềm lập trình. Giải nén và mở `index.html` bằng Chrome/Edge/Firefox. Để phục vụ qua máy chủ cục bộ (khuyến nghị):

```bash
cd themeal-nhom8
python -m http.server 8000
```

Truy cập `http://localhost:8000`.

## Cấu trúc

- `index.html`: khung HTML, menu, vùng hiển thị và thông báo.
- `style.css`: màu sắc, giao diện desktop/tablet/mobile. Các mốc responsive chính: 1120px, 780px, 520px.
- `app.js`: dữ liệu mẫu, công thức món ăn, chức năng tương tác, lưu trữ localStorage.
- `HUONG-DAN-GITHUB.md`: hướng dẫn từng bước tạo repository, sửa code, deploy Pages và làm việc nhóm bằng Pull Request.

## Luồng kiểm thử demo

1. **Tủ lạnh thông minh:** thêm thực phẩm, chỉnh số lượng, ngày sản xuất, hạn dùng và số ngày nhắc. Có cảnh báo sản phẩm gần/hết hạn và giới hạn Free tối đa 7 thực phẩm. Nút `−` trừ số lượng đã sử dụng.
2. **Gợi ý thực đơn:** chọn món có nguyên liệu đang sở hữu; danh sách sắp theo ưu tiên hạn dùng và mức khớp nguyên liệu. Có mục tiêu giảm cân, giữ cân, tăng cơ.
3. **Mua sắm:** chọn 2 món rồi tạo danh sách. Hệ thống gộp nguyên liệu trùng và trừ đi lượng tồn kho cùng đơn vị. Chỉnh lượng mua, tích đã mua, nhập lại vào tủ lạnh. **Khi nhập hàng đã mua, hệ thống yêu cầu xác nhận hạn sử dụng thực tế cho từng mặt hàng.**
4. **Chuyên gia:** thử gửi hồ sơ, tạo khóa học và xem minh họa phí 10% + 2%. Chưa có xét duyệt thật, ký số, thanh toán.
5. **Cộng đồng:** gửi công thức; hiển thị trạng thái chờ kiểm duyệt (demo).
6. **Cài đặt:** đổi mục tiêu, cảnh báo mặc định, chuyển gói demo hoặc khôi phục dữ liệu mẫu.

Dữ liệu thay đổi được lưu trong **localStorage của cùng trình duyệt**. Không đồng bộ tài khoản / thiết bị. Dữ liệu mẫu và số liệu dinh dưỡng chỉ dùng để minh họa.

## Chỉnh sửa với GitHub (không cần terminal)

1. Đăng nhập https://github.com; chọn **New repository**. Đặt tên `themeal-nhom8`, chọn **Public** nếu muốn xuất bản miễn phí với GitHub Pages. Bấm **Create repository**.
2. Trong repository, chọn **Add file → Upload files**, kéo thả 3 file `index.html`, `style.css`, `app.js` cùng `README.md` (không tải file ZIP vào thay cho các file). Bấm **Commit changes**.
3. Muốn sửa giao diện: mở `style.css`, nhấn biểu tượng cây bút **Edit this file**, sửa và **Commit changes**. Ví dụ đổi `--green:#087b62` thành màu nhóm chọn.
4. Muốn sửa câu chữ / logo text / menu cơ bản: mở `index.html` rồi Edit. Muốn sửa công thức, chức năng hoặc dữ liệu: mở `app.js`. Tìm `const recipes` để thêm món, `const seed` để đổi dữ liệu mẫu, `function overview()` để sửa trang chính.
5. Xuất bản: vào **Settings → Pages**, phần **Build and deployment** đặt **Source: Deploy from a branch**, chọn branch `main`, folder `/ (root)`, rồi **Save**. Chờ GitHub xử lý, website thường có dạng `https://TEN-TAI-KHOAN.github.io/themeal-nhom8/`.
6. Sau mỗi lần sửa file, **Commit changes**, chờ Pages xây dựng lại, rồi tải lại trang (có thể nhấn Ctrl+Shift+R).

### Chỉnh sửa bằng Git + VS Code (tùy chọn)

```bash
git clone https://github.com/TEN-TAI-KHOAN/themeal-nhom8.git
cd themeal-nhom8
# Sửa file bằng VS Code
git add .
git commit -m "Cập nhật giao diện the Meal Next"
git push origin main
```

> Đừng nhập dữ liệu sức khỏe cá nhân thật hay chứng chỉ thật vào prototype. GitHub Pages là hosting web tĩnh; để có đăng nhập, phân quyền thật, AI, lưu trữ đám mây, thông báo đẩy, thanh toán, chữ ký số cần backend, cơ sở dữ liệu, bảo mật và dịch vụ tương ứng.

## Đối chiếu tài liệu

- Chương 2 §2.1: cấu trúc menu theo nhu cầu, giảm thao tác; tính năng đóng góp công thức và sửa dữ liệu; gói Free/Premium minh họa.
- Chương 2 §2.2.1: tủ lạnh, hạn dùng, số lượng, giới hạn 7 sản phẩm Free.
- Chương 2 §2.2.2: công thức theo nguyên liệu hiện có và mục tiêu.
- Chương 2 §2.2.3: tính toán phần nguyên liệu thiếu, tổng hợp theo nhiều món.
- Chương 2 §2.2.4: tài khoản chuyên gia, khóa học, cơ chế phí 10% và 2%.
- Chương 3 §3.1.4 và Chương 4 §4.1.4: thao tác tương ứng, phục vụ kịch bản kiểm thử.

**Giới hạn có chủ đích:** Chức năng chụp ảnh và quét mã vạch, AI thật, giọng nói, IoT/BLE, đăng nhập và kiểm duyệt server, giao dịch, chữ ký số hợp pháp, thông báo khi offline và gợi ý dinh dưỡng y tế chưa được triển khai. Mọi thành phần đó cần hạ tầng ngoài GitHub Pages.

**Hướng dẫn GitHub chi tiết:** xem file [`HUONG-DAN-GITHUB.md`](HUONG-DAN-GITHUB.md).
