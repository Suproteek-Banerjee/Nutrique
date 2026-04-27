import { useMemo, useState } from 'react'
import {
  BadgePercent,
  Beef,
  Bike,
  CalendarCheck,
  ChevronDown,
  Clock3,
  Heart,
  Home,
  Leaf,
  MapPin,
  Minus,
  PackageCheck,
  Plus,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  UserRoundCheck,
  Wheat,
  X,
  Zap,
} from 'lucide-react'
import './App.css'

const assets = {
  hero: '/assets/brand-hero.png',
  thankYou: '/assets/brand-thank-you.png',
  vision: '/assets/vision-collage.png',
  finance: '/assets/financial-projection.png',
  pricing: '/assets/pricing-smart.png',
  how: '/assets/how-it-works.png',
  grandmother: '/assets/grandmother-made.png',
  balanced: '/assets/balanced-meal.png',
  menu: '/assets/menu-categories.png',
  problem: '/assets/problem-solution.png',
  team: '/assets/team-brand.png',
  pillars: '/assets/nutrition-pillars.png',
}

const assetCatalog = [
  ['Meals', assets.menu],
  ['Smoothies', assets.vision],
  ['Bowls', assets.balanced],
  ['Branding', assets.hero],
  ['Backgrounds', assets.grandmother],
  ['Pricing', assets.pricing],
  ['App flow', assets.how],
  ['Nutrition', assets.pillars],
  ['Problem', assets.problem],
  ['Team', assets.team],
  ['Growth', assets.finance],
  ['Thanks', assets.thankYou],
]

const categories = ['Veg', 'Non-Veg', 'Diet', 'Bowls', 'Smoothies', 'Treats']

