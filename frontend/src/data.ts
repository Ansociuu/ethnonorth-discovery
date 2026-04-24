export const destinations = [
  {
    id: 'sapa',
    name: 'Sa Pa',
    province: 'Lào Cai',
    description: 'Thị trấn trong mây, nơi hội tụ tinh hoa văn hoá các dân tộc thiểu số miền Bắc.',
    image: 'https://cdn.pixabay.com/photo/2019/12/12/10/47/mountain-4690386_1280.jpg',
    ethnicGroups: ['H’Mông', 'Dao', 'Tày', 'Giáy'],
    experiences: ['Trekking bản làng', 'Chợ phiên', 'Homestay'],
  },
  {
    id: 'hagiang',
    name: 'Hà Giang',
    province: 'Hà Giang',
    description: 'Mảnh đất địa đầu tổ quốc với những cung đường đèo hùng vĩ và cao nguyên đá đồng văn.',
    image: 'https://res.cloudinary.com/drvjjrsah/image/upload/v1777065383/phathuynhfuji-mountains-7598212_1920_i8fcpo.jpg',
    ethnicGroups: ['H’Mông', 'Dao', 'Lô Lô', 'Pu Péo'],
    experiences: ['Hà Giang Loop', 'Cột cờ Lũng Cú', 'Dệt lanh'],
  },
  {
    id: 'mucangchai',
    name: 'Mù Cang Chải',
    province: 'Yên Bái',
    description: 'Nổi tiếng với những thửa ruộng bậc thang đẹp nhất thế giới, mùa vàng lộng lẫy.',
    image: 'https://res.cloudinary.com/drvjjrsah/image/upload/v1777065299/namden-vietnam-9852235_1920_iloyjb.jpg',
    ethnicGroups: ['H’Mông', 'Thái'],
    experiences: ['Săn mây', 'Bay trên mùa vàng', 'Gặt lúa'],
  },
  {
    id: 'mocchau',
    name: 'Mộc Châu',
    province: 'Sơn La',
    description: 'Cao nguyên xanh mướt với những đồi chè trái tim và cánh đồng hoa cải trắng.',
    image: 'https://res.cloudinary.com/drvjjrsah/image/upload/v1777065298/toannguyen-tea-plantation-2094890_1920_suicxz.jpg',
    ethnicGroups: ['Thái', 'H’Mông'],
    experiences: ['Trải nghiệm đồi chè', 'Nghỉ dưỡng', 'Hái mận'],
  },
];

