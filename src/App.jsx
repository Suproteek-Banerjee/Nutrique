import { useMemo, useState } from 'react'
import {
  BadgePercent,
  Bike,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  CreditCard,
  CupSoda,
  Home,
  Leaf,
  LocateFixed,
  MapPin,
  Minus,
  Plus,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  UserRound,
  Utensils,
  Wheat,
  X,
} from 'lucide-react'
import './App.css'

const img = {
  hero: '/assets/crops/meal-kit-hero.png',
  calmFuel: '/assets/products/calmfuel-box.png',
  activeBite: '/assets/products/active-bite-thali.png',
  energyPlus: '/assets/products/energy-plus-combo.png',
  easyProtein: '/assets/products/easy-protein-meal.png',
  workPro: '/assets/products/work-pro-meal.png',
  smartProtein: '/assets/products/smart-protein-box.png',
  chocolate: '/assets/products/chocolate-delight.png',
  strawberry: '/assets/products/strawberry-protein.png',
  berryBlast: '/assets/products/berry-blast.png',
  greenCalm: '/assets/products/green-calm-bowl.png',
  appleWhisper: '/assets/products/apple-whisper-bowl.png',
  chocoCharge: '/assets/products/choco-charge-bowl.png',
  proteinYogurt: '/assets/products/protein-yogurt-bowl.png',
  berryYogurt: '/assets/products/berry-yogurt-bowl.png',
  honeyNut: '/assets/products/honey-nut-yogurt-bowl.png',
  mangoYogurt: '/assets/products/mango-yogurt-bowl.png',
  moodMuffin: '/assets/products/mood-muffin.png',
  datesCupcake: '/assets/products/dates-delight-cupcake.png',
  cocoaCup: '/assets/products/cocoa-clean-cup.png',
  app: '/assets/crops/app-order.png',
  lunch: '/assets/crops/lunch-bag.png',
  grandma: '/assets/crops/grandma-cook.png',
}

const pageConfig = {
  Dashboard: { title: 'Dashboard', icon: Home, category: 'All' },
  Veg: { title: 'Vegetarian Meals', icon: Leaf, category: 'Veg' },
  'Non-Veg': { title: 'Non-Vegetarian Meals', icon: Utensils, category: 'Non-Veg' },
  Smoothies: { title: 'Smoothies', icon: CupSoda, category: 'Smoothies' },
  Bowls: { title: 'Oatmeal Bowls', icon: Wheat, category: 'Bowls' },
  Yogurt: { title: 'Yogurt Bowls', icon: ShieldCheck, category: 'Yogurt' },
  Treats: { title: 'Health Treats', icon: Sparkles, category: 'Treats' },
  Plans: { title: 'Subscriptions', icon: CalendarCheck, category: 'All' },
}

const pages = Object.keys(pageConfig)

