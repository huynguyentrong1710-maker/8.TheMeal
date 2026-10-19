# Hướng dẫn GitHub từ A–Z — the Meal Next (Nhóm 8)

Tài liệu dành cho người mới bắt đầu. Bạn có thể tự đăng website lên mạng và sửa code mà **không cần thuê hosting, không cần viết lệnh**. Bản web dùng HTML, CSS, JavaScript nên chạy được với GitHub Pages.

## Phần A — Chạy website trên máy tính

1. Tải file ZIP, giải nén ra thư mục `themeal-nhom8`.
2. Mở thư mục và nhấp đúp `index.html`. Website chạy trên trình duyệt Chrome/Edge/Firefox.
3. Nếu thao tác lưu dữ liệu không hoạt động khi mở trực tiếp từ file, hãy dùng VS Code với extension **Live Server**, hoặc mở Terminal trong thư mục và chạy `python -m http.server 8000`, sau đó truy cập `http://localhost:8000`.
4. Lưu ý: dữ liệu chỉ nằm trong **localStorage** trên thiết bị và trình duyệt của bạn, không có tài khoản trực tuyến hoặc dữ liệu chia sẻ giữa các thành viên.

## Phần B — Đăng website lên GitHub Pages (không dùng lệnh)

### Bước 1. Tạo tài khoản / đăng nhập

- Vào https://github.com và đăng nhập. Nếu chưa có tài khoản, chọn **Sign up**.
- Sau khi đăng nhập, nhấn dấu **+** góc trên bên phải → **New repository** (hoặc nút **New** trong trang Repositories).

### Bước 2. Tạo kho mã nguồn

- **Repository name:** `themeal-nhom8`.
- **Visibility:** `Public` nếu muốn mọi người xem website dễ dàng.
- Không bắt buộc chọn README có sẵn (vì bộ mã đã có README).
- Nhấn **Create repository**.

### Bước 3. Tải file mã nguồn lên

- Trong kho vừa tạo, nhấn **Add file** → **Upload files**. Nếu kho đang trống, GitHub có thể hiển thị dòng **uploading an existing file**.
- Giải nén ZIP trên máy; chọn **các file trong thư mục**: `index.html`, `style.css`, `app.js`, `README.md`, `HUONG-DAN-GITHUB.md`.
- Quan trọng: `index.html` phải nằm **ngay tại thư mục gốc** của repository, không bị nằm trong thư mục con `themeal-nhom8/themeal-nhom8`.
- Nhấn **Commit changes** để lưu phiên bản đầu tiên.

### Bước 4. Bật GitHub Pages

- Mở tab **Settings** của repository.
- Tại menu trái, chọn **Pages**.
- Trong **Build and deployment**, đặt **Source** là **Deploy from a branch**.
- Chọn nhánh `main`, thư mục `/(root)` rồi nhấn **Save**.
- Chờ hệ thống xuất bản vài phút; tải lại trang Pages hoặc xem tab **Actions** để biết tiến trình.
- Địa chỉ website thường có dạng: `https://TEN-TAI-KHOAN.github.io/themeal-nhom8/`.
- Nếu thấy lỗi 404, kiểm tra tên nhánh, vị trí `index.html`, mục Settings → Pages và đợi quá trình deploy hoàn tất.

## Phần C — Sửa website trực tiếp trên GitHub

Ví dụ: đổi màu chủ đạo xanh lá sang màu nhóm lựa chọn.

1. Trên GitHub, vào repository → chọn file `style.css`.
2. Nhấn biểu tượng **bút chì** (Edit this file).
3. Tìm đầu file:

   ```css
   :root {
     --green:#087b62;
   }
   ```

4. Đổi `#087b62` thành màu khác, ví dụ `#136e5e`.
5. Nhấn **Commit changes** và ghi mô tả ngắn, ví dụ `Đổi màu chủ đạo`.
6. Chờ Pages xây dựng lại rồi tải lại website (Ctrl+Shift+R nếu vẫn hiện bản cũ).

Bạn có thể làm tương tự:

| Muốn sửa | File | Nên tìm |
|---|---|---|
| Tên website, logo chữ, menu | `index.html` | `the Meal`, `<nav` |
| Màu sắc, bo góc, cỡ chữ, bố cục | `style.css` | `:root`, `.sidebar`, `.hero`, `@media` |
| Thêm món ăn mẫu | `app.js` | `const recipes = [` |
| Sửa dữ liệu khởi đầu tủ lạnh | `app.js` | `const seed =` |
| Sửa nội dung trang chính | `app.js` | `function overview()` |
| Sửa logic danh sách mua sắm | `app.js` | `function required()` và `function generateShopping()` |
| Sửa hành vi khi thêm/sửa thực phẩm | `app.js` | `function foodForm()` |
| Chỉnh ví dụ phí chuyên gia | `app.js` | `function expertsPage()` |