export const ethnicGroups = [
  {
    id: 'hmong',
    name: 'H’Mông',
    shortDesc: 'Dân tộc của những đỉnh núi cao, nổi tiếng với tinh thần tự do và phục sức rực rỡ.',
    description: 'Người H’Mông thường sống ở những vùng núi cao, có truyền thống canh tác lúa nước trên ruộng bậc thang và rèn đúc, dệt thổ cẩm tinh xảo. Văn hoá người H’Mông vô cùng phong phú với những điệu khèn, lễ hội Gầu Tào và các phong tục tập quán độc đáo.',
    image: 'https://ik.imagekit.io/tvlk/blog/2022/11/kinh-nghiem-du-lich-ha-giang-9-1024x683.jpg?tr=dpr-2,w-675',
    cldId: 'u_3_bbbetj',
    subgroups: ['H’Mông Trắng', 'H’Mông Đen', 'H’Mông Xanh', 'H’Mông Hoa'],
    crafts: ['Dệt thổ cẩm', 'Rèn bạc', 'Vẽ sáp ong'],
    history: {
      origin: 'Người H’Mông có nguồn gốc xa xưa từ vùng lưu vực sông Hoàng Hà và sông Dương Tử (Trung Quốc). Trải qua những cuộc thiên di lịch sử kéo dài nhiều thế kỷ do biến động chính trị và nhu cầu tìm kiếm đất canh tác, họ đã di cư xuống phía Nam và bắt đầu định cư tại vùng núi cao phía Bắc Việt Nam từ khoảng 300 năm trước.',
      milestones: [
        { year: 'Thời cổ đại', event: 'Hình thành cộng đồng tại vùng thượng lưu sông Hoàng Hà với nền văn minh lúa mỳ đặc trưng.' },
        { year: 'Thế kỷ 18-19', event: 'Cuộc thiên di lớn vào Việt Nam, định cư tại các đỉnh núi cao trên 1000m thuộc Hà Giang, Lào Cai, Sơn La.' },
        { year: '1945 - 1975', event: 'Sát cánh cùng quân dân cả nước trong các cuộc kháng chiến bảo vệ Tổ quốc, đặc biệt là chiến dịch Điện Biên Phủ.' },
        { year: 'Ngày nay', event: 'Bảo tồn giá trị di sản song hành với phát triển du lịch bền vững và nông nghiệp công nghệ cao.' }
      ]
    },
    culture: {
      food: [
        { name: 'Thắng cố', desc: 'Món ăn mang đậm hơi thở của núi rừng từ thịt ngựa và thảo quả.', image: 'https://r2.nucuoimekong.com/wp-content/uploads/nguyen-lieu-mon-thang-co.webp' },
        { name: 'Mèn mén', desc: 'Cơm ngô đồ hai lần, món ăn truyền thống nuôi dưỡng bao thế hệ người H’Mông.', image: 'https://static-images.vnncdn.net/files/publish/2023/3/20/men-men-dac-san-ha-giang-xuan-phuong-1442.jpg?width=0&s=Thew46jR1TY7CqJNZG7iCQ' }
      ],
      festivals: 'Lễ hội Gầu Tào (cầu phúc), Hội Sải Sán...',
      beliefs: 'Thờ cúng tổ tiên, ma nhà, và các thần linh cai quản núi rừng.'
    }
  },
  {
    id: 'dao',
    name: 'Dao',
    shortDesc: 'Người giữ lửa tri thức vùng cao, nổi tiếng với chữ Nôm Dao và y thuật thảo dược.',
    description: 'Người Dao có lịch sử lâu đời và hệ thống tín ngưỡng, văn hoá chữ viết đặc sắc. Họ nổi tiếng với trang phục thêu thùa tỉ mỉ và kiến thức uyên thâm về các loại thảo dược tự nhiên từ rừng thẳm.',
    image: 'https://booking.pystravel.vn/uploads/posts/albums/5638/2592f4dc897f2af2448b9defe3d9a766.jpeg',
    cldId: 'OIP_qfo5sl',
    subgroups: ['Dao Đỏ', 'Dao Tiền', 'Dao Quần Chẹt', 'Dao Áo Dài'],
    crafts: ['Làm giấy bản', 'Thuốc thảo dược', 'Thêu tay ngũ sắc'],
    history: {
      origin: 'Người Dao có nguồn gốc từ vùng Hoa Nam (Trung Quốc), với hành trình thiên di đặc biệt bằng đường biển và đường bộ. Theo các thư tịch cổ, tổ tiên người Dao đã vượt biển sang Việt Nam từ thế kỷ 13 trở đi, mang theo hệ thống tín ngưỡng Đạo giáo và văn hóa chữ viết phong phú.',
      milestones: [
        { year: 'Thế kỷ 13', event: 'Những đoàn người Dao đầu tiên vượt biển vào Việt Nam, định cư tại các vùng ven biển và chân núi thấp.' },
        { year: 'Thời Lê - Nguyễn', event: 'Tiếp tục di cư sâu vào nội địa, hình thành các nhóm Dao Đỏ, Dao Tiền, Dao Thanh Y với bản sắc riêng biệt.' },
        { year: 'Kháng chiến', event: 'Nổi tiếng với tinh thần yêu nước, bảo vệ căn cứ địa cách mạng tại các vùng rừng núi hiểm trở.' },
        { year: 'Hiện đại', event: 'Trở thành biểu tượng của tri thức bản địa về y học thảo dược và phát triển các làng nghề thủ công truyền thống.' }
      ]
    },
    culture: {
      food: [
        { name: 'Thịt lợn chua', desc: 'Món ăn đặc sản được ủ men tự nhiên trong ống nứa.', image: 'https://mia.vn/media/uploads/blog-du-lich/dac-biet-mon-thit-lon-muoi-chua-cua-nguoi-dao-o-moc-chau-2-1645441860.jpg' },
        { name: 'Rượu hoẵng', desc: 'Loại rượu men lá thơm nồng, không thể thiếu trong các dịp lễ quan trọng.', image: 'https://maichauhideaway.com/Data/Sites/1/media/tin-tuc/%E1%BA%A3nh-b%C3%A0i-vi%E1%BA%BFt/t5-2025/r%C6%B0%E1%BB%A3u-ho%C3%A3ng-c%E1%BB%A7a-ng%C6%B0%E1%BB%9Di-dao/r%C6%B0%E1%BB%A3u-ho%C3%A3ng-c%E1%BB%A7a-ng%C6%B0%E1%BB%9Di-dao-(2).png' }
      ],
      festivals: 'Lễ Cấp Sắc (Nghi lễ trưởng thành), Tết Nhảy...',
      beliefs: 'Hệ thống Đạo giáo kết hợp tín ngưỡng thờ cúng Bàn Vương.'
    }
  },
];