const products = [
  {
    title: 'CalmFuel Box',
    category: 'Veg',
    tag: 'Vegetarian',
    description: 'Paneer, dal, rice, vegetables, curd, and a slow-energy finish.',
    calories: 540,
    price: 119,
    image: assets.menu,
    icon: Leaf,
  },
  {
    title: 'Active Bite Thali',
    category: 'Veg',
    tag: 'High fiber',
    description: 'Homestyle roti, seasonal sabzi, dal, salad, and balanced carbs.',
    calories: 610,
    price: 129,
    image: assets.hero,
    icon: Wheat,
  },
  {
    title: 'Energy Plus Combo',
    category: 'Veg',
    tag: 'Desk work',
    description: 'Protein-rich paneer bites, rice, greens, and cooling yogurt.',
    calories: 585,
    price: 139,
    image: assets.balanced,
    icon: Zap,
  },
  {
    title: 'Easy Protein Meal',
    category: 'Non-Veg',
    tag: 'Lean protein',
    description: 'Grilled chicken, rice, dal, salad, and comfort-style curry.',
    calories: 650,
    price: 169,
    image: assets.balanced,
    icon: Beef,
  },
  {
    title: 'Work Pro Meal',
    category: 'Non-Veg',
    tag: 'Office fuel',
    description: 'Chicken curry, chapati, rice, vegetables, and a fresh lime bite.',
    calories: 710,
    price: 179,
    image: assets.menu,
    icon: PackageCheck,
  },
  {
    title: 'Smart Protein Box',
    category: 'Non-Veg',
    tag: 'Training day',
    description: 'Chicken breast, chickpeas, greens, grains, and crisp vegetables.',
    calories: 690,
    price: 189,
    image: assets.pillars,
    icon: ShieldCheck,
  },
  {
    title: 'Chocolate Delight',
    category: 'Smoothies',
    tag: '20g protein',
    description: 'Cocoa, oats, milk protein, dates, and a clean dessert feel.',
    calories: 330,
    price: 159,
    image: assets.vision,
    icon: Sparkles,
  },
  {
    title: 'Strawberry Protein',
    category: 'Smoothies',
    tag: 'Post workout',
    description: 'Strawberry, yogurt, protein, chia, and mellow natural sweetness.',
    calories: 310,
    price: 159,
    image: assets.menu,
    icon: Heart,
  },
  {
    title: 'Berry Blast',
    category: 'Smoothies',
    tag: 'Antioxidant',
    description: 'Mixed berries, oats, seeds, yogurt, and a bright morning lift.',
    calories: 295,
    price: 169,
    image: assets.vision,
    icon: Zap,
  },
  {
    title: 'Green Calm Bowl',
    category: 'Bowls',
    tag: 'Oatmeal',
    description: 'Oats, banana, pistachio, seeds, and a gentle green smoothie base.',
    calories: 390,
    price: 199,
    image: assets.balanced,
    icon: Leaf,
  },
  {
    title: 'Apple Whisper Bowl',
    category: 'Bowls',
    tag: 'Oatmeal',
    description: 'Apple, cinnamon, oats, almonds, yogurt, and slow-release energy.',
    calories: 405,
    price: 209,
    image: assets.pillars,
    icon: Wheat,
  },
  {
    title: 'Choco Charge Bowl',
    category: 'Bowls',
    tag: 'Oatmeal',
    description: 'Cocoa oats, banana, peanuts, seeds, and protein-rich crunch.',
    calories: 430,
    price: 219,
    image: assets.vision,
    icon: Zap,
  },
  {
    title: 'Protein Yogurt Bowl',
    category: 'Diet',
    tag: 'Yogurt bowl',
    description: 'Thick yogurt, whey, banana, granola, seeds, and almond crunch.',
    calories: 360,
    price: 189,
    image: assets.balanced,
    icon: ShieldCheck,
  },
  {
    title: 'Berry Yogurt Bowl',
    category: 'Diet',
    tag: 'Yogurt bowl',
    description: 'Creamy yogurt layered with berries, chia, oats, and toasted nuts.',
    calories: 345,
    price: 199,
    image: assets.vision,
    icon: Heart,
  },
  {
    title: 'Honey Nut Yogurt Bowl',
    category: 'Diet',
    tag: 'Yogurt bowl',
    description: 'Yogurt, honey, walnuts, almonds, seeds, and light cinnamon.',
    calories: 410,
    price: 209,
    image: assets.pillars,
    icon: Sparkles,
  },
  {
    title: 'Mango Yogurt Bowl',
    category: 'Diet',
    tag: 'Yogurt bowl',
    description: 'Mango, yogurt, oats, cashew, pumpkin seeds, and summer sweetness.',
    calories: 375,
    price: 199,
    image: assets.vision,
    icon: Leaf,
  },
  {
    title: 'Mood Muffin',
    category: 'Treats',
    tag: 'Cupcake',
    description: 'Ragi-cocoa muffin with dates, nuts, and a lighter bakery bite.',
    calories: 240,
    price: 89,
    image: assets.thankYou,
    icon: Heart,
  },
  {
    title: 'Dates Delight Cupcake',
    category: 'Treats',
    tag: 'Cupcake',
    description: 'Date-sweetened cupcake with almond flour and warm spice notes.',
    calories: 225,
    price: 95,
    image: assets.grandmother,
    icon: Sparkles,
  },
  {
    title: 'Cocoa Clean Cup',
    category: 'Treats',
    tag: 'Cupcake',
    description: 'Clean cocoa, oats, yogurt frosting, and a soft chocolate finish.',
    calories: 250,
    price: 99,
    image: assets.vision,
    icon: Zap,
  },
]

const offers = [
  ['Flat 20% OFF', 'Weekly plans for office teams', assets.pricing, BadgePercent],
  ['Free Delivery', 'First order in your area', assets.how, Bike],
  ['High Protein Meals', 'Built for working professionals', assets.balanced, ShieldCheck],
  ['Subscribe & Save', 'Fresh boxes all week', assets.finance, CalendarCheck],
]

const features = [
  [UserRoundCheck, 'Job-Based Nutrition', 'Meals mapped for hard work, desk work, and special care.'],
  [Home, 'Homemade with Care', 'Prepared with traditional recipes and familiar comfort.'],
  [Wheat, 'Balanced Diet', 'Protein, carbs, fats, and fiber designed into every box.'],
  [ShieldCheck, 'Hygienic & Fresh', 'Clean prep, reliable packaging, and fresh daily delivery.'],
  [CalendarCheck, 'Subscription Friendly', 'Daily, weekly, and monthly ordering without friction.'],
]