const products = [
  ['CalmFuel Box', 'Veg', 'Paneer, dal, rice, curd, carrot, broccoli', 'Paneer, dal, rice, curd, and greens for calmer workdays.', 540, 119, img.calmFuel, 'Popular', [28, 58, 18, 12]],
  ['Active Bite Thali', 'Veg', 'Roti, dal, seasonal sabzi, salad, lime', 'Roti, seasonal sabzi, dal, salad, and steady carbs.', 610, 129, img.activeBite, 'Fiber rich', [24, 72, 17, 14]],
  ['Energy Plus Combo', 'Veg', 'Paneer bites, rice, peas, broccoli, yogurt', 'Paneer bites, rice, vegetables, and cooling yogurt.', 585, 139, img.energyPlus, 'Desk fuel', [31, 62, 19, 13]],
  ['Easy Protein Meal', 'Non-Veg', 'Grilled chicken, beans, broccoli, carrots, grains', 'Grilled chicken, vegetables, grain base, and clean seasoning.', 650, 169, img.easyProtein, 'Lean', [45, 46, 20, 10]],
  ['Work Pro Meal', 'Non-Veg', 'Chicken curry, chapati, rice, salad, lime', 'Chicken curry, chapati, rice, salad, and lime freshness.', 710, 179, img.workPro, 'Office', [41, 72, 22, 9]],
  ['Smart Protein Box', 'Non-Veg', 'Chicken, grains, chickpeas, greens, tomatoes', 'Chicken, grains, chickpeas, greens, and crisp vegetables.', 690, 189, img.smartProtein, 'High protein', [52, 49, 21, 11]],
  ['Chocolate Delight', 'Smoothies', 'Cocoa, oats, milk protein, dates, chia', 'Cocoa, oats, protein, dates, and dessert-style richness.', 330, 159, img.chocolate, '20g protein', [22, 44, 9, 8]],
  ['Strawberry Protein', 'Smoothies', 'Strawberry, yogurt, protein, chia, oats', 'Strawberry yogurt, protein, chia, and mellow sweetness.', 310, 159, img.strawberry, 'Fresh', [24, 38, 8, 7]],
  ['Berry Blast', 'Smoothies', 'Mixed berries, oats, seeds, yogurt, almonds', 'Mixed berries, oats, seeds, yogurt, and a bright lift.', 295, 169, img.berryBlast, 'Antioxidant', [18, 42, 8, 9]],
  ['Green Calm Bowl', 'Bowls', 'Oats, banana, pistachio, seeds, green base', 'Oats, banana, pistachio, seeds, and a gentle green base.', 390, 199, img.greenCalm, 'Oatmeal', [20, 56, 12, 10]],
  ['Apple Whisper Bowl', 'Bowls', 'Apple, cinnamon, oats, almonds, yogurt', 'Apple, cinnamon, oats, almonds, yogurt, and slow energy.', 405, 209, img.appleWhisper, 'Oatmeal', [18, 60, 13, 9]],
  ['Choco Charge Bowl', 'Bowls', 'Cocoa oats, banana, peanuts, seeds, protein', 'Cocoa oats, banana, peanuts, seeds, and protein crunch.', 430, 219, img.chocoCharge, 'Oatmeal', [24, 58, 15, 9]],
  ['Protein Yogurt Bowl', 'Yogurt', 'Thick yogurt, whey, banana, granola, almonds', 'Thick yogurt, whey, banana, granola, seeds, and almonds.', 360, 189, img.proteinYogurt, 'Yogurt', [30, 38, 10, 6]],
  ['Berry Yogurt Bowl', 'Yogurt', 'Yogurt, berries, chia, oats, toasted nuts', 'Creamy yogurt layered with berries, chia, oats, and nuts.', 345, 199, img.berryYogurt, 'Yogurt', [22, 42, 11, 8]],
  ['Honey Nut Yogurt Bowl', 'Yogurt', 'Yogurt, honey, walnuts, almonds, cinnamon', 'Yogurt, honey, walnuts, almonds, seeds, and cinnamon.', 410, 209, img.honeyNut, 'Yogurt', [23, 44, 16, 7]],
  ['Mango Yogurt Bowl', 'Yogurt', 'Mango, yogurt, oats, cashew, pumpkin seeds', 'Mango, yogurt, oats, cashew, pumpkin seeds, and summer sweetness.', 375, 199, img.mangoYogurt, 'Yogurt', [21, 48, 10, 7]],
  ['Mood Muffin', 'Treats', 'Ragi, cocoa, dates, nuts, yogurt frosting', 'Ragi-cocoa muffin with dates, nuts, and a lighter bakery bite.', 240, 89, img.moodMuffin, 'Cupcake', [8, 34, 9, 5]],
  ['Dates Delight Cupcake', 'Treats', 'Dates, almond flour, spice, cocoa, oats', 'Date-sweetened cupcake with almond flour and warm spice.', 225, 95, img.datesCupcake, 'Cupcake', [7, 32, 8, 5]],
  ['Cocoa Clean Cup', 'Treats', 'Clean cocoa, oats, yogurt, nuts, dates', 'Clean cocoa, oats, yogurt frosting, and a soft finish.', 250, 99, img.cocoaCup, 'Cupcake', [9, 35, 8, 6]],
].map(([title, category, ingredients, description, calories, price, image, badge, macros]) => ({
  title,
  category,
  ingredients,
  description,
  calories,
  price,
  image,
  badge,
  macros: { protein: macros[0], carbs: macros[1], fats: macros[2], fiber: macros[3] },
}))

