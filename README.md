# AI Interview Platform

Ứng dụng phỏng vấn thử nghiệm (Mock Interview) hỗ trợ bởi AI, giúp người dùng luyện tập kỹ năng trả lời phỏng vấn qua giọng nói và nhận đánh giá chi tiết sau mỗi buổi phỏng vấn.

---

## 📌 Tính năng chính

- **Xác thực người dùng**: Đăng ký và đăng nhập tài khoản an toàn thông qua Firebase Authentication.
- **Phỏng vấn trực tiếp qua giọng nói**: Tương tác thời gian thực với AI Agent (sử dụng Vapi AI Web SDK).
- **Phân tích & Đánh giá tự động**: Đánh giá câu trả lời và chấm điểm theo nhiều tiêu chí (Giao tiếp, Chuyên môn, Giải quyết vấn đề, Độ tự tin) bằng mô hình Google Gemini 2.0.
- **Quản lý lịch sử phỏng vấn**: Trực quan hóa danh sách bài phỏng vấn đã tham gia và xem lại phản hồi chi tiết.

---

## 🛠️ Công nghệ sử dụng

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Ngôn ngữ**: TypeScript
- **Giao diện & Styling**: Tailwind CSS v4, Radix UI, Lucide Icons, Sonner Toast
- **Xác thực & Cơ sở dữ liệu**: Firebase (Authentication, Cloud Firestore, Firebase Admin SDK)
- **Voice Agent**: [Vapi AI Web SDK](https://vapi.ai/) (`@vapi-ai/web`)
- **Mô hình AI**: Google Gemini 2.0 Flash (thông qua [Vercel AI SDK](https://sdk.vercel.ai/docs))

---

## 🚀 Hướng dẫn cài đặt & Chạy ứng dụng

### 1. Yêu cầu hệ thống
- Node.js >= 18.x
- Nạp sẵn các gói quản lý npm / yarn / pnpm / bun

### 2. Cài đặt các thư viện phụ thuộc

```bash
npm install
```

### 3. Cấu hình biến môi trường (`.env.local`)

Tạo file `.env.local` tại thư mục gốc dự án và điền các thông số cấu hình:

```env
# Firebase Admin Configuration
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY="your_firebase_private_key"

# Vapi AI Configuration
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token

# Google Gemini AI Key
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key
```

### 4. Khởi chạy ứng dụng (Development mode)

```bash
npm run dev
```

Mở trình duyệt và truy cập địa chỉ: [http://localhost:3000](http://localhost:3000)

---

## 📁 Cấu trúc thư mục dự án

```text
interview_platform/
├── app/                  # Route handlers & UI pages (Next.js App Router)
│   ├── (auth)/           # Luồng Đăng nhập / Đăng ký
│   ├── (root)/           # Dashboard chính, danh sách & chi tiết phỏng vấn
│   └── api/              # Các API route bổ trợ
├── components/           # UI Components (Agent voice, AuthForm, Radix primitives)
├── firebase/             # Cấu hình Firebase Client & Firebase Admin SDK
├── lib/                  # Helper functions, Server Actions & SDK instances
├── constants/            # Schema validation (Zod), prompt mẫu & dữ liệu hằng số
└── types/                # Định nghĩa kiểu dữ liệu (TypeScript Interfaces)
```

---

## 📜 Ghi chú

Dự án được xây dựng phục vụ mục đích học tập, thực hành phát triển ứng dụng Fullstack tích hợp AI.
