import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '@/src/components/layout/AppLayout';
import Home from '@/src/pages/Home';
import ScrollToTop from '@/src/components/utils/ScrollToTop';

// Lazy loading or direct imports - direct for now for performance in this environment
import EthnicDiscovery from '@/src/pages/EthnicDiscovery';
import EthnicDetail from '@/src/pages/EthnicDetail';
import Destinations from '@/src/pages/Destinations';
import DestinationDetail from '@/src/pages/DestinationDetail';
import Experiences from '@/src/pages/Experiences';
import ExperienceDetail from '@/src/pages/ExperienceDetail';
import Shop from '@/src/pages/Shop';
import ProductDetail from '@/src/pages/ProductDetail';
import Checkout from '@/src/pages/Checkout';
import Booking from '@/src/pages/Booking';
import TourDetail from '@/src/pages/TourDetail';
import BookingRequest from '@/src/pages/BookingRequest';
import Success from '@/src/pages/Success';
import Community from '@/src/pages/Community';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="ethnic" element={<EthnicDiscovery />} />
          <Route path="ethnic/:id" element={<EthnicDetail />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="destinations/:id" element={<DestinationDetail />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="experiences/:id" element={<ExperienceDetail />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ProductDetail />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="booking" element={<Booking />} />
          <Route path="booking/:id" element={<TourDetail />} />
          <Route path="booking-request/:type/:id" element={<BookingRequest />} />
          <Route path="community" element={<Community />} />
          <Route path="success" element={<Success />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