const offers = [
  ['20% OFF weekly', 'For Jabalpur office lunches', BadgePercent],
  ['Free first delivery', 'Civil Lines, Napier Town, Vijay Nagar', Bike],
  ['High protein picks', 'Meals for long desk hours', ShieldCheck],
]

function App() {
  const [page, setPage] = useState('Dashboard')
  const [cart, setCart] = useState([])
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selected, setSelected] = useState(null)
  const [profile, setProfile] = useState({ name: '', phone: '', email: '' })
  const [address, setAddress] = useState({ line: '', area: 'Civil Lines', note: '' })
  const [payment, setPayment] = useState('UPI')

  const subtotal = cart.reduce((total, item) => total + item.qty * item.price, 0)
  const cartCount = cart.reduce((total, item) => total + item.qty, 0)

  const pageProducts = useMemo(() => {
    const category = pageConfig[page]?.category || 'All'
    return category === 'All' ? products : products.filter((item) => item.category === category)
  }, [page])

  function add(product) {
    setCart((items) => {
      const match = items.find((item) => item.title === product.title)
      if (match) {
        return items.map((item) =>
          item.title === product.title ? { ...item, qty: item.qty + 1 } : item,
        )
      }
      return [...items, { ...product, qty: 1 }]
    })
  }

  function update(title, delta) {
    setCart((items) =>
      items
        .map((item) => (item.title === title ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0),
    )
  }

  function goCheckout() {
    setPage('Payment')
    setDrawerOpen(false)
  }

  return (
    <div className="app-shell">
      <aside className="sidebar glass-dark">
        <button className="brand" type="button" onClick={() => setPage('Dashboard')}>
          <span><Leaf size={22} /></span>
          <div>
            <strong>NUTRIQUE</strong>
            <small>Meal Kits</small>
          </div>
        </button>
        <nav>
          {pages.map((name) => {
            const Icon = pageConfig[name].icon
            return (
              <button className={page === name ? 'active' : ''} key={name} onClick={() => setPage(name)} type="button">
                <Icon size={19} /> {name}
              </button>
            )
          })}
        </nav>
        <div className="side-card">
          <img src={img.grandma} alt="Home cook preparing food" />
          <strong>Homemade in spirit</strong>
          <span>Fresh meals built around Indian comfort and better macros.</span>
        </div>
      </aside>

      <main className="workspace">
        <header className="topbar">
          <button className="location glass" type="button" onClick={() => setPage('Address')}>
            <MapPin size={18} /> Jabalpur <ChevronDown size={15} />
          </button>
          <label className="search glass">
            <Search size={18} />
            <input placeholder="Search paneer, protein bowl, smoothie..." />
          </label>
          <button className="cart-button glass" type="button" onClick={() => setDrawerOpen(true)}>
            <ShoppingCart size={20} />
            <span>{cartCount}</span>
          </button>
        </header>

        {page === 'Register' && (
          <Register profile={profile} setProfile={setProfile} next={() => setPage('Address')} />
        )}
        {page === 'Address' && (
          <Address address={address} setAddress={setAddress} next={() => setPage('Payment')} />
        )}
        {page === 'Payment' && (
          <Payment
            cart={cart}
            subtotal={subtotal}
            payment={payment}
            setPayment={setPayment}
            back={() => setPage('Address')}
          />
        )}
        {!['Register', 'Address', 'Payment'].includes(page) && (
          <>
            {page === 'Dashboard' && (
              <>
                <section className="hero-panel liquid">
                  <div className="hero-copy">
                    <span className="eyebrow"><Sparkles size={15} /> Live in Jabalpur</span>
                    <h1>Fuel Your Work. Nourish Your Life.</h1>
                    <p>Curated homestyle meal kits, smoothies, yogurt bowls, and clean treats.</p>
                    <div className="hero-actions">
                      <button type="button" onClick={() => setPage('Veg')}>Order Now</button>
                      <button type="button" onClick={() => setPage('Plans')}>View Plans</button>
                    </div>
                  </div>
                  <div className="hero-food">
                    <img src={img.hero} alt="Nutrique packaged meal kit with tray" />
                  </div>
                  <div className="quick-stat">
                    <strong>35 min</strong>
                    <span>average delivery</span>
                  </div>
                </section>
                <section className="offer-grid" aria-label="Offers">
                  {offers.map(([title, text, Icon]) => (
                    <article className="glass" key={title}>
                      <Icon size={21} />
                      <div>
                        <strong>{title}</strong>
                        <span>{text}</span>
                      </div>
                    </article>
                  ))}
                </section>
              </>
            )}
            {page === 'Plans' ? (
              <Plans setPage={setPage} />
            ) : (
              <AppContent
                page={page}
                products={pageProducts}
                cart={cart}
                cartCount={cartCount}
                subtotal={subtotal}
                update={update}
                add={add}
                openProduct={setSelected}
                checkout={goCheckout}
              />
            )}
          </>
        )}
      </main>

      <ProductDetail product={selected} add={add} close={() => setSelected(null)} />
      <CartDrawer
        open={drawerOpen}
        close={() => setDrawerOpen(false)}
        cart={cart}
        update={update}
        subtotal={subtotal}
        checkout={goCheckout}
      />
    </div>
  )
}