export const products = [
  {
    id: 'tc-01',
    name: 'Khăn thổ cẩm H’Mông Đen',
    category: 'Thổ cẩm',
    price: 350000,
    origin: 'Lào Chải, Sa Pa',
    ethnic: 'H’Mông',
    image: 'https://khankm0.com/media/uploads/2024/TH%E1%BB%94%20C%E1%BA%A8M%201.4/khan-tho-cam-dan-toc-hmong-doi-dau-nhieu-mau%20%281%29.jpg',
    story: 'Mỗi tấm khăn là hơi thở của núi rừng, được dệt từ sợi lanh tự nhiên và nhuộm chàm thủ công bởi những nghệ nhân có hơn 30 năm kinh nghiệm.',
  },
  {
    id: 'dl-02',
    name: 'Thảo dược tắm thuốc Dao Đỏ',
    category: 'Dược liệu',
    price: 150000,
    origin: 'Tả Phìn, Sa Pa',
    ethnic: 'Dao',
    image: 'https://static.vinwonders.com/production/chi-chau-hai-la-nau-nuoc-tam-dao-do.jpg',
    story: 'Bài thuốc bí truyền của người Dao Đỏ giúp phục hồi sức khoẻ sau khi đi rừng xa hoặc lao động mệt nhọc.',
  },
  {
    id: 'mo-03',
    name: 'Mật ong rừng Hà Giang',
    category: 'Mật ong',
    price: 450000,
    origin: 'Mèo Vạc, Hà Giang',
    ethnic: 'H’Mông',
    image: 'https://vn-live-01.slatic.net/p/b20835cfbeb8fe55af135a673be6fbc3.jpg',
    story: 'Mật ong bạc hà nguyên chất từ cao nguyên đá Đồng Văn, thu hoạch tháng 11 hàng năm.',
  },
];

export const tours = [
  {
    id: 'tour-01',
    name: 'Hành trình di sản Sa Pa',
    duration: '3 ngày 2 đêm',
    price: 3200000,
    image: 'https://res.cloudinary.com/drvjjrsah/image/upload/v1777069062/hiephoang-sapa-3851735_1920_oezbrd.jpg',
    features: ['Trekking bản Lao Chải', 'Tắm thuốc Dao Đỏ', 'Chinh phục Fansipan'],
    locations: ['Sa Pa', 'Tả Phìn', 'Y Linh Hồ'],
  },
  {
    id: 'tour-02',
    name: 'Cao nguyên đá Hà Giang',
    duration: '4 ngày 3 đêm',
    price: 4500000,
    image: 'https://res.cloudinary.com/drvjjrsah/image/upload/v1777069062/xuanduongvan87-ha-giang-7947012_1920_don4pk.jpg',
    features: ['Hà Giang Loop', 'Đèo Mã Pì Lèng', 'Chèo thuyền sông Nho Quế'],
    locations: ['Đồng Văn', 'Mèo Vạc', 'Yên Minh'],
  },
  {
    id: 'tour-03',
    name: 'Vẻ đẹp Mù Cang Chải mùa vàng',
    duration: '3 ngày 2 đêm',
    price: 2800000,
    image: 'https://res.cloudinary.com/drvjjrsah/image/upload/v1777069061/jaclou-dl-paragliding-4657988_1920_fl0o3p.jpg',
    features: ['Bay dù lượn', 'Chinh phục Đèo Khau Phạ', 'Lễ hội cơm mới'],
    locations: ['Mù Cang Chải', 'Nghĩa Lộ'],
  },
  {
    id: 'tour-04',
    name: 'Hành trình khám phá Mộc Châu Mùa Hoa Trắng',
    duration: '2 ngày 1 đêm',
    price: 1800000,
    image: 'https://res.cloudinary.com/drvjjrsah/image/upload/v1777069061/tuandn0105-plum-2832752_1920_jmxxxe.jpg',
    features: ['Chụp ảnh với hoa cải', 'Thăm đồi chè trái tim', 'Giao lưu văn hoá Thái'],
    locations: ['Mộc Châu', 'Đồi chè Long Cốc'],
  },
];
