import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, Search, Heart, Star, ArrowRight, Sparkles, Truck, Undo2, Shield } from "lucide-react";
import hero from "@/assets/hero.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KOLOR — Toko Pakaian Colorful Penuh Energi" },
      { name: "description", content: "KOLOR adalah toko pakaian colorful dengan koleksi streetwear, dress, dan sneakers vibrant untuk gaya berani setiap hari." },
      { property: "og:title", content: "KOLOR — Toko Pakaian Colorful" },
      { property: "og:description", content: "Koleksi streetwear & fashion vibrant. Hidupkan harimu dengan warna." },
    ],
  }),
  component: Index,
});

const products = [
  { id: 1, name: "Sunset Oversized Hoodie", price: "Rp 459.000", tag: "New", img: p1, tint: "from-[#ff6b35] to-[#f7931e]" },
  { id: 2, name: "Magenta Summer Dress", price: "Rp 389.000", tag: "Hot", img: p2, tint: "from-[#e84393] to-[#ff6b35]" },
  { id: 3, name: "Violet Bomber Jacket", price: "Rp 689.000", tag: "Limited", img: p3, tint: "from-[#6c5ce7] to-[#e84393]" },
  { id: 4, name: "Solar Graphic Tee", price: "Rp 229.000", tag: "Best", img: p4, tint: "from-[#f7931e] to-[#ff6b35]" },
  { id: 5, name: "Coral Wide Pants", price: "Rp 519.000", tag: "New", img: p5, tint: "from-[#e84393] to-[#f7931e]" },
  { id: 6, name: "Electric Lace Sneakers", price: "Rp 749.000", tag: "Drop", img: p6, tint: "from-[#6c5ce7] to-[#ff6b35]" },
];

const categories = [
  { name: "Streetwear", count: 48, color: "bg-[#ff6b35]" },
  { name: "Dresses", count: 32, color: "bg-[#e84393]" },
  { name: "Outerwear", count: 21, color: "bg-[#6c5ce7]" },
  { name: "Footwear", count: 27, color: "bg-[#f7931e]" },
];