function AppContent({ page, products: items, cart, cartCount, subtotal, update, add, openProduct, checkout }) {
  return (
    <div className="content-grid">
      <section className="menu-panel glass" id="meals">
        <div className="panel-head">
          <div>
            <span className="kicker">{page === 'Dashboard' ? 'Menu' : 'Separate Page'}</span>
            <h2>{page === 'Dashboard' ? 'Today’s Meal Counter' : pageConfig[page].title}</h2>
          </div>
          <span className="open-chip"><Clock3 size={15} /> Open till 10 PM</span>
        </div>
        <div className="product-grid">
          {items.map((product) => (
            <Product key={product.title} product={product} add={add} openProduct={openProduct} />
          ))}
        </div>
      </section>
      <aside className="right-rail">
        <Basket cart={cart} cartCount={cartCount} subtotal={subtotal} update={update} checkout={checkout} />
        <section className="mini-detail glass">
          <span className="kicker">Selected Item</span>
          <img src={items[0]?.image || img.hero} alt="" />
          <strong>{items[0]?.title || 'Nutrique Meal'}</strong>
          <span>Click any menu card to see ingredients, macros, and calories.</span>
        </section>
      </aside>
    </div>
  )
}

function Product({ product, add, openProduct }) {
  return (
    <article className="product-card glass">
      <button className="image-button" type="button" onClick={() => openProduct(product)}>
        <img src={product.image} alt={product.title} />
      </button>
      <div>
        <span>{product.badge}</span>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="product-meta">
          <small>{product.calories} kcal</small>
          <strong>₹{product.price}</strong>
        </div>
        <div className="card-actions">
          <button type="button" onClick={() => openProduct(product)}>Details</button>
          <button type="button" onClick={() => add(product)}><Plus size={16} /> Add</button>
        </div>
      </div>
    </article>
  )
}

