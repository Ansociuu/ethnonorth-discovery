export const destinations = [
  {
    id: 'sapa',
    name: 'Sa Pa',
    province: 'Lào Cai',
    description: 'Thị trấn trong mây, nơi hội tụ tinh hoa văn hoá các dân tộc thiểu số miền Bắc.',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&q=80&w=1200',
    ethnicGroups: ['H’Mông', 'Dao', 'Tày', 'Giáy'],
    experiences: ['Trekking bản làng', 'Chợ phiên', 'Homestay'],
  },
  {
    id: 'hagiang',
    name: 'Hà Giang',
    province: 'Hà Giang',
    description: 'Mảnh đất địa đầu tổ quốc với những cung đường đèo hùng vĩ và cao nguyên đá đồng văn.',
    image: 'https://images.unsplash.com/photo-1581335010972-e64e9a868469?auto=format&fit=crop&q=80&w=1200',
    ethnicGroups: ['H’Mông', 'Dao', 'Lô Lô', 'Pu Péo'],
    experiences: ['Hà Giang Loop', 'Cột cờ Lũng Cú', 'Dệt lanh'],
  },
  {
    id: 'mucangchai',
    name: 'Mù Cang Chải',
    province: 'Yên Bái',
    description: 'Nổi tiếng với những thửa ruộng bậc thang đẹp nhất thế giới, mùa vàng lộng lẫy.',
    image: 'https://images.unsplash.com/photo-1598284534190-671899146200?auto=format&fit=crop&q=80&w=1200',
    ethnicGroups: ['H’Mông', 'Thái'],
    experiences: ['Săn mây', 'Bay trên mùa vàng', 'Gặt lúa'],
  },
  {
    id: 'mocchau',
    name: 'Mộc Châu',
    province: 'Sơn La',
    description: 'Cao nguyên xanh mướt với những đồi chè trái tim và cánh đồng hoa cải trắng.',
    image: 'https://images.unsplash.com/photo-1621210134440-9a3d46797cc2?auto=format&fit=crop&q=80&w=1200',
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
    image: 'https://images.unsplash.com/photo-1543739446-402a5d211830?auto=format&fit=crop&q=80&w=1200',
    subgroups: ['H’Mông Trắng', 'H’Mông Đen', 'H’Mông Xanh', 'H’Mông Hoa'],
    crafts: ['Dệt thổ cẩm', 'Rèn bạc', 'Đúc nông cụ'],
  },
  {
    id: 'dao',
    name: 'Dao',
    shortDesc: 'Người giữ lửa tri thức vùng cao, nổi tiếng với chữ Nôm Dao và y thuật thảo dược.',
    description: 'Người Dao có lịch sử lâu đời và hệ thống tín ngưỡng, văn hoá chữ viết đặc sắc. Họ nổi tiếng với trang phục thêu thùa tỉ mỉ và kiến thức uyên thâm về các loại thảo dược tự nhiên từ rừng thẳm.',
    image: 'https://images.unsplash.com/photo-1555543714-3aee565b0907?auto=format&fit=crop&q=80&w=1200',
    subgroups: ['Dao Đỏ', 'Dao Tiền', 'Dao Quần Chẹt', 'Dao Áo Dài'],
    crafts: ['Làm giấy bản', 'Thuốc thảo dược', 'In sáp ong'],
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
    image: 'https://images.unsplash.com/photo-1610444317855-849a99781498?auto=format&fit=crop&q=80&w=800',
    story: 'Mỗi tấm khăn là hơi thở của núi rừng, được dệt từ sợi lanh tự nhiên và nhuộm chàm thủ công bởi những nghệ nhân có hơn 30 năm kinh nghiệm.',
  },
  {
    id: 'dl-02',
    name: 'Thảo dược tắm thuốc Dao Đỏ',
    category: 'Dược liệu',
    price: 150000,
    origin: 'Tả Phìn, Sa Pa',
    ethnic: 'Dao',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
    story: 'Bài thuốc bí truyền của người Dao Đỏ giúp phục hồi sức khoẻ sau khi đi rừng xa hoặc lao động mệt nhọc.',
  },
  {
    id: 'mo-03',
    name: 'Mật ong rừng Hà Giang',
    category: 'Mật ong',
    price: 450000,
    origin: 'Mèo Vạc, Hà Giang',
    ethnic: 'H’Mông',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800',
    story: 'Mật ong bạc hà nguyên chất từ cao nguyên đá Đồng Văn, thu hoạch tháng 11 hàng năm.',
  },
];

export const tours = [
  {
    id: 'tour-01',
    name: 'Hành trình di sản Sa Pa',
    duration: '3 ngày 2 đêm',
    price: 3200000,
    image: 'https://images.unsplash.com/photo-1543739446-402a5d211830?auto=format&fit=crop&q=80&w=1200',
    features: ['Trekking bản Lao Chải', 'Tắm thuốc Dao Đỏ', 'Chinh phục Fansipan'],
    locations: ['Sa Pa', 'Tả Phìn', 'Y Linh Hồ'],
  },
  {
    id: 'tour-02',
    name: 'Cao nguyên đá Hà Giang',
    duration: '4 ngày 3 đêm',
    price: 4500000,
    image: 'https://images.unsplash.com/photo-1581335010972-e64e9a868469?auto=format&fit=crop&q=80&w=1200',
    features: ['Hà Giang Loop', 'Đèo Mã Pì Lèng', 'Chèo thuyền sông Nho Quế'],
    locations: ['Đồng Văn', 'Mèo Vạc', 'Yên Minh'],
  },
];
