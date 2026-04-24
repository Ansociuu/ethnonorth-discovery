import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '@/src/components/layout/AppLayout';
import Home from '@/src/pages/Home';

// Lazy loading or direct imports - direct for now for performance in this environment
import EthnicDiscovery from '@/src/pages/EthnicDiscovery';
import EthnicDetail from '@/src/pages/EthnicDetail';
import Destinations from '@/src/pages/Destinations';
import Experiences from '@/src/pages/Experiences';
import Shop from '@/src/pages/Shop';
import Booking from '@/src/pages/Booking';
import Community from '@/src/pages/Community';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="ethnic" element={<EthnicDiscovery />} />
          <Route path="ethnic/:id" element={<EthnicDetail />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="shop" element={<Shop />} />
          <Route path="booking" element={<Booking />} />
          <Route path="community" element={<Community />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