function ProductDetail({ product, add, close }) {
  if (!product) return null
  return (
    <div className="modal-backdrop" onClick={close}>
      <section className="product-modal glass" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={close}><X size={20} /></button>
        <img src={product.image} alt={product.title} />
        <div>
          <span className="kicker">{product.category}</span>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className="ingredients">
            <strong>Contents</strong>
            <span>{product.ingredients}</span>
          </div>
          <div className="macro-grid">
            <Macro label="Protein" value={product.macros.protein} />
            <Macro label="Carbs" value={product.macros.carbs} />
            <Macro label="Fats" value={product.macros.fats} />
            <Macro label="Fiber" value={product.macros.fiber} />
          </div>
          <div className="modal-buy">
            <strong>₹{product.price} · {product.calories} kcal</strong>
            <button type="button" onClick={() => add(product)}><Plus size={16} /> Add to cart</button>
          </div>
        </div>
      </section>
    </div>
  )
}

function Macro({ label, value }) {
  return (
    <div className="macro-card">
      <span>{label}</span>
      <strong>{value}g</strong>
      <div><i style={{ width: `${Math.min(value, 75)}%` }} /></div>
    </div>
  )
}

function Basket({ cart, cartCount, subtotal, update, checkout }) {
  return (
    <section className="basket-card glass">
      <div className="panel-head">
        <div>
          <span className="kicker">Cart</span>
          <h2>Your order</h2>
        </div>
        <span>{cartCount} items</span>
      </div>
      <CartPreview cart={cart} update={update} />
      <div className="basket-total">
        <span>Subtotal</span>
        <strong>₹{subtotal}</strong>
      </div>
      <button type="button" onClick={checkout}>Checkout</button>
    </section>
  )
}

function CartPreview({ cart, update }) {
  if (!cart.length) return <p className="empty">Add a CalmFuel Box to start your Jabalpur order.</p>
  return (
    <div className="cart-list">
      {cart.map((item) => (
        <div className="cart-line" key={item.title}>
          <img src={item.image} alt="" />
          <div>
            <strong>{item.title}</strong>
            <span>₹{item.price}</span>
          </div>
          <div className="qty">
            <button type="button" onClick={() => update(item.title, -1)}><Minus size={13} /></button>
            <span>{item.qty}</span>
            <button type="button" onClick={() => update(item.title, 1)}><Plus size={13} /></button>
          </div>
        </div>
      ))}
    </div>
  )
}

function Register({ profile, setProfile, next }) {
  return (
    <section className="form-page glass liquid">
      <div>
        <span className="eyebrow"><UserRound size={15} /> Simple registration</span>
        <h1>Create your Nutrique profile</h1>
        <p>Just enough information to personalize your Jabalpur meal delivery demo.</p>
      </div>
      <form onSubmit={(event) => { event.preventDefault(); next() }}>
        <Field label="Full name" value={profile.name} onChange={(value) => setProfile({ ...profile, name: value })} required />
        <Field label="Phone" value={profile.phone} onChange={(value) => setProfile({ ...profile, phone: value })} required />
        <Field label="Email" value={profile.email} onChange={(value) => setProfile({ ...profile, email: value })} type="email" />
        <button type="submit">Continue to address</button>
      </form>
    </section>
  )
}

function Address({ address, setAddress, next }) {
  return (
    <section className="form-page glass liquid">
      <div>
        <span className="eyebrow"><LocateFixed size={15} /> Delivery address</span>
        <h1>Where should we send it?</h1>
        <p>Set your Jabalpur delivery details before payment.</p>
      </div>
      <form onSubmit={(event) => { event.preventDefault(); next() }}>
        <Field label="House / office address" value={address.line} onChange={(value) => setAddress({ ...address, line: value })} required />
        <label>
          Area
          <select value={address.area} onChange={(event) => setAddress({ ...address, area: event.target.value })}>
            <option>Civil Lines</option>
            <option>Napier Town</option>
            <option>Vijay Nagar</option>
            <option>Madan Mahal</option>
            <option>Gwarighat Road</option>
          </select>
        </label>
        <Field label="Delivery note" value={address.note} onChange={(value) => setAddress({ ...address, note: value })} />
        <button type="submit">Continue to payment</button>
      </form>
    </section>
  )
}