**Cách thêm một công thức:** trong `app.js`, tìm `const recipes = [` và sao chép một đối tượng món ăn cũ làm mẫu. Đổi `id` thành giá trị **chưa trùng**, thay `name`, `emoji`, `kcal`, `protein`, `carb`, `fat`, `mins`, `goals`, `ingredients`, `steps`. Các nguyên liệu cần đúng tên và đơn vị với tủ lạnh để thuật toán so khớp. Sau đó Commit và mở mục **Gợi ý thực đơn** để kiểm tra.

**Cách xem lịch sử và hoàn tác:** mở một file trong GitHub → **History** để xem các lần cập nhật; mở một commit và dùng giao diện GitHub để hoàn tác khi thích hợp. Trước khi thay logic lớn, nên tạo một **branch** riêng để các thành viên không ghi đè code của nhau.

## Phần D — Làm việc nhóm bằng Branch và Pull Request

1. Trong repository, mở menu tên nhánh `main` → nhập tên nhánh mới, ví dụ `feature-tu-lanh`, chọn **Create branch**.
2. Mở file cần sửa trong nhánh mới, chỉnh sửa và **Commit changes**.
3. Quay lại trang repository; GitHub thường hiển thị **Compare & pull request**.
4. Mở **Pull request**, mô tả bạn đã thay đổi gì và cần nhóm kiểm tra gì.
5. Thành viên khác kiểm tra giao diện và bấm **Merge pull request** nếu đạt yêu cầu.
6. Website Pages xây dựng lại từ nhánh `main` sau khi gộp mã.

**Phân công ví dụ:** người A sửa giao diện (`style.css`), người B sửa Tủ lạnh (`app.js`), người C sửa Thực đơn/Mua sắm, người D kiểm thử mobile và nội dung. Vì phần logic đang nằm chung trong `app.js`, tránh để hai người cùng sửa sát nhau mà không trao đổi.

## Phần E — Dùng VS Code và GitHub Desktop (nếu muốn làm chuyên nghiệp hơn)

- Cài **VS Code** và **GitHub Desktop**.
- Trong GitHub Desktop chọn **File → Clone repository**, chọn repository `themeal-nhom8`.
- Mở thư mục bằng VS Code, sửa file, xem thử bằng **Live Server**.
- Trong GitHub Desktop, nhập nội dung thay đổi vào ô Summary, nhấn **Commit to main** (hoặc commit trong branch riêng), rồi **Push origin**.
- Chờ GitHub Pages cập nhật.

Tùy chọn qua Terminal:

```bash
git clone https://github.com/TEN-TAI-KHOAN/themeal-nhom8.git
cd themeal-nhom8
# Sửa các file bằng VS Code
git add .
git commit -m "Cập nhật chức năng tủ lạnh"
git push origin main
```

## Phần F — Những giới hạn quan trọng

1. GitHub Pages là hosting **tĩnh**. Không thể dùng riêng GitHub Pages để xây dựng đăng nhập an toàn, xác thực chuyên gia, đồng bộ cloud, cổng thanh toán, chữ ký số hoặc AI xử lý hình ảnh thật.
2. Nội dung, khóa học, hồ sơ chuyên gia và dữ liệu sức khỏe trong website **đều là mô phỏng**. Không nên nhập thông tin sức khỏe nhạy cảm, chứng chỉ thật, mật khẩu hay số thẻ ngân hàng.
3. Tỷ lệ **10% phí nền tảng + 2% mỗi học viên đăng ký** được minh họa theo phương án đề xuất trong tài liệu nhóm, không phải biểu phí đang áp dụng của .theMeal.
4. Nếu sửa `const seed` mà website vẫn hiển thị dữ liệu cũ, vào **Cài đặt cá nhân → Khôi phục toàn bộ dữ liệu mẫu**. Hành động này xóa dữ liệu demo hiện tại trong trình duyệt.
5. Muốn nhiều tài khoản sử dụng chung dữ liệu, nhóm cần bổ sung backend (ví dụ Node.js), cơ sở dữ liệu, xác thực, phân quyền và hosting phù hợp trước khi triển khai thật.

---

Tài liệu tham chiếu: `BT4-Nhóm 8 (1).docx`, từ Chương 2 trở đi. Website là bản prototype học tập được nhóm phát triển theo đề xuất, không phải một phiên bản chính thức của .theMeal.
