import React from 'react';

const packages = [
  { id: 1, name: 'Drop-Ins', price: 12, discountedPrice: null },
  { id: 2, name: 'Military/Veteran Spouse', price: 125, discountedPrice: 75 },
  { id: 3, name: 'Family/Spouse Membership', price: 250, discountedPrice: 225 },
];

const Packages: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-verdigris p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
              {pkg.discountedPrice ? (
                <>
                  <p className="text-xl mb-2 line-through">${pkg.price}</p>
                  <p className="text-3xl font-bold text-oxford-blue">${pkg.discountedPrice}</p>
                </>
              ) : (
                <p className="text-3xl font-bold">${pkg.price}</p>
              )}
              <button className="btn-primary mt-4">Select</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;