function Payment({ cart, subtotal, payment, setPayment, back }) {
  const methods = ['UPI', 'Credit Card', 'Debit Card', 'Cash on Delivery']
  const [details, setDetails] = useState({ upi: '', creditCard: '', debitCard: '', expiry: '' })
  const cardKey = payment === 'Credit Card' ? 'creditCard' : 'debitCard'
  return (
    <section className="payment-page">
      <div className="payment-main glass liquid">
        <span className="eyebrow"><CreditCard size={15} /> Payment</span>
        <h1>Review and pay</h1>
        <p>This is a prototype payment screen. No real payment is collected.</p>
        <div className="payment-methods">
          {methods.map((method) => (
            <button className={payment === method ? 'active' : ''} type="button" key={method} onClick={() => setPayment(method)}>
              {method}
            </button>
          ))}
        </div>
        {(payment === 'Credit Card' || payment === 'Debit Card') && (
          <div className="card-grid">
            <Field label={`${payment} number`} value={details[cardKey]} onChange={(value) => setDetails({ ...details, [cardKey]: value })} placeholder="4242 4242 4242 4242" />
            <Field label="Expiry" value={details.expiry} onChange={(value) => setDetails({ ...details, expiry: value })} placeholder="MM/YY" />
          </div>
        )}
        {payment === 'UPI' && <Field label="UPI ID" value={details.upi} onChange={(value) => setDetails({ ...details, upi: value })} placeholder="name@upi" />}
        <div className="payment-actions">
          <button type="button" onClick={back}>Back</button>
          <button type="button"><CheckCircle2 size={18} /> Confirm demo order</button>
        </div>
      </div>
      <aside className="payment-summary glass">
        <h2>Order Summary</h2>
        <CartPreview cart={cart} update={() => {}} />
        <div className="basket-total">
          <span>Total</span>
          <strong>₹{subtotal}</strong>
        </div>
      </aside>
    </section>
  )
}

function Field({ label, value, onChange, type = 'text', required = false, placeholder = '' }) {
  return (
    <label>
      {label}
      <input value={value} onChange={(event) => onChange(event.target.value)} type={type} required={required} placeholder={placeholder} />
    </label>
  )
}

function Plans({ setPage }) {
  return (
    <section className="plans-page glass liquid">
      <span className="eyebrow"><CalendarCheck size={15} /> Subscribe and save</span>
      <h1>Plans that feel like food delivery, not homework.</h1>
      <div className="plan-grid">
        {[
          ['Weekly Plan', '5 meals', '20% OFF', '₹549'],
          ['Monthly Plan', '24 meals', 'Best Value', '₹2399'],
        ].map(([name, meals, tag, price]) => (
          <article className="plan-tile glass" key={name}>
            <span>{tag}</span>
            <h2>{name}</h2>
            <p>{meals} with flexible veg, non-veg, bowls, and smoothies.</p>
            <strong>{price}</strong>
            <button type="button" onClick={() => setPage('Register')}>Start plan</button>
          </article>
        ))}
      </div>
    </section>
  )
}

function CartDrawer({ open, close, cart, update, subtotal, checkout }) {
  return (
    <aside className={`drawer glass ${open ? 'open' : ''}`}>
      <div className="drawer-head">
        <div>
          <strong>Nutrique Cart</strong>
          <span>Delivery to Jabalpur</span>
        </div>
        <button type="button" onClick={close} aria-label="Close cart"><X size={20} /></button>
      </div>
      <CartPreview cart={cart} update={update} />
      <div className="drawer-foot">
        <div>
          <span>Total</span>
          <strong>₹{subtotal}</strong>
        </div>
        <button type="button" onClick={checkout}>Checkout</button>
      </div>
    </aside>
  )
}

export default App