function Index() {
  const [cart, setCart] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gradient-sunset inline-block" />
            <span className="font-display text-xl tracking-tight">KOLOR.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#shop" className="hover:text-primary transition">Shop</a>
            <a href="#collections" className="hover:text-secondary transition">Collections</a>
            <a href="#about" className="hover:text-accent transition">About</a>
            <a href="#journal" className="hover:text-primary transition">Journal</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-muted transition" aria-label="Search"><Search className="w-5 h-5" /></button>
            <button className="p-2 rounded-full hover:bg-muted transition" aria-label="Wishlist"><Heart className="w-5 h-5" /></button>
            <button
              onClick={() => setCart(c => c + 1)}
              className="relative inline-flex items-center gap-2 bg-ink text-cream px-4 py-2 rounded-full text-sm font-semibold hover:bg-gradient-sunset transition"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Cart</span>
              <span className="bg-cream text-ink rounded-full w-5 h-5 inline-flex items-center justify-center text-xs">{cart}</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#ff6b35] opacity-40 blur-3xl animate-blob" />
        <div className="absolute top-40 right-0 w-[28rem] h-[28rem] rounded-full bg-[#e84393] opacity-40 blur-3xl animate-blob" style={{animationDelay:"3s"}} />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-[#6c5ce7] opacity-30 blur-3xl animate-blob" style={{animationDelay:"6s"}} />

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-7">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-border text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-secondary" /> Drop musim panas 2026
            </span>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
              Pakai <span className="text-gradient-sunset">warna</span>,<br />
              hidupkan <span className="text-gradient-sunset">harimu</span>.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Koleksi pakaian colorful yang dibuat untuk yang berani tampil beda — streetwear, dress, dan sneakers dengan palet sunset.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#shop" className="group inline-flex items-center gap-2 bg-gradient-sunset text-cream px-7 py-4 rounded-full font-semibold shadow-soft hover:scale-[1.02] transition">
                Belanja sekarang <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="#collections" className="inline-flex items-center gap-2 bg-cream border-2 border-ink text-ink px-7 py-4 rounded-full font-semibold shadow-pop hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-none transition">
                Lihat koleksi
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div>
                <div className="font-display text-2xl">12k+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Happy fits</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-display text-2xl">4.9★</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Rating</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-display text-2xl">128</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Drops</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-4 bg-gradient-sunset rounded-[2.5rem] rotate-3" />
            <img
              src={hero}
              alt="Model wearing colorful streetwear"
              width={1024}
              height={1024}
              className="relative w-full aspect-square object-cover rounded-[2rem] shadow-pop border-4 border-ink"
            />
            <div className="absolute -bottom-6 -left-6 bg-cream border-2 border-ink rounded-2xl px-4 py-3 shadow-pop rotate-[-4deg]">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Featured</div>
              <div className="font-display text-lg">Sunset Drop 03</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#6c5ce7] text-cream rounded-full w-24 h-24 flex flex-col items-center justify-center font-display text-center rotate-12 shadow-pop">
              <span className="text-2xl">-30%</span>
              <span className="text-[10px] tracking-widest">SALE</span>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="bg-ink text-cream py-4 overflow-hidden border-y-2 border-ink">
          <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-2xl">
            {Array.from({length:2}).map((_,i)=>(
              <div key={i} className="flex gap-12 items-center">
                <span>✺ FREE SHIPPING DI ATAS Rp 500K</span>
                <span className="text-[#ff6b35]">✺</span>
                <span>NEW DROP TIAP JUMAT</span>
                <span className="text-[#e84393]">✺</span>
                <span>WEAR THE RAINBOW</span>
                <span className="text-[#6c5ce7]">✺</span>
                <span>30-DAY RETURNS</span>
                <span className="text-[#f7931e]">✺</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="collections" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-sm uppercase tracking-widest text-secondary font-bold mb-2">Kategori</div>
            <h2 className="font-display text-5xl">Jelajahi rak warna</h2>
          </div>
          <a href="#shop" className="hidden md:inline-flex items-center gap-2 font-semibold hover:text-primary transition">Semua <ArrowRight className="w-4 h-4" /></a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c,i)=>(
            <a key={c.name} href="#shop" className={`group relative ${c.color} text-cream rounded-3xl p-6 aspect-[4/5] flex flex-col justify-between overflow-hidden border-2 border-ink shadow-pop hover:-translate-y-1 transition`}>
              <span className="text-xs font-bold uppercase tracking-widest">0{i+1}</span>
              <div>
                <div className="font-display text-3xl leading-tight">{c.name}</div>
                <div className="text-sm opacity-90 mt-1">{c.count} item</div>
              </div>
              <ArrowRight className="absolute bottom-6 right-6 w-6 h-6 group-hover:translate-x-1 transition" />
            </a>
          ))}
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Drop terbaru</div>
            <h2 className="font-display text-5xl">Bestseller minggu ini</h2>
          </div>
          <div className="hidden md:flex gap-2">
            {["All","New","Trending","Sale"].map((t,i)=>(
              <button key={t} className={`px-4 py-2 rounded-full text-sm font-semibold border-2 border-ink ${i===0?"bg-ink text-cream":"bg-cream hover:bg-muted"}`}>{t}</button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p)=>(
            <article key={p.id} className="group bg-card rounded-3xl overflow-hidden border-2 border-ink shadow-pop hover:-translate-y-1 transition">
              <div className={`relative aspect-[4/5] bg-gradient-to-br ${p.tint} overflow-hidden`}>
                <img src={p.img} alt={p.name} width={768} height={896} loading="lazy" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition duration-500" />
                <span className="absolute top-4 left-4 bg-cream text-ink text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-ink">{p.tag}</span>
                <button aria-label="Wishlist" className="absolute top-4 right-4 w-10 h-10 bg-cream rounded-full inline-flex items-center justify-center border border-ink hover:bg-secondary hover:text-cream transition">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg leading-tight">{p.name}</h3>
                  <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3 fill-[#f7931e] text-[#f7931e]" /> 4.9 · 128 ulasan
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-base">{p.price}</div>
                  <button
                    onClick={()=>setCart(c=>c+1)}
                    className="mt-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary transition"
                  >
                    + Bag
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PERKS */}
      <section className="bg-ink text-cream py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: Truck, t:"Gratis ongkir", d:"Untuk pembelian di atas Rp 500K seluruh Indonesia." },
            { icon: Undo2, t:"Retur 30 hari", d:"Ganti ukuran atau warna tanpa ribet." },
            { icon: Shield, t:"Kualitas dijamin", d:"Bahan premium, jahitan rapi, warna tahan lama." },
          ].map(({icon:Icon,t,d})=>(
            <div key={t} className="flex gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-sunset inline-flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl mb-1">{t}</h3>
                <p className="text-cream/70 text-sm">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-3xl bg-gradient-warm border-2 border-ink shadow-pop" />
            <div className="aspect-[3/4] rounded-3xl bg-[#6c5ce7] border-2 border-ink shadow-pop mt-10" />
          </div>
        </div>
        <div className="space-y-6">
          <div className="text-sm uppercase tracking-widest text-accent font-bold">Tentang KOLOR</div>
          <h2 className="font-display text-5xl leading-tight">Warna bukan sekadar pilihan, tapi <span className="text-gradient-sunset">sikap</span>.</h2>
          <p className="text-muted-foreground text-lg">
            Kami percaya pakaian harusnya membuat kamu tersenyum tiap kali bercermin. Setiap koleksi KOLOR dirancang lokal di Bandung, dijahit dengan bahan ramah kulit, dan dicelup dengan pewarna sustainable.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[["100%","Lokal"],["28","Pengrajin"],["6","Kota"]].map(([n,l])=>(
              <div key={l} className="bg-cream border-2 border-ink rounded-2xl p-4 shadow-pop">
                <div className="font-display text-3xl text-gradient-sunset">{n}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="journal" className="px-6 pb-24">
        <div className="max-w-6xl mx-auto bg-gradient-sunset rounded-[2.5rem] p-10 md:p-16 border-2 border-ink shadow-pop text-cream relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-cream/20 rounded-full blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">Dapat akses early-drop & diskon 15%</h2>
              <p className="mt-3 text-cream/90 max-w-md">Masuk daftar warna kami. Spam? Nggak ada. Cuma kabar drop baru tiap Jumat.</p>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col sm:flex-row gap-3 bg-cream rounded-2xl p-2 border-2 border-ink">
              <input type="email" required placeholder="nama@email.com" className="flex-1 bg-transparent px-4 py-3 text-ink placeholder:text-muted-foreground focus:outline-none" />
              <button className="bg-ink text-cream px-6 py-3 rounded-xl font-semibold hover:bg-secondary transition">Daftar</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-ink">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gradient-sunset inline-block" />
            <span className="font-display text-xl">KOLOR.</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-secondary">TikTok</a>
            <a href="#" className="hover:text-accent">Bantuan</a>
            <a href="#" className="hover:text-primary">Privasi</a>
          </div>
          <div className="text-xs text-muted-foreground">© 2026 KOLOR. Wear the rainbow.</div>
        </div>
      </footer>
    </div>
  );
}
