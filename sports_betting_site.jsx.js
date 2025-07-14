export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-green-700 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ProBet Tips</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Home</a>
            <a href="#tips" className="hover:underline">Tips</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Smart Sports Betting Starts Here</h2>
        <p className="text-lg text-gray-600">Daily expert tips, strategies, and predictions to help you win more.</p>
      </section>

      {/* Tips Section */}
      <section id="tips" className="max-w-4xl mx-auto py-16 px-4">
        <h3 className="text-2xl font-semibold mb-6">Today's Predictions</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white rounded-xl shadow p-6">
            <h4 className="font-bold text-lg">⚽ Arsenal vs Chelsea</h4>
            <p>Pick: Arsenal to Win</p>
            <p>Confidence: 85%</p>
            <p>Odds: 2.1</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h4 className="font-bold text-lg">🏀 Lakers vs Celtics</h4>
            <p>Pick: Over 212.5 Total Points</p>
            <p>Confidence: 78%</p>
            <p>Odds: 1.9</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">Subscription Plans</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border rounded-xl p-6 shadow">
              <h4 className="font-bold text-lg">Free Plan</h4>
              <p className="my-2">Access to 2 free tips daily</p>
              <p className="text-2xl font-bold">$0/month</p>
            </div>
            <div className="border rounded-xl p-6 shadow bg-green-100">
              <h4 className="font-bold text-lg">Premium Plan</h4>
              <p className="my-2">Unlimited daily tips + expert insights</p>
              <p className="text-2xl font-bold">$19/month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p>Email: support@probet.tips</p>
          <p>Telegram: @probet_support</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4">
        <p>&copy; 2025 ProBet Tips. All rights reserved.</p>
      </footer>
    </div>
  );
}
