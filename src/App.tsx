import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, Building2, User, ShoppingBag, Calendar, Wallet, Info } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

export default function App() {
  const [state, handleSubmit] = useForm('mojykyzy');
  const [showSuccess, setShowSuccess] = useState(false);

  const cutsOptions = [
    "Brisket", "Tri-tip", "Fillet", "Short Rib", "Flank", "Flat Iron", 
    "Rib-Eye", "Skirt", "Topside", "Silverside", "Picanha", "Knuckle", 
    "Sirloin", "Chuck", "Denver", "Rump Heart", "Mince", "Patties", 
    "Wors", "Fat", "Tallow", "Trim"
  ];

  // Sync Formspree success state with our custom success UI
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [state.succeeded]);

  const scrollToForm = () => {
    const formElement = document.getElementById('request-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full border border-gold/30 bg-neutral-900/50 p-12 rounded-lg backdrop-blur-sm shadow-2xl"
        >
          <div className="flex justify-center mb-6 text-gold">
            <CheckCircle2 size={64} strokeWidth={1} />
          </div>
          <h2 className="text-3xl font-serif text-gold mb-4 leading-tight">REQUEST RECEIVED</h2>
          <p className="text-neutral-400 font-sans leading-relaxed mb-8">
            Your request has been successfully submitted for review. Qualified buyers will be contacted directly via the information provided.
          </p>
          <button 
            onClick={() => setShowSuccess(false)}
            className="text-neutral-500 hover:text-gold transition-colors text-sm uppercase tracking-[0.2em] font-sans"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold/20 selection:text-gold font-sans overflow-x-hidden">
      {/* Background Subtle Accent */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 md:py-24">
        {/* Section 1: Hero */}
        <section className="text-center mb-32 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-gold/80 text-[10px] md:text-xs uppercase tracking-[0.4em] font-sans mb-8 border-b border-gold/30 pb-2">
              EST. PRIVATE RELEASE 2024
            </span>
            <h1 className="text-5xl md:text-8xl font-serif leading-none mb-8 text-neutral-50">
              LIMITED <br />
              <span className="italic">WAGYU</span> AVAILABLE
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 font-serif italic mb-12 max-w-2xl mx-auto">
              Private release for qualified buyers only.
            </p>
            
            <div className="max-w-lg mx-auto mb-12 space-y-4 text-neutral-300 leading-relaxed font-light">
              <p>Premium Wagyu cuts available in limited quantities.</p>
              <p>Restaurants, butchers, retailers and serious private buyers only.</p>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative px-10 py-5 overflow-hidden border border-gold/50 bg-transparent text-gold uppercase tracking-[0.2em] text-xs font-semibold hover:border-gold transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gold/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative flex items-center gap-2">
                Request Access <ChevronRight size={16} />
              </span>
            </button>
          </motion.div>
        </section>

        {/* Section 2: How It Works */}
        <section className="mb-32 md:mb-48">
          <div className="flex flex-col md:flex-row gap-12 md:gap-4 items-start">
            <div className="w-full md:w-1/3">
              <h2 className="text-xs uppercase tracking-[0.3em] font-sans text-neutral-500 mb-4 flex items-center gap-2">
                <ShieldCheck size={14} className="text-gold" />
                The Protocol
              </h2>
              <p className="text-3xl font-serif text-neutral-100">How it works</p>
            </div>
            
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { step: "01", label: "Submit Request", desc: "Provide your details and business profile for authentication." },
                { step: "02", label: "Inventory Review", desc: "Our team assesses available cuts against current demand." },
                { step: "03", label: "Qualification", desc: "Qualified buyers receive direct confirmation and next steps." },
                { step: "04", label: "Manual Confirmation", desc: "Orders are secured and confirmed through personal consultation." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 border border-neutral-800 bg-neutral-900/20 rounded-sm hover:border-neutral-700 transition-colors">
                  <span className="block text-gold/40 font-mono text-sm mb-4">{item.step}</span>
                  <h3 className="text-neutral-100 text-lg mb-2 font-serif">{item.label}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Request Form */}
        <section id="request-form" className="scroll-mt-12 mb-24">
          <div className="max-w-2xl mx-auto border border-neutral-800 bg-neutral-900/30 p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShoppingBag size={120} strokeWidth={0.5} className="text-gold" />
            </div>

            <div className="relative z-10">
              <header className="mb-12 text-center">
                <h2 className="text-3xl font-serif mb-4 text-neutral-100">Private Access Request</h2>
                <p className="text-neutral-500 text-sm">Please provide complete documentation for qualification.</p>
              </header>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Hidden field for subject line */}
                <input type="hidden" name="_subject" value="NEW WAGYU BUYER REQUEST" />

                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" size={16} />
                    <input required type="text" id="fullName" name="fullName" className="w-full bg-neutral-950 border border-neutral-800 px-10 py-3 text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-neutral-800" placeholder="John Doe" />
                  </div>
                  <ValidationError prefix="Full Name" field="fullName" errors={state.errors} className="text-gold text-[10px] uppercase tracking-wider mt-1" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="businessName" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">Business Name</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" size={16} />
                    <input required type="text" id="businessName" name="businessName" className="w-full bg-neutral-950 border border-neutral-800 px-10 py-3 text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-neutral-800" placeholder="Estate Gastronomy" />
                  </div>
                  <ValidationError prefix="Business Name" field="businessName" errors={state.errors} className="text-gold text-[10px] uppercase tracking-wider mt-1" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" size={16} />
                    <input required type="email" id="email" name="email" className="w-full bg-neutral-950 border border-neutral-800 px-10 py-3 text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-neutral-800" placeholder="contact@example.com" />
                  </div>
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-gold text-[10px] uppercase tracking-wider mt-1" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">Phone Number (Optional)</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600" size={16} />
                    <input type="tel" id="phone" name="phone" className="w-full bg-neutral-950 border border-neutral-800 px-10 py-3 text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-neutral-800" placeholder="+27 82 123 4567" />
                  </div>
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-gold text-[10px] uppercase tracking-wider mt-1" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="buyerType" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">Buyer Type</label>
                  <select required id="buyerType" name="buyerType" className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors cursor-pointer">
                    <option value="" disabled>Select Buyer Type</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Butcher">Butcher</option>
                    <option value="Retailer">Retailer</option>
                    <option value="Private Individual">Private Individual</option>
                  </select>
                  <ValidationError prefix="Buyer Type" field="buyerType" errors={state.errors} className="text-gold text-[10px] uppercase tracking-wider mt-1" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">Location (SA Province)</label>
                  <select required id="location" name="location" className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors cursor-pointer">
                    <option value="" disabled>Select Province</option>
                    <option value="Gauteng">Gauteng</option>
                    <option value="Western Cape">Western Cape</option>
                    <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                    <option value="Eastern Cape">Eastern Cape</option>
                    <option value="Free State">Free State</option>
                    <option value="Limpopo">Limpopo</option>
                    <option value="Mpumalanga">Mpumalanga</option>
                    <option value="North West">North West</option>
                    <option value="Northern Cape">Northern Cape</option>
                  </select>
                  <ValidationError prefix="Location" field="location" errors={state.errors} className="text-gold text-[10px] uppercase tracking-wider mt-1" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="marbleScore" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">Marble Score</label>
                  <select required id="marbleScore" name="marbleScore" className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors cursor-pointer">
                    <option value="" disabled>Select Score</option>
                    <option value="MS4/5">MS4/5</option>
                    <option value="MS6/7">MS6/7</option>
                    <option value="MS8/9">MS8/9</option>
                    <option value="MS10+">MS10+</option>
                  </select>
                  <ValidationError prefix="Marble Score" field="marbleScore" errors={state.errors} className="text-gold text-[10px] uppercase tracking-wider mt-1" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">Budget Range (ZAR)</label>
                  <select required id="budget" name="budget" className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors cursor-pointer">
                    <option value="" disabled>Select Range</option>
                    <option value="Under R5,000">Under R5,000</option>
                    <option value="R5,000 – R10,000">R5,000 – R10,000</option>
                    <option value="R10,000 – R25,000">R10,000 – R25,000</option>
                    <option value="R25,000 – R50,000">R25,000 – R50,000</option>
                    <option value="R50,000+">R50,000+</option>
                  </select>
                  <ValidationError prefix="Budget" field="budget" errors={state.errors} className="text-gold text-[10px] uppercase tracking-wider mt-1" />
                </div>

                <div className="space-y-4 md:col-span-2">
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">Cuts Interested In (Select multiple)</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-4 border border-neutral-800 bg-neutral-950/50 rounded-sm">
                    {cutsOptions.map((cut) => (
                      <label key={cut} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" name="cuts" value={cut} className="accent-gold w-4 h-4" />
                        <span className="text-[11px] text-neutral-400 group-hover:text-neutral-200 transition-colors">{cut}</span>
                      </label>
                    ))}
                  </div>
                  <ValidationError prefix="Cuts" field="cuts" errors={state.errors} className="text-gold text-[10px] uppercase tracking-wider mt-1" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="quantity" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">Quantity Needed</label>
                  <input required type="text" id="quantity" name="quantity" className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-neutral-800" placeholder="e.g. 10kg or 2 Primal Cuts" />
                  <ValidationError prefix="Quantity" field="quantity" errors={state.errors} className="text-gold text-[10px] uppercase tracking-wider mt-1" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="whenNeeded" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">When Needed</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 pointer-events-none" size={16} />
                    <input 
                      required 
                      type="date" 
                      id="whenNeeded" 
                      name="whenNeeded" 
                      className="w-full bg-neutral-950 border border-neutral-800 px-10 py-3 text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors [color-scheme:dark] cursor-pointer" 
                    />
                  </div>
                  <ValidationError prefix="Timeline" field="whenNeeded" errors={state.errors} className="text-gold text-[10px] uppercase tracking-wider mt-1" />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="readyToBuy" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">Ready to buy within 7 days?</label>
                  <select required id="readyToBuy" name="readyToBuy" className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors cursor-pointer">
                    <option value="" disabled>Please select</option>
                    <option value="Yes">Yes, confirmed</option>
                    <option value="No">No, exploring availability</option>
                  </select>
                  <ValidationError prefix="Readiness" field="readyToBuy" errors={state.errors} className="text-gold text-[10px] uppercase tracking-wider mt-1" />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="notes" className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">Additional Notes</label>
                  <textarea id="notes" name="notes" rows={4} className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-neutral-300 focus:outline-none focus:border-gold/50 transition-colors placeholder:text-neutral-800 resize-none" placeholder="Special requirements, specific delivery schedules, etc."></textarea>
                  <ValidationError prefix="Notes" field="notes" errors={state.errors} className="text-gold text-[10px] uppercase tracking-wider mt-1" />
                </div>

                <div className="md:col-span-2 mt-8 space-y-4">
                  <div className="p-6 border border-gold/20 bg-gold/5 rounded-sm">
                    <div className="flex items-start gap-4">
                      <ShoppingBag className="text-gold shrink-0 mt-1" size={20} />
                      <div className="space-y-3">
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">Delivery Support</h4>
                        <p className="text-sm text-neutral-100 font-serif leading-relaxed italic">
                          Delivery, collection, and freight assistance can be arranged depending on order size, destination, and availability.
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-light translate-y-1">
                          Transport timelines, cold-chain handling, and regional delivery options are confirmed during review.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border border-neutral-800 bg-neutral-900/20 rounded-sm">
                    <div className="flex items-start gap-4">
                      <Info className="text-gold shrink-0 mt-1" size={20} />
                      <div className="space-y-3">
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500">Bulk Purchase Notice</h4>
                        <p className="text-sm text-neutral-100 font-serif leading-relaxed italic">
                          This offering is for bulk orders, food service supply, wholesale buyers, and whole primal cuts. Not intended for single steak purchases or small retail quantities.
                        </p>
                        <div className="space-y-1 pt-1">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">
                            Only serious buyers with confirmed intent to purchase will be reviewed.
                          </p>
                          <p className="text-[10px] uppercase tracking-[0.1em] text-neutral-600 font-light italic">
                            Final pricing may vary based on cut selection, quantity, destination, and logistics requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 mt-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input required type="checkbox" className="mt-1 accent-gold" />
                    <span className="text-xs text-neutral-500 font-light leading-relaxed group-hover:text-neutral-400 transition-colors">
                      I understand that submission of this form is a request for access and does not constitute an order confirmation or guarantee of availability.
                    </span>
                  </label>
                </div>

                <div className="md:col-span-2 pt-6">
                  <button 
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-gold disabled:bg-neutral-800 disabled:text-neutral-500 text-black py-4 px-8 uppercase font-bold text-xs tracking-[0.3em] hover:bg-neutral-100 transition-all active:scale-[0.98] duration-300 flex items-center justify-center gap-2"
                  >
                    {state.submitting ? (
                      <span className="flex items-center gap-2 text-black">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full"
                        />
                        Processing Protocol...
                      </span>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                  <ValidationError errors={state.errors} className="text-gold text-xs italic mt-4 text-center block font-serif" />
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="text-center py-12 border-t border-white/5 opacity-40">
          <p className="text-[10px] uppercase tracking-[0.4em] font-sans">
            &copy; 2024 WAGYU PRIVATE RESERVE. ALL RIGHTS PROTECTED.
          </p>
        </footer>
      </main>
    </div>
  );
}

