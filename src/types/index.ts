export interface Product {
  id: string;
  name: string;
  category: 'mangotree' | 'citrus' | 'fresh' | 'special';
  categoryName: string;
  originalPrice: number;
  salePrice: number;
  discountRate: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  description: string;
  features: string[];
  imageUrl: string;
  additionalImages?: string[];
  deliveryInfo: string;
  storeUrl: string;
  isSoldOut?: boolean;
}

export interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  linkUrl: string;
  imageUrl: string;
  tag: string;
}

export interface B2BInquiryForm {
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  inquiryType: 'tree_landscaping' | 'gift_set' | 'b2b_wholesale' | 'farm_visit';
  quantity: string;
  budget?: string;
  message: string;
}