const plans = [
  ['Weekly Plan', '5 meals', '20% OFF', 'Perfect for work weeks', 549],
  ['Monthly Plan', '24 meals', 'Best Value', 'Save more with recurring delivery', 2399],
]

function App() {
  const [activeCategory, setActiveCategory] = useState('Veg')
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  const visibleProducts = useMemo(
    () => products.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  function addToCart(product) {
    setCart((items) => {
      const exists = items.find((item) => item.title === product.title)
      if (exists) {
        return items.map((item) =>
          item.title === product.title ? { ...item, qty: item.qty + 1 } : item,
        )
      }
      return [...items, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  function updateQty(title, delta) {
    setCart((items) =>
      items
        .map((item) => (item.title === title ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0),
    )
  }

  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#top" aria-label="Nutrique home">
          <span className="brand-mark"><Leaf size={22} /></span>
          <span>
            <strong>NUTRIQUE</strong>
            <small>Meal Kits</small>
          </span>
        </a>
        <button className="location" type="button">
          <MapPin size={18} /> Koramangala <ChevronDown size={16} />
        </button>
        <label className="search">
          <Search size={18} />
          <input placeholder="Search meals, bowls, smoothies..." />
        </label>
        <button className="cart-button" type="button" onClick={() => setCartOpen(true)}>
          <ShoppingCart size={20} />
          <span>{cartCount}</span>
        </button>
      </nav>

      <section className="hero-section" id="top">
        <img src={assets.hero} alt="Nutrique meal kit with homestyle Indian meal" />
        <div className="hero-overlay" />
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={16} /> Healthy. Homemade. Heartfelt.</span>
          <h1>Fuel Your Work. Nourish Your Life.</h1>
          <p>
            Premium meal kits, smoothies, bowls, and clean treats for busy Indian professionals.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="primary-action">Order Now</a>
            <a href="#plans" className="secondary-action">View Plans</a>
          </div>
        </div>
        <div className="hero-panel">
          <strong>From ₹89</strong>
          <span>Daily fresh meals in 35 mins</span>
        </div>
      </section>

      <section className="offers" aria-label="Dynamic offers">
        {offers.map(([title, text, image, Icon]) => (
          <article className="offer-card" key={title}>
            <img src={image} alt="" />
            <div>
              <Icon size={22} />
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="split-story">
        <div>
          <span className="eyebrow"><Clock3 size={16} /> Fast commerce, real nutrition</span>
          <h2>Healthy food that behaves like your favorite delivery app.</h2>
          <p>
            Nutrique blends DoorDash-style speed, Instamart-style convenience, and combo-led food
            offers with a warm homemade identity from the deck.
          </p>
        </div>
        <img src={assets.problem} alt="Nutrique problem and healthier meal solution" />
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading">
          <span className="eyebrow"><Leaf size={16} /> Extracted menu system</span>
          <h2>Choose your Nutrique box</h2>
          <p>Vegetarian, non-vegetarian, smoothies, oatmeal bowls, yogurt bowls, and health treats.</p>
        </div>
        <div className="tabs" role="tablist" aria-label="Meal categories">
          {categories.map((category) => (
            <button
              className={activeCategory === category ? 'active' : ''}
              key={category}
              onClick={() => setActiveCategory(category)}
              role="tab"
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.title} product={product} onAdd={addToCart} />
          ))}
        </div>
      </section>

      <section className="nutrition-band">
        <img src={assets.balanced} alt="Balanced Nutrique meal and macro nutrition" />
        <div>
          <span className="eyebrow"><Star size={16} /> Balanced by design</span>
          <h2>Job-based nutrition for real workdays.</h2>
          <p>
            The menu keeps calories practical, protein visible, and ingredients familiar: rice,
            roti, paneer, chicken, yogurt, fruit, nuts, oats, and clean dessert options.
          </p>
          <div className="macro-row">
            <span>30% protein</span>
            <span>40% carbs</span>
            <span>20% fats</span>
            <span>10% fiber</span>
          </div>
        </div>
      </section>

      <section className="features">
        {features.map(([Icon, title, text]) => (
          <article key={title}>
            <Icon size={26} />
            <strong>{title}</strong>
            <span>{text}</span>
          </article>
        ))}
      </section>

      <section className="plans" id="plans">
        <div className="section-heading">
          <span className="eyebrow"><CalendarCheck size={16} /> Subscription UI</span>
          <h2>Plans built for repeat ordering</h2>
        </div>
        <div className="plan-grid">
          {plans.map(([title, meals, badge, text, price]) => (
            <article className="plan-card" key={title}>
              <span className={badge === 'Best Value' ? 'best badge' : 'badge'}>{badge}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <strong>₹{price}</strong>
              <small>{meals} included</small>
              <button type="button" onClick={() => setCartOpen(true)}>Start plan</button>
            </article>
          ))}
        </div>
        <img src={assets.pricing} alt="Nutrique smart pricing and unit economics" />
      </section>

      <section className="care-section">
        <img src={assets.grandmother} alt="Grandmother preparing Nutrique homemade meals" />
        <div>
          <span className="eyebrow"><Home size={16} /> Slightly Indian, deeply homemade</span>
          <h2>Made with love by experienced home cooks.</h2>
          <p>
            The brand story stays visible in the app: care, transparency, elder employment, and
            food that feels prepared for a family member.
          </p>
        </div>
      </section>

      <section className="app-showcase">
        <img src={assets.how} alt="Nutrique app ordering workflow" />
        <img src={assets.pillars} alt="Nutrique nutrition pillars" />
      </section>

      <section className="asset-wall">
        <div className="section-heading">
          <span className="eyebrow"><PackageCheck size={16} /> All assets scanned and used</span>
          <h2>Visual system mapped across the prototype</h2>
        </div>
        <div className="asset-grid">
          {assetCatalog.map(([label, image]) => (
            <figure key={label}>
              <img src={image} alt={`${label} visual asset`} />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer>
        <img src={assets.thankYou} alt="Nutrique thank you brand slide" />
        <div>
          <strong>NUTRIQUE Meal Kits</strong>
          <span>Real food. Real people. Real impact.</span>
        </div>
      </footer>

      <CartDrawer
        cart={cart}
        cartOpen={cartOpen}
        cartTotal={cartTotal}
        updateQty={updateQty}
        close={() => setCartOpen(false)}
      />

      <div className="mobile-order-bar">
        <span>{cartCount || 1} item ready</span>
        <button type="button" onClick={() => setCartOpen(true)}>
          View cart · ₹{cartTotal || 119}
        </button>
      </div>
    </main>
  )
}

function ProductCard({ product, onAdd }) {
  const Icon = product.icon
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        <span>{product.tag}</span>
      </div>
      <div className="product-body">
        <div className="product-title">
          <Icon size={19} />
          <h3>{product.title}</h3>
        </div>
        <p>{product.description}</p>
        <div className="product-meta">
          <span>{product.calories} kcal</span>
          <strong>₹{product.price}</strong>
        </div>
        <button type="button" onClick={() => onAdd(product)}>
          <Plus size={17} /> Add to Cart
        </button>
      </div>
    </article>
  )
}

function CartDrawer({ cart, cartOpen, cartTotal, updateQty, close }) {
  return (
    <aside className={`cart-drawer ${cartOpen ? 'open' : ''}`} aria-label="Cart drawer">
      <div className="cart-head">
        <div>
          <strong>Your Nutrique Cart</strong>
          <span>{cart.length ? 'Freshly packed, delivered today' : 'Add meals to begin'}</span>
        </div>
        <button type="button" onClick={close} aria-label="Close cart">
          <X size={20} />
        </button>
      </div>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is waiting for a CalmFuel Box.</p>
        ) : (
          cart.map((item) => (
            <div className="cart-row" key={item.title}>
              <img src={item.image} alt="" />
              <div>
                <strong>{item.title}</strong>
                <span>₹{item.price} · {item.calories} kcal</span>
              </div>
              <div className="qty">
                <button type="button" onClick={() => updateQty(item.title, -1)}><Minus size={14} /></button>
                <span>{item.qty}</span>
                <button type="button" onClick={() => updateQty(item.title, 1)}><Plus size={14} /></button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-foot">
        <div>
          <span>Subtotal</span>
          <strong>₹{cartTotal}</strong>
        </div>
        <small>Free delivery applied on your first order.</small>
        <button type="button">Checkout</button>
      </div>
    </aside>
  )
}

export default App
