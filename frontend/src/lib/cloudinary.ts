import { Cloudinary } from "@cloudinary/url-gen";

// Khởi tạo Cloudinary
// Bạn hãy thay 'your_cloud_name' bằng Cloud Name thực tế trong Dashboard của bạn
export const cld = new Cloudinary({
  cloud: {
    cloudName: "drvjjrsah"
  }
});

/**
 * Hàm hỗ trợ lấy URL ảnh đã được tối ưu hóa
 * @param publicId ID của ảnh trên Cloudinary
 * @returns Cloudinary Image object
 */
export const getCldImage = (publicId: string) => {
  return cld.image(publicId)
    .format('auto')   // Tự động chọn định dạng tốt nhất (webp, avif...)
    .quality('auto'); // Tự động nén ảnh mà không làm giảm chất lượng rõ rệt
};
