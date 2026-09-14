'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="nav-container" style={{ height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px' }}>
        <div style={{ maxWidth: 1024, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ 
              width: 36, 
              height: 36, 
              background: '#0071e3', 
              borderRadius: 10, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              padding: 6
            }}>
              <img 
                src="http://ugandanmenus.com/wp-content/uploads/2026/02/cropped-UgandanmenusQRcode.png" 
                alt="UgandanMenus" 
                width={24} 
                height={24}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <span className="logo-text">UgandanMenus</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <a href="#features" className="nav-link">Features</a>
            <a href="#how" className="nav-link">How It Works</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="/login" className="nav-link" style={{ fontWeight: 500 }}>Sign In</a>
            <a href="/register" className="btn-apple" style={{ padding: '8px 16px', fontSize: 12 }}>Create Account</a>
          </div>
          
          {/* Mobile Hamburger */}
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
        <a href="#how" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
        <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        <a href="/login" onClick={() => setMobileMenuOpen(false)}>Sign In</a>
        <a href="/register" className="btn-apple" style={{ textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>Create Account</a>
      </div>

      <main>
        {/* Hero Section */}
        <section style={{ 
          padding: '160px 24px 120px', 
          textAlign: 'center',
          background: '#fff',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{ maxWidth: 820, margin: '0 auto' }}>
            <div className="label" style={{ marginBottom: 16, color: '#0071e3' }}>
              Introducing UgandanMenus
            </div>
            <h1 className="headline" style={{ marginBottom: 24 }}>
              Smart QR Menus for
              <br />
              Modern Restaurants
            </h1>
            <p className="subhead" style={{ maxWidth: 600, margin: '0 auto 40px', color: '#6e6e73' }}>
              Host your menu online. Customers scan a QR code and instantly access a beautiful, mobile-optimized menu. No app needed.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/message/TSNEQC42LLOQA1" className="btn-apple" style={{ padding: '16px 32px', fontSize: 17 }}>
                WhatsApp Us
              </a>
              <a href="#pricing" className="btn-apple-outline" style={{ padding: '16px 32px', fontSize: 17 }}>
                View Pricing
              </a>
            </div>
            
            {/* QR Preview */}
            <div style={{ 
              marginTop: 80, 
              position: 'relative',
              display: 'inline-block'
            }}>
              <div style={{
                background: '#f5f5f7',
                borderRadius: 24,
                padding: '60px 80px',
                position: 'relative'
              }}>
                <div style={{
                  background: 'white',
                  borderRadius: 20,
                  padding: 32,
                  boxShadow: '0 4px 30px rgba(0,0,0,0.08)',
                  display: 'inline-block'
                }}>
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://ugandanmenus.com/tales-menu" 
                    alt="Scan to view Tales Lounge menu" 
                    width={180} 
                    height={180}
                    style={{ display: 'block' }}
                  />
                </div>
                <p style={{ 
                  marginTop: 20, 
                  fontSize: 14, 
                  color: '#6e6e73',
                  fontWeight: 500
                }}>
                  Scan to view sample menu
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section-gray" style={{ padding: '120px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <div className="label" style={{ marginBottom: 12 }}>Features</div>
              <h2 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.08, marginBottom: 16 }}>
                Everything you need.
              </h2>
              <p className="caption" style={{ color: '#6e6e73', maxWidth: 500, margin: '0 auto' }}>
                Simple, powerful features to modernize your restaurant&apos;s menu experience.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
              <div className="feature-card">
                <div className="icon-circle">
                  <span>📱</span>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>Instant QR Access</h3>
                <p style={{ color: '#6e6e73', fontSize: 15, lineHeight: 1.5 }}>Each menu gets its own dedicated page linked to a unique QR code. Customers scan and view instantly.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-circle">
                  <span>🔄</span>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>Real-Time Updates</h3>
                <p style={{ color: '#6e6e73', fontSize: 15, lineHeight: 1.5 }}>Edit prices or items anytime. Changes reflect instantly without reprinting menus or changing QR codes.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-circle">
                  <span>📲</span>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>Mobile Optimized</h3>
                <p style={{ color: '#6e6e73', fontSize: 15, lineHeight: 1.5 }}>Designed for seamless viewing on smartphones and tablets. Perfect for customers on the go.</p>
              </div>
              
              <div className="feature-card">
                <div className="icon-circle">
                  <span>🔒</span>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 12 }}>Secure Hosting</h3>
                <p style={{ color: '#6e6e73', fontSize: 15, lineHeight: 1.5 }}>Reliable cloud hosting ensures your menu is always available 24/7 with zero downtime.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how" style={{ padding: '120px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <div className="label" style={{ marginBottom: 12 }}>How It Works</div>
              <h2 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.08, marginBottom: 16 }}>
                Three simple steps.
              </h2>
              <p className="caption" style={{ color: '#6e6e73', maxWidth: 500, margin: '0 auto' }}>
                Get your digital menu up and running in minutes, not days.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 40 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: 64, 
                  height: 64, 
                  background: '#f5f5f7', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  fontSize: 28,
                  fontWeight: 600,
                  color: '#0071e3'
                }}>1</div>
                <h3 style={{ fontSize: 21, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 8 }}>Create Your Menu</h3>
                <p style={{ color: '#6e6e73', fontSize: 15, lineHeight: 1.5 }}>Upload your PDF or design your menu through our dashboard.</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: 64, 
                  height: 64, 
                  background: '#f5f5f7', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  fontSize: 28,
                  fontWeight: 600,
                  color: '#0071e3'
                }}>2</div>
                <h3 style={{ fontSize: 21, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 8 }}>Generate QR Code</h3>
                <p style={{ color: '#6e6e73', fontSize: 15, lineHeight: 1.5 }}>Receive a unique QR code linked to your custom menu page.</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: 64, 
                  height: 64, 
                  background: '#f5f5f7', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  fontSize: 28,
                  fontWeight: 600,
                  color: '#0071e3'
                }}>3</div>
                <h3 style={{ fontSize: 21, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 8 }}>Customers Scan & View</h3>
                <p style={{ color: '#6e6e73', fontSize: 15, lineHeight: 1.5 }}>Guests scan and instantly access your menu. Say Technologiya!</p>
              </div>
            </div>
          </div>
        </section>

        {/* QR Demo Section */}
        <section className="section-gray" style={{ padding: '120px 24px' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <div className="label" style={{ marginBottom: 12 }}>Try It</div>
              <h2 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.08, marginBottom: 16 }}>
                See it in action.
              </h2>
              <p className="caption" style={{ color: '#6e6e73', maxWidth: 500, margin: '0 auto' }}>
                Scan these QR codes to experience exactly what your customers will see.
              </p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  background: 'white', 
                  borderRadius: 24, 
                  padding: 32, 
                  boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
                  marginBottom: 20,
                  transition: 'transform 0.3s'
                }}>
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://ugandanmenus.com/restaurant1" 
                    alt="Restaurant Menu QR" 
                    width={140} 
                    height={140}
                  />
                </div>
                <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Restaurant</p>
                <p style={{ color: '#6e6e73', fontSize: 13 }}>Scan to preview</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  background: 'white', 
                  borderRadius: 24, 
                  padding: 32, 
                  boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
                  marginBottom: 20,
                  transition: 'transform 0.3s'
                }}>
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://ugandanmenus.com/bar-menu" 
                    alt="Bar Menu QR" 
                    width={140} 
                    height={140}
                  />
                </div>
                <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Bar</p>
                <p style={{ color: '#6e6e73', fontSize: 13 }}>Scan to preview</p>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  background: 'white', 
                  borderRadius: 24, 
                  padding: 32, 
                  boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
                  marginBottom: 20,
                  transition: 'transform 0.3s'
                }}>
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://ugandanmenus.com/lounge" 
                    alt="Lounge Menu QR" 
                    width={140} 
                    height={140}
                  />
                </div>
                <p style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>Lounge</p>
                <p style={{ color: '#6e6e73', fontSize: 13 }}>Scan to preview</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" style={{ padding: '120px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <div className="label" style={{ marginBottom: 12 }}>Pricing</div>
              <h2 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.08, marginBottom: 16 }}>
                Choose your plan.
              </h2>
              <p className="caption" style={{ color: '#6e6e73', maxWidth: 500, margin: '0 auto' }}>
                Simple, transparent pricing for every business size.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
              <div className="pricing-card">
                <div style={{ fontSize: 14, fontWeight: 600, color: '#6e6e73', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 16 }}>Starter</div>
                <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 4 }}>100K</div>
                <div style={{ color: '#6e6e73', fontSize: 14, marginBottom: 32 }}>UGX one-time setup</div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32 }}>
                  <li style={{ padding: '12px 0', borderTop: '1px solid #e8e8ed', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                    <span style={{ color: '#0071e3' }}>✓</span> QR Code Generation
                  </li>
                  <li style={{ padding: '12px 0', borderTop: '1px solid #e8e8ed', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                    <span style={{ color: '#0071e3' }}>✓</span> Online Menu Hosting
                  </li>
                  <li style={{ padding: '12px 0', borderTop: '1px solid #e8e8ed', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                    <span style={{ color: '#0071e3' }}>✓</span> Mobile Optimized
                  </li>
                  <li style={{ padding: '12px 0', borderTop: '1px solid #e8e8ed', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#d2d2d7' }}>
                    <span>○</span> Menu Design
                  </li>
                </ul>
                <div style={{ fontSize: 13, color: '#6e6e73', marginBottom: 24 }}>Yearly: UGX 70,000</div>
                <a href="https://wa.me/message/TSNEQC42LLOQA1" className="btn-apple" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                  Get Started
                </a>
              </div>
              
              <div className="pricing-card-featured" style={{ position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  top: -10, 
                  right: 20,
                  background: '#0071e3',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: 980,
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}>
                  Popular
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#86868b', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 16 }}>Premium</div>
                <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 4, color: 'white' }}>150K</div>
                <div style={{ color: '#86868b', fontSize: 14, marginBottom: 32 }}>UGX setup + design</div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32 }}>
                  <li style={{ padding: '12px 0', borderTop: '1px solid #333', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'white' }}>
                    <span style={{ color: '#0071e3' }}>✓</span> QR Code Generation
                  </li>
                  <li style={{ padding: '12px 0', borderTop: '1px solid #333', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'white' }}>
                    <span style={{ color: '#0071e3' }}>✓</span> Online Menu Hosting
                  </li>
                  <li style={{ padding: '12px 0', borderTop: '1px solid #333', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'white' }}>
                    <span style={{ color: '#0071e3' }}>✓</span> Mobile Optimized
                  </li>
                  <li style={{ padding: '12px 0', borderTop: '1px solid #333', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'white' }}>
                    <span style={{ color: '#0071e3' }}>✓</span> Menu Sticker/Card Design
                  </li>
                </ul>
                <div style={{ fontSize: 13, color: '#86868b', marginBottom: 24 }}>Yearly: UGX 70,000</div>
                <a href="https://wa.me/message/TSNEQC42LLOQA1" className="btn-apple" style={{ width: '100%', textAlign: 'center', display: 'block', background: '#fff', color: '#1d1d1f' }}>
                  Get Started
                </a>
              </div>
              
              <div className="pricing-card">
                <div style={{ fontSize: 14, fontWeight: 600, color: '#6e6e73', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 16 }}>Custom</div>
                <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.03em', marginBottom: 4 }}>Let&apos;s Talk</div>
                <div style={{ color: '#6e6e73', fontSize: 14, marginBottom: 32 }}>Tailored for you</div>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: 32 }}>
                  <li style={{ padding: '12px 0', borderTop: '1px solid #e8e8ed', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                    <span style={{ color: '#0071e3' }}>✓</span> Custom Domain
                  </li>
                  <li style={{ padding: '12px 0', borderTop: '1px solid #e8e8ed', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                    <span style={{ color: '#0071e3' }}>✓</span> Dynamic QR Codes
                  </li>
                  <li style={{ padding: '12px 0', borderTop: '1px solid #e8e8ed', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                    <span style={{ color: '#0071e3' }}>✓</span> Logo on QR Code
                  </li>
                  <li style={{ padding: '12px 0', borderTop: '1px solid #e8e8ed', display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                    <span style={{ color: '#0071e3' }}>✓</span> Full Customization
                  </li>
                </ul>
                <div style={{ fontSize: 13, color: '#6e6e73', marginBottom: 24 }}>Custom pricing</div>
                <a href="https://wa.me/message/TSNEQC42LLOQA1" className="btn-apple-outline" style={{ width: '100%', textAlign: 'center', display: 'block', color: '#0071e3' }}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-dark" style={{ padding: '120px 24px', textAlign: 'center' }}>
          <div style={{ maxWidth: 700, margin: '0 auto' }}>
            <h2 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.08, marginBottom: 20, color: 'white' }}>
              Go digital today.
            </h2>
            <p style={{ color: '#86868b', fontSize: 21, marginBottom: 40, lineHeight: 1.38 }}>
              Eliminate paper menus and offer a modern experience to your customers in Uganda.
            </p>
            <a href="https://wa.me/message/TSNEQC42LLOQA1" className="btn-apple" style={{ fontSize: 17, padding: '16px 32px' }}>
              Start Hosting Your Menu
            </a>
            
            <div style={{ 
              marginTop: 80, 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: 40,
              paddingTop: 60,
              borderTop: '1px solid #333'
            }}>
              <div>
                <div style={{ fontSize: 32, marginBottom: 12 }}>⚡</div>
                <div style={{ fontWeight: 600, marginBottom: 4, color: 'white' }}>Quick Setup</div>
                <div style={{ fontSize: 14, color: '#86868b' }}>Ready in 24 hours</div>
              </div>
              <div>
                <div style={{ fontSize: 32, marginBottom: 12 }}>💰</div>
                <div style={{ fontWeight: 600, marginBottom: 4, color: 'white' }}>Save Money</div>
                <div style={{ fontSize: 14, color: '#86868b' }}>No reprinting costs</div>
              </div>
              <div>
                <div style={{ fontSize: 32, marginBottom: 12 }}>🌍</div>
                <div style={{ fontWeight: 600, marginBottom: 4, color: 'white' }}>Eco Friendly</div>
                <div style={{ fontSize: 14, color: '#86868b' }}>Go paperless</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ padding: '120px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
            <div className="label" style={{ marginBottom: 12 }}>Contact</div>
            <h2 style={{ fontSize: 48, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.08, marginBottom: 16 }}>
              Let&apos;s talk.
            </h2>
            <p className="caption" style={{ color: '#6e6e73', maxWidth: 500, margin: '0 auto 60px' }}>
              Ready to modernize your restaurant? Reach out today.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24, marginBottom: 60 }}>
              <div className="feature-card">
                <div style={{ fontSize: 28, marginBottom: 16 }}>📧</div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Email</div>
                <a href="mailto:info@backspace.ug" style={{ color: '#0071e3', textDecoration: 'none', fontSize: 14 }}>info@backspace.ug</a>
              </div>
              
              <div className="feature-card">
                <div style={{ fontSize: 28, marginBottom: 16 }}>📞</div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Phone</div>
                <a href="tel:+256786394913" style={{ color: '#0071e3', textDecoration: 'none', fontSize: 14 }}>+256 786 394 913</a>
              </div>
              
              <div className="feature-card">
                <div style={{ fontSize: 28, marginBottom: 16 }}>💬</div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>WhatsApp</div>
                <a href="https://wa.me/message/TSNEQC42LLOQA1" style={{ color: '#0071e3', textDecoration: 'none', fontSize: 14 }}>Message Us</a>
              </div>
            </div>
            
            <div style={{ 
              background: '#f5f5f7', 
              borderRadius: 20, 
              padding: 48 
            }}>
              <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>For Other Hospitality Technologies</h3>
              <p style={{ color: '#6e6e73', marginBottom: 24, fontSize: 15 }}>Visit our parent company for complete solutions</p>
              <a href="https://backspace.ug" className="btn-apple" style={{ background: '#1d1d1f' }}>
                Visit Backspace Business Solutions
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ 
        background: '#f5f5f7', 
        padding: '20px 24px',
        borderTop: '1px solid #d2d2d7'
      }}>
        <div style={{ 
          maxWidth: 1000, 
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12
        }}>
          <div style={{ fontSize: 12, color: '#6e6e73' }}>
            © 2026 UgandanMenus. Owned by{' '}
            <a href="https://backspace.ug" style={{ color: '#424245', textDecoration: 'none' }}>Backspace Business Solutions Ltd</a>
          </div>
          
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="mailto:info@backspace.ug" className="footer-link">info@backspace.ug</a>
            <a href="tel:+256786394913" className="footer-link">+256 786 394 913</a>
          </div>
        </div>
      </footer>
    </>
  );
}
